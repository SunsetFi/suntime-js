import { describe, it, expect, vitest } from "vitest";

import { StaticJsRealm, type StaticJsTask } from "../../src/index.js";

describe("E2E: Tasks", () => {
  it("Handles evaluation without a runTask option", async () => {
    const realm = StaticJsRealm({});

    const result = await realm.evaluateExpression("2 + 2");
    expect(result.toJsSync()).toBe(4);
  });

  it("Handles evaluation with a runTask option", async () => {
    const runTask = vitest.fn((task: StaticJsTask) => {
      let result: ReturnType<typeof task.next>;
      do {
        result = task.next();
      } while (!result.done);
    });

    const realm = StaticJsRealm({
      runTask,
    });

    const promise = realm.evaluateExpression("2 + 2");

    expect(runTask).toBeCalledTimes(1);

    const result = await promise;
    expect(result.toJsSync()).toBe(4);
  });

  it("Handles createScriptTask", async () => {
    const runTask = vitest.fn((task: StaticJsTask) => {
      let result: ReturnType<typeof task.next>;
      do {
        result = task.next();
      } while (!result.done);
    });

    const realm = StaticJsRealm({
      runTask,
    });

    const task = await realm.createScriptTask("2 + 2");
    expect(runTask).toBeCalledTimes(0);

    let result: ReturnType<typeof task.next>;
    do {
      result = task.next();
    } while (!result.done);

    expect(result.value.toJsSync()).toBe(4);
  });

  it("Handles sequential createScriptTask calls", async () => {
    const runTask = vitest.fn((task: StaticJsTask) => {
      let result: ReturnType<typeof task.next>;
      do {
        result = task.next();
      } while (!result.done);
    });

    const realm = StaticJsRealm({
      runTask,
    });

    let task1Resolved = false;
    const task1Promise = realm.createScriptTask("2 + 2").then((task) => {
      task1Resolved = true;
      return task;
    });

    let task2Resolved = false;
    const task2Promise = realm.createScriptTask("3 + 3").then((task) => {
      task2Resolved = true;
      return task;
    });

    await delay(0);

    expect(runTask).toBeCalledTimes(0);
    expect(task1Resolved).toBe(true);
    expect(task2Resolved).toBe(false);

    const task1 = await task1Promise;
    let result1: ReturnType<typeof task1.next>;
    do {
      result1 = task1.next();
    } while (!result1.done);

    expect(result1.value.toJsSync()).toBe(4);

    await delay(0);

    expect(task2Resolved).toBe(true);
    expect(runTask).toBeCalledTimes(0);

    const task2 = await task2Promise;
    let result2: ReturnType<typeof task2.next>;
    do {
      result2 = task2.next();
    } while (!result2.done);

    expect(result2.value.toJsSync()).toBe(6);
  });
});

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
