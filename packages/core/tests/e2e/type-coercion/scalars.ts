import { describe, it, expect } from "vitest";

import { StaticJsRealm, evaluateScript } from "../../../src/index.js";

describe("E2E: Type Coercion / Scalars", () => {
  describe("Host to Sandbox", () => {
    it("Passes a number into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostValue: 42 } },
      });
      const result = await realm.evaluateScript("hostValue;");
      expect(result.toNative()).toBe(42);
    });

    it("Passes a string into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostValue: "hello" } },
      });
      const result = await realm.evaluateScript("hostValue;");
      expect(result.toNative()).toBe("hello");
    });

    it("Passes a boolean into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostValue: true } },
      });
      const result = await realm.evaluateScript("hostValue;");
      expect(result.toNative()).toBe(true);
    });

    it("Passes null into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostValue: null } },
      });
      const result = await realm.evaluateScript("hostValue;");
      expect(result.toNative()).toBeNull();
    });

    it("Passes undefined into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostValue: undefined } },
      });
      const result = await realm.evaluateScript("hostValue;");
      expect(result.toNative()).toBeUndefined();
    });
  });

  describe("Sandbox to Host", () => {
    it("Returns a number as a native number", async () => {
      const result = await evaluateScript("42;");
      expect(result).toBe(42);
    });

    it("Returns a string as a native string", async () => {
      const result = await evaluateScript('"hello";');
      expect(result).toBe("hello");
    });

    it("Returns a boolean as a native boolean", async () => {
      const result = await evaluateScript("true;");
      expect(result).toBe(true);
    });

    it("Returns null as native null", async () => {
      const result = await evaluateScript("null;");
      expect(result).toBeNull();
    });

    it("Returns undefined as native undefined", async () => {
      const result = await evaluateScript("undefined;");
      expect(result).toBeUndefined();
    });
  });
});
