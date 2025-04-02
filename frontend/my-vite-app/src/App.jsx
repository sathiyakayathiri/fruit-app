import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import FruitsList from "./FruitsList";

function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", textAlign: "center", color:"purple" , backgroundColor:"crimson"  }}>
        <Link to="/" style={{ marginRight: "10px",  }}>Home</Link>
        <Link to="/fruits">Fruits List</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<FruitsList />} />
      </Routes>
    </Router>
  );
}

export default App;