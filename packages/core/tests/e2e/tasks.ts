import { describe, it, expect, vi } from "vitest";

import { StaticJsRealm } from "../../src/index.js";
import type { StaticJsTaskIterator } from "../../src/runtime/tasks/StaticJsTaskIterator.js";

describe("E2E: Tasks", () => {
  it("Should step one AST node per task", async () => {
    const seenNodes: string[] = [];
    function runTask(task: StaticJsTaskIterator) {
      while (!task.done) {
        task.next();
        seenNodes.push(task.operation?.operationType ?? "<missing>");
      }
    }

    const realm = StaticJsRealm({
      runTask,
      global: {
        properties: {
          func: {
            value: () => {},
          },
        },
      },
    });

    const code = `func("Hello, world!");`;

    await realm.evaluateScript(code);

    expect(seenNodes).toEqual([
      "ExpressionStatement",
      "CallExpression",
      "Identifier",
      "StringLiteral",
    ]);
  });

  it("Should follow up microtasks with new task iterators", async () => {
    const sequence: string[] = [];
    const runTask = vi.fn((task: StaticJsTaskIterator) => {
      sequence.push("task");
      while (!task.done) {
        task.next();
      }
    });

    const resolved = vi.fn(() => sequence.push("resolved"));

    const realm = StaticJsRealm({
      runTask,
      global: {
        properties: {
          resolve: {
            value: resolved,
          },
        },
      },
    });

    const code = `
      Promise.resolve().then(() => {
        resolve();
      }).then(() => {});
    `;

    await realm.evaluateScript(code);

    expect(sequence).toEqual(["task", "task", "resolved", "task"]);
  });
});
