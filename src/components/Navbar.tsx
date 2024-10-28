import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import MegaMenu from './MegaMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { cartItems } = useCart();

  const handleMouseEnter = (category: string) => {
    setActiveMenu(category);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
      <div className="promo-banner">
        Get 10% off your first order with code <span className="font-semibold">MEIMMA10</span>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="font-display text-2xl tracking-widest">
            MEIMMA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('women')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/shop/women" className="nav-link py-8">WOMEN</Link>
              {activeMenu === 'women' && <MegaMenu category="women" />}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/shop/men" className="nav-link py-8">MEN</Link>
              {activeMenu === 'men' && <MegaMenu category="men" />}
            </div>
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter('accessories')}
              onMouseLeave={handleMouseLeave}
            >
              <Link to="/shop/accessories" className="nav-link py-8">ACCESSORIES</Link>
              {activeMenu === 'accessories' && <MegaMenu category="accessories" />}
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 p-4">
            <input
              type="text"
              placeholder="Search MEIMMA"
              className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-black"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/shop/women" className="nav-link">WOMEN</Link>
              <Link to="/shop/men" className="nav-link">MEN</Link>
              <Link to="/shop/accessories" className="nav-link">ACCESSORIES</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;