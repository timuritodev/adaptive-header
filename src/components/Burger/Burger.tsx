import { FC } from "react";
import "./Burger.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";

interface BurgerProps {
  isPopupOpen: boolean;
  switchPopup: () => void;
}

export const Burger: FC<BurgerProps> = ({ isPopupOpen, switchPopup }) => {
  const handleLinkClick = () => {
    switchPopup();
  };

  return (
    <div className={`burger ${isPopupOpen ? "burger_opened" : ""}`}>
      <div className="burger__content">
        <div className="burger__container">
          <div className="burger-header__container">
            <button
              className="burger__close"
              type="button"
              onClick={switchPopup}
            />
          </div>
          <div className="burger__links-container">
            <Link
              to="/first"
              className="burger__link"
              onClick={handleLinkClick}
            >
              Первая ссылка
            </Link>
            <Link
              to="/second"
              className="burger__link"
              onClick={handleLinkClick}
            >
              Вторая ссылка
            </Link>
            <Link
              to="/third"
              className="header__link"
              onClick={handleLinkClick}
            >
              Третья ссылка
            </Link>
            <Link
              to="/forth"
              className="header__link"
              onClick={handleLinkClick}
            >
              Четвертая ссылка
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
