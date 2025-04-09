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

    describe("Array.prototype.push", () => {
      it("Pushes a single value", () => {
        const code = `
          const a = [1, 2, 3];
          a.push(4);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4]);
      });

      it("Pushes multiple values", () => {
        const code = `
          const a = [1, 2, 3];
          a.push(4, 5);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });

      it("Preserves empties", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[2];
          a.push(4);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, undefined, 4]);
        expect(hasOwnProperty(result, "2")).toEqual(false);
      });

      it("Pushes arrays", () => {
        const code = `
          const a = [1, 2, 3];
          a.push([4, 5]);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3, [4, 5]]);
      });
    });

    describe("Array.prototype.reduce", () => {
      it("Reduces with no initializer", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce((acc, v) => acc + v);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(6);
      });

      it("Reduces with an initializer", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce((acc, v) => acc + v, 10);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(16);
      });

      it("Throws when no initializer is used with an empty array", () => {
        const code = `
          const a = [];
          a.reduce((acc, v) => acc + v);
        `;
        expect(() => evaluateProgram(code)).toThrow(
          "Reduce of empty array with no initial value",
        );
      });

      it("Returns the initializer with an empty array", () => {
        const code = `
          const a = [];
          a.reduce((acc, v) => acc + v, 10);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(10);
      });

      it("Throws if the callback is not a function", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Reduces from left to right", () => {
        const code = `
          const a = ["a", "b", "c"];
          a.reduce((acc, v) => acc + v);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("abc");
      });
    });

    describe("Array.prototype.reduceRight", () => {
      it("Reduces with no initializer", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight((acc, v) => acc + v);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(6);
      });

      it("Reduces with an initializer", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight((acc, v) => acc + v, 10);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(16);
      });

      it("Throws when no initializer is used with an empty array", () => {
        const code = `
          const a = [];
          a.reduceRight((acc, v) => acc + v);
        `;
        expect(() => evaluateProgram(code)).toThrow(
          "Reduce of empty array with no initial value",
        );
      });

      it("Returns the initializer with an empty array", () => {
        const code = `
          const a = [];
          a.reduceRight((acc, v) => acc + v, 10);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(10);
      });

      it("Throws if the callback is not a function", () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight(1);
        `;
        expect(() => evaluateProgram(code)).toThrow("is not a function");
      });

      it("Reduces from right to left", () => {
        const code = `
          const a = ["a", "b", "c"];
          a.reduceRight((acc, v) => acc + v);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual("cba");
      });
    });

    describe("Array.prototype.reverse", () => {
      it("Returns itself", () => {
        const code = `
          const a = [1, 2, 3];
          a.reverse();
          a === a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });

      it("Preserves 1 item", () => {
        const code = `
          const a = [1];
          a.reverse();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1]);
      });

      it("Reverses 2 items", () => {
        const code = `
          const a = [1, 2];
          a.reverse();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 1]);
      });

      it("Reverses 3 items", () => {
        const code = `
          const a = [1, 2, 3];
          a.reverse();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([3, 2, 1]);
      });

      it("Reverses empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[2];
          a.reverse();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([undefined, 2, 1]);
        expect(hasOwnProperty(result, "0")).toEqual(false);
      });
    });

    describe("Array.prototype.shift", () => {
      it("Shifts the array", () => {
        const code = `
          const a = [1, 2, 3];
          a.shift();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3]);
      });

      it("Returns the shifted item", () => {
        const code = `
          const a = [1, 2, 3];
          const result = a.shift();
          [a, result];
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[2, 3], 1]);
      });

      it("Shifts empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.shift();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([undefined, 3]);
        expect(hasOwnProperty(result, "0")).toEqual(false);
      });

      it("Returns undefined for empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[0];
          a.shift();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.slice", () => {
      it("Can be called with no arguments", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice();
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Returns a copy of the array", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.slice();
          a === b;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(false);
      });

      it("Can be called with a start value", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3]);
      });

      it("Can be called with a negative start value", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(-1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([3]);
      });

      it("Can be called with a start value past the end", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(3);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([]);
      });

      it("Can be called with an end value", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(0, 2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2]);
      });

      it("Can be called with a negative end value", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(0, -1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2]);
      });

      it("Can be called with an end value before the start", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(2, 1);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([]);
      });

      it("Can be called with an end value past the end", () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(1, 5);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3]);
      });

      it("Preserves empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.slice(0, 2);
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, undefined]);
        expect(hasOwnProperty(result, "1")).toEqual(false);
      });
    });

    describe("Array.prototype.sort", () => {
      it("Sorts numbers ascending", () => {
        const code = `
          const a = [3, 1, 2];
          a.sort();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Floats missing items to the end", () => {
        const code = `
          const a = [3, 1, 2];
          delete a[1];
          a.sort();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3, undefined]);
        expect(hasOwnProperty(result, "2")).toEqual(false);
      });

      it("Supports a comparison function", () => {
        const code = `
          const a = [3, 1, 2];
          a.sort((a, b) => b - a);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([3, 2, 1]);
      });

      it("Floats missing items to the end with reverse comparison", () => {
        const code = `
          const a = [3, 1, 2];
          delete a[1];
          a.sort((a, b) => b - a);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([3, 2, undefined]);
        expect(hasOwnProperty(result, "2")).toEqual(false);
      });

      it("returns the mutated array", () => {
        const code = `
          const a = [3, 1, 2];
          const b = a.sort();
          a === b
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual(true);
      });
    });

    describe("Array.prototype.splice", () => {
      it("Removes no items when called with no args", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice();
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Returns a new array when called with no args", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice();
          b;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([]);
      });

      it("Removes items past the start value", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1]);
      });

      it("Returns the removed items", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(1);
          b;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([2, 3]);
      });

      it("Handles negative start values", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(-1);
          [a, b];
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 2], [3]]);
      });

      it("Handles negative start values beyond the length", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(-4);
          [a, b];
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[], [1, 2, 3]]);
      });

      it("Handles start values beyond the length", () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(4);
          [a, b];
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([[1, 2, 3], []]);
      });

      it("Handles a zero delete count", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 0);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Handles a negative delete count", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, -1);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Handles an infinity delete count", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, Infinity);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1]);
      });

      it("Adds new items", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 0, 4, 5);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 5, 2, 3]);
      });

      it("Adds new items while deleting when there are less new items than deleted", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 1, 4);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Adds new items while deleting when there are more new items than deleted", () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 1, 4, 5);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([1, 4, 5, 3]);
      });
    });

    describe("Array.prototype.unshift", () => {
      it("Unshifts a single value", () => {
        const code = `
          const a = [1, 2, 3];
          a.unshift(0);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([0, 1, 2, 3]);
      });

      it("Unshifts multiple values", () => {
        const code = `
          const a = [1, 2, 3];
          a.unshift(0, -1);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([0, -1, 1, 2, 3]);
      });

      it("Preserves empty items", () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.unshift(0);
          a;
        `;
        const result = evaluateProgram(code);
        expect(result).toEqual([0, 1, undefined, 3]);
        expect(hasOwnProperty(result, "2")).toEqual(false);
      });
    });
  });
});
