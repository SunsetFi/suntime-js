import { describe, it, expect } from "vitest";
import { evaluateString } from "../src/index.js";

describe("Prototype chain and object behavior", () => {
  it("inherits properties from prototype", () => {
    const result = evaluateString(`
      const proto = { x: 10 };
      const obj = Object.create(proto);
      obj.y = 20;
      obj.x + obj.y;
    `);
    expect(result).toBe(30);
  });

  it("sets own property instead of modifying prototype", () => {
    const result = evaluateString(`
      const proto = { x: 1 };
      const obj = Object.create(proto);
      obj.x = 5;
      proto.x + obj.x;
    `);
    expect(result).toBe(6); // proto.x is still 1, obj.x is 5
  });

  it("calls inherited setter instead of creating own property", () => {
    const result = evaluateString(`
      let called = false;
      const proto = { 
        set foo(v) { called = v === 42; } 
      };
      const obj = Object.create(proto);
      obj.foo = 42;
      called;
    `);
    expect(result).toBe(true);
  });

  it("does not overwrite inherited data properties", () => {
    const result = evaluateString(`
      const proto = { x: 100 };
      const obj = Object.create(proto);
      obj.hasOwnProperty("x");
    `);
    expect(result).toBe(false);
  });

  it("Object.keys only includes own enumerable properties", () => {
    const result = evaluateString(`
      const proto = { inherited: 1 };
      const obj = Object.create(proto);
      obj.own = 2;
      Object.keys(obj);
    `);
    expect(result).toEqual(["own"]);
  });

  it("delete only affects own properties", () => {
    const result = evaluateString(`
      const proto = { foo: 1 };
      const obj = Object.create(proto);
      obj.foo = 2;
      delete obj.foo;
      obj.foo; // falls back to prototype
    `);
    expect(result).toBe(1);
  });

  it("Object.freeze prevents prototype mutation", () => {
    const result = evaluateString(`
      const obj = {};
      Object.freeze(obj);
      try {
        Object.setPrototypeOf(obj, {});
        false;
      } catch (e) {
        true;
      }
    `);
    expect(result).toBe(true);
  });

  it("global constants are own properties on the global object", () => {
    const result = evaluateString(`
      Object.hasOwn(globalThis, "Infinity") &&
      Object.hasOwn(globalThis, "NaN") &&
      Object.hasOwn(globalThis, "undefined");
    `);
    expect(result).toBe(true);
  });

  it("function has prototype and inherits from Function.prototype", () => {
    const result = evaluateString(`
      function foo() {}
      Object.getPrototypeOf(foo) === Function.prototype;
    `);
    expect(result).toBe(true);
  });

  it("array inherits from Array.prototype", () => {
    const result = evaluateString(`
      const arr = [1, 2, 3];
      Object.getPrototypeOf(arr) === Array.prototype;
    `);
    expect(result).toBe(true);
  });
});
