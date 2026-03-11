import "./Product.css";
import img from "../../assets/product-img.png";
import im2 from "../../assets/product-img2.png";
import colorImg from "../../assets/product-color-img.png";
import { useState } from "react";
import checkoutImg from "../../assets/product-checkout-img.png";
import HomeFrequently from "../../components/homeFrequently/HomeFrequently";

const Product = () => {
  const [cont, setCont] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <div className="product">
        <div className="product__img">
          <img src={img} alt="" className="product--img1" />
          <img src={im2} alt="" className="product--img2" />
        </div>
        <div className="product__text">
          <h3>
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, <br />
            8GB RAM, 256GB SSD Storage) - Space Gray
          </h3>
          <div>
            <div class="product__box">
              <div class="top">
                <div class="left">
                  <p>
                    Sku: <strong>A264671</strong>
                  </p>
                  <p>
                    Brand: <strong>Apple</strong>
                  </p>
                </div>

                <div class="right">
                  <p>
                    Availability: <span class="stock">In Stock</span>
                  </p>
                  <p>
                    Category: <strong>Electronics Devices</strong>
                  </p>
                </div>
              </div>

              <div class="price__section">
                <span class="price">Rs 125000</span>
                <span class="old-price">₹156000</span>
                <span class="discount">21% OFF</span>
              </div>

              <p class="or">or</p>

              <p class="offer">
                Get it for <span>Rs 90,0000</span>
              </p>
            </div>
          </div>
          <div className="product__inputs">
            <div className="product__inputs__cart">
              <p>Color</p>
              <img src={colorImg} alt="" />
            </div>
            <div className="product__inputs__cart">
              <p>Size</p>
              <input
                type="text"
                placeholder="14-inch Liquid Retina XDR display"
              />
            </div>
            <div className="product__inputs__cart">
              <p>Memory</p>
              <input type="text" placeholder="16GB unified memory" />
            </div>
            <div className="product__inputs__cart">
              <p>Storage</p>
              <input type="text" placeholder="1TV SSD Storage" />
            </div>
          </div>
          <div className="product__btns">
            <div className="product--cont">
              <button onClick={() => setCont(cont - 1)}>-</button>
              <p>{cont}</p>
              <button onClick={() => setCont(cont + 1)}>+</button>
            </div>
            <button className="product---get-deal">Get DEAL ( ₹90k )</button>
            <button className="product--add">ADD</button>
          </div>
          <div className="product__checkout">
            <p>100% Guarantee Safe Checkout</p>
            <img src={checkoutImg} alt="" />
          </div>
          <div className="product__description">
            <h3>Description</h3>
            <p>
              The most powerful MacBook Pro ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first Apple silicon designed for pros
              — you get groundbreaking performance and amazing battery life. Add
              to that a stunning Liquid Retina XDR display, the best camera and
              audio ever in a Mac notebook, and all the ports you need. The
              first notebook of its kind, this MacBook Pro is a beast. M1 Pro
              takes the exceptional performance of the M1 architecture to a
              whole new level for pro users.
              <br />
              Even the most ambitious projects are easily handled with up to 10
              CPU cores, up to 16 GPU cores, a 16‑core Neural Engine, and
              dedicated encode and decode media engines that support H.264,
              HEVC, and ProRes codecs.
            </p>
          </div>
        </div>
      </div>
      <HomeFrequently />
    </div>
  );
};

export default Product;
