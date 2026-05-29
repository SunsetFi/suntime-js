import { describe, it, expect } from "vitest";

import { StaticJsRealm } from "../../../../index.js";

import { buildHostBuiltinMap } from "./HostBuiltinMap.js";

describe("buildHostBuiltinMap", () => {
  it("maps host Object.prototype to realm intrinsic Object.prototype", () => {
    const realm = new StaticJsRealm();
    const map = buildHostBuiltinMap(realm);
    expect(map.get(Object.prototype)).toBe(realm.intrinsics["Object.prototype"]);
  });

  it("maps host Array.prototype to realm intrinsic Array.prototype", () => {
    const realm = new StaticJsRealm();
    const map = buildHostBuiltinMap(realm);
    expect(map.get(Array.prototype)).toBe(realm.intrinsics["Array.prototype"]);
  });

  it("maps host Error subclasses", () => {
    const realm = new StaticJsRealm();
    const map = buildHostBuiltinMap(realm);
    expect(map.get(Error.prototype)).toBe(realm.intrinsics["Error.prototype"]);
    expect(map.get(TypeError.prototype)).toBe(realm.intrinsics["TypeError.prototype"]);
    expect(map.get(RangeError.prototype)).toBe(realm.intrinsics["RangeError.prototype"]);
    expect(map.get(ReferenceError.prototype)).toBe(realm.intrinsics["ReferenceError.prototype"]);
    expect(map.get(SyntaxError.prototype)).toBe(realm.intrinsics["SyntaxError.prototype"]);
    expect(map.get(EvalError.prototype)).toBe(realm.intrinsics["EvalError.prototype"]);
    expect(map.get(URIError.prototype)).toBe(realm.intrinsics["URIError.prototype"]);
  });

  it("maps Map / Set / Promise / Function / Number / String / Boolean / Symbol prototypes", () => {
    const realm = new StaticJsRealm();
    const map = buildHostBuiltinMap(realm);
    expect(map.get(Function.prototype)).toBe(realm.intrinsics["Function.prototype"]);
    expect(map.get(Map.prototype)).toBe(realm.intrinsics["Map.prototype"]);
    expect(map.get(Set.prototype)).toBe(realm.intrinsics["Set.prototype"]);
    expect(map.get(Promise.prototype)).toBe(realm.intrinsics["Promise.prototype"]);
    expect(map.get(Number.prototype)).toBe(realm.intrinsics["Number.prototype"]);
    expect(map.get(String.prototype)).toBe(realm.intrinsics["String.prototype"]);
    expect(map.get(Boolean.prototype)).toBe(realm.intrinsics["Boolean.prototype"]);
    expect(map.get(Symbol.prototype)).toBe(realm.intrinsics["Symbol.prototype"]);
  });

  it("does not include host prototypes that aren't intrinsics in this realm (Date, RegExp)", () => {
    const realm = new StaticJsRealm();
    const map = buildHostBuiltinMap(realm);
    expect(map.has(Date.prototype)).toBe(false);
    expect(map.has(RegExp.prototype)).toBe(false);
  });
});
