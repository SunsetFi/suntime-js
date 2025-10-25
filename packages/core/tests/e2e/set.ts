import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Set", () => {
  describe("Constructor", () => {
    it("Must be called with new", async () => {
      await expect(evaluateScript(`Set();`)).rejects.toThrow(
        "Set constructor requires 'new'",
      );
    });

    it("Creates a new set", async () => {
      const result = await evaluateScript(`
        const mySet = new Set();
        mySet instanceof Set;
      `);
      expect(result).toBe(true);
    });

    it("Populates a set from an iterator", async () => {
      const result = await evaluateScript(`
        const iterator = {
          [Symbol.iterator]() {
            let i = 1;
            return {
              next() {
                if (i <= 5) {
                  return { value: i++, done: false };
                } else {
                  return { value: undefined, done: true };
                }
              }
            };
          }
        };
        const mySet = new Set(iterator);
        Array.from(mySet);
      `);
      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("Set prototype methods", () => {
    describe("Set.prototype.add", () => {
      it("Adds values to the set", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        Array.from(mySet);
      `);
        expect(result).toEqual([1]);
      });

      it("Does not add duplicate values", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        mySet.add(1);
        Array.from(mySet);
      `);
        expect(result).toEqual([1]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        const mySet = new Set();
        mySet.add(obj1);
        mySet.add(obj2);
        mySet.add(obj2);
        Array.from(mySet);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 1 }]);
      });
    });

    describe("Set.prototype.clear", () => {
      it("Clears all values from the set", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        mySet.add(2);
        mySet.clear();
        Array.from(mySet);
      `);
        expect(result).toEqual([]);
      });
    });

    describe("Set.prototype.delete", () => {
      it("Deletes a value from the set", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        mySet.add(2);
        mySet.delete(1);
        Array.from(mySet);
      `);
        expect(result).toEqual([2]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        const mySet = new Set();
        mySet.add(obj1);
        mySet.add(obj2);
        mySet.delete(obj1);
        Array.from(mySet);
      `);
        expect(result).toEqual([{ a: 1 }]);
      });

      it("Returns true if the value was present", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        mySet.delete(1);
      `);
        expect(result).toBe(true);
      });

      it("Returns false if the value was not present", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.add(1);
        mySet.delete(2);
      `);
        expect(result).toBe(false);
      });
    });

    describe("Set.prototype.difference", () => {
      it("Returns the difference between two sets", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2, 3]);
        const setB = new Set([3, 4, 5]);
        const difference = setA.difference(setB);
        Array.from(difference);
      `);
        expect(result).toEqual([1, 2]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const setA = new Set([obj1, obj2]);
        const setB = new Set([obj2]);
        const difference = setA.difference(setB);
        Array.from(difference);
      `);
        expect(result).toEqual([{ a: 1 }]);
      });
    });

    describe("Set.prototype.entries", () => {
      it("Returns an iterator of [value, value] pairs", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const entries = mySet.entries();
        [entries instanceof Iterator, Array.from(entries)];
      `);
        expect(result).toEqual([
          true,
          [
            [1, 1],
            [2, 2],
            [3, 3],
          ],
        ]);
      });
    });

    describe("Set.prototype.forEach", () => {
      it("Executes a provided function once for each set element", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const results = [];
        mySet.forEach((value) => {
          results.push(value * 2);
        });
        results;
      `);
        expect(result).toEqual([2, 4, 6]);
      });

      it("Uses the provided thisArg", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const context = { multiplier: 3 };
        const results = [];
        mySet.forEach(function(value) {
          results.push(value * this.multiplier);
        }, context);
        results;
      `);
        expect(result).toEqual([3, 6, 9]);
      });
    });

    describe("Set.prototype.has", () => {
      it("Returns true if the set contains the value", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        mySet.has(2);
      `);
        expect(result).toBe(true);
      });

      it("Returns false if the set does not contain the value", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        mySet.has(4);
      `);
        expect(result).toBe(false);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const mySet = new Set();
        mySet.add(obj1);
        mySet.has(obj1);
      `);
        expect(result).toBe(true);
      });
    });

    describe("Set.prototype.intersection", () => {
      it("Returns the intersection between two sets", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2, 3]);
        const setB = new Set([2, 3, 4]);
        const intersection = setA.intersection(setB);
        Array.from(intersection);
      `);
        expect(result).toEqual([2, 3]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const setA = new Set([obj1, obj2]);
        const setB = new Set([obj2]);
        const intersection = setA.intersection(setB);
        Array.from(intersection);
      `);
        expect(result).toEqual([{ a: 2 }]);
      });
    });

    describe("Set.prototype.isDisjointFrom", () => {
      it("Returns true if two sets are disjoint", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2]);
        const setB = new Set([3, 4]);
        setA.isDisjointFrom(setB);
      `);
        expect(result).toBe(true);
      });

      it("Returns false if two sets are not disjoint", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2]);
        const setB = new Set([2, 3]);
        setA.isDisjointFrom(setB);
      `);
        expect(result).toBe(false);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const setA = new Set([obj1]);
        const setB = new Set([obj2]);
        setA.isDisjointFrom(setB);
      `);
        expect(result).toBe(true);
      });
    });

    describe("Set.prototype.isSubsetOf", () => {
      it("Returns true if the set is a subset of another set", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2]);
        const setB = new Set([1, 2, 3]);
        setA.isSubsetOf(setB);
      `);
        expect(result).toBe(true);
      });

      it("Returns false if the set is not a subset of another set", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 4]);
        const setB = new Set([1, 2, 3]);
        setA.isSubsetOf(setB);
      `);
        expect(result).toBe(false);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const obj3 = { a: 3 };
        const setA = new Set([obj1, obj2]);
        const setB = new Set([obj1, obj2, obj3]);
        setA.isSubsetOf(setB);
      `);
        expect(result).toBe(true);
      });
    });

    describe("Set.prototype.isSupersetOf", () => {
      it("Returns true if the set is a superset of another set", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2, 3]);
        const setB = new Set([1, 2]);
        setA.isSupersetOf(setB);
      `);
        expect(result).toBe(true);
      });

      it("Returns false if the set is not a superset of another set", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2]);
        const setB = new Set([1, 2, 3]);
        setA.isSupersetOf(setB);
      `);
        expect(result).toBe(false);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const obj3 = { a: 3 };
        const setA = new Set([obj1, obj2, obj3]);
        const setB = new Set([obj1, obj2]);
        setA.isSupersetOf(setB);
      `);
        expect(result).toBe(true);
      });
    });

    describe("Set.prototype.keys", () => {
      it("Returns an iterator of the set's values", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const keys = mySet.keys();
        [keys instanceof Iterator, Array.from(keys)];
      `);
        expect(result).toEqual([true, [1, 2, 3]]);
      });

      it("Handles references", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const mySet = new Set([obj1, obj2]);
        const keys = mySet.keys();
        Array.from(keys);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 2 }]);
      });
    });

    describe("Set.prototype.symmetricDifference", () => {
      it("Returns the symmetric difference between two sets", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2, 3]);
        const setB = new Set([3, 4, 5]);
        const symDiff = setA.symmetricDifference(setB);
        Array.from(symDiff);
      `);
        expect(result).toEqual([1, 2, 4, 5]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const obj3 = { a: 3 };
        const setA = new Set([obj1, obj2]);
        const setB = new Set([obj2, obj3]);
        const symDiff = setA.symmetricDifference(setB);
        Array.from(symDiff);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 3 }]);
      });
    });

    describe("Set.prototype.union", () => {
      it("Returns the union between two sets", async () => {
        const result = await evaluateScript(`
        const setA = new Set([1, 2, 3]);
        const setB = new Set([3, 4, 5]);
        const union = setA.union(setB);
        Array.from(union);
      `);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });

      it("Handles reference values", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const obj3 = { a: 3 };
        const setA = new Set([obj1, obj2]);
        const setB = new Set([obj2, obj3]);
        const union = setA.union(setB);
        Array.from(union);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 2 }, { a: 3 }]);
      });
    });

    describe("Set.prototype.values", () => {
      it("Returns an iterator of the set's values", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const values = mySet.values();
        [values instanceof Iterator, Array.from(values)];
      `);
        expect(result).toEqual([true, [1, 2, 3]]);
      });

      it("Handles references", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const mySet = new Set([obj1, obj2]);
        const values = mySet.values();
        Array.from(values);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 2 }]);
      });
    });

    describe("Set.prototype[Symbol.iterator]", () => {
      it("Returns an iterator of the set's values", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        const iterator = mySet[Symbol.iterator]();
        [iterator instanceof Iterator, Array.from(iterator)];
      `);
        expect(result).toEqual([true, [1, 2, 3]]);
      });

      it("Handles references", async () => {
        const result = await evaluateScript(`
        const obj1 = { a: 1 };
        const obj2 = { a: 2 };
        const mySet = new Set([obj1, obj2]);
        const iterator = mySet[Symbol.iterator]();
        Array.from(iterator);
      `);
        expect(result).toEqual([{ a: 1 }, { a: 2 }]);
      });
    });
  });

  describe("Set properties", () => {
    describe("Set.prototype.size", () => {
      it("Returns the number of elements in the set", async () => {
        const result = await evaluateScript(`
        const mySet = new Set([1, 2, 3]);
        mySet.size;
      `);
        expect(result).toBe(3);
      });

      it("Returns 0 for an empty set", async () => {
        const result = await evaluateScript(`
        const mySet = new Set();
        mySet.size;
      `);
        expect(result).toBe(0);
      });
    });
  });
});
