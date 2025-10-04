import { describe, it, expect } from "vitest";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";

describe("E2E: Assignment", () => {
  describe("Objects", function () {
    it("Can be assigned", async () => {
      const code = `
        const a = {x: 42};
        a;
      `;
      expect(await evaluateScript(code)).toEqual({ x: 42 });
    });

    it("Can be assigned with a method", async () => {
      const realm = StaticJsRealm();
      const code = `
        const a = {x() { return 42; }};
        a;
      `;
      const result = (await evaluateScript(code, { realm })) as {
        x: () => number;
      };
      expect(result).toEqual({ x: expect.any(Function) });
      expect(result.x()).toBe(42);
    });

    it("Can be assigned with a computed key", async () => {
      const code = `
        const key = "x";
        const a = {[key]: 42};
        a;
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual({ x: 42 });
    });

    it("Can be assigned with a computed key and a method", async () => {
      const realm = StaticJsRealm();
      const code = `
        const key = "x";
        const a = {[key]() { return 42; }};
        a;
      `;
      const result = (await evaluateScript(code, { realm })) as {
        x: () => number;
      };
      expect(result).toEqual({ x: expect.any(Function) });
      expect(result.x()).toBe(42);
    });

    it("Can be assigned with a spread", async () => {
      const code = `
        const a = {fromA: 6, fromB: -1, fromC: -1};
        const b =  {fromB: 2, fromC: -2};
        const c = {fromA: -1, ...a, ...b, fromC: 4};
        c;
      `;
      expect(await evaluateScript(code)).toEqual({
        fromA: 6,
        fromB: 2,
        fromC: 4,
      });
    });

    it("Can be assigned to other variables", async () => {
      const code = `
        const a = {x: 42};
        const b = a;
        b;
      `;
      expect(await evaluateScript(code)).toEqual({ x: 42 });
    });

    it("Can be assigned with other objects", async () => {
      const code = `
        const a = {x: 42};
        const b = {value: a};
        b;
      `;
      expect(await evaluateScript(code)).toEqual({ value: { x: 42 } });
    });

    it("Can be shorthand assigned", async () => {
      const code = `
        const x = 42;
        const a = {x};
        a;
      `;
      expect(await evaluateScript(code)).toEqual({ x: 42 });
    });
  });

  describe("Arrays", function () {
    it("Can be assigned", async () => {
      const code = `
        const a = [1, 2];
        a;
      `;

      const result = await evaluateScript(code);
      expect(result).toEqual([1, 2]);
    });

    it("Can be assigned to other variables", async () => {
      const code = `
        const a = [1, 2];
        const b = a;
        b;
      `;

      const result = await evaluateScript(code);
      expect(result).toEqual([1, 2]);
    });

    it("Can be spread", async () => {
      const code = `
        const a = [2, 3];
        const b = [4, 5];
        const c = [1, ...a, ...b, 6];
        c;
      `;

      const result = await evaluateScript(code);
      expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("Sources from iterables", async () => {
      const code = `
        const iterable = {
          [Symbol.iterator]() {
            let count = 0;
            return {
              next() {
                if (count < 5) {
                  return { value: count++, done: false };
                } else {
                  return { value: undefined, done: true };
                }
              }
            };
          }
        };
        const [a, b, ...rest] = iterable;
        [a, b, rest];
      `;
      const result = await evaluateScript(code);
      expect(result).toEqual([0, 1, [2, 3, 4]]);
    });
  });
});
