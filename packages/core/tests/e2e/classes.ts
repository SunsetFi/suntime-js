import { describe, it, expect, vi } from "vitest";
import { StaticJsRealm } from "../../src/index.js";
import { isStaticJsFunction } from "../../src/runtime/types/StaticJsFunction.js";
import { isStaticJsObject } from "../../src/runtime/types/StaticJsObject.js";

describe("E2E: Classes", () => {
  describe("Class Declarations", () => {
    it("Can be declared", async () => {
      const code = `
        class MyClass { }
        MyClass;
      `;

      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(code);
      expect(isStaticJsFunction(result)).toBe(true);
    });

    it("Can be constructed", async () => {
      const code = `
        class MyClass { }
        
        new MyClass();
      `;

      const realm = StaticJsRealm();

      const result = await realm.evaluateScript(code);
      expect(isStaticJsObject(result)).toBe(true);
    });

    it("Can have a constructor", async () => {
      const code = `
        class MyClass {
          constructor(foo, bar) {
            receiver(foo, bar)
          }
        }
        new MyClass(42, 64);
      `;

      const receiver = vi.fn();
      const realm = StaticJsRealm({
        global: {
          properties: {
            receiver: {
              value: receiver,
            },
          },
        },
      });

      await realm.evaluateScript(code);

      expect(receiver).toHaveBeenCalledTimes(1);
      expect(receiver).toHaveBeenNthCalledWith(42, 64);
    });
  });
});
