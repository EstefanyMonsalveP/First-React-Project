import Header from "./components/Header";
import Garment from "./components/Garment";
import Footer from "./components/Footer";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./hooks/useCart";
function App() {

  const { data, cart,addToCart, removeToCart, increaseQuantity, decreaseQuantity, cleanCart, isEmpty, totalItemsPrice} = useCart();
  

  return (
    <>
      <Header
        cart={cart}
        removeToCart={removeToCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        cleanCart={cleanCart}
        isEmpty = {isEmpty}
        totalItemsPrice = {totalItemsPrice}
      />

      <main className="container">
        <h3 className="text-center">Our Collection</h3>

        <div className="flex-row mt-large">
          {data.map((garment) => (
            <Garment
              key={garment.id}
              garment={garment}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      <Footer />
      <ToastContainer position="bottom-left" hideProgressBar={true} />
    </>
  );
}

export default App;
