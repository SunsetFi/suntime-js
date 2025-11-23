import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";
import StaticJsRealm from "../../src/runtime/realm/factories/StaticJsRealm.js";

describe("E2E: Object", () => {
  describe("Host/Sandbox proxies", () => {
    it("Should preserve a sandboxed object reference across the host/sandbox boundary", async () => {
      const realm = StaticJsRealm();
      const objVm = await realm.evaluateScript(`
        const obj = {};
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

    it("Should preserve a host object reference across the host/sandbox boundary", async () => {
      const realm = StaticJsRealm();
      const objNative = {};

      const compare = await realm.evaluateScript(`
        function compare(obj1, obj2) {
          return obj1 === obj2;
        }
    `);
      const compareFn = compare.toJsSync() as (
        obj1: unknown,
        obj2: unknown,
      ) => boolean;
      const result = compareFn(objNative, objNative);
      expect(result).toBe(true);
    });
  });

  describe("Properties", () => {
    describe("Getting", () => {
      it("Can get properties", async () => {
        const code = `
            const obj = { a: 1, b: 2 };
            obj.a;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });

      it("Calls the get accessor", async () => {
        const code = `
            let called = false;
            const obj = {
              get a() { called = true; },
            };
            obj.a;
            called;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Can get a property from an accessor", async () => {
        const code = `
            const obj = {
              get a() { return 1; },
            };
            obj.a;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });

      it("Can get non-enumerated properties", async () => {
        const code = `
            const obj = {};
            Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
            obj.a;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });

      it("Can get properties from the prototype", async () => {
        const code = `
            const proto = { a: 1 };
            const obj = Object.create(proto);
            obj.a;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });

      it("Can get accessor properties from the prototype", async () => {
        const code = `
            const proto = {
              get a() { return 1; },
            };
            const obj = Object.create(proto);
            obj.a;
          `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });
    });

    describe("Setting", () => {
      it("Can set properties", async () => {
        const code = `
          const obj = {};
          obj.a = 1;
          obj.b = 2;
          obj;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          a: 1,
          b: 2,
        });
      });

      it("Calls set accessors", async () => {
        const code = `
          let called = false;
          const obj = {
            set a(value) { called = true; },
          };
          obj.a = 1;
          called;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Can set accessor properties", async () => {
        const code = `
          let setValue;
          const obj = {
            set a(value) { setValue = value; },
          };
          obj.a = 1;
          setValue;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });

      it("Creates new data properties over the prototype", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          obj.a = 2;
          [obj.a, proto.a];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 1]);
      });

      it("Calls accesssor properties on the prototype", async () => {
        const code = `
          let setValue;
          const proto = {
            set a(value) { setValue = value; },
          };
          const obj = Object.create(proto);
          obj.a = 1;
          setValue;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(1);
      });
    });

    describe("Enumeration", () => {
      it("Can enumerate own properties", async () => {
        const code = `
          const obj = { a: 1, b: 2 };
          Object.keys(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(["a", "b"]);
      });

      it("Can enumerate own properties with for..in", async () => {
        const code = `
          const obj = { a: 1, b: 2 };
          let keys = [];
          for (let key in obj) {
            keys.push(key);
          }
          keys;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(["a", "b"]);
      });

      it("Can enumerate prototype properties with for..in", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          obj.b = 2;
          let keys = [];
          for (let key in obj) {
            keys.push(key);
          }
          keys;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(["b", "a"]);
      });
    });
  });

  describe("Host Proxy", () => {
    it("Should provide object keys through the proxy", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const obj = {
          a: 1,
          b: 2,
          c: 3,
        };
        obj;
      `);
      const objNative = result.toJsSync() as Record<string, number>;

      const keys = Object.keys(objNative);
      expect(keys).toEqual(["a", "b", "c"]);
    });

    it("Should get properties through the proxy", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const obj = {
          a: 1,
          b: 2,
          c: 3,
        };
        obj;
      `);
      const objNative = result.toJsSync() as Record<string, number>;

      expect(objNative.a).toBe(1);
      expect(objNative.b).toBe(2);
      expect(objNative.c).toBe(3);
    });

    it("Should set properties through the proxy", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const obj = {};
        globalThis.__nativeObj = obj;
        obj;
      `);
      const objNative = result.toJsSync() as Record<string, number>;

      objNative.a = 42;
      const aValue = await realm.evaluateScript(`
        globalThis.__nativeObj.a;
      `);
      expect(aValue.toJsSync()).toBe(42);
    });

    it("Should get symbols through the proxy", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const sym = Symbol('mySymbol');
        const obj = {};
        obj[sym] = 42;
        [sym, obj];
      `);
      const [sym, objVm] = result.toJsSync() as [
        symbol,
        Record<symbol, number>,
      ];

      expect(objVm[sym]).toBe(42);
    });

    it("Should set symbols through the proxy", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const sym = Symbol.for('mySymbol');
        const obj = {};
        globalThis.__nativeObj = obj;
        [sym, obj];
      `);
      const [sym, objVm] = result.toJsSync() as [
        symbol,
        Record<symbol, number>,
      ];

      objVm[sym] = 99;

      const symbolValue = await realm.evaluateScript(`
        const sym = Symbol.for('mySymbol');
        const obj = globalThis.__nativeObj;
        obj[sym];
      `);
      expect(symbolValue.toJsSync()).toBe(99);
    });

    it("Should preserve well-known symbols between realms", async () => {
      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(`
        const obj = {
          [Symbol.iterator]: 42
        };
        obj;
      `);
      const obj = result.toJsSync() as Record<string | symbol, unknown>;
      expect(obj[Symbol.iterator]).toBe(42);
    });
  });

  describe("Statics", () => {
    describe("Object.assign", () => {
      it("Should assign properties from source to target", async () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2, c: 3 };
          Object.assign(target, source);
          target;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          a: 1,
          b: 2,
          c: 3,
        });
      });

      it("Returns the target", async () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2, c: 3 };
          const result = Object.assign(target, source);
          result === target;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Does not assign enumerable properties from an input's prototype", async () => {
        const code = `
          const target = { a: 1 };
          const source = Object.create({ b: 2 });
          Object.assign(target, source);
          target;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          a: 1,
        });
      });

      it("Does not assign non-enumerable properties", async () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2 };
          Object.defineProperty(source, 'b', { enumerable: false });
          Object.assign(target, source);
          target;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          a: 1,
        });
      });
    });

    describe("Object.create", () => {
      it("Should create an object with the specified prototype", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          obj;
        `;
        const result = await evaluateScript(code);
        expect(Object.getPrototypeOf(result)).toEqual({ a: 1 });
      });

      it("Should create an object with null prototype", async () => {
        const code = `
          const obj = Object.create(null);
          obj;
        `;
        const result = await evaluateScript(code);
        expect(Object.getPrototypeOf(result)).toBeNull();
      });

      it("Should throw when prototype is not an object or null", async () => {
        const code = `
          Object.create(42);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Object prototype may only be an Object or null",
        );
      });
    });

    describe("Object.defineProperties", () => {
      it("Should define multiple properties on an object", async () => {
        const code = `
          const obj = {};
          Object.defineProperties(obj, {
            a: { value: 1, writable: true },
            b: { value: 2, enumerable: true },
          });
          obj;
        `;
        const result = (await evaluateScript(code)) as { a: number; b: number };

        expect(Object.getOwnPropertyDescriptor(result, "a")).toEqual({
          configurable: false,
          enumerable: false,
          writable: true,
          value: 1,
        });
        expect(result.a).toBe(1);

        expect(Object.getOwnPropertyDescriptor(result, "b")).toEqual({
          configurable: false,
          enumerable: true,
          writable: false,
          value: 2,
        });
        expect(result.b).toBe(2);
      });

      it("Should use defaults: non-writable, non-enumerable, non-configurable", async () => {
        const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", { value: 42 });
          Object.getOwnPropertyDescriptor(obj, "x");
        `);
        expect(result).toEqual({
          value: 42,
          writable: false,
          enumerable: false,
          configurable: false,
        });
      });

      it("Cannot re-define a non-configurable property", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            configurable: false,
          });
          Object.defineProperty(obj, "x", {
            value: 2,
          });
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          /Cannot redefine property/,
        );
      });

      it("Can redefine a configurable property", async () => {
        const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            configurable: true,
          });
          Object.defineProperty(obj, "x", {
            value: 2,
          });
          obj.x;
        `);
        expect(result).toBe(2);
      });

      it("Cannot redefine a non-writable, non-configurable property", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            writable: false,
            configurable: false,
          });
          Object.defineProperty(obj, "x", {
            writable: true,
          });
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          /Cannot redefine property/,
        );
      });

      it("Cannot add property to non-extensible object", async () => {
        const code = `
          const obj = {};
          Object.preventExtensions(obj);
          Object.defineProperty(obj, "x", { value: 1 });
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Object is not extensible",
        );
      });

      it("Can modify existing configurable property on non-extensible object", async () => {
        const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            configurable: true,
          });
          Object.preventExtensions(obj);
          Object.defineProperty(obj, "x", {
            value: 2,
          });
          obj.x;
        `);
        expect(result).toBe(2);
      });

      it("Can define accessor properties", async () => {
        const result = await evaluateScript(`
          const obj = {};
          let backing = 0;
          Object.defineProperty(obj, "x", {
            get: () => backing,
            set: (v) => backing = v,
            enumerable: true,
          });
          obj.x = 42;
          obj.x;
        `);
        expect(result).toBe(42);
      });

      it("Defines accessors with defaults", async () => {
        const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            get: () => 5
          });
          Object.getOwnPropertyDescriptor(obj, "x");
        `);
        expect(result).toEqual({
          get: expect.any(Function),
          set: undefined,
          enumerable: false,
          configurable: false,
        });
      });

      it("Throws when mixing data and accessor descriptors", async () => {
        const code = `
          const obj = {};
            Object.defineProperty(obj, "x", {
              value: 1,
              get() { return 2; }
            });
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Invalid property descriptor.  Cannot both specify accessors and a value or writable",
        );
      });
    });

    describe("Object.defineProperty", () => {
      describe("Value properties", () => {
        it("Should define a single value property on an object", async () => {
          const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, writable: true, enumerable: true });
          obj;
        `;
          const result = await evaluateScript(code);
          expect(result).toEqual({
            a: 1,
          });
        });

        it("Applies defaults for value properties", async () => {
          const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", { value: 42 });
          Object.getOwnPropertyDescriptor(obj, "x");
        `);
          expect(result).toEqual({
            value: 42,
            writable: false,
            enumerable: false,
            configurable: false,
          });
        });
      });

      describe("Accessor properties", () => {
        it("Should define a single accessor property on an object", async () => {
          const code = `
          const obj = {};
          let backing = 0;
          Object.defineProperty(obj, 'a', {
            get: () => backing,
            set: (v) => backing = v,
            enumerable: true,
          });
          obj.a = 42;
          obj.a;
        `;
          const result = await evaluateScript(code);
          expect(result).toBe(42);
        });

        it("Can define accessor properties with only a getter", async () => {
          const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', {
            get: () => 5,
          });
          obj.a;
        `;
          const result = await evaluateScript(code);
          expect(result).toBe(5);
        });

        it("Applies defaults for accessor properties", async () => {
          const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            get: () => 5
          });
          Object.getOwnPropertyDescriptor(obj, "x");
        `);
          expect(result).toEqual({
            get: expect.any(Function),
            set: undefined,
            enumerable: false,
            configurable: false,
          });
        });
      });

      describe("Strictness", () => {
        it("Cannot re-define a non-configurable property", async () => {
          const code = `
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            configurable: false,
          });
          Object.defineProperty(obj, "x", {
            value: 2,
          });
        `;
          await expect(evaluateScript(code)).rejects.toThrow(
            /Cannot redefine property/,
          );
        });

        it("Can redefine a configurable property", async () => {
          const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            configurable: true,
          });
          Object.defineProperty(obj, "x", {
            value: 2,
          });
          obj.x;
        `);
          expect(result).toBe(2);
        });

        it("Can restrict a property's writability", async () => {
          const result = await evaluateScript(`
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            writable: true,
          });
          Object.defineProperty(obj, "x", {
            writable: false,
          });
          obj.x;
        `);
          expect(result).toBe(1);
        });

        it("Cannot make a non-writable property writable", async () => {
          const code = `
          const obj = {};
          Object.defineProperty(obj, "x", {
            value: 1,
            writable: false,
          });
          Object.defineProperty(obj, "x", {
            writable: true,
          });
        `;
          await expect(evaluateScript(code)).rejects.toThrow(
            /Cannot redefine property/,
          );
        });
      });
    });

    describe("Object.entries", () => {
      it("Should return an array of [key, value] pairs for own enumerable properties", async () => {
        const code = `
          const obj = { a: 1, b: 2 };
          Object.entries(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          ["a", 1],
          ["b", 2],
        ]);
      });

      it("Should not include non-enumerable properties", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
          Object.defineProperty(obj, 'b', { value: 2, enumerable: true });
          Object.entries(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([["b", 2]]);
      });

      it("Should not include prototype properties", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          obj.b = 2;
          Object.entries(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([["b", 2]]);
      });
    });

    describe("Object.freeze", () => {
      it("Should make an object non-extensible", async () => {
        const code = `
          const obj = { a: 1 };
          Object.freeze(obj);
          Object.isExtensible(obj);
        `;
        const isExtensible = await evaluateScript(code);
        expect(isExtensible).toBe(false);

        const propDesc = await evaluateScript(`
          const obj = { a: 1 };
          Object.freeze(obj);
          Object.getOwnPropertyDescriptor(obj, 'a');
        `);
        expect(propDesc).toEqual({
          value: 1,
          writable: false,
          enumerable: true,
          configurable: false,
        });
      });

      it("Should make all data-properties non-writable", async () => {
        const code = `
          const obj = { };
          Object.defineProperty(obj, 'a', { value: 1, writable: true, enumerable: true });
          let backing = 2;
          Object.defineProperty(obj, 'b', { get: () => backing, set: (v) => backing = v, enumerable: true });
          Object.freeze(obj);
          obj.a = 3;
          obj.b = 4;
          [obj.a, obj.b];
        `;

        const result = await evaluateScript(code);
        return expect(result).toEqual([1, 4]);
      });

      it("Should make all properties non-configurable", async () => {
        const code = `
          const obj = { };
          Object.defineProperty(obj, 'a', { value: 1, writable: true, enumerable: true });
          Object.defineProperty(obj, 'b', { get: () => backing, set: (v) => backing = v, enumerable: true });
          Object.freeze(obj);
          [Object.getOwnPropertyDescriptor(obj, 'a'), Object.getOwnPropertyDescriptor(obj, 'b')];
        `;

        const result = await evaluateScript(code);
        expect(result).toEqual([
          {
            value: 1,
            writable: false,
            enumerable: true,
            configurable: false,
          },
          {
            get: expect.any(Function),
            set: expect.any(Function),
            enumerable: true,
            configurable: false,
          },
        ]);
      });
    });

    describe("Object.getOwnPropertyDescriptor", () => {
      it("Should return the property descriptor for an existing property", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, writable: true, enumerable: true });
          Object.getOwnPropertyDescriptor(obj, 'a');
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          value: 1,
          writable: true,
          enumerable: true,
          configurable: false,
        });
      });

      it("Should return undefined for a non-existing property", async () => {
        const code = `
          const obj = {};
          Object.getOwnPropertyDescriptor(obj, 'a');
        `;
        const result = await evaluateScript(code);
        expect(result).toBeUndefined();
      });
    });

    describe("Object.getOwnPropertyDescriptors", () => {
      it("Should return all property descriptors for an object", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, writable: true, enumerable: true });
          Object.defineProperty(obj, 'b', { get: () => 2, enumerable: false });
          Object.getOwnPropertyDescriptors(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({
          a: {
            value: 1,
            writable: true,
            enumerable: true,
            configurable: false,
          },
          b: {
            get: expect.any(Function),
            set: undefined,
            enumerable: false,
            configurable: false,
          },
        });
      });

      it("Should return Symbol-keyed property descriptors", async () => {
        const code = `
          const sym = Symbol('mySymbol');
          const obj = {};
          Object.defineProperty(obj, sym, { value: 42, enumerable: true });
          [sym, Object.getOwnPropertyDescriptors(obj)];
        `;
        const result = (await evaluateScript(code)) as [symbol, object];
        const [sym, descriptors] = result;
        expect(descriptors).toEqual({
          [sym]: {
            value: 42,
            writable: false,
            enumerable: true,
            configurable: false,
          },
        });
      });
    });

    describe("Object.getOwnPropertyNames", () => {
      it("Should return all own property names", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
          Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
          Object.getOwnPropertyNames(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(["a", "b"]);
      });

      it("Should not return Symbol-keyed properties", async () => {
        const code = `
          const sym = Symbol('mySymbol');
          const obj = {};
          Object.defineProperty(obj, sym, { value: 42, enumerable: true });
          Object.getOwnPropertyNames(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });
    });

    describe("Object.getOwnPropertySymbols", () => {
      it("Should return all own Symbol-keyed properties", async () => {
        const code = `
          const sym1 = Symbol('sym1');
          const sym2 = Symbol('sym2');
          const obj = {};
          Object.defineProperty(obj, sym1, { value: 1, enumerable: true });
          Object.defineProperty(obj, sym2, { value: 2, enumerable: false });
          Object.getOwnPropertySymbols(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(
          expect.arrayContaining([expect.any(Symbol), expect.any(Symbol)]),
        );
      });

      it("Should not return string-keyed properties", async () => {
        const code = `
          const obj = {};
          Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
          Object.getOwnPropertySymbols(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });
    });

    describe("Object.getPrototypeOf", () => {
      it("Should return the prototype of an object", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          Object.getPrototypeOf(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual({ a: 1 });
      });

      it("Should return null for an object with null prototype", async () => {
        const code = `
          const obj = Object.create(null);
          Object.getPrototypeOf(obj);
        `;
        const result = await evaluateScript(code);
        expect(result).toBeNull();
      });
    });

    describe("Object.hasOwn", () => {
      it("Should return true for own properties", async () => {
        const code = `
          const obj = { a: 1 };
          Object.hasOwn(obj, 'a');
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Should return false for inherited properties", async () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          Object.hasOwn(obj, 'a');
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(false);
      });

      it("Should return false for non-existing properties", async () => {
        const code = `
          const obj = { };
          Object.hasOwn(obj, 'a');
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(false);
      });
    });
  });
});
