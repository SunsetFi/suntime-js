import { describe, it, expect } from "vitest";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";

describe("E2E: Variables", () => {
  describe("const", () => {
    it("Can be declared initialized", async () => {
      const code = `
        const a = 1;
        a;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Cannot be declared uninitialized", async () => {
      const code = `
        const a;
      `;
      await expect(evaluateScript(code)).rejects.toThrow(
        /Missing initializer in const declaration/,
      );
    });

    it("Cannot be reassigned", async () => {
      const code = `
        const a = 1;
        a = 2;
        a;
      `;
      await expect(evaluateScript(code)).resolves.toBe(1);
    });

    it("Does not appear on the global object", async () => {
      const code = `
        const a = 1;
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("a")).toBe(false);
    });

    it("Can be redeclared in block scopes", async () => {
      const code = `
        const a = 1;
        {
          const a = 2;
        }
        a;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Can be destructured with objects", async () => {
      const code = `
        const a = { x: 1, y: 2 };
        const { x, y } = a;
        [x, y];
      `;
      expect(await evaluateScript(code)).toEqual([1, 2]);
    });

    it("Can be destructured with arrays", async () => {
      const code = `
        const a = [1, 2];
        const [ x, y ] = a;
        [x, y];
      `;
      expect(await evaluateScript(code)).toEqual([1, 2]);
    });
  });

  describe("let", () => {
    it("Can be declared initialized", async () => {
      const code = `
        let a = 1;
        a;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Can be declared uninitialized", async () => {
      const code = `
        let a;
      `;
      expect(await evaluateScript(code)).toBe(undefined);
    });

    it("Can be accessed uninitialized", async () => {
      const code = `
        let a;
        a;
      `;
      expect(await evaluateScript(code)).toBe(undefined);
    });

    it("Can be reassigned", async () => {
      const code = `
        let a = 1;
        a = 2;
        a;
      `;
      expect(await evaluateScript(code)).toBe(2);
    });

    it("Can be destructured with objects", async () => {
      const code = `
        let a = { x: 1, y: 2 };
        let { x, y } = a;
        [x, y];
      `;
      expect(await evaluateScript(code)).toEqual([1, 2]);
    });

    it("Can be destructured with arrays", async () => {
      const code = `
        let a = [1, 2];
        let [ x, y ] = a;
        [x, y];
      `;
      expect(await evaluateScript(code)).toEqual([1, 2]);
    });

    it("Does not appear on the global object", async () => {
      const code = `
        let a = 1;
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("a")).toBe(false);
    });

    it("Can be redeclared in block scopes", async () => {
      const code = `
        let a = 1;
        {
          let a = 2;
        }
        a;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });
  });

  describe("var", () => {
    it("Can be declared", async () => {
      const code = `
        var a = 1;
        a;
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Can be reassigned", async () => {
      const code = `
        var a = 1;
        a = 2;
        a;
      `;
      expect(await evaluateScript(code)).toBe(2);
    });

    it("Appears on the global object in the global scope", async () => {
      const code = `
        var a = 1;
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("a")).toBe(true);
    });

    it("Appears on the global scope in a block scope", async () => {
      const code = `
        {
          var a = 1;
        }
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("a")).toBe(true);
    });

    it("Does not appear on the global scope in a function scope", async () => {
      const code = `
        function f() {
          var a = 1;
        }
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.globalObject.hasPropertySync("a")).toBe(false);
    });
  });
});
