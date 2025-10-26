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
  });
});
