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

  it("Records the line and column of each step", async () => {
    const steps: string[] = [];
    const realm = StaticJsRealm({
      runTask(task) {
        while (!task.done) {
          // The function doesn't start until the first next() call, so we are at -1/-1 right now.
          task.next();
          // Now that we ran, we should be paused at an operation.
          steps.push(
            `Line: ${task.location?.start.line}, Column: ${task.location?.start.column}`,
          );
        }
      },
    });

    const code = `
      for(let i = 0; i < 10; i++) {};
    `;

    await realm.evaluateScript(code);

    expect(steps).toMatchSnapshot();
  });
});
