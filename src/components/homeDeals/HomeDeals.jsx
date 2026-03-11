import "./HomeDeals.css";
import { deals_cont } from "../../data/Home";

const HomeDeals = () => {
  return (
    <div className="homeDeals">
      <div className="homeDeals__top">
        <h3>Today’s Deals of the day</h3>
        <div className="homeDeals__top__right">
          <p>
            Deals ends in <span>16d : 21h : 57m : 23s</span>
          </p>
          <button>VIEW ALL</button>
        </div>
      </div>
      <div className="homeDeals__cont">
        {deals_cont.map((cart, index) => {
          return (
            <div className="homeDeals__cart" key={index}>
              <div className="homeDeals__cart__img">
                <img src={cart.img} alt="" />
              </div>
              <h3>{cart.title}</h3>
              <button>
                {cart.button} <span>{cart.buttonSpan}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeDeals;
