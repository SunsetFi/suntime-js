import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: For Of loops", () => {
  it("Can loop with a for-of loop", async () => {
    const code = `
      let values = [
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3),
      ];
      let sum = 0;
      for await (const x of values) {
        sum += x;
      }
      sum;
    `;

    const result = await evaluateScript(code, { topLevelAwait: true });
    expect(result).toBe(6);
  });
});
