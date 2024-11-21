import React from "react";
import LikeIcon from "../assets/card/lovee.svg";
import BasketIcon from "../assets/card/basket.svg";
import MoreIcon from "../assets/card/more.svg";
import Thumbnail1 from "../assets/card/single-product-1-thumb-1.svg";
import Thumbnail2 from "../assets/card/single-product-1-thumb-2.svg";
import Cover from "../assets/card/single-product-1-cover-2.svg";
import Paragraph from "../assets/card/paragraph.svg"
import Stars from "../assets/card/stars.svg"
import PrevArrow from "../assets/card/carousel-control-prev.svg"
import NextArrow from "../assets/card/carousel-control-next.svg"

const ProductCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row">
      {/* Gambar Produk */}
      <div className="relative flex-1 p-4 flex flex-col items-center">
        <div className="relative">
          {/* Gambar Utama */}
          <img
            src={Cover}
            alt="Cover Image"
            className="w-full h-full object-cover rounded-md"
          />
          
          {/* Tombol Navigasi Gambar */}
          <button className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10">
            {/* prev */}
            <img src={PrevArrow} alt="Previous" className="w-6 h-6" />
          </button>
          <button className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 hover:text-black z-10">
            {/* next */}
            <img src={NextArrow} alt="Next" className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Gambar */}
        <div className="absolute bottom-0 left-0 flex space-x-2 ml-4">
  <img
    src={Thumbnail1}
    alt="Thumbnail Image"
    className="w-16 h-16 object-cover cursor-pointer border border-gray-300 hover:border-blue-500 rounded"
  />
  <img
    src={Thumbnail2}
    alt="Thumbnail Image"
    className="w-16 h-16 object-cover cursor-pointer border border-gray-300 hover:border-blue-500 rounded"
  />
</div>
      </div>

        {/* Informasi Produk */}
      <div className="flex-1 p-6">
        {/* Judul */}
        <h3 className="text-2xl font-bold mb-2">Floating Phone</h3>

        {/* Bintang dan Reviews */}
        <div className="flex items-center mb-5">
          {/* Bintang */}
          <div className="flex">
          <img src={Stars} alt="Stars"/>
          </div>
          {/* Reviews */}
          <span className="ml-2 text-gray-500 text-sm">10 Reviews</span>
        </div>

        <div className="text-3xl font-bold mb-4  text-[#252B42]">$1,139.33</div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm font-bold text-[#737373]">Availability :</span>
          <span className="text-sm text-[#23A6F0] font-bold">In Stock</span>
        </div>
        <img src={Paragraph} alt="Paragraph" className="text-[#858585] text-sm mb-6" />
        {/* Warna Produk */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-5 h-5 bg-blue-500 rounded-full border"></div>
          <div className="w-5 h-5 bg-green-500 rounded-full border"></div>
          <div className="w-5 h-5 bg-orange-500 rounded-full border"></div>
          <div className="w-5 h-5 bg-black rounded-full border"></div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
        {/* Tombol Pilihan */}
        <button className="bg-[#23A6F0] hover:bg-[#23A6F0] text-white font-bold text-sm py-2 px-4 rounded-md w-40 whitespace-nowrap">
          Select Options
        </button>
        {/* Ikon Sosial */}
        <div className="flex items-center space-x-2">
        <button className="text-gray-500 hover:text-black">
          <img src={LikeIcon} alt="Wishlist Icon" className="w-10 h-10" />
        </button>
        <button className="text-gray-500 hover:text-black">
          <img src={BasketIcon} alt="Cart Icon" className="w-10 h-10" />
        </button>
        <button className="text-gray-500 hover:text-black">
          <img src={MoreIcon} alt="View Icon" className="w-10 h-10" />
        </button>
      </div>
      </div>
        </div>
      </div>
   
  );
};

export default ProductCard;
