import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe("E2E: Classes", () => {
  describe("Class Declarations", () => {
    it("Is not supported", async () => {
      const code = `
        class MyClass { }
      `;

      await expect(evaluateScript(code)).rejects.toThrowError(
        expect.objectContaining({
          name: "StaticJsEngineError",
          message: expect.stringContaining("not supported"),
        }),
      );
    });
  });
  describe("Class Expressions", () => {
    it("Is not supported", async () => {
      const code = `
        const MyClass = class { };
      `;

      await expect(evaluateScript(code)).rejects.toThrowError(
        expect.objectContaining({
          name: "StaticJsEngineError",
          message: expect.stringContaining("not supported"),
        }),
      );
    });
  });
});
