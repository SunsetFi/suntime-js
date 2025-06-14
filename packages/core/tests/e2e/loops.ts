import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Loops", () => {
  describe("For", () => {
    it("Can loop with a for loop", async () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        sum;
      `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Can break out of a for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(15);
    });

    it("Breaks out of the closest for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(150);
    });

    it("Can break out of a labeled for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(15);
    });

    it("Can continue to the next iteration of a for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(40);
    });

    it("Continues from the closest for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(400);
    });

    it("Can continue from a labeled for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(100);
    });

    it("Can loop with an empty for loop", async () => {
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
      expect(await evaluateScript(code)).toBe(10);
    });

    it("Does not conflict init with outer scope", async () => {
      const code = `
        let i = -1;
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        [i, sum];
      `;

      expect(await evaluateScript(code)).toEqual([-1, 45]);
    });

    it("Propagates thrown errors", async () => {
      const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          throw "Error";
        }
        sum;
      `;
      await expect(evaluateScript(code)).rejects.toThrow("Error");
    });
  });

  describe("While", () => {
    it("Can loop with a while loop", async () => {
      const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          sum += i;
          i++;
        }
        sum;
      `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Can break out of a while loop", async () => {
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
      expect(await evaluateScript(code)).toBe(15);
    });

    it("Can continue to the next iteration of a while loop", async () => {
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
      expect(await evaluateScript(code)).toBe(50);
    });

    it("Propagates thrown errors", async () => {
      const code = `
        let sum = 0;
        while (true) {
          throw "Error";
        }
        sum;
      `;
      await expect(evaluateScript(code)).rejects.toThrow("Error");
    });
  });

  describe("Do While", () => {
    it("Can loop with a do while loop", async () => {
      const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          i++;
        } while (i < 10);
        sum;
      `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Can break out of a do while loop", async () => {
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
      expect(await evaluateScript(code)).toBe(15);
    });

    it("Can continue to the next iteration of a do while loop", async () => {
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
      expect(await evaluateScript(code)).toBe(50);
    });

    it("Propagates thrown errors", async () => {
      const code = `
        let sum = 0;
        do {
          throw "Error";
        } while (true);
        sum;
      `;
      await expect(evaluateScript(code)).rejects.toThrow("Error");
    });
  });
});
