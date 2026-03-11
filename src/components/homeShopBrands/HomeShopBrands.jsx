import "./HomeShopBrands.css";
import { brands } from "../../data/Home";

const HomeShopBrands = () => {
  return (
    <div className="homeBrands">
      {brands.map((cart, index) => {
        return <img src={cart} key={index} alt="" />;
      })}
    </div>
  );
};

export default HomeShopBrands;
