<?php
require_once('wp-load.php');

$products = json_decode(file_get_contents('products.json'), true);

foreach ($products as $product) {
    // Create post
    $post_data = array(
        'post_title'   => $product['name'],
        'post_content' => $product['description'],
        'post_status'  => 'publish',
        'post_type'    => 'product'
    );
    
    $post_id = wp_insert_post($post_data);
    
    if ($post_id) {
        // Update ACF fields
        update_field('price', $product['price'], $post_id);
        update_field('category', $product['category'], $post_id);
        update_field('sizes', ['XS', 'S', 'M', 'L', 'XL'], $post_id);
        update_field('stock_status', true, $post_id);
        
        // Import featured image
        $image_url = $product['image'];
        $upload_dir = wp_upload_dir();
        $image_data = file_get_contents($image_url);
        $filename = basename($image_url);
        
        if ($image_data) {
            $file = $upload_dir['path'] . '/' . $filename;
            file_put_contents($file, $image_data);
            
            $wp_filetype = wp_check_filetype($filename);
            $attachment = array(
                'post_mime_type' => $wp_filetype['type'],
                'post_title' => sanitize_file_name($filename),
                'post_content' => '',
                'post_status' => 'inherit'
            );
            
            $attach_id = wp_insert_attachment($attachment, $file, $post_id);
            require_once(ABSPATH . 'wp-admin/includes/image.php');
            $attach_data = wp_generate_attachment_metadata($attach_id, $file);
            wp_update_attachment_metadata($attach_id, $attach_data);
            set_post_thumbnail($post_id, $attach_id);
        }
    }
}

echo "Import complete!";