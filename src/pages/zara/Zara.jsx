import "./Zara.css";
import { zara_cont } from "../../data/Zara";
import cartImgIcon1 from "../../assets/zara-cart-img-icon1.png";
import cartImgIcon2 from "../../assets/zara-cart-img-icon2.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Zara = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="zara">
      <div className="allCategories__top">
        <div className="allCategories__top__left">
          <h3>ZARA</h3>
          <p>Showing 1 - 40 of 145 items</p>
        </div>
        <div className="allCategories__top__right">
          <p>To Show:</p>
          <input type="text" placeholder="9" />
          <input
            type="text"
            placeholder="Position                                >"
          />
        </div>
      </div>
      <div className="zara__content">
        <div className="zara__content__left">
          <button>Size</button>
          <button>Brand</button>
          <form>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Nike</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Rebook</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Zara</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Gearo</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Indi</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Aei</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Lulu</label>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Beast</label>
            </div>
          </form>
          <button>Brand</button>
          <button>Price Range</button>
          <button>Discount</button>
          <button>Availability</button>
        </div>
        <div className="zara__cont">
          {zara_cont.map((cart, index) => {
            return (
              <div key={index} className="zara__cart">
                <div className="zara__cart__img">
                  <img
                    src={cart.img}
                    alt=""
                    onMouseEnter={() => setShow(show === true)}
                    onMouseLeave={() => setShow(show === false)}
                    className="zara__cart--img"
                  />
                  <div
                    className="zara__cart__icons"
                    style={{ display: `${show ? "flex" : "none"}` }}
                    onMouseEnter={() => setShow(show === true)}
                  >
                    <Link to="/product" className="zara__cart__icons__link">
                      <img src={cartImgIcon1} alt="" />
                    </Link>
                    <button>
                      <img src={cartImgIcon2} alt="" />
                    </button>
                  </div>
                </div>
                <div className="zara__cart__text">
                  <h3>{cart.title}</h3>
                  <p>
                    <img src={cart.stars} alt="" />
                    {cart.starsText}
                    <span>{cart.starsSpan}</span>
                  </p>
                  <button>{cart.btn1}</button>
                  <button>{cart.btn2}</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Zara;
