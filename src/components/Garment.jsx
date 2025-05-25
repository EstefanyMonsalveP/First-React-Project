import { useState } from "react";
export default function Garment({ garment, setCart }) {
  //Destructure garment object
  const { id, name, image, reference, sizes, price } = garment;

  //useState to select a size for each garment
  const [selectedSize, setSelectedSize] = useState(null);
  //Select available sizes
  const availableSizes = Object.entries(sizes)
    .filter(([, available]) => available)
    .map(([size]) => size);

  return (
    <div className="flex-container column column-md column-lg margin-y-lg">
      <div className="column-lg">
        <img className="img" src={image} alt="Garment" />
      </div>
      <div>
        <h2>{name}</h2>
        <p className="reference">{reference}</p>
        {/*Only return available sizes*/}
        <div className="column-sizes">
          <div style={{ display: "flex", gap: "8px" }}>
            {availableSizes.length > 0 ? (
              availableSizes.map((size) => (
                <button
                  key={size}
                  //Change the button style if selected
                  className={`${
                    selectedSize === size ? "size selected" : "size"
                  } `}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))
            ) : (
              <p>No sizes available</p>
            )}
          </div>
        </div>
        <p className="price">{price}</p>
        <button
          className="btn"
          onClick={() => {
            //Alert to prompt the user to select the size
            if (!selectedSize) {
              alert("Please select a size before adding to cart");
              return;
            }

            //object to add to the shopping cart with the selected size
            const garmentToAdd = {
              image,
              name,
              price,
              selectedSize,
            };

            setCart((prevCart) => [...prevCart, garmentToAdd]);

            //Reset selected size after adding to cart
            setSelectedSize(null);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
