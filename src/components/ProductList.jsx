import React from 'react';
import ProductCard from './ProductCard';
import p1 from "../assets/card/kiribawah.svg"
import p2 from "../assets/card/kursi.svg"
import p3 from "../assets/card/piringpink.svg"
import p4 from "../assets/card/piringputih.svg"
import p5 from "../assets/card/tumpukangelas.svg"
import p6 from "../assets/card/product-cover-5.svg"



const ProductList = () => {
  const products = [
    {
      SvgComponent: p3,
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
    },
    {
      SvgComponent: p6,
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
    },
    {
      SvgComponent: p4,
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
    },
    {
      SvgComponent: p5,
      title: 'Graphic Design',
      department: 'English Department',
      price: 6.48,
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Bestseller Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              SvgComponent={product.SvgComponent}
              title={product.title}
              department={product.department}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default ProductList;
