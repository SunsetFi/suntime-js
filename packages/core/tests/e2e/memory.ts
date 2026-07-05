import { parse as parseAst } from "@babel/parser";
import { describe, it, expect, vi } from "vitest";

import {
  StaticJsRealm,
  type StaticJsValue,
  StaticJsOutOfMemoryError,
  StaticJsMemoryAllocationTag,
  memoryWeights_Node_24_16_0,
} from "../../src/index.js";

// These must import after index to avoid circular references.
// oxfmt-ignore
import { StaticJsAstFunction, type StaticJsAstFunctionNode } from "#types/implementation/functions/StaticJsAstFunction.js";
// oxfmt-ignore
import { StaticJsPromiseImpl } from "#types/implementation/objects/StaticJsPromiseImpl.js";
import { babelParserOptions } from "#parser/babel-parser-options.js";

const weightOfRawStringValue = memoryWeights_Node_24_16_0[StaticJsMemoryAllocationTag.RawString];
const weightOfRawString =
  typeof weightOfRawStringValue === "function"
    ? weightOfRawStringValue
    : () => weightOfRawStringValue;

const weightOfAstNodePerSourceTextValue =
  memoryWeights_Node_24_16_0[StaticJsMemoryAllocationTag.StaticJsAstFunctionAstRootBySourceText];
const weightOfAstNodePerSourceText =
  typeof weightOfAstNodePerSourceTextValue === "function"
    ? weightOfAstNodePerSourceTextValue
    : () => weightOfAstNodePerSourceTextValue;

