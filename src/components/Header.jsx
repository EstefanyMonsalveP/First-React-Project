import imgHeader from "../assets/imgHeader.png";
import cartIcon from "../assets/shoppingCart.png";
import deliveryCar from "../assets/delivery-car.png";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  function activeShowModal() {
    setShowModal(true);
  }
  console.log("Estado del modal:", showModal);
  return (
    <>
      <header className="header">
        <img src={imgHeader} className="imgHeader" />
        <div className="carts">
          <img
            src={deliveryCar}
            alt="Delivery car"
            className="delivery-button"
            onClick={activeShowModal}
          />
          <button
            onClick={activeShowModal}
            style={{
              border: "none",
              background: "none",
              padding: 0,
              cursor: "pointer",
            }}
          >
            <img src={cartIcon} alt="Shopping cart" className="cart-button" />
          </button>
        </div>
        <div id="myModal" className={`popup-modal ${showModal ? "block" : ""}`}>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    </>
  );
}
