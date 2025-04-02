import { useState, useEffect } from "react";

function FruitsList() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      try {
        const response = await fetch("http://localhost:5000/fruits");
        const data = await response.json();
        setFruits(data.fruits);
      } catch (error) {
        console.error("Error fetching fruits:", error);
      }
    };

    fetchFruits();
  }, []);

  return (
    <div className="list" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Fruits List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default FruitsList;