import { describe, beforeEach, it, expect } from "vitest";

import {
  evaluateScript as evaluateScriptCore,
  createTimeBoundTaskRunner,
} from "../../../src/index.js";

import isDebuggerActive from "../../is-debugger-active.js";

describe("E2E: For loops", () => {
  let evaluateScript: typeof evaluateScriptCore;
  beforeEach(() => {
    const taskRunner = createTimeBoundTaskRunner({
      maxRunTime: isDebuggerActive ? Infinity : 1000,
    });
    evaluateScript = (code: string) => {
      return evaluateScriptCore(code, { taskRunner });
    };
  });

  it("Can loop with a for loop", async () => {
    const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(45);
  });

  it("Can break out of a for loop", async () => {
    const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
          if (i === 5) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Breaks out of the closest for loop", async () => {
    const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            sum += j;
            if (j === 5) {
              break;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(150);
  });

  it("Can break out of a labeled for loop", async () => {
    const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            sum += j;
            if (j === 5) {
              break outer;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Can continue to the next iteration of a for loop", async () => {
    const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(40);
  });

  it("Continues from the closest for loop", async () => {
    const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (j === 5) {
              continue;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(400);
  });

  it("Can continue from a labeled for loop", async () => {
    const code = `
        let sum = 0;
        outer: for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (j === 5) {
              continue outer;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(100);
  });

  it("Can loop with an empty for loop", async () => {
    const code = `
        let sum = 0;
        for (;;) {
          sum++;
          if (sum === 10) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(10);
  });

  it("Does not conflict init with outer scope", async () => {
    const code = `
        let i = -1;
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
        }
        [i, sum];
      `;

    expect(await evaluateScript(code)).toEqual([-1, 45]);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          throw "Error";
        }
        sum;
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Error");
  });

  it("Passes the last value as the result", async () => {
    const code = `
        let sum = 0;
        for (let i = 0; i < 10; i++) {
          sum += i;
          "value: " + i;
        }
      `;
    expect(await evaluateScript(code)).toBe("value: 9");
  });

  describe("Bindings", async () => {
    describe("Let", async () => {
      it("Supports let bindings", async () => {
        const code = `
          let sum = 0;
          for (let i = 0; i < 10; i++) {
            sum += i;
          }
          sum;
        `;
        expect(await evaluateScript(code)).toBe(45);
      });

      it("Captures a closure per-iteration", async () => {
        const code = `
          let a = [];
          for (let i = 0; a.push(function () { return i; }), i < 5; ++i) { }
          a.slice(0, 5).map(k => k());
        `;

        const result = await evaluateScript(code);
        expect(result).toEqual([0, 1, 2, 3, 4]);
      });
    });

    it("Supports var bindings", async () => {
      const code = `
          let sum = 0;
          for (var i = 0; i < 10; i++) {
            sum += i;
          }
          [i, sum];
        `;
      expect(await evaluateScript(code)).toEqual([10, 45]);
    });

    it("Supports no bindings", async () => {
      const code = `
          let i = 0;
          let sum = 0;
          for (; i < 10; i++) {
            sum += i;
          }
          [i, sum];
        `;
      expect(await evaluateScript(code)).toEqual([10, 45]);
    });

    it("Supports object destructuring bindings", async () => {
      const code = `
          let sum = 0;
          const arr = [{ val: 1 }, { val: 2 }, { val: 3 }];
          for (const { val } of arr) {
            sum += val;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(6);
    });
  });
});
