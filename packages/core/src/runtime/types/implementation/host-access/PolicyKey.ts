import { HostAccessChildOptions, HostAccessQueryFunction } from "../../HostAccessOptions.js";

import type { ResolvedHostAccessOptions } from "./resolve-host-access-options.js";

export type PolicyKey = string;

export class PolicyKeyInterner {
  private readonly _grantIds = new WeakMap<Function, number>();
  private _nextGrantId = 1;

  keyFor(policy: ResolvedHostAccessOptions | HostAccessQueryFunction): PolicyKey {
    if (typeof policy === "function") {
      return `query:${this._idForChildPolicy(policy)}`;
    }

    const protoGrantId = policy.prototypePolicy
      ? this._idForChildPolicy(policy.prototypePolicy)
      : 0;
    const childGrantId = policy.childPolicy ? this._idForChildPolicy(policy.childPolicy) : 0;
    return [
      policy.stubWellKnownTypes.toSorted().join(",") || "none",
      policy.includeNonEnumerable ? "1" : "0",
      policy.writable ? "1" : "0",
      policy.useSandboxThis ? "1" : "0",
      policy.rawPrototypes ? "1" : "0",
      protoGrantId,
      childGrantId,
    ].join(":");
  }

  private _idForChildPolicy(policy: HostAccessChildOptions): string {
    if (typeof policy === "function") {
      let id = this._grantIds.get(policy);
      if (id === undefined) {
        id = this._nextGrantId++;
        this._grantIds.set(policy, id);
      }
      return String(id);
    }

    return String(policy);
  }
}
