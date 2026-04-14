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

    describe("Default constructor", () => {
      it("Can be constructed", async () => {
        const code = `
        class MyClass { }
        
        new MyClass();
      `;

        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(code);
        expect(isStaticJsObject(result)).toBe(true);
      });

      it("Results in the right instance", async () => {
        const code = `
        class MyClass { }
        
        const instance = new MyClass();
        instance instanceof MyClass;
      `;

        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(code);
        expect(result.toNative()).toBe(true);
      });

      it("Is assigned the correct constructor", async () => {
        const code = `
          class MyClass { }
          
          const instance = new MyClass();
          instance.constructor === MyClass;
        `;

        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(code);
        expect(result.toNative()).toBe(true);
      });
    });

    describe("Custom constructor", () => {
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
        expect(receiver).toHaveBeenCalledWith(42, 64);
      });

      it("Results in the right instance", async () => {
        const code = `
          class MyClass {
            constructor() { }
          }

          const instance = new MyClass();
          instance instanceof MyClass;
        `;

        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(code);
        expect(result.toNative()).toBe(true);
      });

      it("Is assigned the correct constructor", async () => {
        const code = `
          class MyClass {
            constructor() { }
          }

          const instance = new MyClass();
          instance.constructor === MyClass;
        `;

        const realm = StaticJsRealm();

        const result = await realm.evaluateScript(code);
        expect(result.toNative()).toBe(true);
      });
    });
  });
});
