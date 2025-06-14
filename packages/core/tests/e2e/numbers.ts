import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Numbers", () => {
  describe("Operators", () => {
    it("Supports addition", async () => {
      const code = `
        1 + 2;
      `;
      expect(await evaluateScript(code)).toBe(3);
    });

    it("Supports subtraction", async () => {
      const code = `
        1 - 2;
      `;
      expect(await evaluateScript(code)).toBe(-1);
    });

    it("Supports multiplication", async () => {
      const code = `
        2 * 3;
      `;
      expect(await evaluateScript(code)).toBe(6);
    });

    it("Supports division", async () => {
      const code = `
        6 / 2;
      `;
      expect(await evaluateScript(code)).toBe(3);
    });

    it("Supports modulo", async () => {
      const code = `
        7 % 3;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports exponentiation", async () => {
      const code = `
        2 ** 3;
      `;
      expect(await evaluateScript(code)).toBe(8);
    });

    it("Supports increment", async () => {
      const code = `
        let x = 1;
        x++;
        x;
      `;
      expect(await evaluateScript(code)).toBe(2);
    });

    it("Supports decrement", async () => {
      const code = `
        let x = 1;
        x--;
        x;
      `;
      expect(await evaluateScript(code)).toBe(0);
    });

    it("Supports unary plus", async () => {
      const code = `
        +1;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports unary minus", async () => {
      const code = `
        -1;
      `;
      expect(await evaluateScript(code)).toBe(-1);
    });

    it("Supports bitwise NOT", async () => {
      const code = `
        ~1;
      `;
      expect(await evaluateScript(code)).toBe(-2);
    });

    it("Supports shift left", async () => {
      const code = `
        1 << 2;
      `;
      expect(await evaluateScript(code)).toBe(4);
    });

    it("Supports shift right", async () => {
      const code = `
        4 >> 2;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports unsigned shift right", async () => {
      const code = `
        -4 >>> 2;
      `;
      expect(await evaluateScript(code)).toBe(1073741823);
    });
  });

  describe("Casting", () => {
    it("Supports string to number", async () => {
      const code = `
        Number("1");
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports boolean to number", async () => {
      const code = `
        Number(true);
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports zero element array to number", async () => {
      const code = `
        Number([]);
      `;
      expect(await evaluateScript(code)).toBe(0);
    });

    it("Supports one element array to number", async () => {
      const code = `
        Number([1]);
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports NaN", async () => {
      const code = `
        Number("abc");
      `;
      expect(await evaluateScript(code)).toBeNaN();
    });
  });

  describe("Boxing", () => {
    it("Supports toFixed", async () => {
      const code = `
        (1.234).toFixed(2);
      `;
      expect(await evaluateScript(code)).toBe("1.23");
    });

    it("Supports toPrecision", async () => {
      const code = `
        (1.234).toPrecision(2);
      `;
      expect(await evaluateScript(code)).toBe("1.2");
    });

    it("Supports toExponential", async () => {
      const code = `
        (1234).toExponential(2);
      `;
      expect(await evaluateScript(code)).toBe("1.23e+3");
    });
  });
});
