import { describe, it, expect } from "vitest";

import { StaticJsRealm, type StaticJsObject, type StaticJsCallable } from "../../../src/index.js";
import { IntrinsicsRecord } from "../../../src/runtime/intrinsics/intrinsics.js";
import { isStaticJsUndefined } from "../../../src/runtime/types/StaticJsUndefined.js";
import { expectStaticJsObject } from "../utils/staticjs-expect.js";

describe("E2E: Type Coercion / HostAccessOptions", () => {
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

    it("preserves the host-side this", () => {
      let observed: any;
      class Holder {
        capture(this: Holder) {
          // oxlint-disable-next-line typescript/no-this-alias
          observed = this;
          return this;
        }
      }
      const realm = new StaticJsRealm();
      const host = new Holder();
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
      });
      const capture = wrapped.getSync("capture") as StaticJsCallable;
      const thisArg = realm.types.object();
      capture.callSync(thisArg, []);
      expect(observed).toBe(host);
    });

    it("cannot write to the host object", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host);
      const ok = wrapped.setSync("x", realm.types.number(7));
      expect(ok).toBe(false);
      expect(host.x).toBe(1);
    });

    it("cannot extend the host object", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host);
      const ok = wrapped.setSync("y", realm.types.number(2));
      expect(ok).toBe(false);
      expect((host as any).y).toBeUndefined();
    });

    it("walks child objects", () => {
      const realm = new StaticJsRealm();
      const host = { child: { x: 1 } };
      const wrapped = realm.types.toStaticJsValue(host);
      const child = wrapped.getSync("child");
      expectStaticJsObject(child);
      expect(child.getSync("x").toNative()).toBe(1);
    });

    it("exposes well-known symbols", () => {
      const realm = new StaticJsRealm();
      const host = { [Symbol.iterator]: true };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync(realm.types.toStaticJsValue(Symbol.iterator)).toNative()).toBe(true);
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

    it("inherits walkPrototype + includeNonEnumerable", () => {
      class Greeter {
        greet() {
          return "hi";
        }
      }
      const realm = new StaticJsRealm();
      const host = {
        value: new Greeter(),
      };
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });

      const value = wrapped.getSync("value");
      expectStaticJsObject(value);
      const greet = value.getSync("greet") as StaticJsCallable;
      const result = greet.callSync(value, []);
      expect(result.toNative()).toBe("hi");
    });
  });

  describe("writable", () => {
    it("rejects writes when writable is omitted", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host);
      const ok = wrapped.setSync("x", realm.types.number(7));
      expect(ok).toBe(false);
      expect(host.x).toBe(1);
    });

    it("rejects writes when writable is false", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { writable: false });
      const ok = wrapped.setSync("x", realm.types.number(7));
      expect(ok).toBe(false);
      expect(host.x).toBe(1);
    });

    it("allows host mutation when writable is true", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { writable: true });
      wrapped.setSync("x", realm.types.number(7));
      expect(host.x).toBe(7);
    });

    it("allows transparent writes when writable is 'transparent'", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { writable: "transparent" });
      const ok = wrapped.setSync("x", realm.types.number(7));
      expect(ok).toBe(true);
      expect(wrapped.getSync("x").toNative()).toBe(7);
      expect(host.x).toBe(1);
    });

    it("inherits transparent writes", () => {
      const realm = new StaticJsRealm();

      let savedObj: any;
      function host() {
        savedObj = { x: 1 };
        return savedObj;
      }

      const wrapped = realm.types.toStaticJsValue(host, {
        writable: "transparent",
        childPolicy: "inherit",
      });
      const obj = wrapped.callSync(realm.types.undefined, []);
      expectStaticJsObject(obj);
      const ok = obj.setSync("x", realm.types.number(7));
      expect(ok).toBe(true);
      expect(obj.getSync("x").toNative()).toBe(7);
      expect(savedObj.x).toBe(1);
    });
  });

  describe("extensible", () => {
    it("allows adding properties when extensible: true", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { extensible: true });
      const result = wrapped.setSync("y", realm.types.number(2));
      expect(result).toBe(true);
      expect((host as any).y).toBe(2);
    });

    it("transparently allows adding properties when extensible: 'transparent'", () => {
      const realm = new StaticJsRealm();
      const host = { x: 1 };
      const wrapped = realm.types.toStaticJsValue(host, { extensible: "transparent" });
      const result = wrapped.setSync("y", realm.types.number(2));
      expect(result).toBe(true);
      expect((host as any).y).toBeUndefined();
      expect(wrapped.getSync("y").toNative()).toBe(2);
    });
  });

  describe("useSandboxThis", () => {
    it("passes the sandbox-side this to host methods", () => {
      let observed: any;
      class Holder {
        capture(this: Holder) {
          // oxlint-disable-next-line typescript/no-this-alias
          observed = this;
          return this;
        }
      }
      const realm = new StaticJsRealm();
      const host = new Holder();
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        useSandboxThis: true,
        childPolicy: "inherit",
      });
      const capture = wrapped.getSync("capture") as StaticJsCallable;
      const thisArg = realm.types.object();
      capture.callSync(thisArg, []);

      // Value is called as a native proxy, so get the original back.
      expect(realm.types.toStaticJsValue(observed)).toBe(thisArg);
    });
  });

  describe("childPolicy", () => {
    it("resolves a child to undefined when childPolicy returns false", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const wrapped = realm.types.toStaticJsValue(host, { childPolicy: false });
      expect(wrapped.getSync("nested").toNative()).toBe(undefined);
    });

    it("exposes children by default when childPolicy is omitted", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("nested").toNative()).toEqual({ a: 1 });
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
        // The re-rooted object needs its own childPolicy for the method (a
        // grandchild reached through the prototype) to remain reachable.
        childPolicy: () => ({
          walkPrototype: true,
          includeNonEnumerable: true,
        }),
      });
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      const secret = wrappedChild.getSync("secret") as StaticJsCallable;
      expect(secret.callSync(wrappedChild, []).toNative()).toBe("ok");
    });

    it("reuses the parent policy when childPolicy is 'inherit'", () => {
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
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      expect(
        (wrappedChild.getSync("m") as StaticJsCallable).callSync(wrappedChild, []).toNative(),
      ).toBe("y");
    });

    it("sends children to the realm default policy when childPolicy is 'default'", () => {
      class Child {
        greet() {
          return "hi";
        }
      }
      const realm = new StaticJsRealm({
        hostAccessDefaults: {
          walkPrototype: true,
          includeNonEnumerable: true,
          childPolicy: "inherit",
        },
      });
      const host = { child: new Child() };
      // Root opts are otherwise restrictive; "default" routes the child to the
      // realm defaults, which expose the method.
      const wrapped = realm.types.toStaticJsValue(host, { childPolicy: "default" });
      const child = wrapped.getSync("child");
      expectStaticJsObject(child);
      const greet = child.getSync("greet") as StaticJsCallable;
      expect(greet.callSync(child, []).toNative()).toBe("hi");
    });

    it("lets a childPolicy function choose 'default' or false per object", () => {
      class Allowed {
        m() {
          return "yes";
        }
      }
      class Denied {
        m() {
          return "no";
        }
      }
      const realm = new StaticJsRealm({
        hostAccessDefaults: {
          walkPrototype: true,
          includeNonEnumerable: true,
          childPolicy: "inherit",
        },
      });
      const host = { allowed: new Allowed(), denied: new Denied() };
      const wrapped = realm.types.toStaticJsValue(host, {
        childPolicy: (c) => (c instanceof Allowed ? "default" : false),
      });
      const allowed = wrapped.getSync("allowed");
      expectStaticJsObject(allowed);
      expect((allowed.getSync("m") as StaticJsCallable).callSync(allowed, []).toNative()).toBe(
        "yes",
      );
      expect(wrapped.getSync("denied").toNative()).toBe(undefined);
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
      // TODO: AggregateError
      // { source: AggregateError, intrinsic: "AggregateError" },
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
        toStringTag: "Array Iterator",
      },
      {
        source: Object.getPrototypeOf(asyncFn),
        intrinsic: "AsyncFunction.prototype",
        toStringTag: "AsyncFunction",
      },
      {
        source: Object.getPrototypeOf(asyncGeneratorFn),
        intrinsic: "AsyncGeneratorFunction.prototype",
        toStringTag: "AsyncGeneratorFunction",
      },
      {
        source: Object.getPrototypeOf(asyncGeneratorFn.prototype),
        intrinsic: "AsyncGeneratorPrototype",
        toStringTag: "AsyncGenerator",
      },
      {
        source: Object.getPrototypeOf(
          Object.getPrototypeOf(Object.getPrototypeOf(asyncGeneratorFn())),
        ),
        intrinsic: "AsyncIteratorPrototype",
      },
      { source: Boolean.prototype, intrinsic: "Boolean.prototype" },
      { source: Error.prototype, intrinsic: "Error.prototype" },
      { source: EvalError.prototype, intrinsic: "EvalError.prototype" },
      { source: Function.prototype, intrinsic: "Function.prototype" },
      {
        source: Object.getPrototypeOf(generatorFn),
        intrinsic: "GeneratorFunction.prototype",
        toStringTag: "GeneratorFunction",
      },
      {
        source: Object.getPrototypeOf(generatorFn.prototype),
        intrinsic: "GeneratorPrototype",
        toStringTag: "Generator",
      },
      { source: Iterator.prototype, intrinsic: "Iterator.prototype", toStringTag: "Iterator" },
      {
        source: Object.getPrototypeOf([].values().map((x) => x)),
        intrinsic: "IteratorHelperPrototype",
        toStringTag: "Iterator Helper",
      },
      { source: Map.prototype, intrinsic: "Map.prototype", toStringTag: "Map" },
      { source: Number.prototype, intrinsic: "Number.prototype" },
      { source: Object.prototype, intrinsic: "Object.prototype" },
      { source: Promise.prototype, intrinsic: "Promise.prototype", toStringTag: "Promise" },
      { source: RangeError.prototype, intrinsic: "RangeError.prototype" },
      { source: ReferenceError.prototype, intrinsic: "ReferenceError.prototype" },
      { source: Set.prototype, intrinsic: "Set.prototype", toStringTag: "Set" },
      {
        source: Object.getPrototypeOf(new Set()[Symbol.iterator]()),
        intrinsic: "SetIteratorPrototype",
        toStringTag: "Set Iterator",
      },
      { source: String.prototype, intrinsic: "String.prototype" },
      {
        source: Object.getPrototypeOf(""[Symbol.iterator]()),
        intrinsic: "StringIteratorPrototype",
        toStringTag: "String Iterator",
      },
      { source: Symbol.prototype, intrinsic: "Symbol.prototype", toStringTag: "Symbol" },
      { source: SyntaxError.prototype, intrinsic: "SyntaxError.prototype" },
      { source: TypeError.prototype, intrinsic: "TypeError.prototype" },
      { source: URIError.prototype, intrinsic: "URIError.prototype" },
    ] satisfies {
      source: any;
      intrinsic: keyof IntrinsicsRecord;
      toStringTag?: string;
    }[])("$intrinsic", ({ source, intrinsic, toStringTag }) => {
      it(`maps host ${intrinsic} to realm intrinsic ${intrinsic} on properties`, () => {
        const realm = new StaticJsRealm({
          hostAccessDefaults: {
            // Turn off stubbing so we can test that the actual prototype was masked.
            stubWellKnownTypes: false,
            // Allow child objects to be exposed (our value property)
            childPolicy: "inherit",
          },
        });
        const obj = {
          value: source,
          toString() {
            // When errors happen, chai tries to call toString on us, which calls toString on value,
            // which ends up trying to invoke the toString sitting on the prototype we shoved into it.
            return `[Host ${intrinsic}]`;
          },
        };
        const wrapped = realm.types.toStaticJsValue(obj);
        expect(wrapped.getSync("value")).toBe(realm.intrinsics[intrinsic]);
      });

      if (toStringTag !== undefined) {
        it(`test for ${intrinsic} targets the correct item (by "${toStringTag}")`, () => {
          const descriptor = Object.getOwnPropertyDescriptor(source, Symbol.toStringTag);
          expect(
            descriptor,
            `Host ${intrinsic} source is missing an own Symbol.toStringTag`,
          ).toBeDefined();
          // Iterator.prototype exposes the tag via an accessor; everything else
          // uses a data property.
          const actual =
            descriptor && "value" in descriptor ? descriptor.value : descriptor?.get?.call(source);
          expect(actual).toBe(toStringTag);
        });
      }
    });

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
      const child = make.callSync(wrapped, []);
      expectStaticJsObject(child);
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

  // ---------------------------------------------------------------------------
  // GAP COVERAGE (red phase) — audited but previously untested behaviors.
  // Some of these assert the DESIRED behavior and currently fail (real bugs);
  // others lock in containment guarantees that already hold.
  // ---------------------------------------------------------------------------

  describe("host array element policy (BUG: childPolicy/access bypassed)", () => {
    it("resolves elements of a wrapped host array to undefined when childPolicy is false", () => {
      class Secret {
        reveal() {
          return "leak";
        }
      }
      // Permissive realm default; childPolicy:false on the wrap must still take
      // precedence for the array's elements.
      const realm = new StaticJsRealm({
        hostAccessDefaults: { walkPrototype: true, includeNonEnumerable: true },
      });
      const arr = [new Secret()];
      const wrapped = realm.types.toStaticJsValue(arr, {
        childPolicy: () => false,
      });
      // `false` => the element is not exposed at all (undefined); it must not
      // fall back to the permissive realm default.
      expect(wrapped.getSync("0").toNative()).toBe(undefined);
    });

    it("propagates an inherited policy to elements of a wrapped host array", () => {
      class Secret {
        reveal() {
          return "leak";
        }
      }
      const realm = new StaticJsRealm();
      const arr = [new Secret()];
      const wrapped = realm.types.toStaticJsValue(arr, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });
      const first = wrapped.getSync("0");
      expectStaticJsObject(first);
      const reveal = first.getSync("reveal") as StaticJsCallable;
      expect(reveal.callSync(first, []).toNative()).toBe("leak");
    });
  });

  describe("host accessor properties", () => {
    it("invokes a host getter when the property is read", () => {
      const realm = new StaticJsRealm();
      let calls = 0;
      const host = {};
      Object.defineProperty(host, "g", {
        enumerable: true,
        get() {
          calls++;
          return "got";
        },
      });
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("g").toNative()).toBe("got");
      expect(calls).toBe(1);
    });

    it("invokes a host setter when a property is written", () => {
      const realm = new StaticJsRealm();
      let stored: unknown;
      const host = {};
      Object.defineProperty(host, "s", {
        enumerable: true,
        get() {
          return stored;
        },
        set(v) {
          stored = v;
        },
      });
      const wrapped = realm.types.toStaticJsValue(host);
      const ok = wrapped.setSync("s", realm.types.number(5));
      expect(ok).toBe(true);
      expect(stored).toBe(5);
    });

    it("governs a getter's return value by the inherited policy", () => {
      class Secret {
        reveal() {
          return "leak";
        }
      }
      const realm = new StaticJsRealm();
      const secret = new Secret();
      const host = {};
      Object.defineProperty(host, "child", {
        enumerable: true,
        get() {
          return secret;
        },
      });
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });
      const child = wrapped.getSync("child");
      expectStaticJsObject(child);
      const reveal = child.getSync("reveal") as StaticJsCallable;
      expect(reveal.callSync(child, []).toNative()).toBe("leak");
    });
  });

  describe("stubWellKnownTypes", () => {
    it("array stub off exposes a host array as a plain object", () => {
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue([10, 20], { stubWellKnownTypes: [] });
      expect(wrapped.runtimeTypeOf).toBe("object");
      expect(wrapped.getSync("0").toNative()).toBe(10);
    });
  });

  describe("symbol-keyed host properties", () => {
    it("reads a host property keyed by a well-known symbol", () => {
      const realm = new StaticJsRealm();
      const host = { [Symbol.toPrimitive]: () => 7 };
      const wrapped = realm.types.toStaticJsValue(host);
      const key = realm.types.toStaticJsValue(Symbol.toPrimitive);
      const fn = wrapped.getSync(key) as StaticJsCallable;
      expect(fn.callSync(wrapped, []).toNative()).toBe(7);
    });
  });

  describe("walkPrototype with a null-prototype host", () => {
    it("exposes a null prototype when walkPrototype is set", () => {
      const realm = new StaticJsRealm();
      const host: Record<string, unknown> = Object.create(null);
      host["a"] = 1;
      const wrapped = realm.types.toStaticJsValue(host, {
        walkPrototype: true,
        includeNonEnumerable: true,
      });
      expect(wrapped.getPrototypeOfSync()).toBe(null);
    });
  });

  describe("object key exposure", () => {
    // Helpers ----------------------------------------------------------------
    const nativeKeys = (wrapped: StaticJsObject) =>
      wrapped
        .ownPropertyKeysSync()
        .map((k) => (typeof k === "string" ? k : (k as { toNative(): symbol }).toNative()));

    // A non-enumerable well-known symbol (the common case: defineProperty /
    // class method / native protocol slot).
    const nonEnumerableSymbolHost = (symbol: symbol) => {
      const host: Record<PropertyKey, unknown> = { plain: 1 };
      Object.defineProperty(host, symbol, {
        value: function* () {
          yield 1;
        },
        enumerable: false,
        configurable: true,
      });
      return host;
    };

    it("includes a non-enumerable well-known symbol when only includeWellKnownSymbols is set", () => {
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(nonEnumerableSymbolHost(Symbol.iterator), {
        includeWellKnownSymbols: true,
        includeNonEnumerable: false,
      });
      const key = realm.types.toStaticJsValue(Symbol.iterator);
      // Symbol gate passes, but the enumerability gate still blocks it.
      expect(wrapped.hasOwnPropertySync(key)).toBe(true);
      expect(nativeKeys(wrapped)).toContain(Symbol.iterator);
    });

    it("hides a non-enumerable well-known symbol when includeNonEnumerable is on but includeWellKnownSymbols is off", () => {
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(nonEnumerableSymbolHost(Symbol.iterator), {
        includeWellKnownSymbols: false,
        includeNonEnumerable: true,
      });
      const key = realm.types.toStaticJsValue(Symbol.iterator);
      // Enumerability gate passes, but the symbol gate must block it on BOTH
      // the access and enumeration paths.
      expect(wrapped.hasOwnPropertySync(key)).toBe(false);
      expect(nativeKeys(wrapped)).not.toContain(Symbol.iterator);
    });

    it("exposes a non-enumerable non-well-known symbol when includeNonEnumerable is on", () => {
      const realm = new StaticJsRealm();
      const symbol = Symbol("symbol");
      const wrapped = realm.types.toStaticJsValue(nonEnumerableSymbolHost(symbol), {
        includeNonEnumerable: true,
      });
      const key = realm.types.toStaticJsValue(symbol);
      expect(wrapped.hasOwnPropertySync(key)).toBe(true);
      const fn = wrapped.getSync(key) as StaticJsCallable;
      expect(typeof fn.toNative()).toBe("function");
      expect(nativeKeys(wrapped)).toContain(symbol);
    });

    it("hides a non-enumerable non-well-known symbol when includeNonEnumerable is off", () => {
      const realm = new StaticJsRealm();
      const symbol = Symbol("symbol");
      const wrapped = realm.types.toStaticJsValue(nonEnumerableSymbolHost(symbol), {
        includeNonEnumerable: false,
      });
      const key = realm.types.toStaticJsValue(symbol);
      expect(wrapped.hasOwnPropertySync(key)).toBe(false);
      expect(isStaticJsUndefined(wrapped.getSync(key))).toBe(true);
    });

    it("includes an enumerable string key when includeNonEnumerable is off", () => {
      const realm = new StaticJsRealm();
      const host = { visible: 1 };
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: false,
      });
      expect(wrapped.hasOwnPropertySync("visible")).toBe(true);
      expect(wrapped.getSync("visible").toNative()).toBe(1);
    });

    it("hides a non-enumerable string key when includeNonEnumerable is off", () => {
      const realm = new StaticJsRealm();
      const host = { hidden: 1 };
      Object.defineProperty(host, "hidden", {
        value: 1,
        enumerable: false,
        configurable: true,
      });
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: false,
      });
      expect(wrapped.hasOwnPropertySync("hidden")).toBe(false);
      expect(isStaticJsUndefined(wrapped.getSync("hidden"))).toBe(true);
    });
  });
});
