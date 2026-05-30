import { describe, it, expect, vi } from "vitest";

import {
  StaticJsRealm,
  StaticJsTaskIterator,
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../../../src/index.js";

function drainTask(task: StaticJsTaskIterator) {
  while (!task.done) {
    task.next();
  }
}

describe("E2E: StaticJsObject API (realm.types.object())", () => {
  describe("getPrototypeOf", () => {
    it("getPrototypeOfAsync returns the prototype", async () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object();
      const obj = realm.types.object(undefined, proto);
      expect(await obj.getPrototypeOfAsync()).toBe(proto);
    });

    it("getPrototypeOfSync returns the prototype", () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object();
      const obj = realm.types.object(undefined, proto);
      expect(obj.getPrototypeOfSync()).toBe(proto);
    });

    it("getPrototypeOfAsync returns null for null-prototype objects", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object(undefined, realm.types.null);
      expect(await obj.getPrototypeOfAsync()).toBeNull();
    });

    it("getPrototypeOfSync returns null for null-prototype objects", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object(undefined, realm.types.null);
      expect(obj.getPrototypeOfSync()).toBeNull();
    });
  });

  describe("setPrototypeOf", () => {
    it("setPrototypeOfAsync updates the prototype", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const newProto = realm.types.object();
      await obj.setPrototypeOfAsync(newProto);
      expect(obj.getPrototypeOfSync()).toBe(newProto);
    });

    it("setPrototypeOfSync updates the prototype", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const newProto = realm.types.object();
      obj.setPrototypeOfSync(newProto);
      expect(obj.getPrototypeOfSync()).toBe(newProto);
    });

    it("setPrototypeOfAsync returns true on success", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const result = await obj.setPrototypeOfAsync(realm.types.object());
      expect(result).toBe(true);
    });

    it("setPrototypeOfAsync returns false on non-extensible object", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      await obj.preventExtensionsAsync();
      const result = await obj.setPrototypeOfAsync(realm.types.object());
      expect(result).toBe(false);
    });
  });

  describe("isExtensible", () => {
    it("isExtensibleAsync returns true for new objects", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(await obj.isExtensibleAsync()).toBe(true);
    });

    it("isExtensibleSync returns true for new objects", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(obj.isExtensibleSync()).toBe(true);
    });

    it("isExtensibleAsync returns false after preventExtensions", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      await obj.preventExtensionsAsync();
      expect(await obj.isExtensibleAsync()).toBe(false);
    });

    it("isExtensibleSync returns false after preventExtensions", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      obj.preventExtensionsSync();
      expect(obj.isExtensibleSync()).toBe(false);
    });
  });

  describe("preventExtensions", () => {
    it("preventExtensionsAsync makes object non-extensible", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      await obj.preventExtensionsAsync();
      expect(obj.isExtensibleSync()).toBe(false);
    });

    it("preventExtensionsSync makes object non-extensible", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      obj.preventExtensionsSync();
      expect(obj.isExtensibleSync()).toBe(false);
    });
  });

  describe("ownPropertyKeys", () => {
    it("ownPropertyKeysAsync returns defined string keys", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        a: { value: realm.types.number(1), enumerable: true },
        b: { value: realm.types.number(2), enumerable: false },
      });
      const keys = await obj.ownPropertyKeysAsync();
      expect(keys).toEqual(["a", "b"]);
    });

    it("ownPropertyKeysSync returns defined string keys", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        a: { value: realm.types.number(1), enumerable: true },
        b: { value: realm.types.number(2), enumerable: false },
      });
      const keys = obj.ownPropertyKeysSync();
      expect(keys).toEqual(["a", "b"]);
    });
  });

  describe("ownEnumerableKeys", () => {
    it("ownEnumerableKeysAsync returns only enumerable keys", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        a: { value: realm.types.number(1), enumerable: true },
        b: { value: realm.types.number(2), enumerable: false },
      });
      const keys = await obj.ownEnumerableKeysAsync();
      expect(keys).toEqual(["a"]);
    });

    it("ownEnumerableKeysSync returns only enumerable keys", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        a: { value: realm.types.number(1), enumerable: true },
        b: { value: realm.types.number(2), enumerable: false },
      });
      const keys = obj.ownEnumerableKeysSync();
      expect(keys).toEqual(["a"]);
    });
  });

  describe("hasProperty", () => {
    it("hasPropertyAsync returns true for own properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ x: { value: realm.types.number(1) } });
      expect(await obj.hasPropertyAsync("x")).toBe(true);
    });

    it("hasPropertySync returns true for own properties", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ x: { value: realm.types.number(1) } });
      expect(obj.hasPropertySync("x")).toBe(true);
    });

    it("hasPropertyAsync returns true for inherited properties", async () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ inherited: { value: realm.types.number(42) } });
      const obj = realm.types.object(undefined, proto);
      expect(await obj.hasPropertyAsync("inherited")).toBe(true);
    });

    it("hasPropertySync returns true for inherited properties", () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ inherited: { value: realm.types.number(42) } });
      const obj = realm.types.object(undefined, proto);
      expect(obj.hasPropertySync("inherited")).toBe(true);
    });

    it("hasPropertyAsync returns false for missing properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(await obj.hasPropertyAsync("missing")).toBe(false);
    });

    it("hasPropertySync returns false for missing properties", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(obj.hasPropertySync("missing")).toBe(false);
    });
  });

  describe("hasOwnProperty", () => {
    it("hasOwnPropertyAsync returns true for own properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ x: { value: realm.types.number(1) } });
      expect(await obj.hasOwnPropertyAsync("x")).toBe(true);
    });

    it("hasOwnPropertySync returns true for own properties", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ x: { value: realm.types.number(1) } });
      expect(obj.hasOwnPropertySync("x")).toBe(true);
    });

    it("hasOwnPropertyAsync returns false for inherited properties", async () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ inherited: { value: realm.types.number(42) } });
      const obj = realm.types.object(undefined, proto);
      expect(await obj.hasOwnPropertyAsync("inherited")).toBe(false);
    });

    it("hasOwnPropertySync returns false for inherited properties", () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ inherited: { value: realm.types.number(42) } });
      const obj = realm.types.object(undefined, proto);
      expect(obj.hasOwnPropertySync("inherited")).toBe(false);
    });
  });

  describe("getProperty", () => {
    it("getPropertyAsync returns the descriptor for an own property", async () => {
      const realm = new StaticJsRealm();
      const val = realm.types.number(42);
      const obj = realm.types.object({ x: { value: val, enumerable: true, writable: true } });
      const desc = await obj.getPropertyAsync("x");
      expectDataPropertyDescriptor(desc);
      expect(desc.value).toBe(val);
    });

    it("getPropertySync returns the descriptor for an own property", () => {
      const realm = new StaticJsRealm();
      const val = realm.types.number(42);
      const obj = realm.types.object({ x: { value: val, enumerable: true, writable: true } });
      const desc = obj.getPropertySync("x");
      expectDataPropertyDescriptor(desc);
      expect(desc.value).toBe(val);
    });

    it("getPropertyAsync returns the descriptor from the prototype chain", async () => {
      const realm = new StaticJsRealm();
      const val = realm.types.number(7);
      const proto = realm.types.object({ y: { value: val } });
      const obj = realm.types.object(undefined, proto);
      const desc = await obj.getPropertyAsync("y");
      expectDataPropertyDescriptor(desc);
      expect(desc.value).toBe(val);
    });

    it("getPropertyAsync returns undefined for missing properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(await obj.getPropertyAsync("nope")).toBeUndefined();
    });
  });

  describe("getOwnProperty", () => {
    it("getOwnPropertyAsync returns the descriptor for own property", async () => {
      const realm = new StaticJsRealm();
      const val = realm.types.number(99);
      const obj = realm.types.object({ z: { value: val } });
      const desc = await obj.getOwnPropertyAsync("z");
      expectDataPropertyDescriptor(desc);
      expect(desc.value).toBe(val);
    });

    it("getOwnPropertySync returns the descriptor for own property", () => {
      const realm = new StaticJsRealm();
      const val = realm.types.number(99);
      const obj = realm.types.object({ z: { value: val } });
      const desc = obj.getOwnPropertySync("z");
      expectDataPropertyDescriptor(desc);
      expect(desc.value).toBe(val);
    });

    it("getOwnPropertyAsync returns undefined for inherited properties", async () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ inherited: { value: realm.types.number(1) } });
      const obj = realm.types.object(undefined, proto);
      expect(await obj.getOwnPropertyAsync("inherited")).toBeUndefined();
    });
  });

  describe("defineOwnProperty", () => {
    it("defineOwnPropertyAsync defines a new property", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const val = realm.types.string("hello");
      await obj.defineOwnPropertyAsync("k", { value: val, writable: true, enumerable: true });
      expect(obj.getSync("k").toNative()).toBe("hello");
    });

    it("defineOwnPropertySync defines a new property", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const val = realm.types.string("world");
      obj.defineOwnPropertySync("k", { value: val, writable: true, enumerable: true });
      expect(obj.getSync("k").toNative()).toBe("world");
    });

    it("defineOwnPropertyAsync returns true on success", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const result = await obj.defineOwnPropertyAsync("p", {
        value: realm.types.number(1),
      });
      expect(result).toBe(true);
    });

    it("defineOwnPropertyAsync returns false when adding to non-extensible object", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      await obj.preventExtensionsAsync();
      const result = await obj.defineOwnPropertyAsync("p", { value: realm.types.number(1) });
      expect(result).toBe(false);
    });
  });

  describe("get", () => {
    it("getAsync retrieves an own property value", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ a: { value: realm.types.number(5), enumerable: true } });
      expect((await obj.getAsync("a")).toNative()).toBe(5);
    });

    it("getSync retrieves an own property value", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({ a: { value: realm.types.number(5), enumerable: true } });
      expect(obj.getSync("a").toNative()).toBe(5);
    });

    it("getAsync retrieves an inherited property value", async () => {
      const realm = new StaticJsRealm();
      const proto = realm.types.object({ b: { value: realm.types.number(8), enumerable: true } });
      const obj = realm.types.object(undefined, proto);
      expect((await obj.getAsync("b")).toNative()).toBe(8);
    });

    it("getAsync returns undefined for missing properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect((await obj.getAsync("missing")).toNative()).toBeUndefined();
    });
  });

  describe("set", () => {
    it("setAsync sets an own property value", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      await obj.setAsync("x", realm.types.number(42));
      expect(obj.getSync("x").toNative()).toBe(42);
    });

    it("setSync sets an own property value", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      obj.setSync("x", realm.types.number(42));
      expect(obj.getSync("x").toNative()).toBe(42);
    });

    it("setAsync returns true on success", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      const result = await obj.setAsync("x", realm.types.number(1));
      expect(result).toBe(true);
    });

    it("setAsync cannot set on a non-writable, non-configurable property", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        x: { value: realm.types.number(1), writable: false, configurable: false },
      });
      const result = await obj.setAsync("x", realm.types.number(2));
      expect(result).toBe(false);
      expect(obj.getSync("x").toNative()).toBe(1);
    });
  });

  describe("delete", () => {
    it("deleteAsync removes an own configurable property", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        x: { value: realm.types.number(1), configurable: true },
      });
      await obj.deleteAsync("x");
      expect(await obj.hasOwnPropertyAsync("x")).toBe(false);
    });

    it("deleteSync removes an own configurable property", () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        x: { value: realm.types.number(1), configurable: true },
      });
      obj.deleteSync("x");
      expect(obj.hasOwnPropertySync("x")).toBe(false);
    });

    it("deleteAsync returns true when successful", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        x: { value: realm.types.number(1), configurable: true },
      });
      expect(await obj.deleteAsync("x")).toBe(true);
    });

    it("deleteAsync returns false for non-configurable properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object({
        x: { value: realm.types.number(1), configurable: false },
      });
      expect(await obj.deleteAsync("x")).toBe(false);
    });

    it("deleteAsync returns true for missing properties", async () => {
      const realm = new StaticJsRealm();
      const obj = realm.types.object();
      expect(await obj.deleteAsync("nope")).toBe(true);
    });
  });

  describe("runTask option", () => {
    describe("Async methods use the realm runTask by default", () => {
      it("getAsync uses realm runTask", async () => {
        const runTask = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask });
        const obj = realm.types.object({ x: { value: realm.types.number(1) } });
        await obj.getAsync("x");
        expect(runTask).toHaveBeenCalledTimes(1);
      });

      it("setAsync uses realm runTask", async () => {
        const runTask = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask });
        const obj = realm.types.object();
        await obj.setAsync("x", realm.types.number(1));
        expect(runTask).toHaveBeenCalledTimes(1);
      });
    });

    describe("Async methods accept a per-call runTask override", () => {
      it("getAsync uses override instead of realm runTask", async () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask: realmRunner });
        const obj = realm.types.object({ x: { value: realm.types.number(1) } });
        await obj.getAsync("x", { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("setAsync uses override instead of realm runTask", async () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask: realmRunner });
        const obj = realm.types.object();
        await obj.setAsync("x", realm.types.number(42), { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("deleteAsync uses override instead of realm runTask", async () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask: realmRunner });
        const obj = realm.types.object({ x: { value: realm.types.number(1), configurable: true } });
        await obj.deleteAsync("x", { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("hasPropertyAsync uses override instead of realm runTask", async () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask: realmRunner });
        const obj = realm.types.object({ x: { value: realm.types.number(1) } });
        await obj.hasPropertyAsync("x", { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("defineOwnPropertyAsync uses override instead of realm runTask", async () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTask: realmRunner });
        const obj = realm.types.object();
        await obj.defineOwnPropertyAsync(
          "x",
          { value: realm.types.number(1) },
          { runTask: callRunner },
        );
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });
    });

    describe("Sync methods use the realm runTaskSync by default", () => {
      it("getSync uses realm runTaskSync", () => {
        const runTaskSync = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTaskSync });
        const obj = realm.types.object({ x: { value: realm.types.number(1) } });
        obj.getSync("x");
        expect(runTaskSync).toHaveBeenCalledTimes(1);
      });

      it("setSync uses realm runTaskSync", () => {
        const runTaskSync = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTaskSync });
        const obj = realm.types.object();
        obj.setSync("x", realm.types.number(1));
        expect(runTaskSync).toHaveBeenCalledTimes(1);
      });
    });

    describe("Sync methods accept a per-call runTask override", () => {
      it("getSync uses override instead of realm runTaskSync", () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTaskSync: realmRunner });
        const obj = realm.types.object({ x: { value: realm.types.number(1) } });
        obj.getSync("x", { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("setSync uses override instead of realm runTaskSync", () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTaskSync: realmRunner });
        const obj = realm.types.object();
        obj.setSync("x", realm.types.number(42), { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });

      it("deleteSync uses override instead of realm runTaskSync", () => {
        const realmRunner = vi.fn();
        const callRunner = vi.fn(drainTask);
        const realm = StaticJsRealm({ runTaskSync: realmRunner });
        const obj = realm.types.object({ x: { value: realm.types.number(1), configurable: true } });
        obj.deleteSync("x", { runTask: callRunner });
        expect(realmRunner).not.toHaveBeenCalled();
        expect(callRunner).toHaveBeenCalledTimes(1);
      });
    });
  });
});

function expectDataPropertyDescriptor(
  desc: StaticJsPropertyDescriptor | undefined,
): asserts desc is StaticJsDataPropertyDescriptor {
  expect(desc).not.toBeUndefined();
  expect("value" in desc!).toBe(true);
}
