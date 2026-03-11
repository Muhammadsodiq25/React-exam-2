import logo from "../../assets/footer-logo.png";
import "./Footer.css";
import { footer_links } from "../../data/Padding";
import { Link } from "react-router-dom";
import download1 from "../../assets/footer-download-mg1.png";
import download2 from "../../assets/footer-download-img2.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <img src={logo} alt="" />
        <p>Customer Supports:</p>
        <h5>(629) 555-0129</h5>
        <p>
          4517 Washington Ave. <br /> Manchester, Kentucky 39495
        </p>
        <h5>info@kinbo.com</h5>
      </div>
      {footer_links.map((cart, index) => {
        return (
          <div key={index} className="footer__cart">
            <p className="footer__cart--title">{cart.title}</p>
            <ul>
              {cart.links.map((cart, index) => {
                return (
                  <li key={index}>
                    <Link className="footer--link" to="#">
                      {cart}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
      <div className="footer__download">
        <h3>Download App</h3>
        <button>
          <img src={download1} alt="" />
        </button>
        <button>
          <img src={download2} alt="" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
