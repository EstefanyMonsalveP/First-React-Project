import { useState, useEffect } from "react";
import Header from "./components/Header";
import { db } from "./data/db";
import Garment from "./components/Garment";
function App() {
  const [data, setData] = useState(db);
  return (
    <>
      <Header />

      <main className="container">
        <h3 className="text-center">Our Collection</h3>

        <div className="flex-row mt-large">
          {data.map((garment) => (
            <Garment garment={garment} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
