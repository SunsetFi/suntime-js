import { describe, it, expect } from "vitest";

import { evaluateString } from "static-js";

describe("E2E: Variables", () => {
  describe("const", () => {
    it("can be declared", () => {
      const code = `
        const a = 1;
        a;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("cannot be reassigned", () => {
      const code = `
        const a = 1;
        a = 2;
      `;
      expect(() => evaluateString(code)).toThrow(
        /Cannot set const variable \"a\"/,
      );
    });
  });

  describe("let", () => {
    it("can be declared", () => {
      const code = `
        let a = 1;
        a;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("can be reassigned", () => {
      const code = `
        let a = 1;
        a = 2;
        a;
      `;
      expect(evaluateString(code)).toBe(2);
    });
  });
});
