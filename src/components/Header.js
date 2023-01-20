import { useState } from "react";
import Logo from "../assets/foodVilla.jpeg";

const Title = () => {
  return (
    <div>
      <img className="logo" src={Logo} />
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};

export default Header;
