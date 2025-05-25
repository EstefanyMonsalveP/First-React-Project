export default function Garment({ garment, setCart }) {
  //Destructure garment object
  const { id, name, image, reference, sizes, price } = garment;

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
                <span className="size" key={size}>
                  {size}
                </span>
              ))
            ) : (
              <p>No sizes available</p>
            )}
          </div>
        </div>
        <p className="price">{price}</p>
        <button
          className="btn"
          onClick={() => setCart((prevCart) => [...prevCart, garment])}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
