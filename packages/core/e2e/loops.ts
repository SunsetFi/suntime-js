import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../src/index.js";

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
      expect(evaluateProgram(code)).toBe(45);
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
      expect(evaluateProgram(code)).toBe(15);
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
      expect(evaluateProgram(code)).toBe(150);
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
      expect(evaluateProgram(code)).toBe(15);
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
      expect(evaluateProgram(code)).toBe(40);
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
      expect(evaluateProgram(code)).toBe(400);
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
      expect(evaluateProgram(code)).toBe(100);
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
      expect(evaluateProgram(code)).toBe(10);
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
      expect(evaluateProgram(code)).toStrictEqual([-1, 45]);
    });

    it("Propagates thrown errors", () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          throw "Error";
        }
        sum;
      `;
      expect(() => evaluateProgram(code)).toThrow("Error");
    });
  });

  describe("While", () => {
    it("Can loop with a while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          sum += i;
          i++;
        }
        sum;
      `;
      expect(evaluateProgram(code)).toBe(45);
    });

    it("Can break out of a while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          sum += i;
          if (i === 5) {
            break;
          }
          i++;
        }
        sum;
      `;
      expect(evaluateProgram(code)).toBe(15);
    });

    it("Can continue to the next iteration of a while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          i++;
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
      expect(evaluateProgram(code)).toBe(50);
    });

    it("Propagates thrown errors", () => {
      const code = `
        let sum = 0;
        while (true) {
          throw "Error";
        }
        sum;
      `;
      expect(() => evaluateProgram(code)).toThrow("Error");
    });
  });

  describe("Do While", () => {
    it("Can loop with a do while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          i++;
        } while (i < 10);
        sum;
      `;
      expect(evaluateProgram(code)).toBe(45);
    });

    it("Can break out of a do while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          if (i === 5) {
            break;
          }
          i++;
        } while (i < 10);
        sum;
      `;
      expect(evaluateProgram(code)).toBe(15);
    });

    it("Can continue to the next iteration of a do while loop", () => {
      const code = `
        let sum = 0;
        let i = 0;
        do {
          i++;
          if (i === 5) {
            continue;
          }
          sum += i;
        } while (i < 10);
        sum;
      `;
      expect(evaluateProgram(code)).toBe(50);
    });

    it("Propagates thrown errors", () => {
      const code = `
        let sum = 0;
        do {
          throw "Error";
        } while (true);
        sum;
      `;
      expect(() => evaluateProgram(code)).toThrow("Error");
    });
  });
});
