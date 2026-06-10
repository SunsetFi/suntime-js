import { describe, it, expect, vi } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";

describe("E2E: Type Coercion / Objects", () => {
  describe("Host to Sandbox", () => {
    it("Uses the sandbox Object.prototype, not the host prototype", async () => {
      const realm = StaticJsRealm({
        global: { value: { hostObj: {} } },
      });

      const result = await realm.evaluateScript(
        "Object.getPrototypeOf(hostObj) === Object.prototype;",
      );
      expect(result.toNative()).toBe(true);
    });

    describe("Only own enumerable properties are exposed", () => {
      it("Does not expose non-enumerable own properties", async () => {
        const hostObj: Record<string, unknown> = {};
        Object.defineProperty(hostObj, "secret", {
          value: "hidden",
          enumerable: false,
        });

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        const result = await realm.evaluateScript("hostObj.secret;");
        expect(result.toNative()).toBeUndefined();
      });

      it("Does not expose inherited properties", async () => {
        const proto = { inherited: "from-proto" };
        const hostObj = Object.create(proto) as Record<string, unknown>;
        hostObj["own"] = "mine";

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        const ownResult = await realm.evaluateScript("hostObj.own;");
        expect(ownResult.toNative()).toBe("mine");

        const inheritedResult = await realm.evaluateScript("hostObj.inherited;");
        expect(inheritedResult.toNative()).toBeUndefined();
      });

      it("Exposes enumerable properties", async () => {
        const getter = vi.fn(() => "getter");
        const setter = vi.fn();
        const host = {
          foo: true,
          get bar() {
            return getter();
          },
          set baz(value: string) {
            setter(value);
          },
        };

        const realm = StaticJsRealm({
          global: { value: { host } },
        });

        const result = await realm.evaluateScript("host.foo;");
        expect(result.toNative()).toBe(true);

        const barResult = await realm.evaluateScript("host.bar;");
        expect(barResult.toNative()).toBe("getter");
        expect(getter).toHaveBeenCalledTimes(1);

        await realm.evaluateScript("host.baz = 'setter';");
        const bazResult = await realm.evaluateScript("host.baz;");
        expect(bazResult.toNative()).toBeUndefined();
        expect(setter).toHaveBeenCalledWith("setter");
      });
    });

    describe("Properties are read-only", () => {
      it("Write to an external object property is a no-op in non-strict mode", async () => {
        const hostObj = { value: "original" };

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        await realm.evaluateScript("hostObj.value = 'modified';");

        const result = await realm.evaluateScript("hostObj.value;");
        expect(result.toNative()).toBe("original");
        expect(hostObj.value).toBe("original");
      });

      it("Write to an external object property throws TypeError in strict mode", async () => {
        const hostObj = { value: "original" };

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        let threw = false;
        try {
          await realm.evaluateScript(`
            "use strict";
            hostObj.value = 'modified';
          `);
        } catch {
          threw = true;
        }

        expect(threw).toBe(true);
        expect(hostObj.value).toBe("original");
      });
    });

    describe("Object is still linked to the host", () => {
      it("Host property changes are reflected in the sandbox", async () => {
        const hostObj: Record<string, unknown> = { value: "before" };

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        hostObj["value"] = "after";

        const result = await realm.evaluateScript("hostObj.value;");
        expect(result.toNative()).toBe("after");
      });

      it("Host property additions are reflected in the sandbox", async () => {
        const hostObj: Record<string, unknown> = {};

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        hostObj["newProp"] = 99;

        const result = await realm.evaluateScript("hostObj.newProp;");
        expect(result.toNative()).toBe(99);
      });

      it("Host property deletions are reflected in the sandbox", async () => {
        const hostObj: Record<string, unknown> = { value: "exists" };

        const realm = StaticJsRealm({
          global: { value: { hostObj } },
        });

        delete hostObj["value"];

        const result = await realm.evaluateScript("hostObj.value;");
        expect(result.toNative()).toBeUndefined();
      });
    });
  });

  describe("Sandbox to Host", () => {
    it("Host-defined objects round-trip to the same instance", async () => {
      const hostObj = { value: 1 };
      const realm = StaticJsRealm({
        global: { value: { hostObj } },
      });

      const fnCode = `
        function returnIt(x) { return x; }
        returnIt;
      `;
      const vmFn = await realm.evaluateScript(fnCode);
      const returnIt = vmFn.toNative() as (x: unknown) => unknown;
      expect(returnIt(hostObj)).toBe(hostObj);
    });

    it("Sandbox object mutations from the host are reflected inside the sandbox", async () => {
      const realm = StaticJsRealm();

      const vmObj = await realm.evaluateScript(`
        const obj = {};
        globalThis.__sandboxObj = obj;
        obj;
      `);

      const native = vmObj.toNative() as Record<string, unknown>;
      native["addedFromHost"] = "yes";

      const result = await realm.evaluateScript("globalThis.__sandboxObj.addedFromHost;");
      expect(result.toNative()).toBe("yes");
    });

    it("Sandbox array is not an instance of the host Array constructor", async () => {
      const realm = StaticJsRealm();

      const vmArr = await realm.evaluateScript("[1, 2, 3];");
      const native = vmArr.toNative() as unknown[];

      // The sandbox array's prototype chain uses the sandboxed Array.prototype,
      // not the host Array.prototype, so instanceof returns false.
      expect(native instanceof Array).toBe(false);
    });
  });
});
