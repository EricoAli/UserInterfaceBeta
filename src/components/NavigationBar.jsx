import React from 'react';
import PhoneIcon from '../assets/icons/icontelepon.svg';
import EmailIcon from '../assets/icons/iconemail.svg';
import InstagramIcon from '../assets/icons/iconinstagram.svg';
import YoutubeIcon from '../assets/icons/iconyoutube.svg';
import FacebookIcon from '../assets/icons/iconfacebook.svg';
import TwitterIcon from '../assets/icons/icontwitter.svg';
import SearchIcon from '../assets/icons/iconsearch.svg';
import CartIcon from '../assets/icons/iconcart1.svg';
import WishlistIcon from '../assets/icons/iconlove.svg';

const NavigationBar = () => {
  return (
    <header className="font-montserrat">
      {/* Header Atas */}
      <div className="bg-green-600 text-white py-4 w-full">
        <div className="container mx-auto flex justify-between items-center text-sm">
          {/* Bagian Kiri */}
          <div className="flex items-center space-x-4 ml-32">
            <div className="flex items-center">
              <img src={PhoneIcon} alt="Phone Icon" className="w-4 h-4 mr-1" />
              <span>(225) 555-0118</span>
            </div>
            <div className="flex items-center ml-10">
              <img src={EmailIcon} alt="Email Icon" className="w-4 h-4 mr-1" />
              <span>michelle.rivera@example.com</span>
            </div>
            <span className="font-bold">Follow Us and get a chance to win 80% off</span>
          </div>

          {/* Bagian Kanan (Ikon Sosial Media) */}
          <div className="flex items-center space-x-2 ml-auto">
            <span className="font-bold">Follow Us :</span>
            <div className="flex items-center space-x-2">
              <button className="hover:text-gray-300">
                <img src={InstagramIcon} alt="Instagram Icon" className="w-6 h-6" />
              </button>
              <button className="hover:text-gray-300">
                <img src={YoutubeIcon} alt="YouTube Icon" className="w-6 h-6" />
              </button>
              <button className="hover:text-gray-300">
                <img src={FacebookIcon} alt="Facebook Icon" className="w-6 h-6" />
              </button>
              <button className="hover:text-gray-300">
                <img src={TwitterIcon} alt="Twitter Icon" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto flex justify-between items-center ml-auto">
          {/* Logo */}
          <div className="ml-32">
            <button className="text-xl font-bold text-[#252B42]">Bandage</button>
          </div>

          {/* Menu */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-green-600">Home</button>
            <button className="hover:text-green-600">Shop</button>
            <svg
              className="w-4 h-4 ml-1 inline-block -translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <button className="hover:text-green-600">About</button>
            <button className="hover:text-green-600">Blog</button>
            <button className="hover:text-green-600">Contact</button>
            <button className="hover:text-green-600">Pages</button>
          </div>

          {/* Right-side Icons */}
          <div className="flex items-center space-x-4">
            {/* Login / Register */}
            <button className="font-bold text-[#23A6F0] hover:underline">Login / Register</button>

            {/* Search Icon */}
            <button className="hover:text-green-600">
              <img src={SearchIcon} alt="Search Icon" className="w-5 h-5" />
            </button>

            {/* Cart Icon */}
            <button className="hover:text-green-600 flex items-center space-x-1">
              <img src={CartIcon} alt="Cart Icon" className="w-5 h-5" />
              <span className="font-bold text-[#23A6F0]">1</span>
            </button>

            {/* Wishlist Icon */}
            <button className="hover:text-green-600 flex items-center space-x-1">
              <img src={WishlistIcon} alt="Wishlist Icon" className="w-5 h-5" />
              <span className="font-bold text-[#23A6F0]">1</span>
            </button>

          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
