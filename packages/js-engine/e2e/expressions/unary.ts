import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../../src/index.js";

describe("E2E: Expressions", () => {
  describe("Unary +", () => {
    it("Converts a string to a number", () => {
      const code = `
        + "42";
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Converts a number to a number", () => {
      const code = `
        + 42;
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Converts null to 0", () => {
      const code = `
        + null;
      `;
      expect(evaluateProgram(code)).toBe(0);
    });

    it("Converts undefined to NaN", () => {
      const code = `
        + undefined;
      `;
      expect(evaluateProgram(code)).toBeNaN();
    });

    describe("Booleans", () => {
      it("Converts true to 1", () => {
        const code = `
        + true;
      `;
        expect(evaluateProgram(code)).toBe(1);
      });

      it("Converts false to 0", () => {
        const code = `
        + false;
      `;
        expect(evaluateProgram(code)).toBe(0);
      });

      it("Converts a non-number to NaN", () => {
        const code = `
        + {};
      `;
        expect(evaluateProgram(code)).toBeNaN();
      });
    });
  });

  describe("Unary -", () => {
    it("Negates a positive number", () => {
      const code = `
        - 42;
      `;
      expect(evaluateProgram(code)).toBe(-42);
    });

    it("Negates a negative number", () => {
      const code = `
        const a = -42;
        -a;
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Negates a string", () => {
      const code = `
        - "42";
      `;
      expect(evaluateProgram(code)).toBe(-42);
    });

    it("Negates a string with a negative sign", () => {
      const code = `
        - "-42";
      `;
      expect(evaluateProgram(code)).toBe(42);
    });

    it("Negates a boolean true", () => {
      const code = `
        - true;
      `;
      expect(evaluateProgram(code)).toBe(-1);
    });

    it("Negatively zeros a boolean false", () => {
      const code = `
        - false;
      `;
      expect(evaluateProgram(code)).toBe(-0);
    });

    it("Converts null to -0", () => {
      const code = `
        - null;
      `;
      expect(evaluateProgram(code)).toBe(-0);
    });

    it("Converts undefined to NaN", () => {
      const code = `
        - undefined;
      `;
      expect(evaluateProgram(code)).toBeNaN();
    });

    it("Converts a non-number to NaN", () => {
      const code = `
        - {};
      `;
      expect(evaluateProgram(code)).toBeNaN();
    });
  });

  describe("Unary !", () => {
    it("Negates a true boolean", () => {
      const code = `
        ! true;
      `;
      expect(evaluateProgram(code)).toBe(false);
    });

    it("Negates a false boolean", () => {
      const code = `
        ! false;
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Negates a number", () => {
      const code = `
        ! 42;
      `;
      expect(evaluateProgram(code)).toBe(false);
    });

    it("Negates Zero", () => {
      const code = `
        ! 0;
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Negates a string", () => {
      const code = `
        ! "42";
      `;
      expect(evaluateProgram(code)).toBe(false);
    });

    it("Negates a zero string", () => {
      const code = `
        ! "0";
      `;
      expect(evaluateProgram(code)).toBe(false);
    });

    it("Negates a non-number to NaN", () => {
      const code = `
        ! {};
      `;
      expect(evaluateProgram(code)).toBe(false);
    });

    it("Negates a null to true", () => {
      const code = `
        ! null;
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Negates an undefined to true", () => {
      const code = `
        ! undefined;
      `;
      expect(evaluateProgram(code)).toBe(true);
    });
  });
});
