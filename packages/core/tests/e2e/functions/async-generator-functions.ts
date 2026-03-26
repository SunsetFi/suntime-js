import { describe, it, expect } from "vitest";

import {
  evaluateScript,
  StaticJsRealm,
  type StaticJsFunction,
  isStaticJsPromise,
  isStaticJsArray,
  isStaticJsBoolean,
} from "../../../src/index.js";

import delay from "../../test262/utils/delay.js";

describe("E2E: Generator Functions", () => {
  it("Can be defined", async () => {
    const code = `
      async function* gen() {
        yield 1;
      }
      gen;
    `;

    const fn = await evaluateScript(code);
    expect(fn).toBeTypeOf("function");
  });

  it("Produces promises when iterating", async () => {
    const code = `
      async function* gen() {
        yield 1;
        yield 2;
      }
      const iterator = gen();
      [iterator.next(), iterator.next(), iterator.next()];
    `;

    const realm = StaticJsRealm();

    const array = await realm.evaluateScript(code);
    if (!isStaticJsArray(array)) {
      throw new Error("Expected an array");
    }

    const n1 = await array.getAsync("0");
    const n2 = await array.getAsync("1");
    const n3 = await array.getAsync("2");
    expect(isStaticJsPromise(n1)).toBe(true);
    expect(isStaticJsPromise(n2)).toBe(true);
    expect(isStaticJsPromise(n3)).toBe(true);
  });

  it("Can iterate", async () => {
    const code = `
      async function* gen() {
        yield 1;
        yield 2;
      }
      const iterator = gen();
      const next1 = iterator.next();
      const next2 = iterator.next();
      const next3 = iterator.next();
      [await next1, await next2, await next3];
    `;

    const result = await evaluateScript(code, { topLevelAwait: true });
    expect(result).toEqual([
      { value: 1, done: false },
      { value: 2, done: false },
      { value: undefined, done: true },
    ]);
  });

  it("Can await", async () => {
    let currentResume: ((value: unknown) => void) | null = null;
    function registerResume(resume: (value: unknown) => void) {
      currentResume = resume;
    }

    const code = `
      function getResume() {
        return new Promise((resolve) => {
          registerResume(resolve);
        });
      }
      async function* gen() {
        const a = await getResume();
        yield a;
        const b = await getResume();
        yield b;
      }
      const iterator = gen();

      let next1Resolved = false;
      function getNext1Resolved() {
        return next1Resolved;
      }
      const next1 = iterator.next().then(() => next1Resolved = true);

      let next2Resolved = false;
      function getNext2Resolved() {
        return next2Resolved;
      }
      const next2 = iterator.next().then(() => next2Resolved = true);

      let next3Resolved = false;
      function getNext3Resolved() {
        return next3Resolved;
      }
      const next3 = iterator.next().then(() => next3Resolved = true);
      [getNext1Resolved, getNext2Resolved, getNext3Resolved];
    `;

    const realm = StaticJsRealm({
      global: {
        properties: {
          registerResume: {
            value: registerResume,
          },
        },
      },
    });

    const result = await realm.evaluateScript(code);
    if (!isStaticJsArray(result)) {
      throw new Error("Expected an array");
    }

    const [getNext1ResolvedFn, getNext2ResolvedFn, getNext3ResolvedFn] = (await Promise.all([
      result.getAsync("0"),
      result.getAsync("1"),
      result.getAsync("2"),
    ])) as [StaticJsFunction, StaticJsFunction, StaticJsFunction];

    function getNext1Resolved() {
      const value = getNext1ResolvedFn.callSync(realm.types.undefined);
      if (!isStaticJsBoolean(value)) {
        throw new Error("Expected a boolean");
      }
      return value.value;
    }

    function getNext2Resolved() {
      const value = getNext2ResolvedFn.callSync(realm.types.undefined);
      if (!isStaticJsBoolean(value)) {
        throw new Error("Expected a boolean");
      }
      return value.value;
    }

    function getNext3Resolved() {
      const value = getNext3ResolvedFn.callSync(realm.types.undefined);
      if (!isStaticJsBoolean(value)) {
        throw new Error("Expected a boolean");
      }
      return value.value;
    }

    expect(getNext1Resolved()).toBe(false);
    expect(getNext2Resolved()).toBe(false);
    expect(getNext3Resolved()).toBe(false);

    if (!currentResume) {
      throw new Error("Expected currentResume to be set");
    }

    // @ts-expect-error - currentResume is set by function call
    currentResume();
    await delay(0);
    expect(getNext1Resolved()).toBe(true);
    expect(getNext2Resolved()).toBe(false);
    expect(getNext3Resolved()).toBe(false);

    // @ts-expect-error - currentResume is set by function call
    currentResume();
    await delay(0);
    expect(getNext1Resolved()).toBe(true);
    expect(getNext2Resolved()).toBe(true);
    expect(getNext3Resolved()).toBe(true);
  });
});
