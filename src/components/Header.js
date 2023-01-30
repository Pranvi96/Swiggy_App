import { useContext, useState } from "react";
import Logo from "../assets/foodVilla.jpeg";
import {Link} from "react-router-dom"
import useOnline from "../utils/useOnline";
import userContext from "../utils/UserContext";

const Title = () => {
  return (
    <div>
      <img className="logo" src={Logo} />
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(userContext);

  const isOnline = useOnline();
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {isOnline ? 'Online ' : 'Offline '}
        <h2>{user.name}</h2>
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
