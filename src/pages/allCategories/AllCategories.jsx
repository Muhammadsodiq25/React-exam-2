import "./AllCategories.css";
import { categories_cont } from "../../data/Categories";

const AllCategories = () => {
  return (
    <div className="allCategories">
      <div className="allCategories__top">
        <div className="allCategories__top__left">
          <h3>All Categories</h3>
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
      <div className="allCategories__cont">
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

export default AllCategories;
