import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe("E2E: Generator Functions", () => {
  it("Can be defined", async () => {
    const code = `
      function* gen() {
        yield 1;
      }
      gen
    `;

    const result = await evaluateScript(code);
    expect(result).toBeTypeOf("function");
  });

  it("Can iterate", async () => {
    const code = `
      function* gen() {
        yield 1;
        yield 2;
      }
      const iterator = gen();
      [iterator.next(), iterator.next(), iterator.next()]
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual([
      { value: 1, done: false },
      { value: 2, done: false },
      { value: undefined, done: true },
    ]);
  });

  it("Can suspend", async () => {
    const code = `
      const log = [];
      function* gen() {
        log.push("gen-start");
        const x = yield 1;
        log.push("gen-resumed");
        return x;
      }

      log.push("start");
      const iterator = gen();
      log.push("next-1");
      iterator.next();
      log.push("next-2");
      iterator.next(42);
      log.push("end");
      log
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual([
      "start",
      "next-1",
      "gen-start",
      "next-2",
      "gen-resumed",
      "end",
    ]);
  });

  it("Can pass values back in", async () => {
    const code = `
      function* gen() {
        const x = yield 1;
        return x;
      }
      const iterator = gen();
      iterator.next();
      const result = iterator.next(42);
      result
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual({ value: 42, done: true });
  });

  it("Can throw", async () => {
    const code = `
      function* gen() {
        try {
          yield 1;
        } catch (e) {
          return e.message;
        }
      }
      const iterator = gen();
      iterator.next();
      const result = iterator.throw(new Error("Test error"));
      result
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual({ value: "Test error", done: true });
  });

  it("Can return early", async () => {
    const code = `
      const log = [];
      function* gen() {
        log.push("gen-start");
        try {
          yield 1;
          log.push("after-yield");
        } finally {
          log.push("finally");
        }
        return 42;
      }
      const iterator = gen();
      log.push("start");
      iterator.next();
      log.push("return");
      iterator.return(99);
      log
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual(["start", "gen-start", "return", "finally"]);
  });
});
