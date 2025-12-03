import { describe, it, expect } from "vitest";

import type { StaticJsNumber } from "../../src/index.js";
import {
  evaluateScript,
  isStaticJsNumber,
  StaticJsRealm,
} from "../../src/index.js";

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
      expect(realm.global.hasPropertySync("a")).toBe(false);
    });

    it("Can be redeclared in block scopes", async () => {
      const code = `
        const results = [];
        const a = 1;
        {
          const a = 2;
          results.push(a);
        }
        results.push(a);
        results;
      `;
      expect(await evaluateScript(code)).toEqual([2, 1]);
    });

    describe("destructuring", () => {
      it("Can be destructured with objects", async () => {
        const code = `
        const a = { x: 1, y: 2 };
        const { x, y } = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can be destructure objects with computed keys", async () => {
        const code = `
        const a = { x: 1, y: 2 };
        const key1 = 'x';
        const key2 = 'y';
        const { [key1]: x, [key2]: y } = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Applies object destructuring defaults", async () => {
        const code = `
        const a = { x: 1 };
        const { x, y = 2 } = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can nest object destructuring", async () => {
        const code = `
        const a = { p: { x: 1, y: 2 } };
        const { p: { x, y } } = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can nest arrays in object destructuring", async () => {
        const code = `
        const a = { p: [1, 2] };
        const { p: [ x, y ] } = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Applies nested object destructuring defaults", async () => {
        const code = `
        const { p: { x } = { x: 2} } = {};
        x;
      `;
        expect(await evaluateScript(code)).toEqual(2);
      });

      it("Can use rest parameters in object destructuring", async () => {
        const code = `
        const a = { x: 1, y: 2, z: 3 };
        const { x, ...rest } = a;
        [x, rest];
      `;
        expect(await evaluateScript(code)).toEqual([1, { y: 2, z: 3 }]);
      });

      it("Can be destructure arrays", async () => {
        const code = `
        const a = [1, 2];
        const [ x, y ] = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can destructure arrays with defaults", async () => {
        const code = `
        const a = [1];
        const [ x, y = 2 ] = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can destructure nested arrays", async () => {
        const code = `
        const a = [1, [2, 3]];
        const [ x, [ y, z ] ] = a;
        [x, y, z];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2, 3]);
      });

      it("Can destructure objects nested in arrays", async () => {
        const code = `
        const a = [ { x: 1, y: 2 } ];
        const [ { x, y } ] = a;
        [x, y];
      `;
        expect(await evaluateScript(code)).toEqual([1, 2]);
      });

      it("Can destructure receiving a default array", async () => {
        const code = `
        const {foo: [a, b] = [4, 5] } = {};
        [a, b];
      `;
        expect(await evaluateScript(code)).toEqual([4, 5]);
      });

      it("Can be destructure arrays with empty slots", async () => {
        const code = `
        const a = [1, 2, 3];
        const [ , , x ] = a;
        x;
      `;
        expect(await evaluateScript(code)).toBe(3);
      });

      it("Can destructure rest parameters in arrays", async () => {
        const code = `
        const a = [1, 2, 3];
        const [ x, ...rest ] = a;
        [x, rest];
      `;
        expect(await evaluateScript(code)).toEqual([1, [2, 3]]);
      });
    });

    it("Can shadow globals", async () => {
      const code = `
        let Array = 1;
        Array;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(1);
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
      expect(realm.global.hasPropertySync("a")).toBe(false);
    });

    it("Can be redeclared in block scopes", async () => {
      const code = `
        const results = [];
        let a = 1;
        {
          let a = 2;
          results.push(a);
        }
        results.push(a);
        results;
      `;
      expect(await evaluateScript(code)).toEqual([2, 1]);
    });

    it("Can shadow globals", async () => {
      const code = `
        let Array = 1;
        Array;
      `;
      const result = await evaluateScript(code);
      expect(result).toBe(1);
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
      expect(realm.global.hasPropertySync("a")).toBe(true);
    });

    it("Appears on the global scope in a block scope", async () => {
      const code = `
        {
          var a = 1;
        }
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.global.hasPropertySync("a")).toBe(true);
    });

    it("Does not appear on the global scope in a function scope", async () => {
      const code = `
        function f() {
          var a = 1;
        }
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      expect(realm.global.hasPropertySync("a")).toBe(false);
    });

    it("Shadows variables in a function scope", async () => {
      const code = `
        var a = 1;
        function f() {
          var a = 2;
          return a;
        }
        const fnResult = f();
        [a, fnResult];
      `;
      expect(await evaluateScript(code)).toEqual([1, 2]);
    });
  });

  describe("implicit globals", () => {
    it("Defines an identifier var on the global object in non-strict mode", async () => {
      const code = `
        x = 10;
        x;
      `;
      const realm = StaticJsRealm();
      await evaluateScript(code, { realm });
      const globalValue = realm.global.getSync("x");
      expect(globalValue).toBeDefined();
      expect(isStaticJsNumber(globalValue)).toBe(true);
      expect((globalValue as StaticJsNumber).value).toBe(10);
    });

    it("Throws a ReferenceError in strict mode", async () => {
      const code = `
        'use strict';
        x = 10;
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "ReferenceError",
        message: "x is not defined",
      });
    });
  });
});
