import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import { StaticJsFunction } from "../StaticJsFunction.js";
import { StaticJsObject } from "../StaticJsObject.js";
import { isErrorTypeName } from "../StaticJsTypeFactory.js";
import { isStaticJsValue, StaticJsValue } from "../StaticJsValue.js";

import { StaticJsExternalFunction } from "./functions/StaticJsExternalFunction.js";
import { HostAccessPolicy } from "./host-access/HostAccessPolicy.js";
import { buildHostBuiltinMap, HostBuiltinMap } from "./host-access/HostBuiltinMap.js";
import { PolicyKey, PolicyKeyInterner } from "./host-access/PolicyKey.js";
import {
  applyChildPolicy,
  ResolvedHostAccessOptions,
} from "./host-access/resolve-host-access-options.js";
import { StaticJsExternalObject } from "./objects/StaticJsExternalObject.js";

export class StaticJsHostProxyFactory {
  private _hostBuiltinMapCache: HostBuiltinMap | undefined;

  private readonly _policyInterner = new PolicyKeyInterner();
  // Host object -> (policy key -> wrapper). The outer WeakMap keys on the host,
  // so the whole entry is collected once the host (and the wrappers, which
  // strong-reference it) become unreachable. The inner map holds wrappers
  // STRONGLY.
  // Note: We used to use WeakValueMap for the objects, but WeakRefs will
  // not only NOT GC, but KEEP THE OBJECT PERMENANTLY ALIVE until the macrotask ticks over.
  // This causes vitest to fall over, as it NEVER ticks the macrotask and simply loops
  // over microtasks the entire time.
  private readonly _externalObjectCache = new WeakMap<
    object,
    Map<PolicyKey, StaticJsExternalObject | StaticJsExternalFunction>
  >();

  constructor(private readonly _realm: StaticJsRealm) {}

  getWrapperFor(value: object | Function, hostAccess: ResolvedHostAccessOptions): StaticJsValue {
    if (isFunction(value)) {
      const policy = this._policyFor(hostAccess, value);
      return this._wrapHostFunction(value, policy, undefined);
    }

    if (typeof value === "object") {
      if (value instanceof Error && isErrorTypeName(value.name)) {
        return this._realm.types.error(value.name, value.message);
      }

      const policy = this._policyFor(hostAccess, value);
      return this._wrapHostObject(value, policy);
    }
    throw new Error(`Cannot convert ${value} to StaticJsValue: Unknown type.`);
  }

  private get _hostBuiltinMap(): HostBuiltinMap {
    if (!this._hostBuiltinMapCache) {
      if (!this._realm.intrinsics["Object.prototype"]) {
        throw new StaticJsEngineError(
          "HostBuiltinMap accessed before realm intrinsics were populated",
        );
      }
      this._hostBuiltinMapCache = buildHostBuiltinMap(this._realm);
    }
    return this._hostBuiltinMapCache;
  }

  private _policyFor(
    resolved: ResolvedHostAccessOptions,
    target: object | Function | undefined,
  ): HostAccessPolicy {
    return {
      options: resolved,
      wrapChild: (childHostValue: unknown, member: boolean): StaticJsValue => {
        // If it's already a StaticJsValue from this realm, return it directly.
        if (isStaticJsValue(childHostValue) && childHostValue.realm === this._realm) {
          return childHostValue;
        }

        if (
          childHostValue === null ||
          childHostValue === undefined ||
          (typeof childHostValue !== "object" && typeof childHostValue !== "function")
        ) {
          // Risk of infinite loops here, if for some reason this isn't actually a scalar.
          return this._realm.types.toStaticJsValue(childHostValue);
        }

        const childResolved = applyChildPolicy(resolved, childHostValue);
        const policy = this._policyFor(childResolved, childHostValue);

        if (typeof childHostValue === "function") {
          return this._wrapHostFunction(childHostValue, policy, member ? target : undefined);
        }

        return this._wrapHostObject(childHostValue, policy);
      },
      wrapPrototype: (hostProto: object): StaticJsObject => {
        if (!resolved.walkPrototype) {
          return this._realm.intrinsics["Object.prototype"];
        }
        return this._wrapHostObject(hostProto, this._policyFor(resolved, target));
      },
    };
  }

  private _wrapHostObject(host: object, policy: HostAccessPolicy): StaticJsObject {
    const cached = this._getCached(host, policy);
    if (cached) {
      return cached as StaticJsObject;
    }

    if (!policy.options.rawPrototypes) {
      const builtin = this._hostBuiltinMap.get(host);
      if (builtin) {
        return builtin;
      }
    }

    const wrapper = new StaticJsExternalObject(this._realm, host, policy);
    this._putCached(host, policy, wrapper);
    return wrapper;
  }

  private _wrapHostFunction(
    host: Function,
    policy: HostAccessPolicy,
    homeObject: object | Function | undefined,
  ): StaticJsFunction {
    const cached = this._getCached(host, policy);
    if (cached) {
      return cached as unknown as StaticJsFunction;
    }

    const { rawPrototypes, useSandboxThis } = policy.options;

    if (!rawPrototypes) {
      const builtin = this._hostBuiltinMap.get(host);
      if (builtin) {
        return builtin as StaticJsFunction;
      }
    }

    const wrapper = new StaticJsExternalFunction(this._realm, host.name, host, policy, {
      getThisArg: (v) => (useSandboxThis ? v.toNative() : homeObject),
    });
    this._putCached(host, policy, wrapper);
    return wrapper;
  }

  private _getCached(host: object, policy: HostAccessPolicy) {
    const inner = this._externalObjectCache.get(host);
    if (!inner) return undefined;
    return inner.get(this._policyInterner.keyFor(policy.options));
  }

  private _putCached(
    host: object,
    policy: HostAccessPolicy,
    wrapper: StaticJsExternalObject | StaticJsExternalFunction,
  ) {
    let inner = this._externalObjectCache.get(host);
    if (!inner) {
      inner = new Map();
      this._externalObjectCache.set(host, inner);
    }
    inner.set(this._policyInterner.keyFor(policy.options), wrapper);
  }
}

// Just "typeof f === 'function'" is not enough, because it will type it as Function.
// There is nothing wrong with this, but the linter gets angry, and so this appeases it.
function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return typeof f === "function";
}
