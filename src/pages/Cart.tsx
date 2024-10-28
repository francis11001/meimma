import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, X } from 'lucide-react';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-2xl font-light mb-8">Your cart is empty</h1>
        <Link to="/" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light mb-12 text-center">Shopping Cart</h1>
        
        <div className="space-y-8">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-6 pb-6 border-b">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-40 object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-light">{item.name}</h3>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-black"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-gray-700 mt-2">
                  ${item.price.toLocaleString()}
                </p>
                <div className="flex items-center space-x-4 mt-4">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-right">
          <div className="text-xl mb-6">
            Total: ${total.toLocaleString()}
          </div>
          <Link to="/checkout" className="btn-primary">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;