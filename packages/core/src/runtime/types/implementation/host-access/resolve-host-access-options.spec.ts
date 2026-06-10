import { describe, it, expect } from "vitest";

import type { HostAccessOptions, HostAccessArg } from "../../HostAccessOptions.js";

import {
  SAFE_DEFAULTS,
  type ResolvedHostAccessOptions,
  resolveRootLevelHostAccessArg,
  applyChildPolicyQuery,
} from "./resolve-host-access-options.js";

describe("resolveHostAccessOptions", () => {
  const hostRoot = {};

  it("returns SAFE_DEFAULTS when opts is undefined and no realm default", () => {
    const r = resolveRootLevelHostAccessArg(undefined, undefined, hostRoot);
    expect(r).toEqual({ ...SAFE_DEFAULTS });
  });

  it("uses realm default when opts is undefined", () => {
    const realmDefault: HostAccessOptions = { includeNonEnumerable: true };
    const r = resolveRootLevelHostAccessArg(
      undefined,
      realmDefault,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.includeNonEnumerable).toBe(true);
  });

  it("does NOT layer realm default under caller opts", () => {
    const realmDefault: HostAccessOptions = { writable: true };
    const r = resolveRootLevelHostAccessArg(
      { includeNonEnumerable: true },
      realmDefault,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(false);
    expect(r.includeNonEnumerable).toBe(true);
  });

  it("merges object opts over SAFE_DEFAULTS", () => {
    const r = resolveRootLevelHostAccessArg(
      { prototypePolicy: "inherit", useSandboxThis: true },
      undefined,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.prototypePolicy).toBe("inherit");
    expect(r.useSandboxThis).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
    expect(r.writable).toBe(false);
  });

  it("function opts returning default uses baseline (= realm default or SAFE)", () => {
    const realmDefault: HostAccessOptions = { includeNonEnumerable: true };
    const fn: HostAccessArg = () => "default";
    const r = resolveRootLevelHostAccessArg(
      fn,
      realmDefault,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.includeNonEnumerable).toBe(true);
  });

  it("function opts returning an object merges that object over SAFE_DEFAULTS", () => {
    const fn: HostAccessArg = () => ({ includeNonEnumerable: true });
    const r = resolveRootLevelHostAccessArg(fn, undefined, hostRoot) as ResolvedHostAccessOptions;
    expect(r.includeNonEnumerable).toBe(true);
    expect(r.writable).toBe(false);
  });

  it("passes the root host object to the function form", () => {
    let seen: unknown;
    const fn: HostAccessArg = (o) => {
      seen = o;
      return "default";
    };
    resolveRootLevelHostAccessArg(fn, undefined, hostRoot);
    expect(seen).toBe(hostRoot);
  });

  it("preserves the prototypePolicy reference", () => {
    const grant = () => false as const;
    const r = resolveRootLevelHostAccessArg(
      { prototypePolicy: grant },
      undefined,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.prototypePolicy).toBe(grant);
  });

  it("preserves the childPolicy reference", () => {
    const grant = () => false as const;
    const r = resolveRootLevelHostAccessArg(
      { childPolicy: grant },
      undefined,
      hostRoot,
    ) as ResolvedHostAccessOptions;
    expect(r.childPolicy).toBe(grant);
  });
});

describe("applyChildPolicy", () => {
  const child = {};

  it("returns SAFE_DEFAULTS when parent has no childPolicy and no realm default", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, undefined);
    expect(r).toEqual(SAFE_DEFAULTS);
  });

  it("uses default when parent has no childPolicy", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      // Parent fields must NOT leak into the child fallback.
      includeNonEnumerable: true,
    };
    const realmDefault: HostAccessOptions = { writable: true };
    const r = applyChildPolicyQuery(
      parent,
      parent.childPolicy,
      child,
      realmDefault,
    ) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
  });

  it("returns false when childPolicy is false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      childPolicy: false,
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, undefined);
    expect(r).toBe(false);
  });

  it("returns false when childPolicy returns false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      childPolicy: () => false,
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, undefined);
    expect(r).toBe(false);
  });

  it("uses the realm default when childPolicy returns 'default'", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      childPolicy: () => "default",
    };
    const realmDefault: HostAccessOptions = { writable: true };
    const r = applyChildPolicyQuery(
      parent,
      parent.childPolicy,
      child,
      realmDefault,
    ) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
  });

  it('returns the parent policy when childPolicy is the literal "inherit"', () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      useSandboxThis: true,
      childPolicy: "inherit",
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, { writable: true });
    expect(r).toBe(parent);
  });

  it('returns the parent policy when childPolicy returns "inherit"', () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      useSandboxThis: true,
      childPolicy: () => "inherit",
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, { writable: true });
    expect(r).toBe(parent);
  });

  it("merges object return over SAFE_DEFAULTS (does NOT inherit parent fields or realm default)", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      includeNonEnumerable: true,
      childPolicy: () => ({ writable: true }),
    };
    const r = applyChildPolicyQuery(parent, parent.childPolicy, child, {
      useSandboxThis: true,
    }) as ResolvedHostAccessOptions;
    expect(r.includeNonEnumerable).toBe(false);
    expect(r.useSandboxThis).toBe(false);
    expect(r.writable).toBe(true);
  });

  it("passes the child host object to childPolicy", () => {
    let seen: unknown;
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: (o) => {
        seen = o;
        return false;
      },
    };
    applyChildPolicyQuery(parent, parent.childPolicy, child, undefined);
    expect(seen).toBe(child);
  });
});
