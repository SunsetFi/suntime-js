import { HostAccessChildOptions, HostAccessQueryFunction } from "../../HostAccessOptions.js";

import type { ResolvedHostAccessOptions } from "./resolve-host-access-options.js";

export type PolicyKey = string;

export class PolicyKeyInterner {
  private readonly _grantIds = new WeakMap<object, number>();
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
      Object.entries(policy.stubWellKnownTypes)
        .toSorted((a, b) => a[0].localeCompare(b[0]))
        .map(([key, value]) => `${key}:${value}`)
        .join(",") || "none",
      String(policy.includeNonEnumerable),
      String(policy.includeWellKnownSymbols),
      String(policy.writable),
      String(policy.extensible),
      String(policy.useSandboxThis),
      protoGrantId,
      childGrantId,
    ].join(":");
  }

  private _idForChildPolicy(policy: HostAccessChildOptions): string {
    if (policy && (typeof policy === "function" || typeof policy === "object")) {
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
