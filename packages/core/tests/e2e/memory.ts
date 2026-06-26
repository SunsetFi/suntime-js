import { describe, it, expect, vi } from "vitest";

import { StaticJsOutOfMemoryError } from "#errors/StaticJsOutOfMemoryError.js";

import { StaticJsRealm, type StaticJsValue } from "../../src/index.js";

describe("E2E: Memory", () => {
  interface MemoryTestCase {
    name: string;
    factory: (realm: StaticJsRealm) => StaticJsValue;
    script: string;
    size: number | { factory: number; script: number };
    genOneSize?: number | null;
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
        // string content
        "Hello, World!".length * 2,
    },
    {
      name: "Boolean True",
      factory: (realm) => realm.types.boolean(true),
      script: `true;`,
      // Should use shared.
      size: 0,
      // Can or cannot count as a single instance depending if anyone else has stored one.
      genOneSize: null,
    },
    {
      name: "Boolean False",
      factory: (realm) => realm.types.boolean(false),
      script: `false;`,
      // Should use shared.
      size: 0,
      // Can or cannot count as a single instance depending if anyone else has stored one.
      genOneSize: null,
    },
    {
      name: "Number",
      factory: (realm) => realm.types.number(42),
      script: `42;`,
      size: 40,
    },
    {
      name: "Null",
      factory: (realm) => realm.types.null,
      script: `null;`,
      // Should use shared.
      size: 0,
      // Can or cannot count as a single instance depending if anyone else has stored one.
      genOneSize: null,
    },
    {
      name: "Undefined",
      factory: (realm) => realm.types.undefined,
      script: `undefined;`,
      // Should use shared.
      size: 0,
    },
    {
      name: "Symbol",
      factory: (realm) => realm.types.symbol("sym"),
      script: `Symbol("sym");`,
      size: {
        factory:
          // symbol overhead
          655 +
          // symbol description string overhead
          "sym".length * 2,
        script:
          // String to make the symbol description
          56 +
          // String content
          "sym".length * 2 +
          // symbol overhead
          655 +
          // symbol description string overhead
          "sym".length * 2,
      },
      genOneSize:
        // symbol overhead
        655 +
        // symbol description string overhead
        "sym".length * 2,
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
        // Property key string
        "key".length * 2 +
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
          // Symbol description string overhead
          "sym".length * 2 +
          // object overhead
          655 +
          // Property overhead
          212,
        script:
          // String to make the symbol description
          56 +
          // String content
          "sym".length * 2 +
          // Symbol overhead
          655 +
          // Symbol description string overhead
          "sym".length * 2 +
          // object overhead
          655 +
          // Property overhead
          212,
      },
      genOneSize:
        // Symbol overhead
        655 +
        // Symbol description string overhead
        "sym".length * 2 +
        // object overhead
        655 +
        // Property overhead
        212,
    },
  ])("$name", ({ factory, script, size, genOneSize }) => {
    describe("Gen Zero", () => {
      // Original plan was to not track these, and just end up tracking them in a sweep if they ever got added.
      // But now sweeps might not happen unless needed, and I still want to track things triggered by toNative proxies,
      // so we should track them ahead of time.
      it("Allocates when not in a task", () => {
        const realm = new StaticJsRealm();
        realm.memory.sweep();
        const value = factory(realm);
        if (typeof size === "object") {
          expect(realm.memory.genZeroSize).toBe(size.factory);
        } else {
          expect(realm.memory.genZeroSize).toBe(size);
        }
        void value;
      });

      it("Allocates when in a script", () => {
        const measure = vi.fn();
        const realm = new StaticJsRealm({
          global: {
            properties: {
              measure: {
                value: () => {
                  measure(realm.memory.genZeroSize);
                },
              },
            },
          },
        });
        realm.memory.sweep();

        realm.evaluateScriptSync(`
          const value = ${script};
          measure();
        `);

        if (typeof size === "object") {
          expect(measure).toHaveBeenCalledWith(size.script);
        } else {
          expect(measure).toHaveBeenCalledWith(size);
        }
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

        if (typeof size === "object") {
          expect(measure).toHaveBeenCalledWith(size.factory);
        } else {
          expect(measure).toHaveBeenCalledWith(size);
        }
      });
    });

    if (genOneSize !== null) {
      describe("Gen One", () => {
        it("Retains the allocation after a sweep", () => {
          const realm = new StaticJsRealm();
          realm.memory.sweep();
          const initialMemory = realm.memory.genOneSize;

          realm.evaluateScriptSync(`globalThis._value = ${script};`);
          realm.memory.sweep();

          // The key also counts as an allocation
          const keyAllocation =
            // Property overhead
            212 +
            // Property key string
            "_value".length * 2;

          const allocated = realm.memory.genOneSize - initialMemory - keyAllocation;
          expect(allocated).toBe(genOneSize ?? size);
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
});
