import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Iterators", () => {
  describe("Array.prototype methods", () => {
    describe("Iterator.prototype.drop", () => {
      it("Drops the first N values", async () => {
        const code = `
          const it = [1, 2, 3, 4][Symbol.iterator]();
          const dropped = it.drop(2);
          Array.from(dropped);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([3, 4]);
      });

      it("Drops nothing when the count is zero", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          const dropped = it.drop(0);
          Array.from(dropped);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Throws on NaN", async () => {
        const code = `
          const it = [1, 2][Symbol.iterator]();
          it.drop(NaN);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "RangeError",
            message: "Invalid count value",
          }),
        );
      });

      it("Throws on negative counts", async () => {
        const code = `
          const it = [1, 2][Symbol.iterator]();
          it.drop(-1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "RangeError",
            message: "Count value must be non-negative",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.drop.call(1, 1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.drop called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.every", () => {
      it("Returns true when all items match", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.every((value) => value > 0);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Returns false when any item fails", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.every((value) => value > 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(false);
      });

      it("Returns true for empty iterators", async () => {
        const code = `
          const it = [][Symbol.iterator]();
          it.every(() => false);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Throws when the predicate is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.every(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Predicate must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.every.call(1, () => true);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.every called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.filter", () => {
      it("Filters values", async () => {
        const code = `
          const it = [1, 2, 3, 4][Symbol.iterator]();
          const filtered = it.filter((value) => value % 2 === 0);
          Array.from(filtered);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 4]);
      });

      it("Returns an empty array when no values match", async () => {
        const code = `
          const it = [1, 3][Symbol.iterator]();
          const filtered = it.filter((value) => value % 2 === 0);
          Array.from(filtered);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Throws when the predicate is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.filter(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Predicate must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.filter.call(1, () => true);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.filter called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.find", () => {
      it("Returns the first matching value", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.find((value) => value > 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(2);
      });

      it("Returns undefined when no value matches", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.find((value) => value > 5);
        `;
        const result = await evaluateScript(code);
        expect(result).toBeUndefined();
      });

      it("Throws when the predicate is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.find(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Predicate must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.find.call(1, () => true);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.find called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.flatMap", () => {
      it("Maps and flattens values", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          const mapped = it.flatMap((value) => [value, value + 10]);
          Array.from(mapped);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 11, 2, 12, 3, 13]);
      });

      it("Throws when the mapper is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.flatMap(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Mapper must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.flatMap.call(1, () => []);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.flatMap called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.forEach", () => {
      it("Iterates each value", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          let sum = 0;
          it.forEach((value) => sum += value);
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(6);
      });

      it("Passes the index to the callback", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          let sum = 0;
          it.forEach((value, index) => sum += index);
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(3);
      });

      it("Throws when the callback is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.forEach(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Callback must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.forEach.call(1, () => {});
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.forEach called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.map", () => {
      it("Maps values", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          const mapped = it.map((value) => value * 2);
          Array.from(mapped);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 4, 6]);
      });

      it("Throws when the mapper is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.map(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Mapper must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.map.call(1, () => 1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.map called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.reduce", () => {
      it("Reduces values with an initializer", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.reduce((acc, value) => acc + value, 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(16);
      });

      it("Reduces values without an initializer", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.reduce((acc, value) => acc + value);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(6);
      });

      it("Throws on empty iterators with no initializer", async () => {
        const code = `
          const it = [][Symbol.iterator]();
          it.reduce((acc, value) => acc + value);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Reduce of empty iterator with no initial value",
          }),
        );
      });

      it("Throws when the reducer is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.reduce(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Reducer must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.reduce.call(1, () => 1, 0);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.reduce called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.some", () => {
      it("Returns true when any item matches", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.some((value) => value === 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });

      it("Returns false when no items match", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.some((value) => value > 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(false);
      });

      it("Throws when the predicate is not a function", async () => {
        const code = `
          const it = [1][Symbol.iterator]();
          it.some(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Predicate must be a function",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.some.call(1, () => true);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.some called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype[Symbol.iterator]", () => {
      it("Returns the same iterator instance", async () => {
        const code = `
          const it = [1, 2][Symbol.iterator]();
          it[Symbol.iterator]() === it;
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(true);
      });
    });

    describe("Iterator.prototype[Symbol.toStringTag]", () => {
      it("Exposes the Iterator tag", async () => {
        const code = `
          Iterator.prototype[Symbol.toStringTag];
        `;
        const result = await evaluateScript(code);
        expect(result).toBe("Iterator");
      });

      it("Uses the Iterator tag in Object.prototype.toString", async () => {
        const code = `
          function Subclass() {}
          Object.setPrototypeOf(Subclass.prototype, Iterator.prototype);
          const it = new Subclass();
          Object.prototype.toString.call(it);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe("[object Iterator]");
      });
    });

    describe("Iterator.prototype.take", () => {
      it("Takes the first N values", async () => {
        const code = `
          const it = [1, 2, 3, 4][Symbol.iterator]();
          const taken = it.take(2);
          Array.from(taken);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2]);
      });

      it("Returns an empty iterator when the limit is zero", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          const taken = it.take(0);
          Array.from(taken);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Throws on NaN", async () => {
        const code = `
          const it = [1, 2][Symbol.iterator]();
          it.take(NaN);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "RangeError",
            message: "Limit must not be NaN",
          }),
        );
      });

      it("Throws on negative limits", async () => {
        const code = `
          const it = [1, 2][Symbol.iterator]();
          it.take(-1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "RangeError",
            message: "Limit must be a non-negative integer or Infinity",
          }),
        );
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.take.call(1, 1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.take called on non-object",
          }),
        );
      });
    });

    describe("Iterator.prototype.toArray", () => {
      it("Collects all values into an array", async () => {
        const code = `
          const it = [1, 2, 3][Symbol.iterator]();
          it.toArray();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Errors when called on a non-object", async () => {
        const code = `
          Iterator.prototype.toArray.call(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          expect.objectContaining({
            name: "TypeError",
            message: "Iterator.prototype.toArray called on non-object",
          }),
        );
      });
    });
  });
});
