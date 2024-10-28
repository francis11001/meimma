import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Heart, Share2, Minus, Plus, ChevronDown, X } from 'lucide-react';
import LoadingSpinner from '../components/LoadingSpinner';

interface ColorOption {
  name: string;
  value: string;
}

interface SizeGuide {
  category: string;
  sizes: {
    size: string;
    bust?: string;
    waist?: string;
    hips?: string;
    diameter?: string;
    length?: string;
  }[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  
  // Find the product by ID
  const product = products.find(p => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-4 flex justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-light mb-6">Product not found</h1>
        <button 
          onClick={() => navigate('/')}
          className="btn-primary"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const sizes = product.category === 'accessories' 
    ? ['ONE SIZE']
    : product.category === 'women' 
      ? ['FR 34', 'FR 36', 'FR 38', 'FR 40', 'FR 42'] 
      : ['FR 46', 'FR 48', 'FR 50', 'FR 52', 'FR 54'];

  const jewelrySizes = product.category === 'accessories' && product.name.toLowerCase().includes('ring')
    ? ['48', '50', '52', '54', '56', '58']
    : ['ONE SIZE'];

  const colors: ColorOption[] = [
    { name: 'Black', value: '#000000' },
    { name: 'Navy', value: '#000080' },
    { name: 'Gray', value: '#808080' },
    { name: 'Beige', value: '#F5F5DC' }
  ];

  const sizeGuide: SizeGuide = {
    category: product.category,
    sizes: product.category === 'accessories' 
      ? [
          { size: '48', diameter: '15.3mm' },
          { size: '50', diameter: '15.9mm' },
          { size: '52', diameter: '16.6mm' },
          { size: '54', diameter: '17.2mm' }
        ]
      : [
          { size: 'FR 34', bust: '82cm', waist: '58cm', hips: '88cm' },
          { size: 'FR 36', bust: '86cm', waist: '62cm', hips: '92cm' },
          { size: 'FR 38', bust: '90cm', waist: '66cm', hips: '96cm' },
          { size: 'FR 40', bust: '94cm', waist: '70cm', hips: '100cm' }
        ]
  };

  const handleAddToCart = () => {
    if (product.category !== 'accessories' && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }
    addToCart({ 
      ...product, 
      quantity, 
      size: selectedSize,
      color: selectedColor 
    });
    navigate('/cart');
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:pl-12">
            <h1 className="text-3xl font-light mb-4">{product.name}</h1>
            <p className="text-2xl mb-8">${product.price.toLocaleString()}</p>
            <p className="text-sm text-gray-600 mb-8">Reference: {product.id}</p>
            
            {/* Color Selection */}
            <div className="mb-8">
              <h2 className="text-sm font-medium mb-4">COLOR</h2>
              <div className="flex flex-wrap gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.name
                        ? 'ring-2 ring-black ring-offset-2'
                        : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-medium">SIZE</h2>
                <button 
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-gray-600 underline"
                >
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {(product.category === 'accessories' && product.name.toLowerCase().includes('ring') 
                  ? jewelrySizes 
                  : sizes
                ).map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[56px] h-14 flex items-center justify-center border ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-8">
              <h2 className="text-sm font-medium mb-4">QUANTITY</h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="p-2 border border-gray-300 hover:border-black"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="p-2 border border-gray-300 hover:border-black"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-8"
            >
              Add to Cart
            </button>

            {/* Additional Actions */}
            <div className="flex space-x-6 mb-12">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <Heart size={20} />
                <span>Add to Wishlist</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-black">
                <Share2 size={20} />
                <span>Share</span>
              </button>
            </div>

            {/* Product Details Tabs */}
            <div className="border-t">
              <button
                onClick={() => setActiveTab('description')}
                className="flex justify-between items-center w-full py-4 border-b"
              >
                <span className="font-medium">Description</span>
                <ChevronDown 
                  size={20}
                  className={`transform transition-transform ${
                    activeTab === 'description' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeTab === 'description' && (
                <div className="py-4 text-gray-600">
                  <p>{product.description}</p>
                  <ul className="mt-4 space-y-2">
                    <li>• Made in Italy</li>
                    <li>• Material: {product.category === 'accessories' ? 'Sterling Silver' : '100% Cotton'}</li>
                    <li>• Professional care recommended</li>
                  </ul>
                </div>
              )}

              <button
                onClick={() => setActiveTab('delivery')}
                className="flex justify-between items-center w-full py-4 border-b"
              >
                <span className="font-medium">Delivery & Returns</span>
                <ChevronDown 
                  size={20}
                  className={`transform transition-transform ${
                    activeTab === 'delivery' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {activeTab === 'delivery' && (
                <div className="py-4 text-gray-600">
                  <p>Free standard delivery on all orders.</p>
                  <ul className="mt-4 space-y-2">
                    <li>• Standard delivery: 3-5 working days</li>
                    <li>• Express delivery: 1-2 working days</li>
                    <li>• Free returns within 30 days</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide Modal */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium">Size Guide</h2>
              <button onClick={() => setShowSizeGuide(false)}>
                <X size={24} />
              </button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-left">Size</th>
                  {sizeGuide.category !== 'accessories' ? (
                    <>
                      <th className="py-2 text-left">Bust</th>
                      <th className="py-2 text-left">Waist</th>
                      <th className="py-2 text-left">Hips</th>
                    </>
                  ) : (
                    <th className="py-2 text-left">Diameter</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {sizeGuide.sizes.map((size, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{size.size}</td>
                    {sizeGuide.category !== 'accessories' ? (
                      <>
                        <td className="py-2">{size.bust}</td>
                        <td className="py-2">{size.waist}</td>
                        <td className="py-2">{size.hips}</td>
                      </>
                    ) : (
                      <td className="py-2">{size.diameter}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;