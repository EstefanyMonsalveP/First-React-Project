export default function Garment({ garment }) {
  return (
    <div className="flex-container column column-md column-lg margin-y-lg">
      <div className="column-lg">
        <img className="img" src={garment.image} alt="Garment" />
      </div>
      <div>
        <h2>{garment.name}</h2>
        <p className="reference">{garment.reference}</p>
        <p>size</p>
        <p className="price">{garment.price}</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
