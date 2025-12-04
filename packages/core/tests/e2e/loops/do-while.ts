import { describe, it, expect, beforeEach } from "vitest";

import {
  createTimeBoundTaskRunner,
  evaluateScript as evaluateScriptCore,
} from "../../../src/index.js";

const debug = false;

describe("E2E: Do While loops", () => {
  let evaluateScript: typeof evaluateScriptCore;
  beforeEach(() => {
    const taskRunner = createTimeBoundTaskRunner({
      maxRunTime: debug ? Infinity : 1000,
    });
    evaluateScript = (code: string) => {
      return evaluateScriptCore(code, { taskRunner });
    };
  });

  it("Can loop with a do while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          i++;
        } while (i < 10);
        sum;
      `;
    expect(await evaluateScript(code)).toBe(45);
  });

  it("Can break out of a do while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          if (i === 5) {
            break;
          }
          i++;
        } while (i < 10);
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Can continue to the next iteration of a do while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        do {
          i++;
          if (i === 5) {
            continue;
          }
          sum += i;
        } while (i < 10);
        sum;
      `;
    expect(await evaluateScript(code)).toBe(50);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        let sum = 0;
        do {
          throw "Error";
        } while (true);
        sum;
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Error");
  });

  it("Returns last evaluated value", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        do {
          sum += i;
          i++;
          "value: " + i;
        } while (i < 10);
      `;
    expect(await evaluateScript(code)).toEqual("value: 10");
  });
});
