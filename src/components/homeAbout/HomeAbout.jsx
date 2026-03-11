import "./HomeAbout.css";
import { about } from "../../data/Home";

const HomeAbout = () => {
  return (
    <div className="homeAbout">
      {about.map((cart, index) => (
        <div className="homeAbout__cart" key={index}>
          <img src={cart.img} alt="" />
          <div className="homeAbout__cart__text">
            <h3>{cart.text}</h3>
            <p>{cart.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeAbout;
