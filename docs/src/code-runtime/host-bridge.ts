import {
  EvaluationGenerator,
  isStaticJsScalar,
  isStaticJsValue,
  StaticJsObject,
  StaticJsPropertyDescriptorRecord,
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

const backingMap = new WeakMap<object, unknown>();

export interface BridgeContext {
  spawnOpts: CodeRuntimeSpawnOptions;
  protoCache: Map<string, StaticJsObject>;
}

export function createBridgeContext(spawnOpts: CodeRuntimeSpawnOptions): BridgeContext {
  return { spawnOpts, protoCache: new Map() };
}

export function getHostObject(sandboxObj: unknown): unknown {
  if (sandboxObj == null || (typeof sandboxObj !== "object" && typeof sandboxObj !== "function")) {
    return undefined;
  }
  return backingMap.get(sandboxObj);
}

function needsClassWrapping(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value !== "object" && typeof value !== "function") return false;
  const proto = Object.getPrototypeOf(value);
  return proto !== Object.prototype && proto !== null;
}

function clonePojo(obj: Record<string, unknown>, ctx: BridgeContext): StaticJsValue {
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

function cloneArray(arr: unknown[], ctx: BridgeContext): StaticJsValue {
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

  if (Array.isArray(value)) {
    return cloneArray(value, ctx);
  }

  if (isStaticJsValue(value) || needsClassWrapping(value)) {
    return wrapClassBacked(value, ctx);
  }

  return clonePojo(value as Record<string, unknown>, ctx);
}

export function unwrapArg(sandboxArg: StaticJsValue): unknown {
  if (backingMap.has(sandboxArg)) return backingMap.get(sandboxArg);
  if (isStaticJsScalar(sandboxArg)) return sandboxArg.value;
  return sandboxArg.toNative();
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
            const hostThis = backingMap.get(this) as object;
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
            const hostThis = backingMap.get(this) as Record<string, (...a: unknown[]) => unknown>;
            const hostArgs = args.map(unwrapArg);
            const result = hostThis[name](...hostArgs);
            return wrapValue(result, ctx);
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
          const hostThis = backingMap.get(this) as object;
          return wrapValue(get.call(hostThis), ctx);
        }),
        set: set
          ? realm.types.function(`set ${name}`, function* (newVal) {
              const hostThis = backingMap.get(this) as object;
              set.call(hostThis, unwrapArg(newVal));
              return realm.types.undefined;
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

export function wrapClassBacked(hostObj: unknown, ctx: BridgeContext): StaticJsValue {
  const { realm } = ctx.spawnOpts;
  const sandboxProto = buildSandboxPrototype(hostObj as object, ctx);
  const sandboxObj = realm.types.object({}, sandboxProto);
  backingMap.set(sandboxObj, hostObj);
  return sandboxObj;
}
