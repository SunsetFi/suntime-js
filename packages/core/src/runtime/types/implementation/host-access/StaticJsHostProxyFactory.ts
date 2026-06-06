import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { Intrinsics } from "../../../intrinsics/intrinsics.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { HostAccessArg } from "../../HostAccessOptions.js";
import { StaticJsFunction } from "../../StaticJsFunction.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import { isStaticJsObject, StaticJsObject } from "../../StaticJsObject.js";
import { isStaticJsValue, StaticJsValue } from "../../StaticJsValue.js";
import { getWellKnownErrorName, WellKnownErrorName } from "../../well-known-errors.js";
import { StaticJsExternalFunction } from "../functions/StaticJsExternalFunction.js";
import { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";
import { StaticJsExternalObject } from "../objects/StaticJsExternalObject.js";

import { buildHostBuiltinMap, HostBuiltinMap } from "./HostBuiltinMap.js";
import { PolicyKey, PolicyKeyInterner } from "./PolicyKey.js";
import {
  applyChildPolicyQuery,
  ResolvedHostAccessOptions,
  resolveRootLevelHostAccessArg,
} from "./resolve-host-access-options.js";

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
  private readonly _externalObjectCache = new WeakMap<object, Map<PolicyKey, StaticJsObject>>();

  constructor(private readonly _realm: StaticJsRealm) {}

  getWrapperFor(value: object | Function, opts: HostAccessArg | undefined): StaticJsValue {
    const access = resolveRootLevelHostAccessArg(
      opts,
      this._realm.config.hostAccessDefaults,
      value,
    );

    if (isStaticJsValue(access)) {
      return access;
    }

    if (isFunction(value)) {
      const policy = this._policyFor(access, value);
      return this._wrapHostFunction(value, policy, undefined);
    }

    if (typeof value === "object") {
      const policy = this._policyFor(access, value);
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

  private _policyFor(resolved: ResolvedHostAccessOptions, target: unknown): HostAccessPolicy {
    return {
      options: resolved,
      wrapChild: (childHostValue: unknown, member: boolean): StaticJsValue => {
        // If it's already a StaticJsValue from this realm, return it directly.
        if (isStaticJsValue(childHostValue) && childHostValue.realm === this._realm) {
          return childHostValue;
        }

        const childResolved = applyChildPolicyQuery(
          resolved,
          resolved.childPolicy,
          childHostValue,
          this._realm.config.hostAccessDefaults,
        );
        if (childResolved === false) {
          return this._realm.types.undefined;
        }
        if (isStaticJsValue(childResolved)) {
          return childResolved;
        }

        const policy = this._policyFor(childResolved, childHostValue);

        if (
          childHostValue === null ||
          childHostValue === undefined ||
          (typeof childHostValue !== "object" && typeof childHostValue !== "function")
        ) {
          // Risk of infinite loops here, if for some reason this isn't actually a scalar.
          return this._realm.types.toStaticJsValue(childHostValue);
        }

        if (typeof childHostValue === "function") {
          return this._wrapHostFunction(
            childHostValue,
            policy,
            member ? (target as object | Function | undefined) : undefined,
          );
        }

        return this._wrapHostObject(childHostValue, policy);
      },
      wrapPrototype: (
        hostProto: object | null,
        intrinsic: keyof Intrinsics,
      ): StaticJsObject | null => {
        if (hostProto === null) {
          return null;
        }

        const resolvedProto = applyChildPolicyQuery(
          resolved,
          resolved.prototypePolicy,
          hostProto,
          this._realm.config.hostAccessDefaults,
        );
        if (resolvedProto === false) {
          return this._realm.intrinsics[intrinsic];
        }
        if (isStaticJsValue(resolvedProto)) {
          if (isStaticJsNull(resolvedProto) || resolvedProto === null) {
            return null;
          }
          if (isStaticJsObject(resolvedProto)) {
            return resolvedProto;
          }

          throw new TypeError(
            `Invalid prototype policy result: ${resolvedProto.runtimeTypeOf}. Expected StaticJsObject or StaticJsNull.`,
          );
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

    const { rawPrototypes, stubWellKnownTypes } = policy.options;

    if (Array.isArray(host) && stubWellKnownTypes.includes("array")) {
      // Technically these are members, but don't treat them that way for arrays.
      // This means functions invoked from the array won't have the array as 'this', which
      // is what we want.
      const values = host.map((v) => policy.wrapChild(v, false));
      // Safe: creates data properties on a new array instance.
      const result = this._realm.invokeEvaluatorSync(createArrayFromList(values));
      this._putCached(host, policy, result);
      return result;
    }

    if (stubWellKnownTypes.includes("error")) {
      const wellKnownName = getWellKnownErrorName(host);
      if (wellKnownName) {
        const result = this._stubError(host as Error, wellKnownName, policy);
        this._putCached(host, policy, result);
        return result;
      }
    }

    if (!rawPrototypes) {
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

    const wrapper = new StaticJsExternalFunction(
      this._realm,
      host,
      useSandboxThis ? undefined : homeObject,
      policy,
    );
    this._putCached(host, policy, wrapper);
    return wrapper;
  }

  private _stubError(
    host: Error,
    type: WellKnownErrorName,
    policy: HostAccessPolicy,
  ): StaticJsObject {
    if (host instanceof AggregateError) {
      const errors = host.errors.map((err) => policy.wrapChild(err, false));

      // Safe: Creates a new array from intrinsics.
      const list = this._realm.invokeEvaluatorSync(createArrayFromList(errors));

      let options: StaticJsValue;
      if (host.cause) {
        const cause = policy.wrapChild(host.cause, false);
        options = this._realm.types.object({
          cause: {
            value: cause,
          },
        });
      } else {
        options = this._realm.types.undefined;
      }

      // Safe: Runs our own constructor
      const stub = this._realm.invokeEvaluatorSync(
        this._realm.intrinsics["AggregateError"].constructEvaluator([
          list,
          this._realm.types.string(host.message),
          options,
        ]),
      );
      return stub;
    }

    return this._realm.types.error(type, host.message);
  }

  private _getCached(host: object, policy: HostAccessPolicy) {
    const inner = this._externalObjectCache.get(host);
    if (!inner) return undefined;
    return inner.get(this._policyInterner.keyFor(policy.options));
  }

  private _putCached(host: object, policy: HostAccessPolicy, wrapper: StaticJsObject) {
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
