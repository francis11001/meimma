import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="hero-section relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white bg-black/30">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-7xl font-light mb-6">THE NEW COLLECTION</h1>
            <p className="text-lg md:text-xl mb-8">Discover the essence of luxury</p>
            <Link to="/shop/women" className="inline-flex items-center space-x-2 btn-primary">
              <span>EXPLORE</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071"
            title="WOMEN"
            link="/shop/women"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964"
            title="MEN"
            link="/shop/men"
          />
          <CategoryCard
            image="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1965"
            title="ACCESSORIES"
            link="/shop/accessories"
          />
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ image, title, link }: { image: string; title: string; link: string }) => (
  <Link to={link} className="group relative overflow-hidden">
    <div className="aspect-[3/4]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h3 className="text-white text-2xl tracking-wider">{title}</h3>
      </div>
    </div>
  </Link>
);

export default Home;