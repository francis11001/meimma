import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

const Shop = () => {
  const { category } = useParams<{ category: string }>();
  const { products, loading, error } = useProducts(category);
  const { addToCart } = useCart();

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-4 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Oops!</h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h2 className="text-2xl font-light mb-4">No Products Found</h2>
        <p className="text-gray-600">Please try another category</p>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center tracking-wider">
          {category?.toUpperCase()}
        </h1>
        
        <div className="product-grid">
          {products.map((product, index) => {
            const productId = `${product.id || index}`; // Fallback to index if id is undefined
            return (
              <div key={productId} className="group">
                <Link to={`/product/${productId}`} className="block">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                    <img
                      src={product.featured_media_url}
                      alt={product.title.rendered}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart({
                          id: productId,
                          name: product.title.rendered,
                          price: product.acf.price,
                          image: product.featured_media_url,
                          quantity: 1
                        });
                      }}
                      className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <h3 className="text-lg font-light">{product.title.rendered}</h3>
                  <p className="text-gray-700">${product.acf.price.toLocaleString()}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;