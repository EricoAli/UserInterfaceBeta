// src/App.jsx
import NavigationBar from "./components/NavigationBar";
import Breadcrumb from "./components/Breadcrumb";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <NavigationBar />
      <Breadcrumb />
      <div className="p-6">
        <ProductCard />
        <h3 className="font-bold text-xl mb-4 mt-8">Bestseller Products</h3>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
