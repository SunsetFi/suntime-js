import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

export function* canonicalNumericStringIndex(
  argument: string,
): EvaluationGenerator<number | undefined> {
  if (argument === "-0") {
    return -0;
  }

  const n = Number(argument);
  const str = String(n);
  if (str === argument) {
    return n;
  }

  return undefined;
}
