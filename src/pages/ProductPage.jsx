// pages/ProductPage.jsx
import NavigationBar from "../components/NavigationBar";
import Breadcrumb from "../components/Breadcrumb";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <div>
      <NavigationBar />
      <Breadcrumb />
      <div className="p-6">
        <div className="bg-white shadow p-4 mb-6">
          <img
            src="featured-image.jpg"
            alt="Featured Product"
            className="w-full h-80 object-cover mb-4"
          />
          <h2 className="text-lg font-bold">Floating Phone</h2>
          <p className="text-green-600 font-bold">$1,139.33</p>
          <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded">Select Options</button>
        </div>
        <h3 className="font-bold text-xl mb-4">Bestseller Products</h3>
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;
