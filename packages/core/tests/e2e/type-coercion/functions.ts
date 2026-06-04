import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../../src/index.js";

describe("E2E: Type Coercion / Functions", () => {
  describe("Host to Sandbox", () => {
    it("Is callable in the sandbox", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            hostFn: {
              value: () => 42,
            },
          },
        },
      });

      const result = await realm.evaluateScript("hostFn();");
      expect(result.toNative()).toBe(42);
    });

    it("Exposes properties when childPolicy is set", async () => {
      const hostFn = () => undefined;
      (hostFn as unknown as Record<string, unknown>)["secret"] = "value";

      const realm = StaticJsRealm({
        hostAccessDefaults: {
          childPolicy: "inherit",
        },
        global: {
          properties: {
            hostFn: {
              value: hostFn,
            },
          },
        },
      });

      const result = await realm.evaluateScript("hostFn.secret;");
      expect(result.toNative()).toBe("value");
    });

    it("Does not expose properties when childPolicy is not set", async () => {
      const hostFn = () => undefined;
      (hostFn as unknown as Record<string, unknown>)["secret"] = "value";

      const realm = StaticJsRealm({
        hostAccessDefaults: {
          childPolicy: false,
        },
        global: {
          properties: {
            hostFn: {
              value: hostFn,
            },
          },
        },
      });

      const result = await realm.evaluateScript("hostFn.secret;");
      expect(result.toNative()).toBeUndefined();
    });

    it("Coerces sandbox arguments to host values when invoking", async () => {
      let receivedArg: unknown;
      const realm = StaticJsRealm({
        global: {
          properties: {
            captureArg: {
              value: (x: unknown) => {
                receivedArg = x;
              },
            },
          },
        },
      });

      await realm.evaluateScript("captureArg(123);");
      expect(receivedArg).toBe(123);
    });

    it("Coerces the host function return value into the sandbox", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            hostFn: {
              value: () => ({ answer: 42 }),
            },
          },
        },
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

    it("Surfaces a thrown sandbox error to the host", async () => {
      const realm = StaticJsRealm();

      const vmFn = await realm.evaluateScript(`
        function boom() { throw new TypeError("sandbox boom"); }
        boom;
      `);

      const boom = vmFn.toNative() as () => void;

      let caught: unknown;
      try {
        boom();
        throw new Error("Expected the bridged sandbox function to throw");
      } catch (error) {
        caught = error;
      }

      expect(caught).not.toHaveProperty("type");
      expect(caught).not.toHaveProperty("value");
      expect(caught).toMatchObject({
        name: "TypeError",
        message: "sandbox boom",
      });
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
        global: {
          properties: {
            callWith: {
              value: (cb: (x: unknown) => void) => cb(secret),
            },
          },
        },
      });

      const result = await realm.evaluateScript(`
        let leaked;
        callWith((x) => { leaked = typeof x.reveal === "function" ? x.reveal() : undefined; });
        leaked;
      `);
      expect(result.toNative()).toBe("leak");
    });

    it("re-wraps host values handed to a sandbox callback nested in an object argument", async () => {
      class Secret {
        reveal() {
          return "leak";
        }
      }
      const secret = new Secret();

      // Realm defaults are restrictive (prototype methods hidden), so the only
      // way the callback can see secret.reveal is by inheriting the host
      // function's permissive childPolicy. A callback reached through an object
      // argument must inherit it the same way a directly-passed callback does.
      const realm = StaticJsRealm();
      const callWith = realm.types.toStaticJsValue(
        (opts: { cb: (x: unknown) => void }) => opts.cb(secret),
        {
          includeNonEnumerable: true,
          prototypePolicy: "inherit",
          childPolicy: "inherit",
        },
      );
      realm.global.setSync("callWith", callWith);

      const result = await realm.evaluateScript(`
        let leaked;
        callWith({ cb: (x) => { leaked = typeof x.reveal === "function" ? x.reveal() : undefined; } });
        leaked;
      `);
      expect(result.toNative()).toBe("leak");
    });
  });

  describe("Thrown host errors", () => {
    it("masks a thrown host error as the matching realm error type", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            boom: {
              value: () => {
                throw new TypeError("host boom");
              },
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
          properties: {
            secretFn: {
              value: function topSecret() {
                return "do-not-leak-me";
              },
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
