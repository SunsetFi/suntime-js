import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Numbers", () => {
  describe("Operators", () => {
    it("Supports addition", () => {
      const code = `
        1 + 2;
      `;
      expect(evaluateString(code)).toBe(3);
    });

    it("Supports subtraction", () => {
      const code = `
        1 - 2;
      `;
      expect(evaluateString(code)).toBe(-1);
    });

    it("Supports multiplication", () => {
      const code = `
        2 * 3;
      `;
      expect(evaluateString(code)).toBe(6);
    });

    it("Supports division", () => {
      const code = `
        6 / 2;
      `;
      expect(evaluateString(code)).toBe(3);
    });

    it("Supports modulo", () => {
      const code = `
        7 % 3;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports exponentiation", () => {
      const code = `
        2 ** 3;
      `;
      expect(evaluateString(code)).toBe(8);
    });

    it("Supports increment", () => {
      const code = `
        let x = 1;
        x++;
        x;
      `;
      expect(evaluateString(code)).toBe(2);
    });

    it("Supports decrement", () => {
      const code = `
        let x = 1;
        x--;
        x;
      `;
      expect(evaluateString(code)).toBe(0);
    });

    it("Supports unary plus", () => {
      const code = `
        +1;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports unary minus", () => {
      const code = `
        -1;
      `;
      expect(evaluateString(code)).toBe(-1);
    });

    it("Supports bitwise NOT", () => {
      const code = `
        ~1;
      `;
      expect(evaluateString(code)).toBe(-2);
    });

    it("Supports shift left", () => {
      const code = `
        1 << 2;
      `;
      expect(evaluateString(code)).toBe(4);
    });

    it("Supports shift right", () => {
      const code = `
        4 >> 2;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports unsigned shift right", () => {
      const code = `
        -4 >>> 2;
      `;
      expect(evaluateString(code)).toBe(1073741823);
    });
  });

  describe("Casting", () => {
    it("Supports string to number", () => {
      const code = `
        Number("1");
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports boolean to number", () => {
      const code = `
        Number(true);
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports zero element array to number", () => {
      const code = `
        Number([]);
      `;
      expect(evaluateString(code)).toBe(0);
    });

    it("Supports one element array to number", () => {
      const code = `
        Number([1]);
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports NaN", () => {
      const code = `
        Number("abc");
      `;
      expect(evaluateString(code)).toBeNaN();
    });
  });

  describe("Boxing", () => {
    it("Supports toFixed", () => {
      const code = `
        (1.234).toFixed(2);
      `;
      expect(evaluateString(code)).toBe("1.23");
    });

    it("Supports toPrecision", () => {
      const code = `
        (1.234).toPrecision(2);
      `;
      expect(evaluateString(code)).toBe("1.2");
    });

    it("Supports toExponential", () => {
      const code = `
        (1234).toExponential(2);
      `;
      expect(evaluateString(code)).toBe("1.23e+3");
    });
  });
});
