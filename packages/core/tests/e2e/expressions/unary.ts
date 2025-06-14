import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: Expressions", () => {
  describe("Unary +", () => {
    it("Converts a string to a number", async () => {
      const code = `
        + "42";
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Converts a number to a number", async () => {
      const code = `
        + 42;
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Converts null to 0", async () => {
      const code = `
        + null;
      `;
      expect(await evaluateScript(code)).toBe(0);
    });

    it("Converts undefined to NaN", async () => {
      const code = `
        + undefined;
      `;
      expect(await evaluateScript(code)).toBeNaN();
    });

    describe("Booleans", () => {
      it("Converts true to 1", async () => {
        const code = `
        + true;
      `;
        expect(await evaluateScript(code)).toBe(1);
      });

      it("Converts false to 0", async () => {
        const code = `
        + false;
      `;
        expect(await evaluateScript(code)).toBe(0);
      });

      it("Converts a non-number to NaN", async () => {
        const code = `
        + {};
      `;
        expect(await evaluateScript(code)).toBeNaN();
      });
    });
  });

  describe("Unary -", () => {
    it("Negates a positive number", async () => {
      const code = `
        - 42;
      `;
      expect(await evaluateScript(code)).toBe(-42);
    });

    it("Negates a negative number", async () => {
      const code = `
        const a = -42;
        -a;
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Negates a string", async () => {
      const code = `
        - "42";
      `;
      expect(await evaluateScript(code)).toBe(-42);
    });

    it("Negates a string with a negative sign", async () => {
      const code = `
        - "-42";
      `;
      expect(await evaluateScript(code)).toBe(42);
    });

    it("Negates a boolean true", async () => {
      const code = `
        - true;
      `;
      expect(await evaluateScript(code)).toBe(-1);
    });

    it("Negatively zeros a boolean false", async () => {
      const code = `
        - false;
      `;
      expect(await evaluateScript(code)).toBe(-0);
    });

    it("Converts null to -0", async () => {
      const code = `
        - null;
      `;
      expect(await evaluateScript(code)).toBe(-0);
    });

    it("Converts undefined to NaN", async () => {
      const code = `
        - undefined;
      `;
      expect(await evaluateScript(code)).toBeNaN();
    });

    it("Converts a non-number to NaN", async () => {
      const code = `
        - {};
      `;
      expect(await evaluateScript(code)).toBeNaN();
    });
  });

  describe("Unary !", () => {
    it("Negates a true boolean", async () => {
      const code = `
        ! true;
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Negates a false boolean", async () => {
      const code = `
        ! false;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Negates a number", async () => {
      const code = `
        ! 42;
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Negates Zero", async () => {
      const code = `
        ! 0;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Negates a string", async () => {
      const code = `
        ! "42";
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Negates a zero string", async () => {
      const code = `
        ! "0";
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Negates a non-number to NaN", async () => {
      const code = `
        ! {};
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Negates a null to true", async () => {
      const code = `
        ! null;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Negates an undefined to true", async () => {
      const code = `
        ! undefined;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });
  });
});
