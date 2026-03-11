// import { useState } from "react";
import "./Categories.css";
import { Link } from "react-router-dom";
import { cont2, rightrightImg } from "../../data/Categories";

const Categories = ({ cont, popup_left, popup_right }) => {
  // const [show, setShow] = useState(false);

  return (
    <div className="categories">
      {cont.map((cart, index) => {
        return (
          <Link
            className="categories__cart"
            // onMouseEnter={() => setShow(show == false)}
            // onMouseLeave={() => setShow(show == true)}
            key={index}
            to={cart.to}
          >
            {cart.text}
          </Link>
        );
      })}

      <div
        className="categoires__popup"
        // style={{ display: `${show ? "flex" : "none"}` }}
      >
        <div className="categoires__popup__left">
          {popup_left.map((cart, index) => {
            return (
              <button key={index} className="categoires__popup--category">
                {cart}
              </button>
            );
          })}
        </div>
        <div className="categoires__popup__right">
          <div className="categories__popup__right__left">
            {popup_right.map((cart, index) => {
              return (
                <Link
                  style={{ color: "black" }}
                  to={"/zara"}
                  key={index}
                  className="categoires__popup--category"
                >
                  {cart}
                </Link>
              );
            })}
          </div>
          <div className="categoires__popup__right__cont">
            <h3>FEATURED PHONES</h3>
            {cont2.map((cart, index) => {
              return (
                <div key={index} className="categoires__popup_cart">
                  <img src={cart.img} alt="" />
                  <div className="categoires__popup__cart__text">
                    <h3>{cart.text}</h3>
                    <p>{cart.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="categoires__popup__right__right">
            <img src={rightrightImg} alt="" />
            <h3>21% Discount</h3>
            <h5>
              Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
            </h5>
            <p>
              Starting price: <span>$99 USD</span>
            </p>
            <button>Shop now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
