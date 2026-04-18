import { describe, it, expect } from "vitest";

import { StaticJsRealm, evaluateScript } from "../../src/index.js";

describe("E2E: Type Coercion", () => {
  describe("Host to Sandbox", () => {
    describe("Scalars", () => {
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

    describe("Objects", () => {
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

        it("Uses the sandbox Object.prototype, not the host prototype", async () => {
          const realm = StaticJsRealm({
            global: { value: { hostObj: {} } },
          });

          const result = await realm.evaluateScript(
            "Object.getPrototypeOf(hostObj) === Object.prototype;",
          );
          expect(result.toNative()).toBe(true);
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

    describe("Functions", () => {
      it("Is callable in the sandbox", async () => {
        const realm = StaticJsRealm({
          global: { value: { hostFn: () => 42 } },
        });

        const result = await realm.evaluateScript("hostFn();");
        expect(result.toNative()).toBe(42);
      });

      it("Does not carry additional properties into the sandbox", async () => {
        const hostFn = () => undefined;
        (hostFn as unknown as Record<string, unknown>)["extra"] = "should-not-appear";

        const realm = StaticJsRealm({
          global: { value: { hostFn } },
        });

        const result = await realm.evaluateScript("hostFn.extra;");
        expect(result.toNative()).toBeUndefined();
      });

      it("Coerces sandbox arguments to host values when invoking", async () => {
        let receivedArg: unknown;
        const realm = StaticJsRealm({
          global: {
            value: {
              captureArg: (x: unknown) => {
                receivedArg = x;
              },
            },
          },
        });

        await realm.evaluateScript("captureArg(123);");
        expect(receivedArg).toBe(123);
      });

      it("Coerces the host function return value into the sandbox", async () => {
        const realm = StaticJsRealm({
          global: { value: { hostFn: () => ({ answer: 42 }) } },
        });

        const result = await realm.evaluateScript("hostFn().answer;");
        expect(result.toNative()).toBe(42);
      });
    });
  });

  describe("Sandbox to Host", () => {
    describe("Scalars", () => {
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

    describe("Objects", () => {
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

    describe("Functions", () => {
      it("Sandbox function is callable from the host", async () => {
        const realm = StaticJsRealm();

        const vmFn = await realm.evaluateScript(`
          function add(a, b) { return a + b; }
          add;
        `);

        const add = vmFn.toNative() as (a: number, b: number) => number;
        expect(add(2, 3)).toBe(5);
      });

      it("Host arguments to a sandbox function are coerced to sandbox values", async () => {
        const realm = StaticJsRealm();

        const vmFn = await realm.evaluateScript(`
          function getType(x) { return typeof x; }
          getType;
        `);

        const getType = vmFn.toNative() as (x: unknown) => string;
        expect(getType(42)).toBe("number");
        expect(getType("hi")).toBe("string");
        expect(getType(true)).toBe("boolean");
      });

      it("Return value of sandbox function is coerced to a native value", async () => {
        const realm = StaticJsRealm();

        const vmFn = await realm.evaluateScript(`
          function makeObj() { return { x: 1 }; }
          makeObj;
        `);

        const makeObj = vmFn.toNative() as () => Record<string, unknown>;
        const obj = makeObj();
        expect(obj["x"]).toBe(1);
      });
    });
  });

  describe("Security", () => {
    it("Does not allow external Object constructors to escape the sandbox", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            externalObject: {
              value: {},
            },
          },
        },
      });

      await realm.evaluateScript(`
        const obj = externalObject;
        obj.constructor.constructor("globalThis.__escapeTest = 42;")();
      `);

      const result = await realm.evaluateScript("__escapeTest");
      expect(result.toNative()).toBe(42);
      expect((globalThis as any).__escapeTest).toBeUndefined();
    });

    it("Does not allow external Function constructors to escape the sandbox", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            externalFunction: {
              value: function () {},
            },
          },
        },
      });

      await realm.evaluateScript(
        `externalFunction.constructor("globalThis.__escapeTest = 42;")();`,
      );

      const result = await realm.evaluateScript("__escapeTest");
      expect(result.toNative()).toBe(42);
      expect((globalThis as any).__escapeTest).toBeUndefined();
    });
  });
});
