import { useState } from "react";
import FormulaInput from "../components/FormulaInput";
import Result from "../components/Result";
import formulas from "../data/forumals.json";

function Home() {
  const [result, setResult] = useState("");

  return (
    <div>
      <h1>Formula Expander</h1>
      <FormulaInput setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default Home;
