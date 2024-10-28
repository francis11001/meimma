export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'women' | 'men' | 'accessories';
  description: string;
}

export const products: Product[] = [
  // Women's Collection
  {
    id: 'w1',
    name: 'Silk Evening Gown',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976',
    category: 'women',
    description: 'Elegant silk evening gown with delicate embroidery'
  },
  {
    id: 'w2',
    name: 'Cashmere Wrap Coat',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?q=80&w=1974',
    category: 'women',
    description: 'Luxurious cashmere coat with belt closure'
  },
  {
    id: 'w3',
    name: 'Pleated Midi Skirt',
    price: 980,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1964',
    category: 'women',
    description: 'Elegant pleated midi skirt in metallic finish'
  },
  {
    id: 'w4',
    name: 'Structured Blazer',
    price: 1650,
    image: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1964',
    category: 'women',
    description: 'Tailored wool blend blazer'
  },
  {
    id: 'w5',
    name: 'Silk Blouse',
    price: 890,
    image: 'https://images.unsplash.com/photo-1602353195884-44ea7e76e196?q=80&w=1964',
    category: 'women',
    description: 'Pure silk blouse with mother of pearl buttons'
  },
  {
    id: 'w6',
    name: 'Leather Pants',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=1974',
    category: 'women',
    description: 'High-waisted leather pants'
  },
  {
    id: 'w7',
    name: 'Cashmere Sweater',
    price: 950,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964',
    category: 'women',
    description: 'Pure cashmere turtleneck sweater'
  },
  {
    id: 'w8',
    name: 'Cocktail Dress',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983',
    category: 'women',
    description: 'Embellished cocktail dress'
  },
  {
    id: 'w9',
    name: 'Wool Coat',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1974',
    category: 'women',
    description: 'Double-breasted wool coat'
  },
  {
    id: 'w10',
    name: 'Silk Palazzo Pants',
    price: 1100,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976',
    category: 'women',
    description: 'Flowing silk palazzo pants'
  },

  // Men's Collection
  {
    id: 'm1',
    name: 'Tailored Wool Suit',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080',
    category: 'men',
    description: 'Impeccably tailored wool suit in classic navy'
  },
  {
    id: 'm2',
    name: 'Cashmere Overcoat',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1483118714900-540cf339fd46?q=80&w=2070',
    category: 'men',
    description: 'Luxurious cashmere overcoat'
  },
  {
    id: 'm3',
    name: 'Silk Dress Shirt',
    price: 450,
    image: 'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?q=80&w=1974',
    category: 'men',
    description: 'Pure silk dress shirt'
  },
  {
    id: 'm4',
    name: 'Wool Blazer',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071',
    category: 'men',
    description: 'Structured wool blazer'
  },
  {
    id: 'm5',
    name: 'Leather Oxford Shoes',
    price: 890,
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1974',
    category: 'men',
    description: 'Hand-crafted leather oxford shoes'
  },
  {
    id: 'm6',
    name: 'Cashmere Sweater',
    price: 780,
    image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1974',
    category: 'men',
    description: 'Pure cashmere crew neck sweater'
  },
  {
    id: 'm7',
    name: 'Wool Trousers',
    price: 650,
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1974',
    category: 'men',
    description: 'Tailored wool trousers'
  },
  {
    id: 'm8',
    name: 'Leather Belt',
    price: 320,
    image: 'https://images.unsplash.com/photo-1553981834-a23f5b69e3ec?q=80&w=2070',
    category: 'men',
    description: 'Italian leather belt'
  },
  {
    id: 'm9',
    name: 'Silk Tie',
    price: 180,
    image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=1974',
    category: 'men',
    description: 'Hand-finished silk tie'
  },
  {
    id: 'm10',
    name: 'Tuxedo Set',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1555069519-127aadedf1ee?q=80&w=1974',
    category: 'men',
    description: 'Complete tuxedo set with bow tie'
  },

  // Accessories Collection
  {
    id: 'a1',
    name: 'Diamond Pendant Necklace',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070',
    category: 'accessories',
    description: 'Exquisite diamond pendant on 18k gold chain'
  },
  {
    id: 'a2',
    name: 'Leather Handbag',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935',
    category: 'accessories',
    description: 'Structured leather handbag'
  },
  {
    id: 'a3',
    name: 'Silk Scarf',
    price: 380,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1935',
    category: 'accessories',
    description: 'Printed silk scarf'
  },
  {
    id: 'a4',
    name: 'Gold Bracelet',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974',
    category: 'accessories',
    description: '18k gold chain bracelet'
  },
  {
    id: 'a5',
    name: 'Leather Wallet',
    price: 450,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1974',
    category: 'accessories',
    description: 'Italian leather bifold wallet'
  },
  {
    id: 'a6',
    name: 'Pearl Earrings',
    price: 980,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974',
    category: 'accessories',
    description: 'South Sea pearl drop earrings'
  },
  {
    id: 'a7',
    name: 'Sunglasses',
    price: 420,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1980',
    category: 'accessories',
    description: 'Acetate frame sunglasses'
  },
  {
    id: 'a8',
    name: 'Evening Clutch',
    price: 890,
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1971',
    category: 'accessories',
    description: 'Embellished evening clutch'
  },
  {
    id: 'a9',
    name: 'Leather Gloves',
    price: 320,
    image: 'https://images.unsplash.com/photo-1509622905150-fa66d3906e09?q=80&w=1974',
    category: 'accessories',
    description: 'Cashmere-lined leather gloves'
  },
  {
    id: 'a10',
    name: 'Diamond Tennis Bracelet',
    price: 5800,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1974',
    category: 'accessories',
    description: 'Diamond tennis bracelet in white gold'
  }
];