import React from "react";
import "./Header.css";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniShoppingCart } from "react-icons/hi2";

function Header({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="header">
     
        <h1>MOBILE STORE</h1>
      
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search products"
      />
      <div className="cart-user">
        <div className="cart">
          <HiMiniShoppingCart />
        </div>
        <div className="user">
          <FaUserAlt />
        </div>
      </div>
    </div>
  );
}

export default Header;
