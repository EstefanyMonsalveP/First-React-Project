import imgHeader from "../assets/imgHeader.png";
import cartIcon from "../assets/shoppingCart.png";
import deliveryCar from "../assets/delivery-car.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";

export default function Header({
  cart,
  removeToCart,
  increaseQuantity,
  decreaseQuantity,
  cleanCart,
}) {
  const [showPopUp, setShowPopUp] = useState(false);

  function activeShowPopUp() {
    setShowPopUp(true);
  }

  const isEmpty = () => cart.length === 0;
  const totalItemsPrice = () => {
    const total = cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    return Math.round(total * 100) / 100;
  };

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
                    width: "70px",
                    height: "auto",
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
                    <th></th>
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
                      <td
                        style={{
                          height: "140px",
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faSquareMinus}
                            className="iconsMinus-plus"
                            onClick={() => decreaseQuantity(garment.id)}
                          />
                          {garment.quantity}
                          <FontAwesomeIcon
                            icon={faSquarePlus}
                            className="iconsMinus-plus"
                            onClick={() => increaseQuantity(garment.id)}
                          />
                        </div>
                      </td>
                      <td style={{ fontWeight: "bold" }}>${garment.price}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faCircleXmark}
                          className="iconXmark"
                          onClick={() => removeToCart(garment.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-TotalPay">
                Total to pay:{" "}
                <span style={{ fontWeight: "bold" }}>{totalItemsPrice()}</span>
              </p>
              <button className="btn-remove" onClick={cleanCart}>
                Remove all items
              </button>
            </>
          )}
        </div>
      </header>
    </>
  );
}
