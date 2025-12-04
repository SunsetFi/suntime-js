import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Thrown Error Handling", () => {
  it("Should throw the value", async () => {
    const code = `
      throw {message: "Test Error"};
    `;
    await expect(evaluateScript(code)).rejects.toThrow("Test Error");
  });

  it("Should support lexical enviroments", async () => {
    const code = `
    try {
      let test = 1;
      test;
    }
    catch (e) {}
    `;
    const result = await evaluateScript(code);
    expect(result).toBe(1);
  });

  it("Should support var", async () => {
    const code = `
    try {
      var test = 1;
      test;
    }
    catch (e) {}
    `;
    const result = await evaluateScript(code);
    expect(result).toBe(1);
  });

  describe("Try / Catch / Finally", () => {
    it("Should catch an error", async () => {
      const code = `
        function test() {
          try {
            throw 1;
          } catch (e) {
            return e;
          }
        }
        test();
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Should give precedence to finally over catch", async () => {
      const code = `
        function test() {
          try {
            throw 1;
          } catch (e) {
            return "c";
          } finally {
            return "f";
          }
        }
        test();
      `;
      expect(await evaluateScript(code)).toBe("f");
    });
  });

  it("stuff", async () => {
    const code = `
      const r = eval("for (var i = 0; i < 2; ++i) { if (i) { try { throw null; } catch (e) { continue; } } 'bad completion'; }")
      if (r !== undefined) { throw new Error('bad completion'); }
    `;
    await evaluateScript(code);
  });
});
