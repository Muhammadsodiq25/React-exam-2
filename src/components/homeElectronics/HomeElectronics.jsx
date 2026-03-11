import "./HomeElectronics.css";
import { electronics_top, electronics__cont } from "../../data/Home";

const HomeElectronics = () => {
  return (
    <div className="homeElectronics">
      <div className="homeElectronics__top">
        <h3>
          {electronics_top.title} <span>{electronics_top.titleSpan}</span>
        </h3>
        <button>{electronics_top.btn}</button>
      </div>
      <div className="homeElectronics__cont">
        {electronics__cont.map((cart, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: `${cart.bg}` }}
              className="homeElectronics__cart"
            >
              <div className="homeElectronics__cart__text">
                <p style={{ backgroundColor: `${cart.nameCol}` }}>
                  {cart.name}
                </p>
                <img src={cart.logo} alt="" />
                <h3>{cart.title}</h3>
              </div>
              <img
                className="homeElectronics__cart--img"
                src={cart.img}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeElectronics;
