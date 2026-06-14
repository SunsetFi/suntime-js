import { describe, expect, it } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";

describe("E2E: Type Coercion / Iterators", () => {
  it("Supports engine iterators", async () => {
    let count = 0;
    const iter: Iterable<number> & Iterator<number> = {
      [Symbol.iterator]() {
        return this;
      },
      next() {
        count++;
        if (count <= 3) {
          return { value: count, done: false };
        } else {
          return { value: undefined, done: true };
        }
      },
    };

    const realm = StaticJsRealm();
    const funcValue = realm.evaluateScriptSync(`
      function sum(iter) {
        let total = 0;
        for (const value of iter) {
          total += value;
        }
        return total;
      }
      sum;
    `);

    const func = funcValue.toNative() as (iter: Iterable<number>) => number;
    const result = func(iter);
    expect(result).toBe(6);
  });
});
