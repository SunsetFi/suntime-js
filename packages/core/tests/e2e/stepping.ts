import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../src/index.js";

describe("E2E: Stepping", () => {
  it("Steps through opts individually", async () => {
    let iterations = 0;

    const realm = StaticJsRealm({
      runTask(task) {
        while (true) {
          iterations++;
          const { done } = task.next();
          if (done) {
            break;
          }
        }
      },
    });

    const code = `
      for(let i = 0; i < 10; i++) {};
    `;

    await realm.evaluateScript(code);

    // Ensure that we are stepping through individual operations and not consuming
    // everything on one next() call.
    expect(iterations).toBeGreaterThan(10);
    expect(
      `Took ${iterations} iterations to run the script.`,
    ).toMatchSnapshot();
  });

  it("Records the line and column of each step", async () => {
    const steps: string[] = [];
    const realm = StaticJsRealm({
      runTask(task) {
        while (true) {
          // The function doesn't start until the first next() call, so we are at -1/-1 right now.
          const { done } = task.next();
          if (done) {
            break;
          }

          // Now that we ran, we should be paused at an operation.
          const op = task.operation!;
          steps.push(
            `Line: ${op.location.start.line}, Column: ${op.location.start.column}`,
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
