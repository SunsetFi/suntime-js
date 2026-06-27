import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

export function* canonicalNumericIndexString(
  argument: string,
): EvaluationGenerator<number | undefined> {
  return canonicalNumericIndexStringJs(argument);
}

canonicalNumericIndexString.js = canonicalNumericIndexStringJs;

function canonicalNumericIndexStringJs(argument: string): number | undefined {
  if (argument === "-0") {
    return -0;
  }

  const n = Number(argument);
  // We could shortcut with Number.isInteger, but I think we are interested in excluding
  // weird other formats that Number can parse.
  const str = String(n);
  if (str === argument) {
    return n;
  }

  return undefined;
}
