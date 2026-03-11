import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import "./Header.css";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = ({ title, flashSale, rightCont }) => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__bars">
          <HiOutlineBars3BottomLeft className="header--bars" />
        </div>
        <Link style={{ color: "black" }} to="/">
          <h1 className="header--title">{title}</h1>
        </Link>
        <img className="header--flash" src={flashSale} alt="" />
      </div>
      <div className="header__search">
        <IoMdSearch className="header__search--icon" />
        <input
          type="text"
          placeholder="Search essentials, groceries and more..."
        />
      </div>
      <div className="header__right">
        {rightCont.map((cart, index) => {
          return (
            <button key={index}>
              <img src={cart.img} alt="" />
              <Link to="/cart" style={{ color: `${cart.col}` }}>{cart.title}</Link>
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
