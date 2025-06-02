import { useState } from "react";
import Header from "./components/Header";
import { db } from "./data/db";
import Garment from "./components/Garment";
function App() {
  const [data] = useState(db);
  const [cart, setCart] = useState([]);

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

  return (
    <>
      <Header cart={cart} />

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
