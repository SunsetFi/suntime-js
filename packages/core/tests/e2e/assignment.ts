import { describe, it, expect } from "vitest";

import { evaluateProgram, StaticJsRealm } from "../../src/index.js";

describe("E2E: Assignment", () => {
  describe("Objects", function () {
    it("Can be assigned", () => {
      const code = `
        const a = {x: 42};
        a;
      `;
      expect(evaluateProgram(code)).toEqual({ x: 42 });
    });

    it("Can be assigned with a method", () => {
      const env = StaticJsRealm();
      const code = `
        const a = {x() { return 42; }};
        a;
      `;
      const result = evaluateProgram(code, env) as { x: () => number };
      expect(result).toEqual({ x: expect.any(Function) });
      expect(result.x()).toBe(42);
    });

    it("Can be assigned with a computed key", () => {
      const code = `
        const key = "x";
        const a = {[key]: 42};
        a;
      `;
      expect(evaluateProgram(code)).toEqual({ x: 42 });
    });

    it("Can be assigned with a computed key and a method", () => {
      const env = StaticJsRealm();
      const code = `
        const key = "x";
        const a = {[key]() { return 42; }};
        a;
      `;
      const result = evaluateProgram(code, env) as { x: () => number };
      expect(result).toEqual({ x: expect.any(Function) });
      expect(result.x()).toBe(42);
    });

    it("Can be assigned with a spread", () => {
      const code = `
        const a = {fromA: 6, fromB: -1, fromC: -1};
        const b =  {fromB: 2, fromC: -2};
        const c = {fromA: -1, ...a, ...b, fromC: 4};
        c;
      `;
      expect(evaluateProgram(code)).toEqual({
        fromA: 6,
        fromB: 2,
        fromC: 4,
      });
    });

    it("Can be assigned to other variables", () => {
      const code = `
        const a = {x: 42};
        const b = a;
        b;
      `;
      expect(evaluateProgram(code)).toEqual({ x: 42 });
    });

    it("Can be assigned with other objects", () => {
      const code = `
        const a = {x: 42};
        const b = {value: a};
        b;
      `;
      expect(evaluateProgram(code)).toEqual({ value: { x: 42 } });
    });

    it("Can be shorthand assigned", () => {
      const code = `
        const x = 42;
        const a = {x};
        a;
      `;
      expect(evaluateProgram(code)).toEqual({ x: 42 });
    });
  });

  describe("Arrays", function () {
    it("Can be assigned", () => {
      const code = `
        const a = [1, 2];
        a;
      `;
      expect(evaluateProgram(code)).toEqual([1, 2]);
    });

    it("Can be assigned to other variables", () => {
      const code = `
        const a = [1, 2];
        const b = a;
        b;
      `;
      expect(evaluateProgram(code)).toEqual([1, 2]);
    });

    it("Can be spread", () => {
      const code = `
        const a = [2, 3];
        const b = [4, 5];
        const c = [1, ...a, ...b, 6];
        c;
      `;
      expect(evaluateProgram(code)).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
