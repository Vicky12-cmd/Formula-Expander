import { useState } from "react";
import { findFormula } from "../utils/findFormula";

function FormulaInput({ setResult }) {
  const [input, setInput] = useState("");

  const handleExpand = () => {
    setResult(findFormula(input));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter formula name or keyword"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleExpand}>Expand</button>
    </div>
  );
}

export default FormulaInput;
