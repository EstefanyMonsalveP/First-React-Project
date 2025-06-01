import imgHeader from "../assets/imgHeader.png";
import cartIcon from "../assets/shoppingCart.png";
import deliveryCar from "../assets/delivery-car.png";
import { useState } from "react";

export default function Header({ cart }) {
  const [showPopUp, setShowPopUp] = useState(false);

  function activeShowPopUp() {
    setShowPopUp(true);
  }

  const isEmpty = () => cart.length === 0;

  return (
    <>
      <header className="header">
        <img src={imgHeader} className="imgHeader" />
        <div className="carts">
          <img
            src={deliveryCar}
            alt="Delivery car"
            className="delivery-button"
          />
          <button
            onMouseOver={activeShowPopUp}
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
        <div
          id="myModal"
          className={`popup-modal ${showPopUp ? "block" : ""}`}
          onMouseEnter={activeShowPopUp}
          onMouseLeave={() => setShowPopUp(false)}
        >
          {isEmpty() ? (
            <>
              <div
                style={{
                  display: "flex",
                  height: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={cartIcon}
                  style={{
                    width: "80px",
                  }}
                />
              </div>

              <p style={{ fontFamily: " Arial", fontSize: "0.9rem" }}>
                The cart is empty
              </p>
            </>
          ) : (
            <>
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
                  {cart.map((garment) => (
                    <tr key={garment.id}>
                      <td>
                        <img src={garment.image}></img>
                      </td>
                      <td>{garment.name}</td>
                      <td>{garment.selectedSize}</td>
                      <td>{garment.quantity}</td>
                      <td style={{ fontWeight: "bold" }}>${garment.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-TotalPay">
                Total to pay: <span style={{ fontWeight: "bold" }}> $899</span>
              </p>
              <button className="btn-remove">Remove all items</button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
