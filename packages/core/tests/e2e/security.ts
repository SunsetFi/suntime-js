import { describe, it, expect } from "vitest";

import {
  StaticJsRealm,
  StaticJsObject,
  StaticJsTaskAbortedError,
  createTimeBoundTaskRunner,
} from "../../src/index.js";

describe("E2E: Security", () => {
  it("Runs eval code within the sandbox", async () => {
    const realm = StaticJsRealm({});
    const code = `
      eval("globalThis.__evalSandboxTest = 42;");
    `;
    await realm.evaluateScript(code);
    const result = await realm.evaluateScript("__evalSandboxTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__evalSandboxTest).toBeUndefined();
  });

  it("Runs Function code within the sandbox", async () => {
    const realm = StaticJsRealm({});
    const code = `
      Function("globalThis.__functionSandboxTest = 42;")();
    `;
    await realm.evaluateScript(code);
    const result = await realm.evaluateScript("__functionSandboxTest");
    expect(result.toNative()).toBe(42);
    expect((globalThis as any).__functionSandboxTest).toBeUndefined();
  });

  describe("Function constructor attack via chained object access", () => {
    it("Accessing Function constructor through a coerced object stays sandboxed", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            myObject: {
              value: {},
            },
          },
        },
      });

      // The attack: traverse .constructor.constructor to reach Function, then
      // use it to run arbitrary code. The sandbox should intercept this and
      // run the string inside the sandbox, not the host.
      const attackCode = `myObject.constructor.constructor("globalThis.__constructorAttack = true;")()`;
      await realm.evaluateExpression(attackCode);

      expect((globalThis as any).__constructorAttack).toBeUndefined();

      const sandboxResult = await realm.evaluateScript("__constructorAttack");
      expect(sandboxResult.toNative()).toBe(true);
    });

    it("Chained constructor access on a coerced object uses the sandbox prototype", async () => {
      const realm = StaticJsRealm({
        global: {
          properties: {
            myObject: {
              value: {},
            },
          },
        },
      });

      // {}.constructor should be the sandbox Object, not the host Object
      const result = await realm.evaluateExpression("myObject.constructor === Object");
      expect(result.toNative()).toBe(true);
    });
  });

  describe("Getter this-binding cannot be rebound via coerced objects", () => {
    it("Calling a getter with an alternate this via .call() still uses the original object", async () => {
      const targetObj = {
        _value: "target",
        get foo() {
          return this._value;
        },
      };

      const myOtherObject = {
        _value: "other-object",
      };

      const realm = StaticJsRealm({
        global: {
          properties: {
            targetObj: {
              value: targetObj,
            },
            myOtherObject: {
              value: myOtherObject,
            },
          },
        },
      });

      // Even though the getter's this is explicitly rebound to myOtherObject,
      // the sandbox proxy should prevent this and still return "target".
      const result = await realm.evaluateScript(`
        const descr = Object.getOwnPropertyDescriptor(targetObj, "foo");
        descr.get.call(myOtherObject);
      `);

      expect(result.toNative()).toBe("target");
    });

    it("Sandbox code cannot mutate a coerced object property", async () => {
      const targetObj = {
        _value: "target",
        get foo() {
          return this._value;
        },
      };

      const realm = StaticJsRealm({
        global: {
          properties: {
            myObject: {
              value: targetObj,
            },
          },
        },
      });

      // Write should be a no-op; the host object must remain unchanged.
      await realm.evaluateScript("myObject._value = 'modified-in-sandbox';");

      expect(targetObj._value).toBe("target");

      const sandboxValue = await realm.evaluateScript("myObject._value;");
      expect(sandboxValue.toNative()).toBe("target");
    });
  });

  describe("Task runner aborts runaway sandbox code", async () => {
    it("Time-bound task runner aborts an infinite loop in a Proxy ownKeys trap", async () => {
      const taskRunner = createTimeBoundTaskRunner({ maxRunTime: 200 });
      const realm = StaticJsRealm({
        runTask: taskRunner,
        runTaskSync: taskRunner,
      });

      const obj = (await realm.evaluateScript(`
        new Proxy({}, {
          ownKeys() { while(true) {} }
        });
      `)) as StaticJsObject;

      await expect(() => Object.keys(obj.toNative() as object)).toThrow(StaticJsTaskAbortedError);
    });

    it("Time-bound task runner aborts a plain infinite loop", async () => {
      const realm = StaticJsRealm({
        runTask: createTimeBoundTaskRunner({ maxRunTime: 200 }),
      });

      await expect(realm.evaluateScript("while(true) {}")).rejects.toThrow(
        StaticJsTaskAbortedError,
      );
    });
  });
});
