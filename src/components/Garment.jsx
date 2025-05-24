export default function Garment() {
  return (
    <div className="flex-container column column-md column-lg margin-y-lg">
      <div className="column-lg">
        <img
          className="img"
          src="https://images.unsplash.com/photo-1701450707728-dc66fd42da83?q=80&w=1484&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Garment"
        />
      </div>
      <div>
        <h2>Name</h2>
        <p className="reference">reference</p>
        <p>size</p>
        <p className="price">$300</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
}
