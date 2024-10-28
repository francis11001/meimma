<?php
// Enable REST API CORS
function meimma_cors_headers() {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Credentials: true');
}
add_action('init', 'meimma_cors_headers');

// Register Product Custom Post Type
function meimma_register_post_types() {
    register_post_type('product', [
        'public' => true,
        'show_in_rest' => true,
        'supports' => ['title', 'editor', 'thumbnail'],
        'labels' => [
            'name' => 'Products',
            'singular_name' => 'Product'
        ],
        'menu_icon' => 'dashicons-cart'
    ]);
}
add_action('init', 'meimma_register_post_types');

// Enqueue React build files
function meimma_enqueue_scripts() {
    $build_dir = get_template_directory_uri() . '/build';
    
    // Get the manifest.json content
    $manifest_path = get_template_directory() . '/build/manifest.json';
    if (file_exists($manifest_path)) {
        $manifest = json_decode(file_get_contents($manifest_path), true);
        
        // Enqueue main CSS file
        if (isset($manifest['index.css'])) {
            wp_enqueue_style('meimma-styles', $build_dir . '/' . $manifest['index.css']);
        }
        
        // Enqueue main JS file
        if (isset($manifest['index.js'])) {
            wp_enqueue_script('meimma-scripts', $build_dir . '/' . $manifest['index.js'], [], null, true);
        }
    }
}
add_action('wp_enqueue_scripts', 'meimma_enqueue_scripts');

// Add REST API endpoints for products
function meimma_register_rest_fields() {
    register_rest_field('product', 'featured_media_url', [
        'get_callback' => function($object) {
            if ($object['featured_media']) {
                $image = wp_get_attachment_image_src($object['featured_media'], 'full');
                return $image[0];
            }
            return null;
        }
    ]);
}
add_action('rest_api_init', 'meimma_register_rest_fields');