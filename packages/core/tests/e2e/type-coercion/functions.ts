import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";

describe("E2E: Type Coercion / Functions", () => {
  describe("Host to Sandbox", () => {
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

  describe("Sandbox to Host", () => {
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

  describe("Host invoking a sandbox callback", () => {
    it("re-wraps host values handed to a sandbox callback under the active policy", async () => {
      class Secret {
        reveal() {
          return "leak";
        }
      }
      const secret = new Secret();
      const realm = StaticJsRealm({
        hostAccessDefaults: {
          includeNonEnumerable: true,
          prototypePolicy: "inherit",
          childPolicy: "inherit",
        },
        global: { value: { callWith: (cb: (x: unknown) => void) => cb(secret) } },
      });

      const result = await realm.evaluateScript(`
        let leaked;
        callWith((x) => { leaked = typeof x.reveal === "function" ? x.reveal() : undefined; });
        leaked;
      `);
      expect(result.toNative()).toBe("leak");
    });
  });

  describe("Thrown host errors", () => {
    it("masks a thrown host error as the matching realm error type", async () => {
      const realm = StaticJsRealm({
        global: {
          value: {
            boom: () => {
              throw new TypeError("host boom");
            },
          },
        },
      });

      const result = await realm.evaluateScript(`
        let info;
        try {
          boom();
        } catch (e) {
          info = {
            isTypeError: e instanceof TypeError,
            ctorName: e && e.constructor ? e.constructor.name : null,
            message: e ? e.message : null,
          };
        }
        info;
      `);
      const info = result.toNative() as Record<string, unknown>;
      expect(info["isTypeError"]).toBe(true);
      expect(info["ctorName"]).toBe("TypeError");
      expect(info["message"]).toBe("host boom");
    });
  });

  describe("Function.prototype.toString on host functions", () => {
    it("returns a native-code stub and does not leak host source", async () => {
      const realm = StaticJsRealm({
        global: {
          value: {
            secretFn: function topSecret() {
              return "do-not-leak-me";
            },
          },
        },
      });

      const result = await realm.evaluateScript("secretFn.toString();");
      const source = result.toNative() as string;
      expect(source).toContain("[ native code ]");
      expect(source).not.toContain("do-not-leak-me");
    });
  });
});
