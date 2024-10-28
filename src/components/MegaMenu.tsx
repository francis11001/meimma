import React from 'react';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  category: 'women' | 'men' | 'accessories';
}

const menuData = {
  women: {
    categories: [
      {
        title: 'Clothing',
        items: ['Dresses', 'Tops', 'Pants', 'Skirts', 'Jackets', 'Coats', 'Knitwear']
      },
      {
        title: 'Collections',
        items: ['New Arrivals', 'Essentials', 'Evening Wear', 'Resort Collection']
      },
      {
        title: 'Featured',
        items: ['Best Sellers', 'Summer Edit', 'Workwear', 'Occasion Wear']
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
      title: 'Summer Collection',
      link: '/shop/women/summer'
    }
  },
  men: {
    categories: [
      {
        title: 'Clothing',
        items: ['Suits', 'Shirts', 'Pants', 'Jackets', 'Coats', 'Knitwear']
      },
      {
        title: 'Collections',
        items: ['New Arrivals', 'Essentials', 'Formal Wear', 'Casual Edit']
      },
      {
        title: 'Featured',
        items: ['Best Sellers', 'Business Attire', 'Weekend Wear']
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080',
      title: 'Formal Collection',
      link: '/shop/men/formal'
    }
  },
  accessories: {
    categories: [
      {
        title: 'Jewelry',
        items: ['Necklaces', 'Earrings', 'Bracelets', 'Rings']
      },
      {
        title: 'Bags',
        items: ['Handbags', 'Clutches', 'Totes', 'Wallets']
      },
      {
        title: 'Other',
        items: ['Scarves', 'Belts', 'Sunglasses', 'Watches']
      }
    ],
    featured: {
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070',
      title: 'Jewelry Collection',
      link: '/shop/accessories/jewelry'
    }
  }
};

const MegaMenu: React.FC<MegaMenuProps> = ({ category }) => {
  const data = menuData[category];

  return (
    <div className="absolute top-full left-0 w-screen bg-white shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
        {data.categories.map((section, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900 mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <Link
                    to={`/shop/${category}/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="relative aspect-[3/4]">
          <img
            src={data.featured.image}
            alt={data.featured.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <Link
              to={data.featured.link}
              className="bg-white px-6 py-3 text-sm hover:bg-black hover:text-white transition-colors"
            >
              {data.featured.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;