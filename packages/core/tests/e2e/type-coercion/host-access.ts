import { Constructor } from "type-fest";
import { describe, it, expect, vi } from "vitest";

import { StaticJsRealm, type StaticJsCallable } from "../../../src/index.js";
import { IntrinsicsRecord } from "../../../src/runtime/intrinsics/intrinsics.js";
import { isStaticJsArray } from "../../../src/runtime/types/StaticJsArray.js";
import {
  expectStaticJsArray,
  expectStaticJsCallable,
  expectStaticJsObject,
} from "../utils/expect-staticjs.js";

describe("E2E: Type Coercion / HostAccessOptions", () => {
  describe("default (no opts) — preserves locked-down behavior", () => {
    it("stubs arrays", () => {
      const realm = new StaticJsRealm();
      const host = [1, 2];
      const wrapped = realm.types.toStaticJsValue(host);
      expectStaticJsArray(wrapped);
    });

    it("stubs errors", () => {
      const realm = new StaticJsRealm();
      const host = new TypeError("bad");
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getPrototypeOfSync()).toBe(realm.intrinsics["TypeError.prototype"]);
    });

    it("exposes enumerable properties", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("a").toNative()).toBe(1);
    });

    it("does not expose non-enumerable properties", () => {
      const realm = new StaticJsRealm();
      const host = {};
      Object.defineProperty(host, "secret", { value: 42, enumerable: false });
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("secret").toNative()).toBe(undefined);
    });

    it("exposes well-known symbols", () => {
      const realm = new StaticJsRealm();
      const host = { [Symbol.iterator]: true };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync(realm.types.toStaticJsValue(Symbol.iterator)).toNative()).toBe(true);
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

    it("preserves the host-side this", () => {
      let observed: any;
      const realm = new StaticJsRealm();
      const host = {
        capture(this: any) {
          // oxlint-disable-next-line typescript/no-this-alias
          observed = this;
        },
      };
      const wrapped = realm.types.toStaticJsValue(host);
      const capture = wrapped.getSync("capture") as StaticJsCallable;
      const thisArg = realm.types.object();
      capture.callSync(thisArg, []);
      expect(observed).toBe(host);
    });

    it("does not expose host intrinsics", () => {
      const realm = new StaticJsRealm();
      const host = { value: Function };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("value")).toBe(realm.intrinsics.Function);
    });

    it("does not walk the prototype chain", () => {
      const proto = {
        isProto: true,
      };
      const host = Object.create(proto);
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(host);
      expectStaticJsObject(wrapped);
      expect(wrapped.getSync("isProto").toNative()).toBe(undefined);
    });

    it("walks child objects", () => {
      const realm = new StaticJsRealm();
      const host = { child: { x: 1 } };
      const wrapped = realm.types.toStaticJsValue(host);
      const child = wrapped.getSync("child");
      expectStaticJsObject(child);
      expect(child.getSync("x").toNative()).toBe(1);
    });
  });

  describe("stubWellKnownTypes", () => {
    describe("array", () => {
      it("allows array proxies when ommitted", () => {
        const realm = new StaticJsRealm();
        const host = [1, 2];
        const wrapped = realm.types.toStaticJsValue(host, { stubWellKnownTypes: [] });
        expectStaticJsObject(wrapped);
        expect(isStaticJsArray(wrapped)).toBe(false);
      });

      it("stubs arrays when included", () => {
        const realm = new StaticJsRealm();
        const host = [1, 2];
        const wrapped = realm.types.toStaticJsValue(host, { stubWellKnownTypes: ["array"] });
        expectStaticJsArray(wrapped);
      });
    });

    describe("error", () => {
      describe.each([
        // FIXME: Not implemented
        // { type: AggregateError, intrinsic: "AggregateError" },
        { type: Error, intrinsic: "Error" },
        { type: EvalError, intrinsic: "EvalError" },
        { type: RangeError, intrinsic: "RangeError" },
        { type: ReferenceError, intrinsic: "ReferenceError" },
        { type: SyntaxError, intrinsic: "SyntaxError" },
        { type: TypeError, intrinsic: "TypeError" },
        { type: URIError, intrinsic: "URIError" },
      ] satisfies {
        type: Constructor<Error>;
        intrinsic: keyof IntrinsicsRecord;
      }[])("$intrinsic", ({ type, intrinsic }) => {
        it("allows error proxies when omitted", () => {
          const realm = new StaticJsRealm();
          const host = new type("bad");
          const wrapped = realm.types.toStaticJsValue(host, { stubWellKnownTypes: [] });
          expectStaticJsObject(wrapped);
          expect(wrapped.getPrototypeOfSync()).not.toBe(realm.intrinsics[intrinsic]);
        });
        it("stubs errors when included", () => {
          const realm = new StaticJsRealm();
          const host = new type("bad");
          const wrapped = realm.types.toStaticJsValue(host, { stubWellKnownTypes: ["error"] });
          expectStaticJsObject(wrapped);
          expect(wrapped.getPrototypeOfSync()).toBe(
            realm.intrinsics[intrinsic].getSync("prototype"),
          );
        });
      });
    });
  });

  describe("members", () => {
    it("includes non enumerable keys when includeNonEnumerable is true", () => {
      const realm = new StaticJsRealm();
      const host = {};
      Object.defineProperty(host, "secret", { value: 42, enumerable: false });
      const wrapped = realm.types.toStaticJsValue(host, { includeNonEnumerable: true });
      expect(wrapped.hasOwnPropertySync("secret")).toBe(true);
      expect(wrapped.getSync("secret").toNative()).toBe(42);
    });

    it("does not include well-known symbols when includeWellKnownSymbols is false", () => {
      const realm = new StaticJsRealm();
      const host = {};
      Object.defineProperty(host, "secret", { value: 42, enumerable: false });
      const wrapped = realm.types.toStaticJsValue(host, { includeNonEnumerable: false });
      expect(wrapped.hasOwnPropertySync("secret")).toBe(false);
      expect(wrapped.getSync("secret").toNative()).toBe(undefined);
    });

    it("includes well-known symbols when includeWellKnownSymbols is true", () => {
      const realm = new StaticJsRealm();
      const host = { [Symbol.iterator]: 42 };
      const wrapped = realm.types.toStaticJsValue(host, { includeWellKnownSymbols: true });
      expect(wrapped.hasOwnPropertySync(realm.types.toStaticJsValue(Symbol.iterator))).toBe(true);
      expect(wrapped.getSync(realm.types.toStaticJsValue(Symbol.iterator)).toNative()).toBe(42);
    });

    it("does not include well-known symbols when includeWellKnownSymbols is false", () => {
      const realm = new StaticJsRealm();
      const host = { [Symbol.iterator]: 42 };
      const wrapped = realm.types.toStaticJsValue(host, { includeWellKnownSymbols: false });
      expect(wrapped.hasOwnPropertySync(realm.types.toStaticJsValue(Symbol.iterator))).toBe(false);
      expect(wrapped.getSync(realm.types.toStaticJsValue(Symbol.iterator)).toNative()).toBe(
        undefined,
      );
    });

    it("includes non-enumerable well known symbols when includeWellKnownSymbols is true and includeNonEnumerable is false", () => {
      const realm = new StaticJsRealm();
      const host = {};
      Object.defineProperty(host, Symbol.iterator, { value: 42, enumerable: false });
      const wrapped = realm.types.toStaticJsValue(host, {
        includeWellKnownSymbols: true,
        includeNonEnumerable: false,
      });
      expect(wrapped.hasOwnPropertySync(realm.types.toStaticJsValue(Symbol.iterator))).toBe(true);
      expect(wrapped.getSync(realm.types.toStaticJsValue(Symbol.iterator)).toNative()).toBe(42);
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

      let result = { x: 1 };
      function host() {
        return result;
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
      expect(result.x).toBe(1);
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
      const host = {
        capture(this: any) {
          // oxlint-disable-next-line typescript/no-this-alias
          observed = this;
        },
      };
      const realm = new StaticJsRealm();
      const wrapped = realm.types.toStaticJsValue(host, {
        useSandboxThis: true,
      });
      const capture = wrapped.getSync("capture");
      expectStaticJsCallable(capture);

      const thisArg = realm.types.object();
      capture.callSync(thisArg, []);

      // Value is called as a native proxy, so get the original back.
      expect(observed).toBe(host);
    });
  });

  describe("childPolicy", () => {
    it("exposes children by default when childPolicy is omitted", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const wrapped = realm.types.toStaticJsValue(host);
      expect(wrapped.getSync("nested").toNative()).toEqual({ a: 1 });
    });

    it("resolves a child to undefined when childPolicy returns false", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const wrapped = realm.types.toStaticJsValue(host, { childPolicy: false });
      expect(wrapped.getSync("nested").toNative()).toBe(undefined);
    });

    it("calls a function childPolicy with the host object", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const childPolicy = vi.fn(() => false);
      const wrapped = realm.types.toStaticJsValue(host, { childPolicy });
      wrapped.getSync("nested");
      expect(childPolicy).toHaveBeenCalledWith(host.nested);
    });

    it("resolves a child to a StaticJsValue when returned by callback", () => {
      const realm = new StaticJsRealm();
      const host = { nested: { a: 1 } };
      const wrapped = realm.types.toStaticJsValue(host, {
        childPolicy: () => realm.types.object({ target: { value: realm.types.true } }),
      });
      const nested = wrapped.getSync("nested");
      expectStaticJsObject(nested);
      expect(nested.getSync("target").toNative()).toBe(true);
    });

    describe("caching", () => {
      it("does not call childPolicy twice if the host object value descriptor has not changed", () => {
        const realm = new StaticJsRealm();
        const host = { nested: { a: 1 } };
        const childPolicy = vi.fn(() =>
          realm.types.object({ target: { value: realm.types.true } }),
        );
        const wrapped = realm.types.toStaticJsValue(host, {
          childPolicy,
        });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
      });

      it("calls childPolicy again if the host object value descriptor has changed", () => {
        const realm = new StaticJsRealm();
        const host = { nested: { a: 1 } };
        const childPolicy = vi.fn(() =>
          realm.types.object({ target: { value: realm.types.true } }),
        );
        const wrapped = realm.types.toStaticJsValue(host, {
          childPolicy,
        });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
        Object.defineProperty(host, "nested", { value: { a: 2 } });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(2);
      });

      it("calls childPolicy again if the host object writable descriptor has changed", () => {
        const realm = new StaticJsRealm();
        const host = { nested: { a: 1 } };
        const childPolicy = vi.fn(() =>
          realm.types.object({ target: { value: realm.types.true } }),
        );
        const wrapped = realm.types.toStaticJsValue(host, {
          childPolicy,
        });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
        Object.defineProperty(host, "nested", { writable: false });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(2);
      });

      it("calls childPolicy again if the host object enumerable descriptor has changed", () => {
        const realm = new StaticJsRealm({});
        const host = { nested: { a: 1 } };
        const childPolicy = vi.fn(() =>
          realm.types.object({ target: { value: realm.types.true } }),
        );
        const wrapped = realm.types.toStaticJsValue(host, {
          includeNonEnumerable: true,
          childPolicy,
        });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
        Object.defineProperty(host, "nested", { enumerable: false });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(2);
      });

      it("calls childPolicy again if the host object configurable descriptor has changed", () => {
        const realm = new StaticJsRealm();
        const host = { nested: { a: 1 } };
        const childPolicy = vi.fn(() =>
          realm.types.object({ target: { value: realm.types.true } }),
        );
        const wrapped = realm.types.toStaticJsValue(host, {
          childPolicy,
        });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(1);
        Object.defineProperty(host, "nested", { configurable: false });
        wrapped.getSync("nested");
        expect(childPolicy).toHaveBeenCalledTimes(2);
      });
    });

    it("re-roots policy when childPolicy is HostOptions", () => {
      const child = {};
      Object.defineProperty(child, "secret", { value: true, enumerable: false });
      const realm = new StaticJsRealm();
      const host = { child };
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: false,
        childPolicy: {
          includeNonEnumerable: true,
        },
      });
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      expect(wrappedChild.getSync("secret").toNative()).toBe(true);
    });

    it("re-roots policy when childPolicy returns an object", () => {
      const child = {};
      Object.defineProperty(child, "secret", { value: true, enumerable: false });
      const realm = new StaticJsRealm();
      const host = { child };
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: false,
        childPolicy: () => ({
          includeNonEnumerable: true,
        }),
      });
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      expect(wrappedChild.getSync("secret").toNative()).toBe(true);
    });

    it("reuses the parent policy when childPolicy is 'inherit'", () => {
      const child = {};
      Object.defineProperty(child, "secret", { value: true, enumerable: false });
      const realm = new StaticJsRealm();
      const host = { child };
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: true,
        childPolicy: "inherit",
      });
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      expect(wrappedChild.getSync("secret").toNative()).toBe(true);
    });

    it("sends children to the realm default policy when childPolicy is 'default'", () => {
      const child = {};
      Object.defineProperty(child, "secret", { value: true, enumerable: false });
      const realm = new StaticJsRealm();
      const host = { child };
      const wrapped = realm.types.toStaticJsValue(host, {
        includeNonEnumerable: true,
        childPolicy: "default",
      });
      const wrappedChild = wrapped.getSync("child");
      expectStaticJsObject(wrappedChild);
      expect(wrappedChild.hasOwnPropertySync("secret")).toBe(false);
      expect(wrappedChild.getSync("secret").toNative()).toBe(undefined);
    });
  });

  describe("identity cache", () => {
    it("returns === wrapper for same (host, policy)", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const a = realm.types.toStaticJsValue(host, { includeNonEnumerable: true });
      const b = realm.types.toStaticJsValue(host, { includeNonEnumerable: true });
      expect(a).toBe(b);
    });

    it("returns !== wrappers for same host with different policies", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const a = realm.types.toStaticJsValue(host, { includeNonEnumerable: true });
      const b = realm.types.toStaticJsValue(host, { includeNonEnumerable: false });
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

    it("shares the cache slot for the same prototypePolicy reference", () => {
      const realm = new StaticJsRealm();
      const host = { a: 1 };
      const g = () => false as const;
      const a = realm.types.toStaticJsValue(host, { prototypePolicy: g });
      const b = realm.types.toStaticJsValue(host, { prototypePolicy: g });
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
        rawPrototypes: true,
        prototypePolicy: "inherit",
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
        includeNonEnumerable: true,
        prototypePolicy: "inherit",
        childPolicy: "inherit",
      });
      const make = wrapped.getSync("make");
      expectStaticJsCallable(make);
      const child = make.callSync(wrapped, []);
      expectStaticJsObject(child);
      const m = child.getSync("m") as StaticJsCallable;
      expect(m.callSync(child, []).toNative()).toBe("n");
    });
  });

  describe("realm hostAccessDefaults", () => {
    it("uses the realm default when toStaticJsValue is called without opts", () => {
      const realm = new StaticJsRealm({
        hostAccessDefaults: { prototypePolicy: "inherit", includeNonEnumerable: true },
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
        hostAccessDefaults: { prototypePolicy: "inherit", includeNonEnumerable: true },
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
        hostAccessDefaults: { prototypePolicy: "inherit", includeNonEnumerable: true },
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
        includeNonEnumerable: true,
        prototypePolicy: "inherit",
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
        includeNonEnumerable: true,
        prototypePolicy: "inherit",
        childPolicy: "inherit",
      });
      const child = wrapped.getSync("child");
      expectStaticJsObject(child);
      const reveal = child.getSync("reveal") as StaticJsCallable;
      expect(reveal.callSync(child, []).toNative()).toBe("leak");
    });
  });
});
