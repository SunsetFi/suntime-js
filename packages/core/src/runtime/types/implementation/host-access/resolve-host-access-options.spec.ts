import { describe, it, expect } from "vitest";

import type { HostAccessOptions, HostAccessArg } from "../../HostAccessOptions.js";

import {
  SAFE_DEFAULTS,
  type ResolvedHostAccessOptions,
  resolveHostAccessOptions,
  applyChildPolicy,
} from "./resolve-host-access-options.js";

describe("resolveHostAccessOptions", () => {
  const hostRoot = {};

  it("returns SAFE_DEFAULTS when opts is undefined and no realm default", () => {
    const r = resolveHostAccessOptions(undefined, undefined, hostRoot);
    expect(r).toEqual({ ...SAFE_DEFAULTS, childPolicy: undefined });
  });

  it("uses realm default when opts is undefined", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true };
    const r = resolveHostAccessOptions(undefined, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(true);
    expect(r.includeNonEnumerable).toBe(false);
  });

  it("does NOT layer realm default under caller opts", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true, writable: true };
    const r = resolveHostAccessOptions({ includeNonEnumerable: true }, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(false);
    expect(r.writable).toBe(false);
    expect(r.includeNonEnumerable).toBe(true);
  });

  it("merges object opts over SAFE_DEFAULTS", () => {
    const r = resolveHostAccessOptions(
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

  it("function opts returning true uses baseline (= realm default or SAFE)", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true };
    const fn: HostAccessArg = () => "inherit";
    const r = resolveHostAccessOptions(fn, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(true);
  });

  it("function opts returning false uses SAFE_DEFAULTS even with realm default", () => {
    const realmDefault: HostAccessOptions = { walkPrototype: true };
    const fn: HostAccessArg = () => false;
    const r = resolveHostAccessOptions(fn, realmDefault, hostRoot);
    expect(r.walkPrototype).toBe(false);
  });

  it("function opts returning an object merges that object over SAFE_DEFAULTS", () => {
    const fn: HostAccessArg = () => ({ walkPrototype: true });
    const r = resolveHostAccessOptions(fn, undefined, hostRoot);
    expect(r.walkPrototype).toBe(true);
    expect(r.writable).toBe(false);
  });

  it("passes the root host object to the function form", () => {
    let seen: object | undefined;
    const fn: HostAccessArg = (o) => {
      seen = o;
      return false;
    };
    resolveHostAccessOptions(fn, undefined, hostRoot);
    expect(seen).toBe(hostRoot);
  });

  it("preserves the childPolicy reference", () => {
    const grant = () => false as const;
    const r = resolveHostAccessOptions({ childPolicy: grant }, undefined, hostRoot);
    expect(r.childPolicy).toBe(grant);
  });
});

describe("applyChildPolicy", () => {
  const child = {};

  it("returns SAFE policy when parent has no childPolicy", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      childPolicy: undefined,
    };
    const r = applyChildPolicy(parent, child);
    expect(r).toEqual({ ...SAFE_DEFAULTS, childPolicy: undefined });
  });

  it("returns SAFE policy when childPolicy returns false", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      childPolicy: () => false,
    };
    const r = applyChildPolicy(parent, child);
    expect(r.walkPrototype).toBe(false);
  });

  it("returns the parent policy when childPolicy returns true", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      useSandboxThis: true,
      childPolicy: () => "inherit",
    };
    const r = applyChildPolicy(parent, child);
    expect(r).toBe(parent);
  });

  it("merges object return over SAFE_DEFAULTS (does NOT inherit parent fields)", () => {
    const parent: ResolvedHostAccessOptions = {
      ...SAFE_DEFAULTS,
      walkPrototype: true,
      includeNonEnumerable: true,
      childPolicy: () => ({ writable: true }),
    };
    const r = applyChildPolicy(parent, child);
    expect(r.walkPrototype).toBe(false);
    expect(r.includeNonEnumerable).toBe(false);
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
    applyChildPolicy(parent, child);
    expect(seen).toBe(child);
  });
});
