import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Booleans", () => {
  describe("Casting", () => {
    it("Supports casting a number to boolean", () => {
      const code = `
        Boolean(1);
      `;
      expect(evaluateString(code)).toBe(true);
    });

    it("Supports casting a boolean to boolean", () => {
      const code = `
        Boolean(true);
      `;
      expect(evaluateString(code)).toBe(true);
    });

    it("Supports casting a string to boolean", () => {
      const code = `
        Boolean("abc");
      `;
      expect(evaluateString(code)).toBe(true);
    });
  });

  describe("Unary operators", () => {
    it("Supports negation", () => {
      const code = `
        !true;
      `;
      expect(evaluateString(code)).toBe(false);
    });

    it("Supports double negation", () => {
      const code = `
        !!true;
      `;
      expect(evaluateString(code)).toBe(true);
    });
  });

  describe("Boxing", () => {
    it("Supports toString", () => {
      const code = `
        true.toString();
      `;
      expect(evaluateString(code)).toBe("true");
    });

    it("Supports valueOf", () => {
      const code = `
        true.valueOf();
      `;
      expect(evaluateString(code)).toBe(true);
    });
  });
});
