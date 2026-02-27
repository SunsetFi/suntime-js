import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: For In loops", () => {
  it("Can loop with a for-in loop", async () => {
    const code = `
        let keys = [];
        const obj = { a: 1, b: 2, c: 3 };
        for (const key in obj) {
          keys.push(key);
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a", "b", "c"]);
  });

  it("Can break out of a for-in loop", async () => {
    const code = `
        let keys = [];
        const obj = { a: 1, b: 2, c: 3 };
        for (const key in obj) {
          keys.push(key);
          if (key === 'b') {
            break;
          }
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a", "b"]);
  });

  it("Breaks out of the closest for-in loop", async () => {
    const code = `
        let keys = [];
        const obj1 = { a: 1, b: 2 };
        const obj2 = { x: 10, y: 20 };
        for (const key1 in obj1) {
          for (const key2 in obj2) {
            keys.push(key1 + ":" + key2);
            if (key2 === 'x') {
              break;
            }
          }
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a:x", "b:x"]);
  });

  it("Can break out of a labeled for-in loop", async () => {
    const code = `
        let keys = [];
        const obj1 = { a: 1, b: 2 };
        const obj2 = { x: 10, y: 20 };
        outer: for (const key1 in obj1) {
          for (const key2 in obj2) {
            keys.push(key1 + ":" + key2);
            if (key2 === 'x') {
              break outer;
            }
          }
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a:x"]);
  });

  it("Can continue to the next iteration of a for-in loop", async () => {
    const code = `
        let keys = [];
        const obj = { a: 1, b: 2, c: 3, d: 4 };
        for (const key in obj) {
          if (key === 'b' || key === 'c') {
            continue;
          }
          keys.push(key);
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a", "d"]);
  });

  it("Does not enumerate non-enumerable properties", async () => {
    const code = `
        let keys = [];
        const obj = {};
        Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
        Object.defineProperty(obj, 'b', { value: 2, enumerable: false });
        Object.defineProperty(obj, 'c', { value: 3, enumerable: true });
        for (const key in obj) {
          keys.push(key);
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a", "c"]);
  });

  it("Does not enumerate symbols", async () => {
    const code = `
        let keys = [];
        const sym1 = Symbol('sym1');
        const sym2 = Symbol('sym2');
        const obj = { a: 1, b: 2 };
        obj[sym1] = 3;
        obj[sym2] = 4;
        for (const key in obj) {
          keys.push(key);
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["a", "b"]);
  });

  it("Enumerates properties from the prototype chain", async () => {
    const code = `
        let keys = [];
        const parent = { inherited: 42 };
        const obj = Object.create(parent);
        obj.own = 7;
        for (const key in obj) {
          keys.push(key);
        }
        keys;
      `;
    expect(await evaluateScript(code)).toEqual(["own", "inherited"]);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        const obj = {
          a: 1,
          b: 2,
          c: 3
        };
        for (const key in obj) {
          throw "Test error";
        }
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Test error");
  });

  it("Passes the last value as the result", async () => {
    const code = `
        let lastKey = '';
        const obj = { a: 1, b: 2, c: 3 };
        for (const key in obj) {
          key;
        }
      `;
    expect(await evaluateScript(code)).toBe("c");
  });

  describe("Completions", () => {
    it("Completes to undefined on abrupt completion", async () => {
      const code = `
        eval("1; for (var a in { x: 0 }) { break; }");
      `;
      expect(await evaluateScript(code)).toBeUndefined();
    });

    it("Completes to the last value on abrupt completion", async () => {
      const code = `
        eval("2; for (var b in { x: 0 }) { 3; break; }");
      `;
      expect(await evaluateScript(code)).toBe(3);
    });
  });
});
