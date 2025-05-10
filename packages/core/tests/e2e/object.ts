import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../../src/index.js";

describe("E2E: Object", () => {
  describe("Properties", () => {
    describe("Getting", () => {
      it("Can get properties", () => {
        const code = `
            const obj = { a: 1, b: 2 };
            obj.a;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });

      it("Calls the get accessor", () => {
        const code = `
            let called = false;
            const obj = {
              get a() { called = true; },
            };
            obj.a;
            called;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(true);
      });

      it("Can get a property from an accessor", () => {
        const code = `
            const obj = {
              get a() { return 1; },
            };
            obj.a;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });

      it("Can get non-enumerated properties", () => {
        const code = `
            const obj = {};
            Object.defineProperty(obj, 'a', { value: 1, enumerable: false });
            obj.a;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });

      it("Can get properties from the prototype", () => {
        const code = `
            const proto = { a: 1 };
            const obj = Object.create(proto);
            obj.a;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });

      it("Can get accessor properties from the prototype", () => {
        const code = `
            const proto = {
              get a() { return 1; },
            };
            const obj = Object.create(proto);
            obj.a;
          `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });
    });

    describe("Setting", () => {
      it("Can set properties", () => {
        const code = `
          const obj = {};
          obj.a = 1;
          obj.b = 2;
          obj;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual({
          a: 1,
          b: 2,
        });
      });

      it("Calls set accessors", () => {
        const code = `
          let called = false;
          const obj = {
            set a(value) { called = true; },
          };
          obj.a = 1;
          called;
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(true);
      });

      it("Can set accessor properties", () => {
        const code = `
          let setValue;
          const obj = {
            set a(value) { setValue = value; },
          };
          obj.a = 1;
          setValue;
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });

      it("Creates new data properties over the prototype", () => {
        const code = `
          const proto = { a: 1 };
          const obj = Object.create(proto);
          obj.a = 2;
          [obj.a, proto.a];
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 1]);
      });

      it("Calls accesssor properties on the prototype", () => {
        const code = `
          let setValue;
          const proto = {
            set a(value) { setValue = value; },
          };
          const obj = Object.create(proto);
          obj.a = 1;
          setValue;
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(1);
      });
    });

    describe("Enumeration", () => {
      it("Can enumerate own properties", () => {
        const code = `
          const obj = { a: 1, b: 2 };
          Object.keys(obj);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(["a", "b"]);
      });

      it("Can enumerate own properties with for..in", () => {
        const code = `
          const obj = { a: 1, b: 2 };
          let keys = [];
          for (let key in obj) {
            keys.push(key);
          }
          keys;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(["a", "b"]);
      });

      it("Can enumerate prototype properties with for..in", () => {
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
        const result = evaluateProgram(code);
        expect(result).toEqual(["b", "a"]);
      });
    });
  });

  describe("Statics", () => {
    describe("Object.assign", () => {
      it("Should assign properties from source to target", () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2, c: 3 };
          Object.assign(target, source);
          target;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual({
          a: 1,
          b: 2,
          c: 3,
        });
      });

      it("Returns the target", () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2, c: 3 };
          const result = Object.assign(target, source);
          result === target;
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(true);
      });

      it("Does not assign enumerable properties from an input's prototype", () => {
        const code = `
          const target = { a: 1 };
          const source = Object.create({ b: 2 });
          Object.assign(target, source);
          target;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual({
          a: 1,
        });
      });

      it("Does not assign non-enumerable properties", () => {
        const code = `
          const target = { a: 1 };
          const source = { b: 2 };
          Object.defineProperty(source, 'b', { enumerable: false });
          Object.assign(target, source);
          target;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual({
          a: 1,
        });
      });
    });

    describe("Object.defineProperties", () => {
      it("Should define multiple properties on an object", () => {
        const code = `
          const obj = {};
          Object.defineProperties(obj, {
            a: { value: 1, writable: true },
            b: { value: 2, enumerable: true },
          });
          obj;
        `;
        const result = evaluateProgram(code) as { a: number; b: number };

        expect(Object.getOwnPropertyDescriptor(result, "a")).toEqual({
          value: 1,
          writable: true,
        });
        expect(result.a).toBe(1);

        expect(Object.getOwnPropertyDescriptor(result, "b")).toEqual({
          enumerable: true,
        });
        expect(result.b).toBe(2);
      });

      it("Should use defaults: non-writable, non-enumerable, non-configurable", () => {
        const result = evaluateProgram(`
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

      it("Cannot re-define a non-configurable property", () => {
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
        expect(() => evaluateProgram(code)).toThrow(/Cannot redefine property/);
      });

      it("Can redefine a configurable property", () => {
        const result = evaluateProgram(`
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

      it("Cannot redefine a non-writable, non-configurable property", () => {
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
        expect(() => evaluateProgram(code)).toThrow(/Cannot redefine property/);
      });

      it("Cannot add property to non-extensible object", () => {
        const code = `
          const obj = {};
          Object.preventExtensions(obj);
          Object.defineProperty(obj, "x", { value: 1 });
        `;
        expect(() => evaluateProgram(code)).toThrow("Object is not extensible");
      });

      it("Can modify existing configurable property on non-extensible object", () => {
        const result = evaluateProgram(`
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

      it("Can define accessor properties", () => {
        const result = evaluateProgram(`
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

      it("Defines accessors with defaults", () => {
        const result = evaluateProgram(`
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

      it("Throws when mixing data and accessor descriptors", () => {
        const code = `
          const obj = {};
            Object.defineProperty(obj, "x", {
              value: 1,
              get() { return 2; }
            });
        `;
        expect(() => evaluateProgram(code)).toThrow(
          "Invalid property descriptor.  Cannot both specify accessors and a value or writable",
        );
      });
    });
  });
});
