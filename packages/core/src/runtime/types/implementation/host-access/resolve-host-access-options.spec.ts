import { describe, it, expect } from "vitest";

import type { HostAccessOptions, HostAccessArg } from "../../HostAccessOptions.js";

import {
  SAFE_DEFAULTS,
  type ResolvedHostAccessOptions,
  resolveRootLevelHostAccessArg,
  applyChildPolicy,
} from "./resolve-host-access-options.js";

describe("resolveHostAccessOptions", () => {
  const hostRoot = {};

  it("returns SAFE_DEFAULTS when opts is undefined and no realm default", () => {
    const r = resolveRootLevelHostAccessArg(undefined, undefined, hostRoot);
    expect(r).toEqual({ ...SAFE_DEFAULTS });
  });

  it("uses realm default when opts is undefined", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true };
    const r = resolveRootLevelHostAccessArg(undefined, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
  });

  it("does NOT layer realm default under caller opts", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true, writable: true };
    const r = resolveRootLevelHostAccessArg({ includeNonEnumerable: true }, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(false);
    expect(r.writable).toBe(false);
    expect(r.includeNonEnumerable).toBe(true);
  });

  it("merges object opts over SAFE_DEFAULTS", () => {
    const r = resolveRootLevelHostAccessArg(
      { walkPrototype: true, useSandboxThis: true },
      undefined,
      hostRoot,
    );
    expect(r.walkPrototype).toBe(true);
    expect(r.useSandboxThis).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
    expect(r.writable).toBe(false);
    expect(r.rawPrototypes).toBe(false);
  });

  it("function opts returning default uses baseline (= realm default or SAFE)", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true };
    const fn: HostAccessArg = () => "default";
    const r = resolveRootLevelHostAccessArg(fn, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(true);
  });

  it("function opts returning an object merges that object over SAFE_DEFAULTS", () => {
    const fn: HostAccessArg = () => ({ walkPrototype: true });
    const r = resolveRootLevelHostAccessArg(fn, undefined, hostRoot);
    expect(r.walkPrototype).toBe(true);
    expect(r.writable).toBe(false);
  });

  it("passes the root host object to the function form", () => {
    let seen: object | undefined;
    const fn: HostAccessArg = (o) => {
      seen = o;
      return "default";
    };
    resolveRootLevelHostAccessArg(fn, undefined, hostRoot);
    expect(seen).toBe(hostRoot);
  });

  it("preserves the childPolicy reference", () => {
    const grant = () => false as const;
    const r = resolveRootLevelHostAccessArg({ childPolicy: grant }, undefined, hostRoot);
    expect(r.childPolicy).toBe(grant);
  });
});

describe("applyChildPolicy", () => {
  const child = {};

  it("returns SAFE_DEFAULTS when parent has no childPolicy and no realm default", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
    };
    const r = applyChildPolicy(parent, child, undefined);
    expect(r).toEqual({ ...SAFE_DEFAULTS, childPolicy: undefined });
  });

  it("uses the realm default when parent has no childPolicy", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      // Parent fields must NOT leak into the child fallback.
      walkPrototype: true,
      includeNonEnumerable: true,
    };
    const realmDefault: HostAccessOptions = { writable: true };
    const r = applyChildPolicy(parent, child, realmDefault) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(true);
    expect(r.walkPrototype).toBe(false);
    expect(r.includeNonEnumerable).toBe(false);
  });

  it("returns SAFE_DEFAULTS when childPolicy returns false and no realm default", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      childPolicy: () => false,
    };
    const r = applyChildPolicy(parent, child, undefined) as ResolvedHostAccessOptions;
    expect(r.walkPrototype).toBe(false);
  });

  it("uses the realm default when childPolicy returns false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      childPolicy: () => false,
    };
    const realmDefault: HostAccessOptions = { writable: true };
    const r = applyChildPolicy(parent, child, realmDefault) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(true);
    expect(r.walkPrototype).toBe(false);
  });

  it("uses the realm default when childPolicy returns null", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: () => null as never,
    };
    const realmDefault: HostAccessOptions = { writable: true };
    const r = applyChildPolicy(parent, child, realmDefault) as ResolvedHostAccessOptions;
    expect(r.writable).toBe(true);
  });

  it('returns the parent policy when childPolicy is the literal "inherit"', () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      useSandboxThis: true,
      childPolicy: "inherit",
    };
    const r = applyChildPolicy(parent, child, { writable: true });
    expect(r).toBe(parent);
  });

  it('returns the parent policy when childPolicy returns "inherit"', () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      useSandboxThis: true,
      childPolicy: () => "inherit",
    };
    const r = applyChildPolicy(parent, child, { writable: true });
    expect(r).toBe(parent);
  });

  it("merges object return over SAFE_DEFAULTS (does NOT inherit parent fields or realm default)", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      includeNonEnumerable: true,
      childPolicy: () => ({ writable: true }),
    };
    const r = applyChildPolicy(parent, child, {
      useSandboxThis: true,
    }) as ResolvedHostAccessOptions;
    expect(r.walkPrototype).toBe(false);
    expect(r.includeNonEnumerable).toBe(false);
    expect(r.useSandboxThis).toBe(false);
    expect(r.writable).toBe(true);
  });

  it("passes the child host object to childPolicy", () => {
    let seen: object | undefined;
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: (o) => {
        seen = o;
        return false;
      },
    };
    applyChildPolicy(parent, child, undefined);
    expect(seen).toBe(child);
  });

  it("returns false if the childPolicy returns false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: () => false,
    };
    const r = applyChildPolicy(parent, child, undefined);
    expect(r).toBe(false);
  });

  it("returns false if the childPolicy is false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: false,
    };
    const r = applyChildPolicy(parent, child, undefined);
    expect(r).toBe(false);
  });
});
