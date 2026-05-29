import { describe, it, expect } from "vitest";

import { StaticJsRealm, type StaticJsObject, type StaticJsCallable } from "../../../src/index.js";
import { IntrinsicsRecord } from "../../../src/runtime/intrinsics/intrinsics.js";

describe("E2E: toStaticJsValue with HostAccessOptions", () => {
  describe("default (no opts) — preserves locked-down behavior", () => {
    it("exposes only own enumerable properties", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      Object.defineProperty(host, "secret", { value: 42, enumerable: false });
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("a").toNative()).toBe(1);
      expect(wrapped.getSync("secret").toNative()).toBe(undefined);
    });

    it("does not walk the prototype chain", () => {
      class Greeter {
        greet() {
          return "hi";
        }
      }
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(new Greeter());
      expect(wrapped.getSync("greet").toNative()).toBe(undefined);
    });
  });

  describe("walkPrototype + includeNonEnumerable", () => {
    it("exposes class methods", () => {
      class Greeter {
        greet() {
          return "hi";
        }
      }
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(new Greeter(), {
        walkPrototype: true,
        includeNonEnumerable: true,
      });
      const greet = wrapped.getSync("greet") as StaticJsCallable;
      const result = greet.callSync(wrapped, []);
      expect(result.toNative()).toBe("hi");
    });
  });

  describe("writable", () => {
    it("allows host mutation when writable: true", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { writable: true });
      wrapped.setSync("x", realm.types.number(7));
      expect(host.x).toBe(7);
    });

    it("rejects writes when writable is omitted", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host);
      const ok = wrapped.setSync("x", realm.types.number(7));
      expect(ok).toBe(false);
      expect(host.x).toBe(1);
    });
  });

  describe("useSandboxThis", () => {
    it("passes the sandbox-side this (round-tripped) to host methods", () => {
      class Holder {
        observed: object | undefined;
        capture(this: Holder) {
          this.observed = this;
          return this;
        }
      }
      const realm = new StaticJsRealm();
      const host = new Holder();
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        useSandboxThis: true,
      });
      const capture = wrapped.getSync("capture") as StaticJsCallable;
      capture.callSync(wrapped, []);
      expect(host.observed).toBe(host);
    });
  });

  describe("childPolicy", () => {
    it("strips a subtree when childPolicy returns false", () => {
      class Child {
        secret() {
          return "leak";
        }
      }
      const realm = new StaticJsRealm();
      const child = new Child();
      const host = { child };
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: () => false,
      });
      const wrappedChild = wrapped.getSync("child") as StaticJsObject;
      expect(wrappedChild.getSync("secret").toNative()).toBe(undefined);
    });

    it("re-roots policy when childPolicy returns an object", () => {
      class Child {
        secret() {
          return "ok";
        }
      }
      const realm = new StaticJsRealm();
      const host = { child: new Child() };
      const wrapped = realm.types.toStaticJsValue(host, {
        childPolicy: () => ({ walkPrototype: true, includeNonEnumerable: true }),
      });
      const wrappedChild = wrapped.getSync("child") as StaticJsObject;
      const secret = wrappedChild.getSync("secret") as StaticJsCallable;
      expect(secret.callSync(wrappedChild, []).toNative()).toBe("ok");
    });

    it("reuses parent policy when childPolicy returns true", () => {
      class Child {
        m() {
          return "y";
        }
      }
      const realm = new StaticJsRealm();
      const host = { child: new Child() };
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });
      const wrappedChild = wrapped.getSync("child") as StaticJsObject;
      expect(
        (wrappedChild.getSync("m") as StaticJsCallable).callSync(wrappedChild, []).toNative(),
      ).toBe("y");
    });
  });

  describe("identity cache", () => {
    it("returns === wrapper for same (host, policy)", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const a = realm.types.toStaticJsValue(host, { walkPrototype: true });
      const b = realm.types.toStaticJsValue(host, { walkPrototype: true });
      expect(a).toBe(b);
    });

    it("returns !== wrappers for same host with different policies", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const a = realm.types.toStaticJsValue(host, { walkPrototype: true });
      const b = realm.types.toStaticJsValue(host, { walkPrototype: false });
      expect(a).not.toBe(b);
    });

    it("shares the cache slot for the same childPolicy reference", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const g = () => false as const;
      const a = realm.types.toStaticJsValue(host, { childPolicy: g });
      const b = realm.types.toStaticJsValue(host, { childPolicy: g });
      expect(a).toBe(b);
    });
  });

  describe("intrinsic masking", () => {
    // Every constructor and prototype intrinsic in IntrinsicsRecord, mapped to
    // its reachable host built-in. Wrapping a host built-in directly should
    // return the realm's own intrinsic ("identity masking"). Non-constructor
    // functions (eval, isFinite, parseInt, ...), plain objects (Math, Reflect),
    // well-known symbols, and the internal prototypes with no host handle
    // (ForInIteratorPrototype, AsyncFromSyncIteratorPrototype) are out of scope.
    const asyncFn = async function () {};
    const generatorFn = function* () {};
    const asyncGeneratorFn = async function* () {};

    describe.each([
      // Constructors
      { source: AggregateError, intrinsic: "AggregateError" },
      { source: Array, intrinsic: "Array" },
      { source: Object.getPrototypeOf(asyncFn).constructor, intrinsic: "AsyncFunction" },
      {
        source: Object.getPrototypeOf(asyncGeneratorFn).constructor,
        intrinsic: "AsyncGeneratorFunction",
      },
      { source: Boolean, intrinsic: "Boolean" },
      { source: Error, intrinsic: "Error" },
      { source: EvalError, intrinsic: "EvalError" },
      { source: Function, intrinsic: "Function" },
      { source: Object.getPrototypeOf(generatorFn).constructor, intrinsic: "GeneratorFunction" },
      { source: Iterator, intrinsic: "Iterator" },
      { source: Map, intrinsic: "Map" },
      { source: Number, intrinsic: "Number" },
      { source: Object, intrinsic: "Object" },
      { source: Promise, intrinsic: "Promise" },
      { source: Proxy, intrinsic: "Proxy" },
      { source: RangeError, intrinsic: "RangeError" },
      { source: ReferenceError, intrinsic: "ReferenceError" },
      { source: Set, intrinsic: "Set" },
      { source: String, intrinsic: "String" },
      { source: Symbol, intrinsic: "Symbol" },
      { source: SyntaxError, intrinsic: "SyntaxError" },
      { source: TypeError, intrinsic: "TypeError" },
      { source: URIError, intrinsic: "URIError" },

      // Prototypes
      { source: Array.prototype, intrinsic: "Array.prototype" },
      {
        source: Object.getPrototypeOf([][Symbol.iterator]()),
        intrinsic: "ArrayIteratorPrototype",
      },
      { source: Object.getPrototypeOf(asyncFn), intrinsic: "AsyncFunction.prototype" },
      {
        source: Object.getPrototypeOf(asyncGeneratorFn),
        intrinsic: "AsyncGeneratorFunction.prototype",
      },
      {
        source: Object.getPrototypeOf(asyncGeneratorFn()),
        intrinsic: "AsyncGeneratorPrototype",
      },
      {
        source: Object.getPrototypeOf(Object.getPrototypeOf(asyncGeneratorFn())),
        intrinsic: "AsyncIteratorPrototype",
      },
      { source: Boolean.prototype, intrinsic: "Boolean.prototype" },
      { source: Error.prototype, intrinsic: "Error.prototype" },
      { source: EvalError.prototype, intrinsic: "EvalError.prototype" },
      { source: Function.prototype, intrinsic: "Function.prototype" },
      { source: Object.getPrototypeOf(generatorFn), intrinsic: "GeneratorFunction.prototype" },
      { source: Object.getPrototypeOf(generatorFn()), intrinsic: "GeneratorPrototype" },
      { source: Iterator.prototype, intrinsic: "Iterator.prototype" },
      {
        source: Object.getPrototypeOf([].values().map((x) => x)),
        intrinsic: "IteratorHelperPrototype",
      },
      { source: Map.prototype, intrinsic: "Map.prototype" },
      { source: Number.prototype, intrinsic: "Number.prototype" },
      { source: Object.prototype, intrinsic: "Object.prototype" },
      { source: Promise.prototype, intrinsic: "Promise.prototype" },
      { source: RangeError.prototype, intrinsic: "RangeError.prototype" },
      { source: ReferenceError.prototype, intrinsic: "ReferenceError.prototype" },
      { source: Set.prototype, intrinsic: "Set.prototype" },
      {
        source: Object.getPrototypeOf(new Set()[Symbol.iterator]()),
        intrinsic: "SetIteratorPrototype",
      },
      { source: String.prototype, intrinsic: "String.prototype" },
      {
        source: Object.getPrototypeOf(""[Symbol.iterator]()),
        intrinsic: "StringIteratorPrototype",
      },
      { source: Symbol.prototype, intrinsic: "Symbol.prototype" },
      { source: SyntaxError.prototype, intrinsic: "SyntaxError.prototype" },
      { source: TypeError.prototype, intrinsic: "TypeError.prototype" },
      { source: URIError.prototype, intrinsic: "URIError.prototype" },
    ] satisfies { source: any; intrinsic: keyof IntrinsicsRecord }[])(
      "$intrinsic",
      ({ source, intrinsic }) => {
        it(`maps host ${intrinsic} to realm intrinsic ${intrinsic} on properties`, () => {
          const realm = new StaticJsRealm();
          const obj = {
            value: source,
          };
          const wrapped = realm.types.toStaticJsValue(obj);
          expect(wrapped.getSync("value")).toBe(realm.intrinsics[intrinsic]);
        });
      },
    );

    it("rawPrototypes: true exposes the host prototype as a wrapper", () => {
      const realm = new StaticJsRealm();
      class Custom {}
      const host = new Custom();
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        rawPrototypes: true,
        childPolicy: "inherit",
      });
      const proto = wrapped.getPrototypeOfSync();
      expect(proto).not.toBe(realm.intrinsics["Object.prototype"]);
    });
  });

  describe("function return values", () => {
    it("wraps host function return values under the same policy", () => {
      class Child {
        m() {
          return "n";
        }
      }
      const host = {
        make: () => new Child(),
      };
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });
      const make = wrapped.getSync("make") as StaticJsCallable;
      const child = make.callSync(wrapped, []) as StaticJsObject;
      const m = child.getSync("m") as StaticJsCallable;
      expect(m.callSync(child, []).toNative()).toBe("n");
    });
  });

  describe("realm hostAccessDefaults", () => {
    it("uses the realm default when toStaticJsValue is called without opts", () => {
      const realm = new StaticJsRealm({
        hostAccessDefaults: { walkPrototype: true, includeNonEnumerable: true },
      });
      class Greeter {
        hi() {
          return "h";
        }
      }
      const wrapped = realm.types.toStaticJsValue(new Greeter());
      expect((wrapped.getSync("hi") as StaticJsCallable).callSync(wrapped, []).toNative()).toBe(
        "h",
      );
    });

    it("explicit opts fully replace the realm default (no merging)", () => {
      const realm = new StaticJsRealm({
        hostAccessDefaults: { walkPrototype: true, includeNonEnumerable: true },
      });
      class Greeter {
        hi() {
          return "h";
        }
      }
      const wrapped = realm.types.toStaticJsValue(new Greeter(), { writable: true });
      expect(wrapped.getSync("hi").toNative()).toBe(undefined);
    });
  });
});
