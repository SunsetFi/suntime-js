import {
  EvaluationGenerator,
  isErrorTypeName,
  isStaticJsFunction,
  isStaticJsObject,
  isStaticJsPlainObject,
  isStaticJsScalar,
  isStaticJsSymbol,
  isStaticJsValue,
  StaticJsFunction,
  StaticJsObject,
  StaticJsPropertyDescriptorRecord,
  StaticJsRuntimeError,
  StaticJsValue,
} from "@suntime-js/core";

import type { CodeRuntimeSpawnOptions } from "./CodeRuntime";

export type OverrideImpl = (
  this: StaticJsValue,
  hostThis: object,
  sandboxArgs: StaticJsValue[],
  ctx: BridgeContext,
) => EvaluationGenerator<StaticJsValue>;

const overrideRegistry = new Map<string, OverrideImpl>();

export function registerOverride(
  toStringTag: string,
  methodName: string,
  impl: OverrideImpl,
): void {
  overrideRegistry.set(`${toStringTag}::${methodName}`, impl);
}

function getOverride(toStringTag: string, methodName: string): OverrideImpl | undefined {
  return overrideRegistry.get(`${toStringTag}::${methodName}`);
}

const BackingSymbol = Symbol("host-back-reference");
const WrappedSymbol = Symbol("sandbox-wrapped-object");
function getBackingValue(sandboxObj: StaticJsObject): object | Function {
  return (sandboxObj as any)[BackingSymbol] ?? null;
}
function setBackingValue(sandboxObj: StaticJsObject, hostObj: object | Function): void {
  (sandboxObj as any)[BackingSymbol] = hostObj;
}

function getWrappedValue(hostObj: object): StaticJsObject | StaticJsFunction | null {
  return (hostObj as any)[WrappedSymbol] ?? null;
}
function setWrappedValue(hostObj: object, sandboxObj: StaticJsObject | StaticJsFunction): void {
  (hostObj as any)[WrappedSymbol] = sandboxObj;
}

export interface BridgeContext {
  spawnOpts: CodeRuntimeSpawnOptions;
  protoCache: Map<string, StaticJsObject>;
}

export function createBridgeContext(spawnOpts: CodeRuntimeSpawnOptions): BridgeContext {
  return { spawnOpts, protoCache: new Map() };
}

function needsClassWrapping(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value !== "object" && typeof value !== "function") return false;
  const proto = Object.getPrototypeOf(value);
  return proto !== Object.prototype && proto !== null;
}

function clonePojo(obj: Record<string, unknown>, ctx: BridgeContext): StaticJsObject {
  const { realm } = ctx.spawnOpts;
  const props: Record<string, StaticJsPropertyDescriptorRecord> = {};
  for (const key of Object.keys(obj)) {
    props[key] = {
      value: wrapValue(obj[key], ctx),
      enumerable: true,
      writable: true,
      configurable: true,
    };
  }
  return realm.types.object(props);
}

function cloneArray(arr: unknown[], ctx: BridgeContext): StaticJsObject {
  return ctx.spawnOpts.realm.types.array(arr.map((item) => wrapValue(item, ctx)));
}

export function wrapValue(value: unknown, ctx: BridgeContext): StaticJsValue {
  const { realm } = ctx.spawnOpts;

  if (
    value === null ||
    value === undefined ||
    (typeof value !== "object" && typeof value !== "function")
  ) {
    return realm.types.toStaticJsValue(value);
  }

  let wrapped = getWrappedValue(value);
  if (wrapped) return wrapped;

  if (Array.isArray(value)) {
    wrapped = cloneArray(value, ctx);
  } else if (isStaticJsValue(value) || needsClassWrapping(value)) {
    wrapped = wrapClassBacked(value, ctx);
  } else {
    wrapped = clonePojo(value as Record<string, unknown>, ctx);
  }

  setWrappedValue(value, wrapped);
  setBackingValue(wrapped, value as object);
  return wrapped;
}

