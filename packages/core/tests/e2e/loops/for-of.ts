import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: For Of loops", () => {
  it("Can loop with a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(45);
  });

  it("Can break out of a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
          if (i === 5) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Breaks out of the closest for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += j;
            if (j === 5) {
              break;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(150);
  });

  it("Can break out of a labeled for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += j;
            if (j === 5) {
              break outer;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Can continue to the next iteration of a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(40);
  });

  it("Continues from the closest for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (j === 5) {
              continue;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(400);
  });

  it("Can continue from a labeled for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (j === 5) {
              continue outer;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(100);
  });

  it("Can loop with a for-of loop over a custom iterator", async () => {
    const code = `
        let sum = 0;
        const counter = {
          [Symbol.iterator]: function() {
            let count = 0;
            return {
              next: function() {
                return { value: count++, done: false };
              }
            };
          }
        };
        for (const i of counter) {
          sum++;
          if (sum === 10) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(10);
  });

  it("Does not conflict iteration variable with outer scope", async () => {
    const code = `
        let i = -1;
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
        }
        [i, sum];
      `;

    expect(await evaluateScript(code)).toEqual([-1, 45]);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          throw "Error";
        }
        sum;
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Error");
  });
});
