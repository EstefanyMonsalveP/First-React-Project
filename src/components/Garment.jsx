export default function Garment({ garment }) {
  //Select available sizes
  const availableSizes = Object.entries(garment.sizes)
    .filter(([, available]) => available)
    .map(([size]) => size);
  return (
    <div className="flex-container column column-md column-lg margin-y-lg">
      <div className="column-lg">
        <img className="img" src={garment.image} alt="Garment" />
      </div>
      <div>
        <h2>{garment.name}</h2>
        <p className="reference">{garment.reference}</p>
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
        <p className="price">{garment.price}</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
