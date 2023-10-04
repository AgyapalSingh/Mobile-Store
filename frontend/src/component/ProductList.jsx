import React, { useState } from "react";
import axios from "axios";
import "./ProductList.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductList({ products }) {
  const [sortOption, setSortOption] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handlePurchase = (productId) => {
    axios
      .post("http://localhost:3000/purchase", { productId })
      .then((response) => {
        toast.success("Purchase successful!");
        console.log("Purchase successful:", response.data.message);
      })
      .catch((error) => {
        toast.error("Error making purchase");
        console.error("Error making purchase:", error);
      });
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  // Filter products based on the selected price range
  const filteredProducts = products.filter((product) => {
    const productPrice = parseFloat(product.price);
    const min = minPrice !== "" ? parseFloat(minPrice) : Number.MIN_VALUE;
    const max = maxPrice !== "" ? parseFloat(maxPrice) : Number.MAX_VALUE;
    return productPrice >= min && productPrice <= max;
  });

  // Sort products based on the selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low-high":
        return a.price - b.price;
      case "price-high-low":
        return b.price - a.price;
      case "rating-high-low":
        return b.averageRating - a.averageRating;
      default:
        return 0;
    }
  });

  return (
    <div>
      <h1 className="productlist_header">All Products</h1>
      <div className="filter">
        <div className="sort">
          <label>Sort By : </label>
          <select value={sortOption} onChange={handleSortChange}>
            <option value="default">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
          </select>
        </div>
        <div className="priceRange">
          <label>Price Range : </label>
          <input
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            placeholder="Min"
          />
          <span> - </span>
          <input
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            placeholder="Max"
          />
        </div>
      </div>

      <div className="products">
        {sortedProducts.map((product) => (
          <div className="productcard" key={product.id}>
            <div className="product_img">
              <img src={product.image} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>Average Rating: {product.averageRating}</p>
            <p>
              Price: <span> ${product.price} </span>
            </p>
            <button onClick={() => handlePurchase(product.id)}>Purchase</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
