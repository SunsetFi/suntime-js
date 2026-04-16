import { describe, it, expect } from "vitest";

import { StaticJsRealm, StaticJsFunction } from "../../src/index.js";

describe("E2E: Proxies", () => {
  describe("Type Factory", () => {
    describe("Objects", () => {
      it("Can create a proxy", async () => {
        const realm = StaticJsRealm();
        const proxy = realm.types.proxy("object", {});
        const code = `
          function test(x) {
            return this && typeof this;
          }
          test;
        `;
        const testFn = (await realm.evaluateScript(code)) as StaticJsFunction;
        const testResult = await testFn.callAsync(proxy);
        expect(testResult.toNative()).toBe("object");
      });

      it("Can supply ownKeys", async () => {
        const realm = StaticJsRealm();
        const proxy = realm.types.proxy("object", {
          ownKeys() {
            return ["a", "b", "c"];
          },
        });
        const code = `
          function test() {
            return Reflect.ownKeys(this);
          }
          test;
        `;
        const testFn = (await realm.evaluateScript(code)) as StaticJsFunction;
        const testResult = await testFn.callAsync(proxy);
        expect(testResult.toNative()).toEqual(["a", "b", "c"]);
      });

      it("Can intercept property gets", async () => {
        const realm = StaticJsRealm();
        const proxy = realm.types.proxy("object", {
          *get(target, prop) {
            if (prop === "secret") {
              return realm.types.string("42");
            }
            return yield* target.getEvaluator(prop, target);
          },
        });
        const code = `
          function test() {
            return this.secret;
          }
          test;
        `;
        const testFn = (await realm.evaluateScript(code)) as StaticJsFunction;
        const testResult = await testFn.callAsync(proxy);
        expect(testResult.toNative()).toBe("42");
      });

      it("Can intercept property sets", async () => {
        const realm = StaticJsRealm();
        let secretValue: any = "initial";
        const proxy = realm.types.proxy("object", {
          *set(target, prop, value) {
            if (prop === "secret") {
              secretValue = value.toNative();
              return true;
            }
            return yield* target.setEvaluator(prop, value, target);
          },
        });
        const code = `
          function test() {
            this.secret = "new value";
            return this.secret;
          }
          test;
        `;
        const testFn = (await realm.evaluateScript(code)) as StaticJsFunction;
        await testFn.callAsync(proxy);
        expect(secretValue).toBe("new value");
      });
    });
  });
});
