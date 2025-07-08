import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe("E2E: Intrinsics", () => {
  describe("Undefined", () => {
    it("Can be passively set", async () => {
      const code = `var undefined = 1`;
      await expect(evaluateScript(code)).resolves.toBeUndefined();
    });
    it("Does not change the value of the intrinsic", async () => {
      const code = `var undefined = 1; undefined;`;
      await expect(evaluateScript(code)).resolves.toBeUndefined();
    });
  });
});
