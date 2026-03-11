import "./HomeFrequently.css";
import { frequently_top, frequently_cont } from "../../data/Home";

const HomeFrequently = () => {
  return (
    <div className="homeFrequently">
      <div className="homeFrequently__top">
        <h3>{frequently_top.title}</h3>
        <button>{frequently_top.btn}</button>
      </div>
      <div className="homeFrequently__cont">
        {frequently_cont.map((cart, index) => {
          return (
            <div key={index} className="homeFrequently__cart">
              <img src={cart.img} alt="" />
              <div className="homeFrequently__cart__text">
                <h3>{cart.text}</h3>
                <p>{cart.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeFrequently;
