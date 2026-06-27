import { describe, it, expect, vi } from "vitest";

import { StaticJsOutOfMemoryError } from "#errors/StaticJsOutOfMemoryError.js";

import { StaticJsRealm, type StaticJsValue } from "../../src/index.js";

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
        56 +
        // string content (16 byte header + 1 byte per char)
        (16 + "Hello, World!".length),
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
          (16 + "sym".length),
        script:
          // String to make the symbol description
          56 +
          // String content (16 byte header + 1 byte per char)
          (16 + "sym".length) +
          // symbol overhead
          655 +
          // symbol description string content
          (16 + "sym".length),
        genOne:
          // symbol overhead
          655 +
          // Symbols don't store a StaticJsString object, so there
          // is no + 56 overhead for one.
          // symbol description string content
          (16 + "sym".length),
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
        (16 + "key".length) +
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
          (16 + "sym".length) +
          // object overhead
          655 +
          // Property overhead
          212,
        script:
          // String to make the symbol description
          56 +
          // String content (16 byte header + 1 byte per char)
          (16 + "sym".length) +
          // Symbol overhead
          655 +
          // Symbol description string content
          (16 + "sym".length) +
          // object overhead
          655 +
          // Property overhead
          212,
        genOne:
          // Symbol overhead
          655 +
          // Symbol description string content
          (16 + "sym".length) +
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
        preambleAllocationSize: 16 + "s".length,
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
        preambleAllocationSize: 16 + "s".length,
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
        preambleAllocationSize: 16 + "s".length,
        expression: `(s = new Set(), s.add("value"), s)`,
      },
      size: {
        genZero:
          // String overhead
          56 +
          // String content (16 byte header + 1 byte per char)
          (16 + "value".length) +
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
          (16 + "value".length),
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
        preambleAllocationSize: 16 + "m".length,
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
          (16 + "key".length) +
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
          (16 + "key".length) +
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
        preambleAllocationSize: 16 + "m".length,
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
      // Original plan was to not track these, and just end up tracking them in a sweep if they ever got added.
      // But now sweeps might not happen unless needed, and I still want to track things triggered by toNative proxies,
      // so we should track them ahead of time.
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

        const bindingSize = 16 + "value".length;

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
            (16 + "_value".length);

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
});
