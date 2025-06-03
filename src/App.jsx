import { useState, useEffect } from "react";
import Header from "./components/Header";
import { db } from "./data/db";
import Garment from "./components/Garment";
function App() {
  //Retrieve cart items from localStorage when the user enters the page
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);
  const MIN_ITEMS = 1;

  //Each time a change is made to the cart , add it to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  //Remove the chosen item from the cart
  function removeToCart(id) {
    setCart((prevCart) => prevCart.filter((garment) => garment.id !== id));
  }

  //If the item is in the cart, increase its quantity and return the item
  //If item is not in the cart, return it as is.
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
  //If the item is in the cart and the quantity is greater than MIN_ITEMS, decrease its quantity and return the item
  //If item is not in the cart and the quantity is less that MIN_ITEMS, return it as is.
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

  //Clear all items from the cart
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