export function wrapThrown(value: unknown, ctx: BridgeContext): StaticJsValue {
  if (value && typeof value === "object") {
    let wrapped = getWrappedValue(value as object);
    if (wrapped) return wrapped;
    if (value instanceof Error && isErrorTypeName(value.name)) {
      wrapped = ctx.spawnOpts.realm.types.error(value.name, value.message);
    } else if ("message" in value) {
      const message = typeof value.message === "string" ? value.message : String(value.message);
      wrapped = ctx.spawnOpts.realm.types.error("Error", message);
    }
    if (wrapped) {
      setWrappedValue(value, wrapped);
      return wrapped;
    }
  }

  return ctx.spawnOpts.realm.types.toStaticJsValue(value);
}

export function unwrapValue(sandboxArg: StaticJsValue, ctx: BridgeContext): unknown {
  if (sandboxArg.realm !== ctx.spawnOpts.realm) {
    throw new TypeError("Attempted to unwrap a value from a different realm");
  }

  if (isStaticJsObject(sandboxArg)) {
    let backing = getBackingValue(sandboxArg);
    if (backing) return backing;
    // Didn't have a backing, so its something the engine made?
    // Whatever, we have to unwrap sub-properties passed to objects...
    // This really doesn't feel right.
    // Needed for when host passes us stuff like { log: { value: realm.types.function(...) } }
    // It almost works without this, except that the function will be a native proxy,
    // which would work except its typeof function?
    // which still exposes its .runtimeTypeCode???
    // What on earth is this monstrosity host-bridge has become?
    if (isStaticJsPlainObject(sandboxArg)) {
      const obj: Record<string | symbol, unknown> = {};
      const argProto = sandboxArg.getPrototypeOfSync();
      if (argProto && argProto !== ctx.spawnOpts.realm.intrinsics["Object.prototype"]) {
        Object.setPrototypeOf(obj, unwrapValue(argProto, ctx) as object);
      }
      for (const key of sandboxArg.ownPropertyKeysSync()) {
        const value = sandboxArg.getSync(key);
        let p;
        if (isStaticJsSymbol(key)) {
          p = key.toNative() as symbol;
        } else {
          p = key;
        }
        if (p === BackingSymbol || p === WrappedSymbol) {
          continue;
        }
        obj[p] = unwrapValue(value, ctx);
      }

      setWrappedValue(obj, sandboxArg);
      setBackingValue(sandboxArg, obj);
      return obj;
    }

    // Note: toNative caches, so this is weird?
    backing = sandboxArg.toNative() as object;
    setWrappedValue(backing, sandboxArg);
    setBackingValue(sandboxArg, backing);
    return backing;
  }

  return sandboxArg.value;
}

const nativeErrors = {
  Error: Error,
  TypeError: TypeError,
  ReferenceError: ReferenceError,
  SyntaxError: SyntaxError,
  RangeError: RangeError,
  URIError: URIError,
};
export function unwrapThrown(value: unknown): unknown {
  if (value instanceof StaticJsRuntimeError) {
    const thrown = value.thrown;
    if (isStaticJsObject(thrown)) {
      const nameVal = thrown.getSync("name");
      const messageVal = thrown.getSync("message");
      const name = isStaticJsScalar(nameVal) ? String(nameVal.value) : "Error";
      const message = isStaticJsScalar(messageVal) ? String(messageVal.value) : "";
      const NativeError = nativeErrors[name as keyof typeof nativeErrors] || Error;
      return new NativeError(message);
    }

    return value.thrown.toNative();
  }

  return value;
}

function getToStringTag(proto: object): string | undefined {
  let walk: object | null = proto;
  while (walk !== null && walk !== Object.prototype) {
    const tag = (walk as { [Symbol.toStringTag]?: unknown })[Symbol.toStringTag];
    if (typeof tag === "string") return tag;
    walk = Object.getPrototypeOf(walk) as object | null;
  }
  return undefined;
}

