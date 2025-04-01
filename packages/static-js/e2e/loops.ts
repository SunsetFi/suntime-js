import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Loops", () => {
  describe("For", () => {
    it("Can loop with a for loop", () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(45);
    });

    it("Can break out of a for loop", () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
          if (i === 5) {
            break;
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(15);
    });

    it("Breaks out of the closest for loop", () => {
      const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            sum += j;
            if (j === 5) {
              break;
            }
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(150);
    });

    it("Can break out of a labeled for loop", () => {
      const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            sum += j;
            if (j === 5) {
              break outer;
            }
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(15);
    });

    it("Can continue to the next iteration of a for loop", () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(40);
    });

    it("Continues from the closest for loop", () => {
      const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (j === 5) {
              continue;
            }
            sum += j;
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(400);
    });

    it("Can continue from a labeled for loop", () => {
      const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (j === 5) {
              continue outer;
            }
            sum += j;
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(100);
    });

    it("Can loop with an empty for loop", () => {
      const code = `
        let sum = 0;
        for (;;) {
          sum++;
          if (sum === 10) {
            break;
          }
        }
        sum;
      `;
      expect(evaluateString(code)).toBe(10);
    });

    it("Does not conflict init with outer scope", () => {
      const code = `
        let i = -1;
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        [i, sum];
      `;
      expect(evaluateString(code)).toStrictEqual([-1, 45]);
    });
  });
});
