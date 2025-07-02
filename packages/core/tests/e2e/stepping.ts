import { describe, it, expect, vitest } from "vitest";

import { StaticJsRealm } from "../../src/index.js";

describe("E2E: Stepping", () => {
  it("Steps through opts individually", async () => {
    let iterations = 0;

    let captured = -1;
    const cb = vitest.fn(() => {
      captured = iterations;
    });
    const realm = StaticJsRealm({
      globalObject: {
        properties: {
          callback: {
            enumerable: true,
            value: cb,
          },
        },
      },
      runTask(task) {
        while (!task.done) {
          iterations++;
          task.next();
        }
      },
    });

    const code = `
      for(let i = 0; i < 10; i++) {};
      callback();
    `;

    await realm.evaluateScript(code);

    // Ensure that we are stepping through individual operations and not consuming
    // everything on one next() call.
    expect(captured).toBeGreaterThan(10);
    expect(`Took ${captured} iterations to run the script.`).toMatchSnapshot();
  });
});
