import { describe, it, expect } from "vitest";

import { evaluateString, StaticJsRealm } from "static-js";

describe("E2E: Variables", () => {
  describe("const", () => {
    it("Can be declared initialized", () => {
      const code = `
        const a = 1;
        a;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Cannot be declared uninitialized", () => {
      const code = `
        const a;
      `;
      expect(() => evaluateString(code)).toThrow(
        /Missing initializer in const declaration/,
      );
    });

    it("Cannot be reassigned", () => {
      const code = `
        const a = 1;
        a = 2;
      `;
      expect(() => evaluateString(code)).toThrow(
        /Assignment to constant variable./,
      );
    });

    it("Does not appear on the global object", () => {
      const code = `
        const a = 1;
      `;
      const env = new StaticJsRealm();
      evaluateString(code, env);
      expect(env.globalObject.hasProperty("a")).toBe(false);
    });
  });

  describe("let", () => {
    it("Can be declared initialized", () => {
      const code = `
        let a = 1;
        a;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Can be declared uninitialized", () => {
      const code = `
        let a;
      `;
      expect(evaluateString(code)).toBe(undefined);
    });

    it("Can be accessed uninitialized", () => {
      const code = `
        let a;
        a;
      `;
      expect(evaluateString(code)).toBe(undefined);
    });

    it("Can be reassigned", () => {
      const code = `
        let a = 1;
        a = 2;
        a;
      `;
      expect(evaluateString(code)).toBe(2);
    });

    it("Does not appear on the global object", () => {
      const code = `
        let a = 1;
      `;
      const env = new StaticJsRealm();
      evaluateString(code, env);
      expect(env.globalObject.hasProperty("a")).toBe(false);
    });
  });

  describe("var", () => {
    it("Can be declared", () => {
      const code = `
        var a = 1;
        a;
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Can be reassigned", () => {
      const code = `
        var a = 1;
        a = 2;
        a;
      `;
      expect(evaluateString(code)).toBe(2);
    });

    it("Appears on the global object", () => {
      const code = `
        var a = 1;
      `;
      const env = new StaticJsRealm();
      evaluateString(code, env);
      expect(env.globalObject.hasProperty("a")).toBe(true);
    });
  });
});
