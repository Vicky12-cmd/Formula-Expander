import formulas from "../data/forumals.json";

function FormulaList() {
  return (
    <div>
      <h2>All Formulas</h2>
      <ul>
        {formulas.map((f) => (
          <li key={f.id}>
            {f.input} = {f.output}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormulaList;
