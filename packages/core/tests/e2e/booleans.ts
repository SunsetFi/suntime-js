import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Booleans", () => {
  describe("Casting", () => {
    it("Supports casting a number to boolean", async () => {
      const code = `
        Boolean(1);
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Supports casting a boolean to boolean", async () => {
      const code = `
        Boolean(true);
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Supports casting a string to boolean", async () => {
      const code = `
        Boolean("abc");
      `;
      expect(await evaluateScript(code)).toBe(true);
    });
  });

  describe("Unary operators", () => {
    it("Supports negation", async () => {
      const code = `
        !true;
      `;
      expect(await evaluateScript(code)).toBe(false);
    });

    it("Supports double negation", async () => {
      const code = `
        !!true;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });
  });

  describe("Boxing", () => {
    it("Supports toString", async () => {
      const code = `
        true.toString();
      `;
      expect(await evaluateScript(code)).toBe("true");
    });

    it("Supports valueOf", async () => {
      const code = `
        true.valueOf();
      `;
      expect(await evaluateScript(code)).toBe(true);
    });
  });
});
