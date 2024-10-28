import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    promoCode: ''
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = formData.promoCode === 'MEIMMA10' ? total * 0.1 : 0;
  const finalTotal = total - discount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    clearCart();
    alert('Order placed successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light mb-12 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Previous form fields remain the same */}
            {/* ... */}

            <div>
              <h2 className="text-xl font-light mb-4">Promo Code</h2>
              <input
                type="text"
                name="promoCode"
                placeholder="Enter promo code"
                className="w-full p-2 border border-gray-300 focus:border-black outline-none"
                onChange={handleChange}
              />
              {formData.promoCode === 'MEIMMA10' && (
                <p className="text-green-600 mt-2">10% discount applied!</p>
              )}
            </div>

            <button type="submit" className="w-full btn-primary">
              Place Order
            </button>
          </form>

          <div className="lg:pl-12">
            <h2 className="text-xl font-light mb-6">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <h3 className="font-light">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p>${(item.price * item.quantity).toLocaleString()}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (10%)</span>
                  <span>-${discount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-xl font-medium pt-4 border-t">
                <span>Total</span>
                <span>${finalTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;