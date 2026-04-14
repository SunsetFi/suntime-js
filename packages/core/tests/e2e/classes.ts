import { describe, it, expect, vi } from "vitest";
import { StaticJsRealm } from "../../src/index.js";
import { isStaticJsFunction } from "../../src/runtime/types/StaticJsFunction.js";
import { isStaticJsObject } from "../../src/runtime/types/StaticJsObject.js";
import { StaticJsValue } from "../../src/runtime/types/StaticJsValue.js";

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

    describe("Properties and Methods", () => {
      interface PropertyTestCase {
        name: string;
        classBody: string;
        act?: string;
        extract: string;
        verify(result: StaticJsValue): void;
      }
      const testCases: PropertyTestCase[] = [
        {
          name: "Can defined a property",
          classBody: `
            myProp;
          `,
          act: `
            instance.myProp = 42;
          `,
          extract: "instance.myProp",
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a property with an initializer",
          classBody: `
            myProp = 42;
          `,
          extract: "instance.myProp",
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a property with a computed name",
          classBody: `
            ["my" + "Prop"] = 42;
          `,
          extract: "instance.myProp",
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a property with a computed symbol name",
          classBody: `
            [Symbol.for("myProp")] = 42;
          `,
          extract: 'instance[Symbol.for("myProp")]',
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a method",
          classBody: `
            myMethod() {
              return 42;
            }
          `,
          extract: "instance.myMethod()",
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a method with a computed name",
          classBody: `
            ["my" + "Method"]() {
              return 42;
            }
          `,
          extract: "instance.myMethod()",
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
        {
          name: "Can define a method with a computed symbol name",
          classBody: `
            [Symbol.for("myMethod")]() {
              return 42;
            }
          `,
          extract: 'instance[Symbol.for("myMethod")]()',
          verify(result) {
            expect(result.toNative()).toBe(42);
          },
        },
      ];

      describe("Default constructor", () => {
        it.each(testCases.map((testCase) => [testCase.name, testCase]))(
          "%s",
          async (_, { classBody, act, extract, verify }) => {
            const code = `
            class MyClass {
              ${classBody}
            }

            const instance = new MyClass();
            ${act ?? ""}
            ${extract};
          `;

            const realm = StaticJsRealm();

            const result = await realm.evaluateScript(code);
            verify(result);
          },
        );
      });

      describe("Custom constructor", () => {
        it.each(testCases.map((testCase) => [testCase.name, testCase]))(
          "%s",
          async (_, { classBody, act, extract, verify }) => {
            const code = `
            class MyClass {
              constructor() {}
              ${classBody}
            }

            const instance = new MyClass();
            ${act ?? ""}
            ${extract};
          `;

            const realm = StaticJsRealm();

            const result = await realm.evaluateScript(code);
            verify(result);
          },
        );
      });
    });
  });
});
