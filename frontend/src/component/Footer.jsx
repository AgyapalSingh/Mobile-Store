import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="left">
          <h1>MOBILE STORE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
            maxime dolor non doloremque cum inventore quidem ipsum ipsa quod
            voluptatibus recusandae architecto necessitatibus in consequuntur,
            et veniam suscipit placeat, minus aliquam adipisci aliquid
            reprehenderit doloribus perferendis similique. Culpa ad provident
            dolorum, numquam molestiae veniam cumque at in rem id voluptas.
          </p>
        </div>

        <div className="mid">
          <div>
            <h1>Quick Links</h1>
            <div>
              <li>About</li>
              <li>Cart</li>
              <li>Checkout</li>
              <li>Contact</li>
              <li>Home</li>
              <li>My Account</li>
              <li>Shop</li>
            </div>
          </div>
          <div>
            <h1>Site Links</h1>
            <div>
              <li>Privacy Policy</li>
              <li>Shipping Details</li>
              <li>Offer Coupons</li>
              <li>Terms & Conditions</li>
            </div>
          </div>
        </div>

        <div className="right">
          <div>
            <h1>Other Links</h1>
            <div className="otherLinks">
              <li>Know More About Us</li>
              <li>Visit Store</li>
              <li>Lets Connect</li>
              <li>Locate Stores</li>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <h1>All Right Reserved &copy; AGYAPAL SINGH</h1>
      </div>
    </>
  );
};

export default Footer;
