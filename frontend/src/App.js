import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "./component/ProductList";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data); // Set filteredProducts initially with all products
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
