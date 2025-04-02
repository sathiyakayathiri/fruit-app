import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [fruit, setFruit] = useState("");
  const navigate = useNavigate();

  const addFruit = async () => {
    if (!fruit) return;
    try {
      const response = await fetch("http://localhost:5000/add-fruit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: fruit }),
      });
      if (response.ok) {
        alert("Fruit added successfully!");
        setFruit("");
      } else {
        alert("Failed to add fruit");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding fruit");
    }
  };

  return (
    <div className="total" style={{ textAlign: "center", marginTop: "50px", }}>
      <input
        type="text"
        placeholder="Enter fruit name"
        value={fruit}
        onChange={(e) => setFruit(e.target.value)}
      />
      <button onClick={addFruit}>Add Fruit</button>
      <button onClick={() => navigate("/fruits")} style={{ marginLeft: "10px" }}>
        View Fruits
      </button>
    </div>
  );
}

export default Home;