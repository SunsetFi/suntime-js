import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Constructors", () => {
  it("calls a function with new and sets properties on `this`", async () => {
    const result = await evaluateScript(`
      function Box(x) {
        this.value = x;
      }
      const obj = new Box(42);
      obj.value;
    `);
    expect(result).toBe(42);
  });

  it("uses prototype for newly constructed object", async () => {
    const result = await evaluateScript(`
      function Thing() {}
      Thing.prototype.say = () => "hi";
      const obj = new Thing();
      obj.say();
    `);
    expect(result).toBe("hi");
  });

  it("returns explicit object from constructor", async () => {
    const result = await evaluateScript(`
      function Factory() {
        return { name: "override" };
      }
      const obj = new Factory();
      obj.name;
    `);
    expect(result).toBe("override");
  });

  it("ignores primitive return from constructor", async () => {
    const result = await evaluateScript(`
      function NoEscape() {
        this.name = "kept";
        return 123;
      }
      const obj = new NoEscape();
      obj.name;
    `);
    expect(result).toBe("kept");
  });

  it("correctly links prototype chain", async () => {
    const result = await evaluateScript(`
      function Animal() {}
      const a = new Animal();
      Object.getPrototypeOf(a) === Animal.prototype;
    `);
    expect(result).toBe(true);
  });

  it("throws if trying to use `new` with arrow function", async () => {
    const code = `
      const f = () => {};
      new f();
    `;
    await expect(evaluateScript(code)).rejects.toThrow("is not a constructor");
  });

  it("uses constructor property on prototype", async () => {
    const result = await evaluateScript(`
      function A() {}
      const a = new A();
      a.constructor === A;
    `);
    expect(result).toBe(true);
  });
});
