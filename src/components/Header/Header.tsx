import { FC, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/react.svg";
import { useResize } from "../../hooks/useResize";
import { BurgerButton } from "../BurgerButton/BurgerButton";

const Header: FC = () => {
  const location = useLocation();

  const { width } = useResize();

  const [isPopupOpen, setIsPopupOpen] = useState(false); // Burger

  const switchPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header
      className={`header ${location.pathname === "/" ? "header_dark" : ""}`}
    >
      <div className="header__container">
        {width < 767 && (
          <BurgerButton isPopupOpen={isPopupOpen} switchPopup={switchPopup} />
        )}
        <Link to="/">
          <img className="header__logo" alt="logo" src={logo} />
        </Link>
        <div className="header__links">
          <Link to="/first" className="header__link">
            Первая ссылка
          </Link>
          <Link to="/second" className="header__link">
            Вторая ссылка
          </Link>
          <Link to="/third" className="header__link">
            Третья ссылка
          </Link>
          <Link to="/forth" className="header__link">
            Четвертая ссылка
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
