import { Link } from "react-router-dom";
import { cont, cont_left } from "../../data/Cart";
import "./Cart.css";
import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="cart">
      <Link to="/" className="cart--back">
        Back
      </Link>

      <h3 className="cart--title">My Cart</h3>
      <p className="cart--subtitle">Let’s create your account</p>
      <div className="cart__cont">
        <div className="cart__cont__left">
          {cont.map((cart, index) => {
            return (
              <div key={index} className="cart__cart">
                <div className="cart__cart__text">
                  <img src={cart.img} alt="" />
                  <p>{cart.title}</p>
                </div>
                <p className="cart__cart--price">{cart.price}</p>
                <div className="cart__cart__cont">
                  <button
                    onClick={() =>
                      count !== 0 ? setCount(count - 1) : setCount(count)
                    }
                  >
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={() => setCount(count + 1)}>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart__cont__right">
          <p className="cart__cont__right--title">Order Summary</p>
          <div className="cart__cont__statis">
            {cont_left.map((item, index) => {
              return (
                <div className="cart__statis__cart" key={index}>
                  <p className="cart__statis--text">{item.text}</p>
                  <p className="cart__statis--price">{item.price}</p>
                </div>
              );
            })}
          </div>
          <p className="cart__cont__right--total">
            Total Price <span>₹110.13</span>
          </p>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
