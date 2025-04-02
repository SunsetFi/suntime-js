import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../src/index.js";

describe("E2E: Constructors", () => {
  it("calls a function with new and sets properties on `this`", () => {
    const result = evaluateProgram(`
      function Box(x) {
        this.value = x;
      }
      const obj = new Box(42);
      obj.value;
    `);
    expect(result).toBe(42);
  });

  it("uses prototype for newly constructed object", () => {
    const result = evaluateProgram(`
      function Thing() {}
      Thing.prototype.say = () => "hi";
      const obj = new Thing();
      obj.say();
    `);
    expect(result).toBe("hi");
  });

  it("returns explicit object from constructor", () => {
    const result = evaluateProgram(`
      function Factory() {
        return { name: "override" };
      }
      const obj = new Factory();
      obj.name;
    `);
    expect(result).toBe("override");
  });

  it("ignores primitive return from constructor", () => {
    const result = evaluateProgram(`
      function NoEscape() {
        this.name = "kept";
        return 123;
      }
      const obj = new NoEscape();
      obj.name;
    `);
    expect(result).toBe("kept");
  });

  it("correctly links prototype chain", () => {
    const result = evaluateProgram(`
      function Animal() {}
      const a = new Animal();
      Object.getPrototypeOf(a) === Animal.prototype;
    `);
    expect(result).toBe(true);
  });

  it("throws if trying to use `new` with arrow function", () => {
    const result = evaluateProgram(`
      try {
        const f = () => {};
        new f();
      } catch (e) {
        e instanceof TypeError;
      }
    `);
    expect(result).toBe(true);
  });

  it("uses constructor property on prototype", () => {
    const result = evaluateProgram(`
      function A() {}
      const a = new A();
      a.constructor === A;
    `);
    expect(result).toBe(true);
  });

  it("class constructor requires new", () => {
    const result = evaluateProgram(`
      class Foo {
        constructor() {
          this.ok = true;
        }
      }

      try {
        Foo();
      } catch (e) {
        e instanceof TypeError;
      }
    `);
    expect(result).toBe(true);
  });

  it("class with new sets this properly", () => {
    const result = evaluateProgram(`
      class Box {
        constructor(x) {
          this.value = x;
        }
      }
      const b = new Box(100);
      b.value;
    `);
    expect(result).toBe(100);
  });

  it("class constructor ignores return of primitive", () => {
    const result = evaluateProgram(`
      class Example {
        constructor() {
          this.name = "kept";
          return 123;
        }
      }
      const e = new Example();
      e.name;
    `);
    expect(result).toBe("kept");
  });
});
