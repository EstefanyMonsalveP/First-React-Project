import { useState, useEffect } from "react";
import { db } from "../data/db.js";
import { toast } from "react-toastify";
import type { CartItem, Garment } from "../types/index.js";

export const useCart = () => {
    //Retrieve cart items from localStorage when the user enters the page
    const initialCart = () : CartItem[] => {
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
  function addToCart(item : CartItem) {
    const itemExists = cart.findIndex(
      (garment) =>
        garment.id === item.id && garment.selectedSize === item.selectedSize
    );
    if (itemExists >= 0) {
      const updateCart = [...cart];
      updateCart[itemExists]!.quantity++;
      setCart(updateCart);
    } else {
      const newItem : CartItem = {...item,quantity:1}
      setCart([...cart, newItem]);
    }

    toast.success("Item added to cart");
  }

  //Remove the chosen item from the cart
  function removeToCart(id: Garment['id']) {
    setCart((prevCart) => prevCart.filter((garment) => garment.id !== id));
  }

  //If the item is in the cart, increase its quantity and return the item
  //If item is not in the cart, return it as is.
  function increaseQuantity(id: Garment['id']) {
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
  function decreaseQuantity(id :Garment['id']) {
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

    //Check if the cart is empty
    const isEmpty = () => cart.length === 0;
  
    //Sum all the items in the cart
    const totalItemsPrice = () => {
      const total = cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
      return Math.round(total * 100) / 100;
    };

  //Clear all items from the cart
  const cleanCart = () => setCart([]);
  
    return {
        data,
        cart,
        addToCart,
        removeToCart,
        increaseQuantity,
        decreaseQuantity,
        cleanCart,
        isEmpty,
        totalItemsPrice
    }
}