describe("E2E: Memory", () => {
  interface SharedMemorySize {
    genZero: number;
    genOne: number | false;
  }
  interface SplitMemorySize {
    factory: number;
    script: number;
    // Defaults to script.
    genOne?: number | false;
  }
  type MemorySize = number | SharedMemorySize | SplitMemorySize;

  function getGenZeroSize(size: MemorySize, type: "factory" | "script"): number {
    if (typeof size === "number") {
      return size;
    } else if ("genZero" in size) {
      return size.genZero;
    } else {
      return size[type];
    }
  }

  function getGenOneSize(size: MemorySize): number | false {
    if (typeof size === "number") {
      return size;
    } else if ("genOne" in size) {
      return size.genOne!;
    } else {
      return size.script;
    }
  }

  interface ScriptWithPreamble {
    preamble: string;
    preambleAllocationSize?: number;
    expression: string;
  }
  type Script = string | ScriptWithPreamble;
  interface MemoryTestCase {
    name: string;
    factory: (realm: StaticJsRealm) => StaticJsValue;
    script: Script;
    size: MemorySize;
  }

  // Note: Testing hard values for overhead isn't ideal as this is engine dependent and we might change it.
  describe.each<MemoryTestCase>([
    {
      name: "String",
      factory: (realm) => realm.types.string("Hello, World!"),
      script: `"Hello, World!";`,
      size:
        // string overhead
        56 + weightOfRawString("Hello, World!"),
    },
    {
      name: "Boolean True",
      factory: (realm) => realm.types.boolean(true),
      script: `true;`,
      // Should use shared.
      size: {
        genZero: 0,
        // Can or cannot count as a single instance depending if anyone else has stored one.
        genOne: false,
      },
    },
    {
      name: "Boolean False",
      factory: (realm) => realm.types.boolean(false),
      script: `false;`,
      // Should use shared.
      size: {
        genZero: 0,
        // Can or cannot count as a single instance depending if anyone else has stored one.
        genOne: false,
      },
    },
    {
      name: "Number",
      factory: (realm) => realm.types.number(42),
      script: `42;`,
      size: 40,
    },
    {
      name: "Number (fractional, HeapNumber)",
      factory: (realm) => realm.types.number(3.14),
      script: `3.14;`,
      size:
        // number overhead
        40 +
        // A non-SMI value is boxed as a 16 byte HeapNumber.
        16,
    },
    {
      name: "Number (out of SMI range, HeapNumber)",
      factory: (realm) => realm.types.number(2 ** 40),
      script: `${2 ** 40};`,
      size:
        // number overhead
        40 +
        // An integer outside the 32-bit SMI range is boxed as a 16 byte HeapNumber.
        16,
    },
    {
      name: "Null",
      factory: (realm) => realm.types.null,
      script: `null;`,
      // Should use shared.
      size: {
        genZero: 0,
        // Can or cannot count as a single instance depending if anyone else has stored one.
        genOne: false,
      },
    },
    {
      name: "Undefined",
      factory: (realm) => realm.types.undefined,
      script: `undefined;`,
      // Should use shared.
      size: {
        genZero: 0,
        // Can or cannot count as a single instance depending if anyone else has stored one.
        genOne: false,
      },
    },
    {
      name: "Symbol",
      factory: (realm) => realm.types.symbol("sym"),
      script: `Symbol("sym");`,
      size: {
        factory:
          // symbol overhead
          655 +
          // symbol description string content (16 byte header + 1 byte per char)
          weightOfRawString("sym"),

        script:
          // String to make the symbol description
          56 +
          // String content (16 byte header + 1 byte per char)
          weightOfRawString("sym") +
          // symbol overhead
          655 +
          // symbol description string content
          weightOfRawString("sym"),
        genOne:
          // symbol overhead
          655 +
          // Symbols don't store a StaticJsString object, so there
          // is no + 56 overhead for one.
          // symbol description string content
          weightOfRawString("sym"),
      },
    },
    {
      name: "Empty Object",
      factory: (realm) => realm.types.object(),
      script: `{};`,
      size: 655,
    },
    {
      name: "Object with string property key",
      factory: (realm) => realm.types.object({ key: { value: realm.types.number(1) } }),
      script: `({ key: 1 });`,
      size:
        // object overhead
        655 +
        // Property overhead
        212 +
        // Property key string content (16 byte header + 1 byte per char)
        weightOfRawString("key") +
        // Property value number
        40,
    },
    {
      name: "Object with symbol property key",
      factory: (realm) => {
        const obj = realm.types.object();
        const sym = realm.types.symbol("sym");
        obj.defineOwnPropertySync(sym, { value: realm.types.true });
        return obj;
      },
      script: `({ [Symbol("sym")]: true })`,
      size: {
        factory:
          // Symbol overhead
          655 +
          // Symbol description string content (16 byte header + 1 byte per char)
          weightOfRawString("sym") +
          // object overhead
          655 +
          // Property overhead
          212,
        script:
          // String to make the symbol description
          56 +
          // String content (16 byte header + 1 byte per char)
          weightOfRawString("sym") +
          // Symbol overhead
          655 +
          // Symbol description string content
          weightOfRawString("sym") +
          // object overhead
          655 +
          // Property overhead
          212,
        genOne:
          // Symbol overhead
          655 +
          // Symbol description string content
          weightOfRawString("sym") +
          // object overhead
          655 +
          // Property overhead
          212,
      },
    },
    {
      name: "Empty Set",
      factory: (realm) => realm.types.set(),
      script: `new Set();`,
      size: 827,
    },
    {
      name: "Set with number value",
      factory: (realm) => {
        const set = realm.types.set();
        set.addValueSync(realm.types.number(1));
        return set;
      },
      script: {
        preamble: `let s`,
        preambleAllocationSize: weightOfRawString("s"),
        expression: `(s = new Set(), s.add(1), s)`,
      },
      size: {
        genZero:
          // Set overhead
          827 +
          // Set entry overhead
          27 +
          // The caller's StaticJsNumber wrapper (counted while it is still alive)
          40,
        genOne:
          // Set overhead
          827 +
          // Set entry overhead
          27,
        // Sets do not retain the StaticJsNumber wrapper, and the unwrapped value
        // is an inline SMI (RawNumber = 0), so nothing more is charged.
      },
    },
    {
      name: "Set with number (HeapNumber) value",
      factory: (realm) => {
        const set = realm.types.set();
        set.addValueSync(realm.types.number(3.14));
        return set;
      },
      script: {
        preamble: `let s`,
        preambleAllocationSize: weightOfRawString("s"),
        expression: `(s = new Set(), s.add(3.14), s)`,
      },
      size: {
        genZero:
          // Set overhead
          827 +
          // Set entry overhead
          27 +
          // The caller's StaticJsNumber wrapper...
          40 +
          // ...whose non-SMI value is boxed as a 16 byte HeapNumber.
          16,
        genOne:
          // Set overhead
          827 +
          // Set entry overhead
          27 +
          // Sets do not retain the StaticJsNumber wrapper, but the unwrapped value
          // is a boxed HeapNumber (RawNumber = 16 for a non-SMI).
          16,
      },
    },
    {
      name: "Set with string value",
      factory: (realm) => {
        const set = realm.types.set();
        set.addValueSync(realm.types.string("value"));
        return set;
      },
      script: {
        preamble: `let s`,
        preambleAllocationSize: weightOfRawString("s"),
        expression: `(s = new Set(), s.add("value"), s)`,
      },
      size: {
        genZero:
          // String overhead
          56 +
          // String content (16 byte header + 1 byte per char)
          weightOfRawString("value") +
          // Set overhead
          827 +
          // Set entry overhead
          27,
        // Set gen zero does not count the string overhead,
        // as it assumes the caller created one.
        genOne:
          // Sets do not retain a StaticJsString, so
          // the + 56 overhead for one is not counted.
          // Set overhead
          827 +
          // Set entry overhead
          27 +
          // Set entry string content (16 byte header + 1 byte per char)
          weightOfRawString("value"),
      },
    },
    {
      name: "Empty Map",
      factory: (realm) => realm.types.map(),
      script: `new Map();`,
      size: 880,
    },
    {
      name: "Map with string key and number value",
      factory: (realm) => {
        const map = realm.types.map();
        map.setValueSync(realm.types.string("key"), realm.types.number(1));
        return map;
      },
      script: {
        preamble: `let m`,
        preambleAllocationSize: weightOfRawString("m"),
        expression: `(m = new Map(), m.set("key", 1), m)`,
      },
      size: {
        genZero:
          // Map overhead
          880 +
          // Map entry overhead
          37 +
          // String overhead
          56 +
          // String key content (16 byte header + 1 byte per char)
          weightOfRawString("key") +
          // Map entry value number overhead
          40,
        genOne:
          // Map overhead
          880 +
          // Map entry overhead
          37 +
          // Map entries do not retain a StaticJsString, so
          // the + 56 overhead for one is not counted.
          // Map key string content (16 byte header + 1 byte per char)
          weightOfRawString("key") +
          // Map entry value number overhead
          40,
      },
    },
    {
      name: "Map with number (HeapNumber) key and number value",
      factory: (realm) => {
        const map = realm.types.map();
        map.setValueSync(realm.types.number(3.14), realm.types.number(1));
        return map;
      },
      script: {
        preamble: `let m`,
        preambleAllocationSize: weightOfRawString("m"),
        expression: `(m = new Map(), m.set(3.14, 1), m)`,
      },
      size: {
        genZero:
          // Map overhead
          880 +
          // Map entry overhead
          37 +
          // The caller's key StaticJsNumber wrapper...
          40 +
          // ...whose non-SMI value is boxed as a 16 byte HeapNumber.
          16 +
          // Map entry value number overhead (SMI, so no HeapNumber box)
          40,
        genOne:
          // Map overhead
          880 +
          // Map entry overhead
          37 +
          // Maps do not retain the key's StaticJsNumber wrapper, but the unwrapped
          // key is a boxed HeapNumber (RawNumber = 16 for a non-SMI).
          16 +
          // The retained StaticJsNumber value (SMI, RawNumber = 0).
          40,
      },
    },
  ])("$name", ({ factory, script, size }) => {
    describe("Gen Zero", () => {
      it("Allocates when not in a task", () => {
        const realm = new StaticJsRealm();
        realm.memory.sweep();
        const value = factory(realm);

        const expectedSize = getGenZeroSize(size, "factory");
        expect(realm.memory.genZeroSize).toBe(expectedSize);
        void value;
      });

      it("Allocates when in a script", () => {
        const measure = vi.fn();

        const bindingSize = weightOfRawString("value");

        const preambleSize =
          typeof script === "object" && script.preambleAllocationSize
            ? script.preambleAllocationSize
            : 0;

        const realm = new StaticJsRealm({
          global: {
            properties: {
              measure: {
                value: () => {
                  // Don't include the size of our value binding.
                  measure(realm.memory.genZeroSize - bindingSize - preambleSize);
                },
              },
            },
          },
        });
        realm.memory.sweep();

        if (typeof script === "object") {
          realm.evaluateScriptSync(
            `${script.preamble};
            const value = ${script.expression};
            measure();`,
          );
        } else {
          realm.evaluateScriptSync(`
            const value = ${script};
            measure();
          `);
        }

        const expectedSize = getGenZeroSize(size, "script");
        expect(measure).toHaveBeenCalledWith(expectedSize);
      });

      it("Allocates when in a task", () => {
        const measure = vi.fn();

        const realm = new StaticJsRealm();

        realm.global.defineOwnPropertySync("act", {
          value: realm.types.function("act", function* () {
            const value = factory(realm);
            measure(realm.memory.genZeroSize);
            return value;
          }),
        });

        realm.memory.sweep();

        realm.evaluateScriptSync("act();");

        const expectedSize = getGenZeroSize(size, "factory");
        expect(measure).toHaveBeenCalledWith(expectedSize);
      });
    });

    const genOneSize = getGenOneSize(size);

    if (genOneSize) {
      describe("Gen One", () => {
        it("Retains the allocation after a sweep", () => {
          const realm = new StaticJsRealm();

          realm.memory.sweep();
          const initialMemory = realm.memory.genOneSize;

          // The key on globalThis also counts as an allocation
          const keySize =
            // Property overhead
            212 +
            // Property key string content (16 byte header + 1 byte per char)
            weightOfRawString("_value");

          if (typeof script === "object") {
            realm.evaluateScriptSync(
              `{
                ${script.preamble}
                globalThis._value = ${script.expression};
              }`,
            );
          } else {
            realm.evaluateScriptSync(`globalThis._value = ${script};`);
          }
          realm.memory.sweep();

          // We don't need to take the preamble allocation into account,
          // as we do that in a block decl env that is disposed on sweep.

          const allocated = realm.memory.genOneSize - initialMemory - keySize;
          expect(allocated).toBe(genOneSize);
        });
      });
    }
  });

  it("Throws an out of memory error when memory is exhausted", () => {
    const realm = new StaticJsRealm({
      maxMemorySize: 10_000,
    });

    realm.evaluateScriptSync(`globalThis.value = [];`);
    realm.evaluateScriptSync(`globalThis.value.push("Hello, World!");`);

    const overallocate = () => {
      for (let i = 0; i < 1000; i++) {
        realm.evaluateScriptSync(`globalThis.value.push("Hello, World!");`);
      }
    };

    expect(overallocate).toThrow(StaticJsOutOfMemoryError);
  });

  it("Sweeps when the high watermark is exceeded", () => {
    const realm = new StaticJsRealm({
      memoryHighWatermark: 10_000,
    });

    realm.evaluateScriptSync(`globalThis.value = [];`);
    realm.evaluateScriptSync(`globalThis.value.push("Hello, World!");`);
    expect(realm.memory.genOneSize).toBe(0);

    for (let i = 0; i < 1000; i++) {
      realm.evaluateScriptSync(`globalThis.value.push("Hello, World!");`);
    }

    expect(realm.memory.genOneSize).not.toBe(0);
  });

  it("Traces marks through function environments", () => {
    const realm = new StaticJsRealm();
    realm.evaluateScriptSync(`
      function makeCounter() {
        let values = [];
        for (let i = 0; i < 100; i++) {
          values.push("Hello, World!");
        }
        return function() {
          return values;
        };
      }

      globalThis.makeCounter = makeCounter;
    `);

    realm.memory.sweep();
    const initialMemory = realm.memory.genOneSize;

    realm.evaluateScriptSync(`
      globalThis.counter = globalThis.makeCounter();
      delete globalThis.makeCounter;
    `);
    realm.memory.sweep();
    const counterInvokedMemory = realm.memory.genOneSize;
    expect(counterInvokedMemory).toBeGreaterThan(initialMemory);

    realm.evaluateScriptSync(`delete globalThis.counter;`);
    realm.memory.sweep();
    const counterClearedMemory = realm.memory.genOneSize;
    expect(counterClearedMemory).toBe(initialMemory);
  });

  describe("Async function closures", () => {
    it("Traces marks through async function environments when resolved", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `
        async function bigAllocate() {
          const { promise, resolve } = Promise.withResolvers();
          globalThis.resolve = resolve;
          let values = [];
          for (let i = 0; i < 1000; i++) {
            values.push("${str}");
          }
          await promise;
          return values.length;
        };
        globalThis.makeAllocator = bigAllocate;
        `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      realm.evaluateScriptSync(`globalThis.makeAllocator();`);
      realm.memory.sweep();
      expect(realm.memory.genOneSize).toBeGreaterThan(initialMemory);
      expect(realm.memory.genOneSize - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await realm.evaluateScript(`globalThis.resolve(); delete globalThis.resolve;`, {
        topLevelAwait: true,
      });
      realm.memory.sweep();

      expect(realm.memory.genOneSize).toBe(initialMemory);
    });

    it("Traces marks through async function environments when rejected", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `async function bigAllocate() {
          const { promise, reject } = Promise.withResolvers();
          globalThis.reject = reject;
          let values = [];
          for (let i = 0; i < 1000; i++) {
            values.push("${str}");
          }
          await promise;
          return values.length;
        };
        globalThis.makeAllocator = bigAllocate;
        `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      realm.evaluateScriptSync(`globalThis.makeAllocator().catch(() => {});`);
      realm.memory.sweep();
      expect(realm.memory.genOneSize).toBeGreaterThan(initialMemory);
      expect(realm.memory.genOneSize - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await realm.evaluateScript(
        `globalThis.reject(new Error("Intentional error")); delete globalThis.reject;`,
        {
          topLevelAwait: true,
        },
      );
      realm.memory.sweep();

      expect(realm.memory.genOneSize).toBe(initialMemory);
    });
  });

  describe("Generator closures", () => {
    it("Traces marks through generator environments", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `function* bigAllocate() {
        let values = [];
        for (let i = 0; i < 1000; i++) {
          values.push("${str}");
        }
        yield;
        return values.length;
      };
      globalThis.makeAllocator = bigAllocate;
      // Dummy object, to be equal to the object overhead when we get an allocator.
      globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      realm.evaluateScriptSync(
        `globalThis.allocator = globalThis.makeAllocator(); globalThis.allocator.next()`,
      );
      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`globalThis.allocator.next();`);

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through nested generator environments", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `function* bigAllocate() {
          let values = [];
          for (let i = 0; i < 1_000; i++) {
            values.push("${str}");
          }
          const inner = bigAllocate2();
          inner.next();
          yield;
          return values.length;
        };
        function* bigAllocate2() {
          let values = [];
          for (let i = 0; i < 1_000; i++) {
            values.push("${str}");
          }
          yield;
          return values.length;
        };
        globalThis.makeAllocator = bigAllocate;
        // Dummy object, to be equal to the object overhead when we get an allocator.
        globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 2_000;

      realm.evaluateScriptSync(
        `globalThis.allocator = globalThis.makeAllocator(); globalThis.allocator.next()`,
      );
      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`globalThis.allocator.next();`);

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through generator environments that throw", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `function* bigAllocate() {
        let values = [];
        for (let i = 0; i < 1000; i++) {
          values.push("${str}");
        }
        yield;
        throw new Error("Intentional error");
      };
      globalThis.makeAllocator = bigAllocate;
      // Dummy object, to be equal to the object overhead when we get an allocator.
      globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      realm.evaluateScriptSync(
        `globalThis.allocator = globalThis.makeAllocator(); globalThis.allocator.next()`,
      );

      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      expect(() => realm.evaluateScriptSync(`globalThis.allocator.next();`)).toThrow(
        "Intentional error",
      );

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through generator environments that resume abruptly", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `function* bigAllocate() {
        let values = [];
        for (let i = 0; i < 1000; i++) {
          values.push("${str}");
        }
        yield;
        return values.length;
      };
      globalThis.makeAllocator = bigAllocate;
      // Dummy object, to be equal to the object overhead when we get an allocator.
      globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      realm.evaluateScriptSync(
        `globalThis.allocator = globalThis.makeAllocator(); globalThis.allocator.next()`,
      );

      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      expect(() =>
        realm.evaluateScriptSync(`globalThis.allocator.throw(new Error("Intentional error"));`),
      ).toThrow("Intentional error");

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });
  });

  describe("Async generator closures", () => {
    it("Traces marks through async generator environments", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `async function* bigAllocate() {
        let values = [];
        for (let i = 0; i < 1000; i++) {
          values.push("${str}");
        }
        yield;
        return values.length;
      };
      globalThis.makeAllocator = bigAllocate;
      // Dummy object, to be equal to the object overhead when we get an allocator.
      globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      await realm.evaluateScript(
        `globalThis.allocator = globalThis.makeAllocator(); await globalThis.allocator.next()`,
        { topLevelAwait: true },
      );
      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await realm.evaluateScript(`globalThis.allocator.next()`, { topLevelAwait: true });

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through async generator environments that throw", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `async function* bigAllocate() {
        let values = [];
        for (let i = 0; i < 1000; i++) {
          values.push("${str}");
        }
        yield;
        throw new Error("Intentional error");
      };
      globalThis.makeAllocator = bigAllocate;
      // Dummy object, to be equal to the object overhead when we get an allocator.
      globalThis.allocator = {};
      `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      await realm.evaluateScript(
        `globalThis.allocator = globalThis.makeAllocator(); await globalThis.allocator.next()`,
        { topLevelAwait: true },
      );
      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await expect(
        realm.evaluateScript(`globalThis.allocator.next()`, { topLevelAwait: true }),
      ).rejects.toThrow("Intentional error");

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through async generator environments that resume abruptly", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `async function* bigAllocate() {
          let values = [];
          for (let i = 0; i < 1000; i++) {
            values.push("${str}");
          }
          yield;
          return values.length;
        };
        globalThis.makeAllocator = bigAllocate;
        // Dummy object, to be equal to the object overhead when we get an allocator.
        globalThis.allocator = {};
        `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      const expectedIncrease = (56 + weightOfRawString(str)) * 1000;

      await realm.evaluateScript(
        `globalThis.allocator = globalThis.makeAllocator(); await globalThis.allocator.next()`,
        { topLevelAwait: true },
      );
      realm.memory.sweep();

      // At this point, the generator should be suspended while holding onto the array of strings, so we should have a memory increase.
      const invokeMemory = realm.memory.genOneSize;
      expect(invokeMemory).toBeGreaterThan(initialMemory);
      expect(invokeMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await expect(
        realm.evaluateScript(`globalThis.allocator.throw(new Error("Intentional error"))`, {
          topLevelAwait: true,
        }),
      ).rejects.toThrow("Intentional error");

      // Now, the generator should have completed, disconnecting and orphaning its captured environment.
      // Since we stubbed allocator with a dummy object, the decl name and gen object overhead should reach initial levels.
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Tracks marks through next queue", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(
        `async function* test() {
          const { promise, resolve } = Promise.withResolvers();
          globalThis.resolve = resolve;
          await promise;
          yield;
        }
        `,
      );
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      await realm.evaluateScript(`globalThis.generator = test();`, { topLevelAwait: true });
      realm.memory.sweep();

      const generatorMemory = realm.memory.genOneSize;
      expect(generatorMemory).toBeGreaterThan(initialMemory);

      await realm.evaluateScript(`await globalThis.generator.next("${str}");`, {
        topLevelAwait: true,
      });
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterNextMemory = realm.memory.genOneSize;
      expect(afterNextMemory).toBeGreaterThan(initialMemory);
      // Expect the queued payload to stick around.
      expect(afterNextMemory - generatorMemory).toBeGreaterThanOrEqual(expectedIncrease);

      await realm.evaluateScript(`globalThis.resolve();`, {
        topLevelAwait: true,
      });
      realm.memory.sweep();
      // Expect the queued payload to have drained.
      expect(realm.memory.genOneSize - afterNextMemory).toBeLessThanOrEqual(expectedIncrease);

      await realm.evaluateScript(`delete globalThis.resolve; delete globalThis.generator;`);
      realm.memory.sweep();
      // Nothing should be left.
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });
  });

  describe("Promises", () => {
    it("Traces marks through promise results", async () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      realm.evaluateScriptSync(
        `globalThis.promise = new Promise((resolve) => {
          resolve("${str}");
        });`,
      );
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterPromiseMemory = realm.memory.genOneSize;
      expect(afterPromiseMemory).toBeGreaterThan(initialMemory);
      expect(afterPromiseMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`delete globalThis.promise;`);
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Charges the ambient wrapper cost in place of the ordinary object base", () => {
      const realm = new StaticJsRealm();
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      // A pending promise with no reactions and no settled result: the wrapper in
      // isolation. The executor and the constructor's resolving functions are not
      // retained, so only the promise wrapper survives the sweep.
      realm.evaluateScriptSync(`globalThis.p = new Promise(function(){});`);
      realm.memory.sweep();

      // The globalThis.p property (overhead + key chars) plus the promise wrapper.
      const keySize = 212 + weightOfRawString("p");
      expect(realm.memory.genOneSize - initialMemory - keySize).toBe(768);
    });

    it("Charges per retained reaction record on a pending promise", () => {
      const realm = new StaticJsRealm();
      const promise = StaticJsPromiseImpl.create({ realm });
      realm.memory.pin(promise);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      // thenEvaluator with resultCapability=false and no handlers retains bare
      // reaction records (null capability, null handler), isolating their overhead.
      // Each call pushes a fulfill + reject pair.
      const reactionPairs = 10;
      for (let i = 0; i < reactionPairs; i++) {
        realm.invokeEvaluatorSync(() => promise.thenEvaluator(undefined, undefined, false));
      }
      realm.memory.sweep();

      expect(realm.memory.genOneSize - initialMemory).toBe(reactionPairs * 2 * 48);
    });
  });

  describe("Functions", () => {
    it("Charges the retained AST proportional to source-text length", () => {
      // A function retains its parsed babel AST, not just its source text. The
      // accounting charges that tree proportionally to sourceText.length (the
      // StaticJsAstFunctionNode weight, ~325 bytes/char worst case).
      function measure(body: string): number {
        const realm = new StaticJsRealm();
        realm.memory.sweep();
        const initial = realm.memory.genOneSize;
        realm.evaluateScriptSync(`globalThis.fn = function f(){${body}};`);
        realm.memory.sweep();
        return realm.memory.genOneSize - initial;
      }

      const padding = `/* ${"x".repeat(1000)} */`;
      const rawStringCount = weightOfRawString(padding) - 16; // The 16 bytes are included in the empty set as well as the padding set.
      const nodeEstimateCount = weightOfAstNodePerSourceText(padding);
      expect(measure(padding) - measure("")).toBe(rawStringCount + nodeEstimateCount);
    });

    it("Charges the ambient wrapper cost in place of the ordinary object base", () => {
      const realm = new StaticJsRealm();
      // A bare function with a shared node and empty source text, with no own
      // properties: isolates the wrapper from its AST, source, and properties.
      const file = parseAst("function f(){}", { ...babelParserOptions, sourceType: "script" });
      const node = file.program.body[0] as unknown as StaticJsAstFunctionNode;

      const fn = StaticJsAstFunction.create({
        realm,
        node,
        sourceText: "",
        thisMode: "non-lexical-this",
        strict: false,
        env: realm.globalEnv,
        scriptOrModule: null,
      });
      realm.memory.pin(fn);
      realm.memory.sweep();

      // The StaticJsAstFunction wrapper (745) plus the empty source string's
      // 16-byte header (RawStringCharacter at length 0); the AST node is shared
      // and not markable, so it adds nothing here.
      expect(realm.memory.genOneSize).toBe(745 + 16);
    });

    it("Traces mark through nested function environments", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(`
        function makeFunc() {
          const str = "${str}";
          function create() {
            return function func() {
              return str;
            }
          }
          return create();
        }
      `);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      realm.evaluateScriptSync(`globalThis.func = makeFunc();`);
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterFuncMemory = realm.memory.genOneSize;
      expect(afterFuncMemory).toBeGreaterThan(initialMemory);
      expect(afterFuncMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`delete globalThis.func;`);
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });
  });

  describe("Bound functions", () => {
    it("Traces marks through bound function arguments", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(`function test() {}`);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      realm.evaluateScriptSync(`
        function test() {}
        globalThis.bound = test.bind(null, "${str}");
      `);
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterBoundMemory = realm.memory.genOneSize;
      expect(afterBoundMemory).toBeGreaterThan(initialMemory);
      expect(afterBoundMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`delete globalThis.bound;`);
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through bound function thisArg", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(`function test() {}`);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      realm.evaluateScriptSync(`
        function test() {}
        globalThis.bound = test.bind("${str}");
      `);
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterBoundMemory = realm.memory.genOneSize;
      expect(afterBoundMemory).toBeGreaterThan(initialMemory);
      expect(afterBoundMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`delete globalThis.bound;`);
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });

    it("Traces marks through the bound function target", () => {
      const realm = new StaticJsRealm();
      const str = "x".repeat(10_000);
      realm.evaluateScriptSync(`
        function createFunc() {
          const str = "${str}";
          return function func() {
            return str;
          }
        }
      `);
      realm.memory.sweep();
      const initialMemory = realm.memory.genOneSize;

      realm.evaluateScriptSync(`globalThis.bound = createFunc().bind(null);`);
      realm.memory.sweep();

      const expectedIncrease = 56 + weightOfRawString(str);

      const afterBoundMemory = realm.memory.genOneSize;
      expect(afterBoundMemory).toBeGreaterThan(initialMemory);
      expect(afterBoundMemory - initialMemory).toBeGreaterThanOrEqual(expectedIncrease);

      realm.evaluateScriptSync(`delete globalThis.bound;`);
      realm.memory.sweep();
      const clearedMemory = realm.memory.genOneSize;
      expect(clearedMemory).toBe(initialMemory);
    });
  });
});
