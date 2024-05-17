import { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/navBar.css"
import logo from "../assets/yesDice-logo.png"

function NavBar() {
  const [showBurger, setShowBurger] = useState(false);

  const handelShowLinks = () => {
    setShowBurger(!showBurger);
  };

  return (
    <header className={`header ${showBurger ? "show-nav" : "hide-nav"}`}>
      <Link to="/" className="logo_link">
        <img src={logo} alt="logo" className="logo"/>
      </Link>

      <ul className="navBar_links">
        <Link to="/Home" className="navBar_link">
          <li className="navBar_item">Accueil</li>
        </Link>
        <Link to="/Activity" className="navBar_link">
          <li className="navBar_item">Activités</li>
        </Link>
      </ul>
      <button className="navBar_burger" type="button" onClick={handelShowLinks}>
        <span className="burger_menu"></span>
      </button>
    </header>
  );
}
export default NavBar;