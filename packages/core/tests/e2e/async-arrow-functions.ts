import { describe, it, expect } from "vitest";

import {
  isStaticJsFunction,
  isStaticJsPromise,
  StaticJsRealm,
} from "../../src/index.js";

describe("E2E: Async arrow functions", () => {
  it("can be declared", async () => {
    const realm = StaticJsRealm();
    const result = await realm.evaluateScript(`
        const a = async () => 42;
        a;
      `);
    expect(isStaticJsFunction(result)).toBe(true);
  });

  it("returns a promise", async () => {
    const realm = StaticJsRealm();
    const result = await realm.evaluateScript(
      `
        const a = async () => 42;
        a();
      `,
    );

    expect(isStaticJsPromise(result)).toBe(true);
  });
});
