import "./HomeMain.css";
import { main } from "../../data/Home";

const HomeMain = () => {
  return (
    <div className="homeMain">
      <div className="homeMain__text">
        <h3 className="homeMain--subtitle">{main.topSub}</h3>
        <h1 className="homeMain--title">{main.title}</h1>
        <h3 className="homeMain--subtitle">{main.botSub}</h3>
        <img src={main.pages} alt="" />
      </div>
      <img className="homeMain--img" src={main.img} alt="" />
    </div>
  );
};

export default HomeMain;
