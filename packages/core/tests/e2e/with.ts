import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: With", () => {
  it("should handle with statements correctly", async () => {
    const code = `
      var obj = { a: 1, b: 2 };
      with (obj) {
        a = 3;
        b = 4;
      }
      obj.a + obj.b;
    `;
    const result = await evaluateScript(code);
    expect(result).toBe(7); // 3 + 4
  });

  it("should not leak variables outside of with block", async () => {
    const code = `
      var obj = { a: 1, b: 2 };
      with (obj) {
        a = 3;
      }
      typeof a;
    `;
    const result = await evaluateScript(code);
    expect(result).toBe("undefined");
  });
});
