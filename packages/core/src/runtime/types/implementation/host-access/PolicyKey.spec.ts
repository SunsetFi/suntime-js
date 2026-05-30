import { describe, it, expect } from "vitest";

import { PolicyKeyInterner } from "./PolicyKey.js";
import { SAFE_DEFAULTS, type ResolvedHostAccessOptions } from "./resolve-host-access-options.js";

function safe(over: Partial<ResolvedHostAccessOptions> = {}): ResolvedHostAccessOptions {
  return { ...SAFE_DEFAULTS, ...over };
}

describe("PolicyKeyInterner", () => {
  it("returns the same key for two structurally identical no-grant policies", () => {
    const i = new PolicyKeyInterner();
    expect(i.keyFor(safe({ walkPrototype: true }))).toBe(i.keyFor(safe({ walkPrototype: true })));
  });

  it("returns different keys for differing booleans", () => {
    const i = new PolicyKeyInterner();
    expect(i.keyFor(safe({ walkPrototype: true }))).not.toBe(
      i.keyFor(safe({ walkPrototype: false })),
    );
  });

  it("returns the same key for two policies with the SAME childPolicy reference", () => {
    const i = new PolicyKeyInterner();
    const g = () => false as const;
    expect(i.keyFor(safe({ childPolicy: g }))).toBe(i.keyFor(safe({ childPolicy: g })));
  });

  it("returns different keys for different childPolicy references with same flat fields", () => {
    const i = new PolicyKeyInterner();
    const g1 = () => false as const;
    const g2 = () => false as const;
    expect(i.keyFor(safe({ childPolicy: g1 }))).not.toBe(i.keyFor(safe({ childPolicy: g2 })));
  });

  it("the no-grant key is stable across calls", () => {
    const i = new PolicyKeyInterner();
    expect(i.keyFor(safe())).toBe(i.keyFor(safe()));
  });
});
