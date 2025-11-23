import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Maps", () => {
  describe("Map Constructor", () => {
    it("Returns a map instance", async () => {
      const result = await evaluateScript(`
        const map = new Map();
        map instanceof Map;
      `);

      expect(result).toBe(true);
    });

    it("Supports an iterator of entries", async () => {
      const result = await evaluateScript(`
        const entries = [
          ['a', 1],
          ['b', 2],
          ['c', 3],
        ];
        const iterable = {
        [Symbol.iterator]() {
            let index = 0;
            return {
              next: () => {
                if (index < entries.length) {
                  return { value: entries[index++], done: false };
                } else {
                  return { value: undefined, done: true };
                }
              }
            };
          }
        };
        const map = new Map(iterable);
        Array.from(map);
      `);
      expect(result).toEqual([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]);
    });

    it("Supports initializing with an object reference key", async () => {
      const result = await evaluateScript(`
        const keyObj = { id: 42 };
        const map = new Map([[keyObj, 'value']]);
        map.get(keyObj);
      `);
      expect(result).toEqual("value");
    });
  });

  describe("Map prototype", () => {
    describe("Map.prototype.clear", () => {
      it("Clears the entries", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2]]);
          map.clear()
          Array.from(map)
        `);
        expect(result).toEqual([]);
      });
    });

    describe("Map.prototype.delete", () => {
      it("Deletes an entry by key", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const deleted = map.delete(1);
          const entries = Array.from(map);
          [deleted, entries];
        `);
        expect(result).toEqual([true, [[3, 4]]]);
      });

      it("Returns false when deleting a missing key", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const deleted = map.delete(5);
          deleted;
        `);
        expect(result).toEqual(false);
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj = { id: 99 };
          const map = new Map([[keyObj, 'value']]);
          const deleted = map.delete(keyObj);
          const entries = Array.from(map);
          [deleted, entries];
        `);
        expect(result).toEqual([true, []]);
      });
    });

    describe("Map.prototype.entries", () => {
      it("Returns an iterator", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const entries = map.entries();
          typeof entries.next;
        `);
        expect(result).toEqual("function");
      });

      it("Iterates entries", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const entries = map.entries();
          [entries.next().value, entries.next().value, entries.next().done];
        `);
        expect(result).toEqual([[1, 2], [3, 4], true]);
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj1 = { id: 1 };
          const keyObj2 = { id: 2 };
          const map = new Map([[keyObj1, 'value1'], [keyObj2, 'value2']]);
          const entries = map.entries();
          const firstEntry = entries.next().value;
          const secondEntry = entries.next().value;
          [firstEntry, secondEntry];
        `);
        expect(result).toEqual([
          [{ id: 1 }, "value1"],
          [{ id: 2 }, "value2"],
        ]);
      });
    });

    describe("Map.prototype.forEach", () => {
      it("Calls callback for each entry", async () => {
        const result = await evaluateScript(`
          const map = new Map([['a', 1], ['b', 2]]);
          const results = [];
          map.forEach((value, key) => {
            results.push([key, value]);
          });
          results;
        `);
        expect(result).toEqual([
          ["a", 1],
          ["b", 2],
        ]);
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj1 = { id: 1 };
          const keyObj2 = { id: 2 };
          const map = new Map([[keyObj1, 'value1'], [keyObj2, 'value2']]);
          const results = [];
          map.forEach((value, key) => {
            results.push([key, value]);
          });
          results;
        `);
        expect(result).toEqual([
          [{ id: 1 }, "value1"],
          [{ id: 2 }, "value2"],
        ]);
      });
    });

    describe("Map.prototype.get", () => {
      it("Gets value by key", async () => {
        const result = await evaluateScript(`
          const map = new Map([['a', 1], ['b', 2]]);
          map.get('b');
        `);
        expect(result).toEqual(2);
      });

      it("Returns undefined for missing key", async () => {
        const result = await evaluateScript(`
          const map = new Map([['a', 1], ['b', 2]]);
          map.get('c');
        `);
        expect(result).toBeUndefined();
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj = { id: 123 };
          const map = new Map([[keyObj, 'theValue']]);
          map.get(keyObj);
        `);
        expect(result).toEqual("theValue");
      });
    });

    describe("Map.prototype.keys", () => {
      it("Returns an iterator", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const keys = map.keys();
          typeof keys.next;
        `);
        expect(result).toEqual("function");
      });

      it("Iterates keys", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const keys = map.keys();
          [keys.next().value, keys.next().value, keys.next().done];
        `);
        expect(result).toEqual([1, 3, true]);
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj1 = { id: 1 };
          const keyObj2 = { id: 2 };
          const map = new Map([[keyObj1, 'value1'], [keyObj2, 'value2']]);
          const keys = map.keys();
          const firstKey = keys.next().value;
          const secondKey = keys.next().value;
          [firstKey, secondKey];
        `);
        expect(result).toEqual([{ id: 1 }, { id: 2 }]);
      });
    });

    describe("Map.prototype.set", () => {
      it("Sets entries", async () => {
        const result = await evaluateScript(`
          const map = new Map();
          map.set('x', 10);
          map.set('y', 20);
          Array.from(map);
        `);
        expect(result).toEqual([
          ["x", 10],
          ["y", 20],
        ]);
      });

      it("Updates existing entry", async () => {
        const result = await evaluateScript(`
          const map = new Map([['a', 1]]);
          map.set('a', 42);
          Array.from(map);
        `);
        expect(result).toEqual([["a", 42]]);
      });

      it("Supports object reference keys", async () => {
        const result = await evaluateScript(`
          const keyObj = { id: 7 };
          const map = new Map();
          map.set(keyObj, 'seven');
          map.get(keyObj);
        `);
        expect(result).toEqual("seven");
      });
    });

    describe("Map.prototype.size", () => {
      it("Returns the number of entries", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4], [5, 6]]);
          map.size;
        `);
        expect(result).toEqual(3);
      });
    });

    describe("Map.prototype.values", () => {
      it("Returns an iterator", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const values = map.values();
          typeof values.next;
        `);
        expect(result).toEqual("function");
      });

      it("Iterates values", async () => {
        const result = await evaluateScript(`
          const map = new Map([[1, 2], [3, 4]]);
          const values = map.values();
          [values.next().value, values.next().value, values.next().done];
        `);
        expect(result).toEqual([2, 4, true]);
      });
    });
  });
});
