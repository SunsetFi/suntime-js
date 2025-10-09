import { describe, it, expect } from "vitest";
import { evaluateScript, StaticJsRealm } from "../../src/index.js";

describe("E2E: Symbols", () => {
  it("Supports Symbol()", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        sym.toString();
      `;
    const result = await evaluateScript(code);
    expect(result).toBe("Symbol(mySymbol)");
  });

  it("Uses strict equality", async () => {
    const code = `
        const sym1 = Symbol("mySymbol");
        const sym2 = Symbol("mySymbol");
        sym1 === sym2;
      `;
    const result = await evaluateScript(code);
    expect(result).toBe(false);
  });

  it("Supports symbol property keys", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        const obj = {};
        obj[sym] = 42;
        obj[sym];
      `;
    const result = await evaluateScript(code);
    expect(result).toBe(42);
  });

  it("Does not enumerate symbol keys", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        const obj = {};
        obj[sym] = 42;
        Object.keys(obj);
      `;
    const result = await evaluateScript(code);
    expect(result).toEqual([]);
  });

  it("Supports Symbol.for", async () => {
    const code = `
        const sym1 = Symbol.for("sharedSymbol");
        const sym2 = Symbol.for("sharedSymbol");
        const key = Symbol.keyFor(sym1);
        sym1 === sym2;
      `;
    const result = await evaluateScript(code);
    expect(result).toBe(true);
  });

  it("Supports Symbol.keyFor", async () => {
    const code = `
        const sym = Symbol.for("sharedSymbol");
        Symbol.keyFor(sym);
      `;
    const result = await evaluateScript(code);
    expect(result).toBe("sharedSymbol");
  });

  describe("Native proxies", () => {
    it("Should preserve the reference across native / runtime boundaries", async () => {
      const realm = StaticJsRealm();
      const objVm = await realm.evaluateScript(`
        const obj = Symbol("mySymbol");
        globalThis.__nativeObj = obj;
        obj;
      `);

      const objNative = objVm.toJsSync();

      const comparerFn = await realm.evaluateScript(`
        function checkSame(obj) {
          return obj === globalThis.__nativeObj;
        }`);

      const comparer = comparerFn.toJsSync() as (obj: unknown) => boolean;
      const result = comparer(objNative);
      expect(result).toBe(true);
    });
  });

  describe("Native symbol casting", () => {
    it("Should convert a native symbol to a vm symbol", async () => {
      const realm = StaticJsRealm();
      const result = await realm.evaluateScript(`
        function isSymbol(obj) {
          return typeof obj === "symbol";
        }
      `);

      const isSymbol = result.toJsSync() as (obj: unknown) => boolean;

      const sym = Symbol("mySymbol");
      const result1 = isSymbol(sym);
      expect(result1).toBe(true);
    });

    it("Should preserve the references of native symbols", async () => {
      const realm = StaticJsRealm();
      const comparerFn = await realm.evaluateScript(`
        function checkSame(obj1, obj2) {
          return obj1 === obj2;
        }`);

      const comparer = comparerFn.toJsSync() as (
        obj1: unknown,
        obj2: unknown,
      ) => boolean;

      const sym1 = Symbol("mySymbol");
      const sym2 = sym1;
      const result = comparer(sym1, sym2);
      expect(result).toBe(true);
    });

    it("Should preserve the references of registry symbols", async () => {
      const realm = StaticJsRealm();
      const comparerFn = await realm.evaluateScript(`
        function checkSame(obj1, obj2) {
          return obj1 === obj2;
        }`);

      const comparer = comparerFn.toJsSync() as (
        obj1: unknown,
        obj2: unknown,
      ) => boolean;

      const sym1 = Symbol.for(
        "@suntime-js/test/preserve-reference-registry-symbol",
      );
      const sym2 = sym1;
      const result = comparer(sym1, sym2);
      expect(result).toBe(true);
    });

    it("Should preserve the native symbol through a round trip", async () => {
      const realm = StaticJsRealm();
      const comparerFn = await realm.evaluateScript(`
        function returnObj(obj1) {
          return obj1;
        }`);

      const returnObj = comparerFn.toJsSync() as (obj1: unknown) => unknown;

      const sym1 = Symbol("mySymbol");
      const obj2 = returnObj(sym1);
      expect(obj2).toBe(sym1);
    });

    it("Preserves native symbols in the sandbox", async () => {
      const realm = StaticJsRealm();
      const comparerFn = await realm.evaluateScript(`
        function checkIsIterator(x) {
          return x === Symbol.iterator;
        }`);

      const checkIsIterator = comparerFn.toJsSync() as (x: unknown) => boolean;

      const result = checkIsIterator(Symbol.iterator);
      expect(result).toBe(true);
    });

    it("Preserves native symbols returned from the sandbox", async () => {
      const realm = StaticJsRealm();
      const iterator = await realm.evaluateExpression(`Symbol.iterator`);
      const iteratorNative = iterator.toJsSync();
      expect(iteratorNative).toBe(Symbol.iterator);
    });
  });
});
