import { describe, it, expect } from "vitest";

import { evaluateExpression } from "../../../src/index.js";

describe("E2E: Equality Expressions", () => {
  // This motly collection of weird values includes a lot of odd pairings that represent
  // some of the weirder aspects of javascript.
  // This both serves as a test of equality but also of the stranger side of javascript value casting,
  // such as can be seen with [[]] and [0] both evaluating to 0 in numeric contexts.
  // Perhaps some day I will track down the exact rules for this, but for now,
  // these are all taken from a meme in some discord and tested on NodeJs individually.
  const suspiciousValues: string[] = [
    `false`,
    `0`,
    `""`,
    `[[]]`,
    `[]`,
    `"0"`,
    `[0]`,
    `[1]`,
    `1`,
    `true`,
    `-1`,
    `"-1"`,
    `null`,
    `undefined`,
    `Infinity`,
    `-Infinity`,
    `"false"`,
    `"true"`,
    `{}`,
    `NaN`,
  ];

  interface TruthyMatch {
    left: string;
    right: string;
  }

  // Unique pairs (no left/right or right/left duplicates) of suspicious values that should
  // evaluate to true.
  // Note that the unit tests are deduplicated for left/right and right/left redundancy; the left copy is always kept
  // for lower indexes of the suspiciousValues array.
  const truthies: TruthyMatch[] = [
    // False
    { left: `false`, right: `false` },
    { left: `false`, right: `0` },
    { left: `false`, right: `""` },
    { left: `false`, right: `[[]]` },
    { left: `false`, right: `[]` },
    { left: `false`, right: `"0"` },
    { left: `false`, right: `[0]` },
    // 0
    { left: `0`, right: `0` },
    { left: `0`, right: `""` },
    { left: `0`, right: `[[]]` },
    { left: `0`, right: `[]` },
    { left: `0`, right: `"0"` },
    { left: `0`, right: `[0]` },
    // Empty string
    { left: `""`, right: `""` },
    { left: `""`, right: `[[]]` },
    { left: `""`, right: `[]` },
    // String 0
    { left: `"0"`, right: `"0"` },
    { left: `"0"`, right: `[0]` },
    // Array [1]
    { left: `[1]`, right: `"1"` },
    { left: `[1]`, right: `1` },
    { left: `[1]`, right: `true` },
    // "1"
    { left: `"1"`, right: `[1]` },
    { left: `"1"`, right: `"1"` },
    { left: `"1"`, right: `1` },
    { left: `"1"`, right: `true` },
    // 1
    { left: `1`, right: `[1]` },
    { left: `1`, right: `"1"` },
    { left: `1`, right: `1` },
    { left: `1`, right: `true` },
    // true
    { left: `true`, right: `[1]` },
    { left: `true`, right: `"1"` },
    { left: `true`, right: `1` },
    { left: `true`, right: `true` },
    // -1
    { left: `-1`, right: `-1` },
    { left: `-1`, right: `"-1"` },
    // "-1"
    { left: `"-1"`, right: `"-1"` },
    // null
    { left: `null`, right: `null` },
    { left: `null`, right: `undefined` },
    // undefined
    { left: `undefined`, right: `undefined` },
    // Infinity
    { left: `Infinity`, right: `Infinity` },
    // -Infinity
    { left: `-Infinity`, right: `-Infinity` },
    // "false"
    { left: `"false"`, right: `"false"` },
    // "true"
    { left: `"true"`, right: `"true"` },
  ];

  for (let leftI = 0; leftI < suspiciousValues.length; leftI++) {
    for (let rightI = leftI; rightI < suspiciousValues.length; rightI++) {
      const isTrue = truthies.some(
        (truthy) =>
          truthy.left === suspiciousValues[leftI] &&
          truthy.right === suspiciousValues[rightI],
      );

      it(`${suspiciousValues[leftI]} == ${suspiciousValues[rightI]} should be ${isTrue}`, () => {
        const left = suspiciousValues[leftI];
        const right = suspiciousValues[rightI];

        const result = evaluateExpression(`${left} == ${right}`);
        expect(result).toBe(isTrue);
      });
    }
  }
});
