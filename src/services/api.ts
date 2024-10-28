interface WordPressProduct {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    price: number;
    category: 'women' | 'men' | 'accessories';
    sizes: string[];
    gallery_images: {
      url: string;
      alt: string;
    }[];
    stock_status: boolean;
  };
  content: {
    rendered: string;
  };
  featured_media_url: string;
}

export const api = {
  async getProducts(): Promise<WordPressProduct[]> {
    try {
      const { products } = await import('../data/products');
      return products.map((p, index) => ({
        id: parseInt(p.id) || index + 1, // Ensure valid numeric ID
        title: { rendered: p.name },
        acf: {
          price: p.price,
          category: p.category,
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          gallery_images: [],
          stock_status: true
        },
        content: { rendered: p.description },
        featured_media_url: p.image
      }));
    } catch (error) {
      console.error('Failed to fetch products:', error);
      throw new Error('Failed to load products');
    }
  },

  async getProduct(id: string): Promise<WordPressProduct | null> {
    try {
      const { products } = await import('../data/products');
      const product = products.find(p => p.id === id);
      if (!product) return null;

      return {
        id: parseInt(product.id) || 0, // Fallback to 0 if parsing fails
        title: { rendered: product.name },
        acf: {
          price: product.price,
          category: product.category,
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          gallery_images: [],
          stock_status: true
        },
        content: { rendered: product.description },
        featured_media_url: product.image
      };
    } catch (error) {
      console.error('Failed to fetch product:', error);
      throw new Error('Failed to load product');
    }
  },

  async getProductsByCategory(category: string): Promise<WordPressProduct[]> {
    try {
      const { products } = await import('../data/products');
      const filteredProducts = products.filter(p => p.category === category);
      
      return filteredProducts.map((p, index) => ({
        id: parseInt(p.id) || index + 1, // Ensure valid numeric ID
        title: { rendered: p.name },
        acf: {
          price: p.price,
          category: p.category as 'women' | 'men' | 'accessories',
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          gallery_images: [],
          stock_status: true
        },
        content: { rendered: p.description },
        featured_media_url: p.image
      }));
    } catch (error) {
      console.error('Failed to fetch products by category:', error);
      throw new Error('Failed to load products');
    }
  }
};

export type { WordPressProduct };