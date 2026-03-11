import "./HomeTopCategories.css";
import { categories_top, categories_cont } from "../../data/Home";

const HomeTopCategories = () => {
  return (
    <div className="homeCategories">
      <div className="homeCategories__top">
        <h3>
          {categories_top.title} <span>{categories_top.titleSpan}</span>
        </h3>
        <button>{categories_top.button}</button>
      </div>
      <div className="homeCategories__cont">
        {categories_cont.map((cart, index) => {
          return (
            <div key={index} className="homeCategories__cart">
              <img src={cart.img} alt="" />
              <h4>{cart.text}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeTopCategories;