function buildSandboxPrototype(hostObj: object, ctx: BridgeContext): StaticJsObject {
  const { spawnOpts, protoCache } = ctx;
  const { realm } = spawnOpts;

  const rootProto = Object.getPrototypeOf(hostObj) as object | null;
  if (rootProto === null || rootProto === Object.prototype) {
    return realm.types.object({});
  }

  const tag = getToStringTag(rootProto);

  if (tag && protoCache.has(tag)) {
    return protoCache.get(tag)!;
  }

  type Entry = { kind: "method" } | { kind: "getter"; get: Function; set?: Function };
  const entries = new Map<string, Entry>();

  let walk: object | null = rootProto;
  while (walk !== null && walk !== Object.prototype) {
    for (const key of Object.getOwnPropertyNames(walk)) {
      if (key === "constructor") continue;
      if (entries.has(key)) continue;
      const desc = Object.getOwnPropertyDescriptor(walk, key);
      if (!desc) continue;
      if (typeof desc.value === "function") {
        entries.set(key, { kind: "method" });
      } else if (typeof desc.get === "function") {
        entries.set(key, { kind: "getter", get: desc.get, set: desc.set });
      }
    }
    walk = Object.getPrototypeOf(walk) as object | null;
  }

  const props: Record<string, StaticJsPropertyDescriptorRecord> = {};

  for (const [name, entry] of entries) {
    if (entry.kind === "method") {
      const override = tag ? getOverride(tag, name) : undefined;
      if (override) {
        props[name] = {
          value: realm.types.function(name, function* (...args) {
            const hostThis = unwrapValue(this, ctx) as object;
            return yield* override.call(this, hostThis, args, ctx);
          }),
          enumerable: false,
          // writable: true so sandbox assignments (obj.method = x) shadow the prototype
          // via an own property rather than silently failing in sloppy-mode scripts.
          writable: true,
          configurable: true,
        };
      } else {
        props[name] = {
          value: realm.types.function(name, function* (...args) {
            const hostThis = unwrapValue(this, ctx) as Record<string, (...a: unknown[]) => unknown>;
            const hostArgs = args.map((arg) => unwrapValue(arg, ctx));
            try {
              const result = hostThis[name](...hostArgs);
              return wrapValue(result, ctx);
            } catch (e) {
              throw wrapThrown(e, ctx);
            }
          }),
          enumerable: false,
          writable: true,
          configurable: true,
        };
      }
    } else {
      const { get, set } = entry;
      props[name] = {
        get: realm.types.function(`get ${name}`, function* () {
          const hostThis = unwrapValue(this, ctx) as object;
          try {
            return wrapValue(get.call(hostThis), ctx);
          } catch (e) {
            throw wrapThrown(e, ctx);
          }
        }),
        set: set
          ? realm.types.function(`set ${name}`, function* (newVal) {
              const hostThis = unwrapValue(this, ctx) as object;
              try {
                set.call(hostThis, unwrapValue(newVal, ctx));
                return realm.types.undefined;
              } catch (e) {
                throw wrapThrown(e, ctx);
              }
            })
          : undefined,
        enumerable: false,
        configurable: false,
      } satisfies StaticJsPropertyDescriptorRecord;
    }
  }

  const sandboxProto = realm.types.object(props);
  if (tag) protoCache.set(tag, sandboxProto);
  return sandboxProto;
}

export function wrapClassBacked(hostObj: unknown, ctx: BridgeContext): StaticJsObject {
  const { realm } = ctx.spawnOpts;
  const sandboxProto = buildSandboxPrototype(hostObj as object, ctx);

  let sandboxObj: StaticJsObject;
  if (typeof hostObj === "function") {
    console.log(`Wrapping function ${hostObj.name || "<anonymous>"} with class-backed wrapper`);
    sandboxObj = realm.types.function(
      hostObj.name || "wrappedFunction",
      function* (...args) {
        const hostThis = unwrapValue(this, ctx) as Record<string, (...a: unknown[]) => unknown>;
        const hostArgs = args.map((arg) => unwrapValue(arg, ctx));
        const result = hostObj.apply(hostThis, hostArgs);
        return wrapValue(result, ctx);
      },
      {
        prototype: sandboxProto,
      },
    );
  } else if (isStaticJsFunction(hostObj)) {
    const name = hostObj.getNameSync();
    console.log(`Wrapping function ${name || "<anonymous>"} with class-backed wrapper`);
    sandboxObj = realm.types.function(
      name + "_proxy" || "wrappedFunction",
      function* (...args) {
        const hostThis = unwrapValue(this, ctx) as Record<string, (...a: unknown[]) => unknown>;
        const hostArgs = args.map((arg) => unwrapValue(arg, ctx));
        const result = hostThis[name](...hostArgs);
        return wrapValue(result, ctx);
      },
      {
        prototype: sandboxProto,
      },
    );
  } else {
    sandboxObj = realm.types.object({}, sandboxProto);
  }
  return sandboxObj;
}
