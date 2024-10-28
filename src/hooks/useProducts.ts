import { useState, useEffect } from 'react';
import { api, WordPressProduct } from '../services/api';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<WordPressProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError(null);
        const data = category 
          ? await api.getProductsByCategory(category)
          : await api.getProducts();
        setProducts(data);
      } catch (err) {
        setError('Unable to load products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<WordPressProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);
        const data = await api.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError('Unable to load product. Please try again later.');
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  return { product, loading, error };
}