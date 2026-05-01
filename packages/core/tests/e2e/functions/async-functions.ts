import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";
import { StaticJsObject } from "../../../src/runtime/types/StaticJsObject.js";

describe("E2E: Async functions", () => {
  describe("Globals", () => {
    it("Provides an async function constructor", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = await realm.global.getAsync("AsyncFunction");
      expect(AsyncFunction).toBeDefined();
    });

    it("Provides an async function prototype", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = (await realm.evaluateExpression(
        "(async function() {}).constructor",
      )) as StaticJsObject;
      const AsyncFunctionPrototype = await AsyncFunction.getAsync("prototype");
      expect(AsyncFunctionPrototype).toBeDefined();
    });
  });

  describe("Functions", () => {
    it("Have the async function constructor", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = (await realm.evaluateExpression(
        "(async function() {}).constructor",
      )) as StaticJsObject;
      const code = `
      async function test() {}
      test.constructor;
    `;
      const result = await realm.evaluateScript(code);
      expect(result).toBe(AsyncFunction);
    });

    it("Have the async function prototype", async () => {
      const realm = new StaticJsRealm();
      const AsyncFunction = (await realm.evaluateExpression(
        "(async function() {}).constructor",
      )) as StaticJsObject;
      const AsyncFunctionPrototype = await AsyncFunction.getAsync("prototype");
      const code = `
      async function test() {}
      Object.getPrototypeOf(test);
    `;
      const result = await realm.evaluateScript(code);
      expect(result).toBe(AsyncFunctionPrototype);
    });
  });
});
