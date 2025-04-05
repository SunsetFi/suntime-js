import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../src/index.js";
import hasOwnProperty from "../src/internal/has-own-property.js";

describe("E2E: Arrays", () => {
  it("Can declare an array", () => {
    const code = `
      const a = [1, 2, 3];
      a;
    `;
    const result = evaluateProgram(code);
    expect(result).toEqual([1, 2, 3]);
  });

  it("Can declare an array with holes", () => {
    const code = `
      const a = [1, , 3];
      a;
    `;
    const result = evaluateProgram(code);
    expect(result).toEqual([1, undefined, 3]);
    expect(hasOwnProperty(result, "1")).toEqual(false);
  });

  it("Can declare an array with a single element", () => {
    const code = `
      const a = [1];
      a;
    `;
    const result = evaluateProgram(code);
    expect(result).toEqual([1]);
  });

  it("Can declare an empty array", () => {
    const code = `
      const a = [];
      a;
    `;
    const result = evaluateProgram(code);
    expect(result).toEqual([]);
  });

  describe("Array.prototype methods", () => {
    describe("Array.prototype.at", () => {
      it("Can call with a positive index", () => {
        const code = `
          const a = [1, 2, 3];
          a.at(1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(2);
      });

      it("Can call with a negative index", () => {
        const code = `
          const a = [1, 2, 3];
          a.at(-1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(3);
      });

      it("Can call with an out of bounds index", () => {
        const code = `
          const a = [1, 2, 3];
          a.at(5);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });
      it("Can call with a negative out of bounds index", () => {
        const code = `
          const a = [1, 2, 3];
          a.at(-5);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });

      it("Can be called with a fraction", () => {
        const code = `
          const a = [1, 2, 3];
          a.at(1.5);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(2);
      });
    });

    describe("Array.prototype.concat", () => {
      it("Can call with two arrays", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.concat([4, 5]);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([
          [1, 2, 3],
          [1, 2, 3, 4, 5],
        ]);
      });

      it("Can call with gap arrays", () => {
        const code = `
        const a = [1, 2, 3];
        delete a[1];
        const b = a.concat([4, 5]);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([
          [1, undefined, 3],
          [1, undefined, 3, 4, 5],
        ]);
      });
    });

    describe("Array.prototype.every", () => {
      it("Errors when called with no arguments", () => {
        const code = `
          const a = [1, 2, 3];
          a.every();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors when called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.every(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns true when found", () => {
        const code = `
          const a = [1, 2, 3];
          a.every((v) => v > 0);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Returns false when not found", () => {
        const code = `
          const a = [1, 2, 3];
          a.every((v) => v > 2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(false);
      });
    });

    describe("Array.prototype.fill", () => {
      it("Can be called with no arguments", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([undefined, undefined, undefined]);
      });

      it("Can be called with a value", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([4, 4, 4]);
      });

      it("Can be called with a start value", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 4]);
      });

      it("Can be called with a negative start value", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, -2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 4]);
      });

      it("Can be called with an end value", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1, 2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Can be called with a negative end value", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1, -1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Starts at 0 for a start of undefined", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, undefined);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([4, 4, 4]);
      });

      it("Ends at length for an end of undefined", () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, undefined, undefined);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([4, 4, 4]);
      });
    });

    describe("Array.prototype.filter", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.filter();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.filter(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the matching properties", () => {
        const code = `
          const a = [1, 2, 3];
          a.filter((v) => v > 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3]);
      });

      it("Does not mutate the array", () => {
        const code = `
          const a = [1, 2, 3];
          a.filter((v) => v > 1);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("Array.prototype.find", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.find();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.find(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the first matching item", () => {
        const code = `
          const a = [1, 2, 3];
          a.find((v) => v > 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(2);
      });

      it("Returns undefined if no match is found", () => {
        const code = `
          const a = [1, 2, 3];
          a.find((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });

      it("Returns undefined for an empty array", () => {
        const code = `
          const a = [];
          a.find((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.findIndex", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the first matching item", () => {
        const code = `
          const a = ["a", "b", "c"];
          a.findIndex((v) => v == "b");
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });

      it("Returns -1 if no match is found", () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });

      it("Returns -1 for an empty array", () => {
        const code = `
          const a = [];
          a.findIndex((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });
    });

    describe("Array.prototype.findLast", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the last matching item", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast((v) => v > 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(3);
      });

      it("Returns undefined if no match is found", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });

      it("Returns undefined for an empty array", () => {
        const code = `
          const a = [];
          a.findLast((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.findLastIndex", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the last matching item", () => {
        const code = `
          const a = [4, 5, 6];
          a.findLastIndex((v) => v > 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(2);
      });

      it("Returns -1 if no match is found", () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });

      it("Returns -1 for an empty array", () => {
        const code = `
          const a = [];
          a.findLastIndex((v) => v > 3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });
    });

    describe("Array.prototype.flat", () => {
      it("Flattens with a depth of 1 when no depth is specified", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
      });

      it("Flattens with a depth of 2 when specified", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
          a.flat(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, [7, 8]]);
      });

      it("Flattens with a depth of infinity", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
          a.flat(Infinity);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      });

      it("Does not flatten with a depth of zero", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(0);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, [3, 4, [5, 6]]]);
      });

      it("Flattens with a depth of 1 when depth is explicitly undefined", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(undefined);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
      });

      it("Does not flatten when depth is null", () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(null);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, [3, 4, [5, 6]]]);
      });
    });

    describe("Array.prototype.flatMap", () => {
      it("Errors if no callback is provided", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap();
        `;

        // Yes, this is a different error message than the rest of them.
        expect(() => evaluateProgram(code)).toThrow("is not callable");
      });

      it("Errors if the callback is a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap(1);
        `;

        // Yes, this is a different error message than the rest of them.
        expect(() => evaluateProgram(code)).toThrow("is not callable");
      });

      it("Passes through non-array return values", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => v);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Flattens array return values", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => [v, v]);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 1, 2, 2, 3, 3]);
      });

      it("Does not flatten double nested return values", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => [[v], [v]]);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1], [1], [2], [2], [3], [3]]);
      });

      it("Does not flatten array-likes", () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => ({ length: 1, 0: v }));
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([
          { length: 1, 0: 1 },
          { length: 1, 0: 2 },
          { length: 1, 0: 3 },
        ]);
      });
    });

    describe("Array.prototype.forEach", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.forEach();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.forEach(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Processes each item", () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach((v) => sum += v);
          sum;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(6);
      });

      it("Is provided with an index", () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach((v, i) => sum += i);
          sum;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(3);
      });

      it("Is provided with the array as this", () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v) { sum += this.length; });
          sum;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(9);
      });

      it("Uses a provided this arg", () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v) { sum += this.length; }, { length: 4 });
          sum;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(12);
      });

      it("Is provided with the array", () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v, i, arr) { sum += arr[i]; });
          sum;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(6);
      });
    });

    describe("Array.prototype.includes", () => {
      it("Can find a primitive", () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Can find NaN", () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.includes(NaN);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Can find an object", () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.includes(search);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Find a value with fromIndex", () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Excludes a value with fromIndex", () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, 2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(false);
      });

      it("Finds a value with a negative fromIndex", () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, -2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Excludes a value with a negative fromIndex", () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, -1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(false);
      });
    });

    describe("Array.prototype.indexOf", () => {
      it("Can be called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.indexOf();
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(-1);
      });

      it("Finds undefined when called with no value", () => {
        const code = `
          const a = [1, 2, undefined, 3];
          a.indexOf(undefined);
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(2);
      });

      it("Finds a value", () => {
        const code = `
          const a = [1, 2, 3];
          a.indexOf(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });

      it("Finds an object reference", () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.indexOf(search);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });

      it("Does not find NaN", () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.indexOf(NaN);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });

      it("Finds the first index", () => {
        const code = `
          const a = [1, 2, 3, 2];
          a.indexOf(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });
    });

    describe("Array.prototype.join", () => {
      it("Joins with commas by default", () => {
        const code = `
          const a = [1, 2, 3];
          a.join();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("1,2,3");
      });

      it("Joins with the provided strings", () => {
        const code = `
          const a = [1, 2, 3];
          a.join(" ");
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("1 2 3");
      });

      it("Treats null and undefined as empty strings", () => {
        const code = `
          const a = [1, null, 3, undefined, 4];
          a.join();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("1,,3,,4");
      });

      it("Treats array gaps as empty strings", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.join();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("1,,3");
      });
    });

    describe("Array.prototype.lastIndexOf", () => {
      it("Can be called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.lastIndexOf();
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(-1);
      });

      it("Finds undefined when called with no value", () => {
        const code = `
          const a = [1, 2, undefined, 3];
          a.lastIndexOf(undefined);
        `;
        const result = evaluateProgram(code);
        expect(result).toBe(2);
      });

      it("Finds a value", () => {
        const code = `
          const a = [1, 2, 3];
          a.lastIndexOf(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });

      it("Finds an object reference", () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.lastIndexOf(search);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });

      it("Does not find NaN", () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.lastIndexOf(NaN);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(-1);
      });

      it("Finds the last index", () => {
        const code = `
          const a = [1, 2, 3, 2];
          a.lastIndexOf(2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(3);
      });
    });

    describe("Array.prototype.map", () => {
      it("Errors if called with no value", () => {
        const code = `
          const a = [1, 2, 3];
          a.map();
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Errors if called with a non-function", () => {
        const code = `
          const a = [1, 2, 3];
          a.map(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Returns the mapped values", () => {
        const code = `
          const a = [1, 2, 3];
          a.map((v) => v + 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3, 4]);
      });

      it("Does not mutate the array", () => {
        const code = `
          const a = [1, 2, 3];
          a.map((v) => v + 1);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Skips empties", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.map((v) => v + 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, undefined, 4]);
        expect(hasOwnProperty(result, "1")).toEqual(false);
      });
    });

    describe("Array.prototype.pop", () => {
      it("Returns the last value of the array", () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(3);
      });

      it("Removes the last value from the array", () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2]);
      });

      it("Updates the array length", () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
          a.length;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(2);
      });

      it("Returns undefined for empty arrays", () => {
        const code = `
          const a = [];
          a.pop();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });

      it("Does not modify an empty array", () => {
        const code = `
          const a = [];
          a.pop();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([]);
      });

      it("Returns undefined for empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.pop();
          a.pop();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });

      it("Reduces the length for empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.pop();
          a.pop();
          a.length;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(1);
      });
    });

    it("Can call Array.prototype.push", () => {
      const code = `
        const a = [];
        a.push(1);
        a;
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([1]);
    });

    it("Can call Array.prototype.shift", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.shift();
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[2, 3], 1]);
    });

    it("Can call Array.prototype.unshift", () => {
      const code = `
        const a = [1, 2, 3];
        const result = a.unshift(0);
        [a, result];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[0, 1, 2, 3], 4]);
    });

    describe("Array.prototype.splice", () => {
      it("Can call with no arguments", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice();
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 2, 3], []]);
      });

      it("Can call with a start value", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(1);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1], [2, 3]]);
      });

      it("Can call with a negative start value", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(-1);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 2], [3]]);
      });

      it("Can call with a start and deleteCount", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 3], [2]]);
      });

      it("Can call with a negative start and positive deleteCount", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(-2, 1);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 3], [2]]);
      });

      it("Can call removing 1 element with one new value", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1, 4);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 4, 3], [2]]);
      });

      it("Can call with two new values", () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1, 4, 5);
        [a, b];
      `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 4, 5, 3], [2]]);
      });
    });
  });
});
