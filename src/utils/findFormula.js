import formulas from "../data/forumals.json";

export function findFormula(userInput) {
    const cleaned = userInput.replace(/\s+/g, "");
    const match = formulas.find((f) => f.input === cleaned);
    return match ? match.output : "Formula not found";
}