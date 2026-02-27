import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe("E2E: Generator Functions", () => {
  it("Is not supported", async () => {
    const code = `function* gen() {
      yield 1;
    }`;

    await expect(evaluateScript(code)).rejects.toThrowError(
      expect.objectContaining({
        name: "StaticJsEngineError",
        message: expect.stringContaining("not supported"),
      }),
    );
  });
});
