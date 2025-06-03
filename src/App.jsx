import { useState } from "react";
import Header from "./components/Header";
import { db } from "./data/db";
import Garment from "./components/Garment";
function App() {
  const [data] = useState(db);
  const [cart, setCart] = useState([]);
  const MIN_ITEMS = 1;

  // Add an item to the cart
  //If the item already exists, it increase its quantity
  //If not, it adds the item as a new entry
  function addToCart(item) {
    const itemExists = cart.findIndex(
      (garment) =>
        garment.id === item.id && garment.selectedSize === item.selectedSize
    );
    if (itemExists >= 0) {
      const updateCart = [...cart];
      updateCart[itemExists].quantity++;
      setCart(updateCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeToCart(id) {
    setCart((prevCart) => prevCart.filter((garment) => garment.id !== id));
  }

  function increaseQuantity(id) {
    const updateQuantity = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updateQuantity);
  }

  function decreaseQuantity(id) {
    const updateQuantity = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updateQuantity);
  }

  const cleanCart = () => setCart([]);

  return (
    <>
      <Header
        cart={cart}
        removeToCart={removeToCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
      />

      <main className="container">
        <h3 className="text-center">Our Collection</h3>

        <div className="flex-row mt-large">
          {data.map((garment) => (
            <Garment
              key={garment.id}
              garment={garment}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
