import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FormulaList from "./pages/FormulaList";
import "./index.css";
function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/formulas">Formulas</Link>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulas" element={<FormulaList />} />
      </Routes>
      
    </>
  );
}

export default App;
