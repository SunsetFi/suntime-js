import { isStaticJsObject, StaticJsObject, StaticJsRealm } from "@suntime-js/core";
import { describe, expect, it, vi } from "vitest";

import {
  createBridgeContext,
  getHostObject,
  unwrapArg,
  wrapClassBacked,
  wrapValue,
} from "./host-bridge";

// Builds a minimal spawnOpts backed by a real StaticJsRealm.
function makeSpawnOpts(realm: ReturnType<typeof StaticJsRealm>) {
  return {
    realm,
    registerSubTask: vi.fn(),
    addLog: vi.fn(),
  };
}

describe("host-bridge", () => {
  it.todo("wrapClassBacked round-trips via getHostObject");
  it.todo("unwrapArg extracts host value from sandbox wrapper");
});

describe("wrapValue — primitives and POJOs", () => {
  function makeCtx() {
    const realm = StaticJsRealm();
    return { ctx: createBridgeContext(makeSpawnOpts(realm)), realm };
  }

  it("wraps a JS number as a sandbox number", () => {
    const { ctx } = makeCtx();
    const result = wrapValue(42, ctx);
    expect(result.toNative()).toBe(42);
  });

  it("wraps a JS array as a sandbox array", () => {
    const { ctx } = makeCtx();
    const result = wrapValue([1, "hello", false], ctx) as StaticJsObject;
    expect(result.getSync("length")?.toNative()).toBe(3);
    expect(result.getSync("0")?.toNative()).toBe(1);
    expect(result.getSync("1")?.toNative()).toBe("hello");
    expect(result.getSync("2")?.toNative()).toBe(false);
  });

  it("wraps null as sandbox null", () => {
    const { ctx, realm } = makeCtx();
    const result = wrapValue(null, ctx);
    expect(result).toBe(realm.types.null);
  });

  it("wraps a StaticJsScalar from another realm as a class-backed object", () => {
    const outerRealm = StaticJsRealm();
    const innerRealm = StaticJsRealm();
    const ctx = createBridgeContext(makeSpawnOpts(outerRealm));
    const innerNum = innerRealm.types.number(99);
    const result = wrapValue(innerNum, ctx);
    expect(isStaticJsObject(result)).toBe(true);
    expect(getHostObject(result)).toBe(innerNum);
  });

  it("plain-clones a POJO with recursive property wrapping", () => {
    const { ctx } = makeCtx();
    const result = wrapValue({ x: 1, y: "hello" }, ctx);
    expect(isStaticJsObject(result)).toBe(true);
    if (!isStaticJsObject(result)) return;
    expect(result.getSync("x")?.toNative()).toBe(1);
    expect(result.getSync("y")?.toNative()).toBe("hello");
  });
});

describe("unwrapArg", () => {
  const realm = StaticJsRealm();
  const ctx = createBridgeContext(makeSpawnOpts(realm));

  it("extracts .value from a sandbox scalar", () => {
    const sandboxNum = realm.types.number(7);
    expect(unwrapArg(sandboxNum)).toBe(7);
  });

  it("calls .toNative() on a plain sandbox object", () => {
    const obj = realm.types.object({
      a: { value: realm.types.number(1), enumerable: true, writable: true, configurable: true },
    });
    const result = unwrapArg(obj) as Record<string, unknown>;
    expect(result.a).toBe(1);
  });

  it("returns the backing host object for a class-backed wrapper", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(unwrapArg(wrapper)).toBe(innerRealm);
  });
});

describe("wrapClassBacked", () => {
  const outerRealm = StaticJsRealm();
  const ctx = createBridgeContext(makeSpawnOpts(outerRealm));

  it("returns a sandbox object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(isStaticJsObject(wrapper)).toBe(true);
  });

  it("backing map links wrapper back to host object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(getHostObject(wrapper)).toBe(innerRealm);
  });

  it("exposes prototype methods as sandbox functions", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx) as unknown as ReturnType<
      typeof outerRealm.types.object
    >;
    // evaluateScriptSync is a method on StaticJsRealm — it should be on the prototype
    const fn = wrapper.getSync("evaluateScriptSync");
    expect(fn).toBeDefined();
  });

  it("writes to the wrapper do not reach the host object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx) as unknown as ReturnType<
      typeof outerRealm.types.object
    >;
    wrapper.setSync("evaluateScriptSync", outerRealm.types.null);
    // The host object is unaffected
    expect(typeof (innerRealm as unknown as Record<string, unknown>).evaluateScriptSync).toBe(
      "function",
    );
    // The method is still accessible via the prototype on the wrapper
    const fromProto = wrapper.getSync("evaluateScriptSync");
    expect(fromProto).toBeDefined();
  });
});
