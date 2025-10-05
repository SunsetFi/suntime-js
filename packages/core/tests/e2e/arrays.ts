import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Arrays", () => {
  it("Is instanceof Array", async () => {
    const code = `
      const a = [];
      a instanceof Array;
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual(true);
  });

  it("Can declare an array", async () => {
    const code = `
      const a = [1, 2, 3];
      a;
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual([1, 2, 3]);
  });

  it("Can declare an array constructor", async () => {
    const code = `
      const a = new Array(1, 2, 3);
      a;
    `;
    const result = await evaluateScript(code);
    // TODO: This is clearly broken, why is this test passing?
    expect(result).toEqual([1, 2, 3]);
  });

  it("Is an array instance", async () => {
    const code = `
      const a = [];
      a instanceof Array
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual(true);
  });

  it("Can declare an array with holes", async () => {
    const code = `
      const a = [1, , 3];
      a;
    `;
    const result = (await evaluateScript(code)) as unknown[];
    expect(result).toEqual([1, undefined, 3]);
    expect(Object.hasOwn(result, "1")).toEqual(false);
  });

  it("Can declare an array with a single element", async () => {
    const code = `
      const a = [1];
      a;
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual([1]);
  });

  it("Can declare an empty array", async () => {
    const code = `
      const a = [];
      a;
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual([]);
  });

  it("Can declare an array with a spread operator", async () => {
    const code = `
      const iterable = {
        [Symbol.iterator]: function () {
          let i = 0;
          return {
            next: function () {
              if (i < 4) {
                return { value: i++, done: false };
              } else {
                return { value: undefined, done: true };
              }
            },
          };
        },
      };
      const b = ["start", ...iterable, "end"];
      b;
    `;
    const result = await evaluateScript(code);
    expect(result).toEqual(["start", 0, 1, 2, 3, "end"]);
  });

  describe("Array.prototype methods", () => {
    describe("Array.prototype.at", () => {
      it("Can call with a positive index", async () => {
        const code = `
          const a = [1, 2, 3];
          a.at(1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(2);
      });

      it("Can call with a negative index", async () => {
        const code = `
          const a = [1, 2, 3];
          a.at(-1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(3);
      });

      it("Can call with an out of bounds index", async () => {
        const code = `
          const a = [1, 2, 3];
          a.at(5);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });
      it("Can call with a negative out of bounds index", async () => {
        const code = `
          const a = [1, 2, 3];
          a.at(-5);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });

      it("Can be called with a fraction", async () => {
        const code = `
          const a = [1, 2, 3];
          a.at(1.5);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(2);
      });
    });

    describe("Array.prototype.concat", () => {
      it("Can call with two arrays", async () => {
        const code = `
        const a = [1, 2, 3];
        const b = a.concat([4, 5]);
        [a, b];
      `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          [1, 2, 3],
          [1, 2, 3, 4, 5],
        ]);
      });

      it("Can call with gap arrays", async () => {
        const code = `
        const a = [1, 2, 3];
        delete a[1];
        const b = a.concat([4, 5]);
        [a, b];
      `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          [1, undefined, 3],
          [1, undefined, 3, 4, 5],
        ]);
      });
    });

    describe("Array.prototype.every", () => {
      it("Errors when called with no arguments", async () => {
        const code = `
          const a = [1, 2, 3];
          a.every();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors when called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.every(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns true when found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.every((v) => v > 0);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Returns false when not found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.every((v) => v > 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(false);
      });
    });

    describe("Array.prototype.fill", () => {
      it("Can be called with no arguments", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([undefined, undefined, undefined]);
      });

      it("Can be called with a value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([4, 4, 4]);
      });

      it("Can be called with a start value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 4]);
      });

      it("Can be called with a negative start value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, -2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 4]);
      });

      it("Can be called with an end value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1, 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Can be called with a negative end value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, 1, -1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Starts at 0 for a start of undefined", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, undefined);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([4, 4, 4]);
      });

      it("Ends at length for an end of undefined", async () => {
        const code = `
          const a = [1, 2, 3];
          a.fill(4, undefined, undefined);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([4, 4, 4]);
      });
    });

    describe("Array.prototype.filter", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.filter();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.filter(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the matching properties", async () => {
        const code = `
          const a = [1, 2, 3];
          a.filter((v) => v > 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3]);
      });

      it("Does not mutate the array", async () => {
        const code = `
          const a = [1, 2, 3];
          a.filter((v) => v > 1);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("Array.prototype.find", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.find();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.find(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the first matching item", async () => {
        const code = `
          const a = [1, 2, 3];
          a.find((v) => v > 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(2);
      });

      it("Returns undefined if no match is found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.find((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });

      it("Returns undefined for an empty array", async () => {
        const code = `
          const a = [];
          a.find((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.findIndex", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the first matching item", async () => {
        const code = `
          const a = ["a", "b", "c"];
          a.findIndex((v) => v == "b");
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });

      it("Returns -1 if no match is found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findIndex((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });

      it("Returns -1 for an empty array", async () => {
        const code = `
          const a = [];
          a.findIndex((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });
    });

    describe("Array.prototype.findLast", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the last matching item", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast((v) => v > 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(3);
      });

      it("Returns undefined if no match is found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLast((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });

      it("Returns undefined for an empty array", async () => {
        const code = `
          const a = [];
          a.findLast((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.findLastIndex", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the last matching item", async () => {
        const code = `
          const a = [4, 5, 6];
          a.findLastIndex((v) => v > 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(2);
      });

      it("Returns -1 if no match is found", async () => {
        const code = `
          const a = [1, 2, 3];
          a.findLastIndex((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });

      it("Returns -1 for an empty array", async () => {
        const code = `
          const a = [];
          a.findLastIndex((v) => v > 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });
    });

    describe("Array.prototype.flat", () => {
      it("Flattens with a depth of 1 when no depth is specified", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
      });

      it("Flattens with a depth of 2 when specified", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
          a.flat(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, [7, 8]]);
      });

      it("Flattens with a depth of infinity", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6, [7, 8]]]];
          a.flat(Infinity);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
      });

      it("Does not flatten with a depth of zero", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(0);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, [3, 4, [5, 6]]]);
      });

      it("Flattens with a depth of 1 when depth is explicitly undefined", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(undefined);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4, [5, 6]]);
      });

      it("Does not flatten when depth is null", async () => {
        const code = `
          const a = [1, 2, [3, 4, [5, 6]]];
          a.flat(null);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, [3, 4, [5, 6]]]);
      });
    });

    describe("Array.prototype.flatMap", () => {
      it("Errors if no callback is provided", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap();
        `;

        // Yes, this is a different error message than the rest of them.
        await expect(evaluateScript(code)).rejects.toThrow("is not callable");
      });

      it("Errors if the callback is a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap(1);
        `;

        // Yes, this is a different error message than the rest of them.
        await expect(evaluateScript(code)).rejects.toThrow("is not callable");
      });

      it("Passes through non-array return values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => v);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Flattens array return values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => [v, v]);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 1, 2, 2, 3, 3]);
      });

      it("Does not flatten double nested return values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => [[v], [v]]);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([[1], [1], [2], [2], [3], [3]]);
      });

      it("Does not flatten array-likes", async () => {
        const code = `
          const a = [1, 2, 3];
          a.flatMap((v) => ({ length: 1, 0: v }));
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          { length: 1, 0: 1 },
          { length: 1, 0: 2 },
          { length: 1, 0: 3 },
        ]);
      });
    });

    describe("Array.prototype.forEach", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.forEach();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.forEach(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Processes each item", async () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach((v) => sum += v);
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(6);
      });

      it("Is provided with an index", async () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach((v, i) => sum += i);
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(3);
      });

      it("Is provided with the array as this", async () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v) { sum += this.length; });
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(9);
      });

      it("Uses a provided this arg", async () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v) { sum += this.length; }, { length: 4 });
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(12);
      });

      it("Is provided with the array", async () => {
        const code = `
          const a = [1, 2, 3];
          let sum = 0;
          a.forEach(function(v, i, arr) { sum += arr[i]; });
          sum;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(6);
      });
    });

    describe("Array.prototype.includes", () => {
      it("Can find a primitive", async () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Can find NaN", async () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.includes(NaN);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Can find an object", async () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.includes(search);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Find a value with fromIndex", async () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Excludes a value with fromIndex", async () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(false);
      });

      it("Finds a value with a negative fromIndex", async () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, -2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Excludes a value with a negative fromIndex", async () => {
        const code = `
          const a = [1, 2, 3];
          a.includes(2, -1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(false);
      });
    });

    describe("Array.prototype.indexOf", () => {
      it("Can be called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.indexOf();
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(-1);
      });

      it("Finds undefined when called with no value", async () => {
        const code = `
          const a = [1, 2, undefined, 3];
          a.indexOf(undefined);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(2);
      });

      it("Finds a value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.indexOf(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });

      it("Finds an object reference", async () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.indexOf(search);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });

      it("Does not find NaN", async () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.indexOf(NaN);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });

      it("Finds the first index", async () => {
        const code = `
          const a = [1, 2, 3, 2];
          a.indexOf(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });
    });

    describe("Array.prototype.join", () => {
      it("Joins with commas by default", async () => {
        const code = `
          const a = [1, 2, 3];
          a.join();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("1,2,3");
      });

      it("Joins with the provided strings", async () => {
        const code = `
          const a = [1, 2, 3];
          a.join(" ");
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("1 2 3");
      });

      it("Treats null and undefined as empty strings", async () => {
        const code = `
          const a = [1, null, 3, undefined, 4];
          a.join();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("1,,3,,4");
      });

      it("Treats array gaps as empty strings", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.join();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("1,,3");
      });
    });

    describe("Array.prototype.lastIndexOf", () => {
      it("Can be called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.lastIndexOf();
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(-1);
      });

      it("Finds undefined when called with no value", async () => {
        const code = `
          const a = [1, 2, undefined, 3];
          a.lastIndexOf(undefined);
        `;
        const result = await evaluateScript(code);
        expect(result).toBe(2);
      });

      it("Finds a value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.lastIndexOf(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });

      it("Finds an object reference", async () => {
        const code = `
          const search = {}
          const a = ["1", search, "3"];
          a.lastIndexOf(search);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });

      it("Does not find NaN", async () => {
        const code = `
          const a = [1, 2, 3, NaN];
          a.lastIndexOf(NaN);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(-1);
      });

      it("Finds the last index", async () => {
        const code = `
          const a = [1, 2, 3, 2];
          a.lastIndexOf(2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(3);
      });
    });

    describe("Array.prototype.map", () => {
      it("Errors if called with no value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.map();
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Errors if called with a non-function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.map(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Returns the mapped values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.map((v) => v + 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3, 4]);
      });

      it("Does not mutate the array", async () => {
        const code = `
          const a = [1, 2, 3];
          a.map((v) => v + 1);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Skips empties", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.map((v) => v + 1);
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([2, undefined, 4]);
        expect(Object.hasOwn(result, "1")).toEqual(false);
      });
    });

    describe("Array.prototype.pop", () => {
      it("Returns the last value of the array", async () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(3);
      });

      it("Removes the last value from the array", async () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2]);
      });

      it("Updates the array length", async () => {
        const code = `
          const a = [1, 2, 3];
          a.pop();
          a.length;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(2);
      });

      it("Returns undefined for empty arrays", async () => {
        const code = `
          const a = [];
          a.pop();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });

      it("Does not modify an empty array", async () => {
        const code = `
          const a = [];
          a.pop();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Returns undefined for empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.pop();
          a.pop();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });

      it("Reduces the length for empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.pop();
          a.pop();
          a.length;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(1);
      });
    });

    describe("Array.prototype.push", () => {
      it("Pushes a single value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.push(4);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4]);
      });

      it("Pushes multiple values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.push(4, 5);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, 4, 5]);
      });

      it("Preserves empties", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[2];
          a.push(4);
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([1, 2, undefined, 4]);
        expect(Object.hasOwn(result, "2")).toEqual(false);
      });

      it("Pushes arrays", async () => {
        const code = `
          const a = [1, 2, 3];
          a.push([4, 5]);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3, [4, 5]]);
      });
    });

    describe("Array.prototype.reduce", () => {
      it("Reduces with no initializer", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce((acc, v) => acc + v);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(6);
      });

      it("Reduces with an initializer", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce((acc, v) => acc + v, 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(16);
      });

      it("Throws when no initializer is used with an empty array", async () => {
        const code = `
          const a = [];
          a.reduce((acc, v) => acc + v);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Reduce of empty array with no initial value",
        );
      });

      it("Returns the initializer with an empty array", async () => {
        const code = `
          const a = [];
          a.reduce((acc, v) => acc + v, 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(10);
      });

      it("Throws if the callback is not a function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduce(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Reduces from left to right", async () => {
        const code = `
          const a = ["a", "b", "c"];
          a.reduce((acc, v) => acc + v);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("abc");
      });
    });

    describe("Array.prototype.reduceRight", () => {
      it("Reduces with no initializer", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight((acc, v) => acc + v);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(6);
      });

      it("Reduces with an initializer", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight((acc, v) => acc + v, 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(16);
      });

      it("Throws when no initializer is used with an empty array", async () => {
        const code = `
          const a = [];
          a.reduceRight((acc, v) => acc + v);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Reduce of empty array with no initial value",
        );
      });

      it("Returns the initializer with an empty array", async () => {
        const code = `
          const a = [];
          a.reduceRight((acc, v) => acc + v, 10);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(10);
      });

      it("Throws if the callback is not a function", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reduceRight(1);
        `;
        await expect(evaluateScript(code)).rejects.toThrow("is not a function");
      });

      it("Reduces from right to left", async () => {
        const code = `
          const a = ["a", "b", "c"];
          a.reduceRight((acc, v) => acc + v);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual("cba");
      });
    });

    describe("Array.prototype.reverse", () => {
      it("Returns itself", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reverse();
          a === a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Preserves 1 item", async () => {
        const code = `
          const a = [1];
          a.reverse();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1]);
      });

      it("Reverses 2 items", async () => {
        const code = `
          const a = [1, 2];
          a.reverse();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 1]);
      });

      it("Reverses 3 items", async () => {
        const code = `
          const a = [1, 2, 3];
          a.reverse();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([3, 2, 1]);
      });

      it("Reverses empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[2];
          a.reverse();
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([undefined, 2, 1]);
        expect(Object.hasOwn(result, "0")).toEqual(false);
      });
    });

    describe("Array.prototype.shift", () => {
      it("Shifts the array", async () => {
        const code = `
          const a = [1, 2, 3];
          a.shift();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3]);
      });

      it("Returns the shifted item", async () => {
        const code = `
          const a = [1, 2, 3];
          const result = a.shift();
          [a, result];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([[2, 3], 1]);
      });

      it("Shifts empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.shift();
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([undefined, 3]);
        expect(Object.hasOwn(result, "0")).toEqual(false);
      });

      it("Returns undefined for empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[0];
          a.shift();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(undefined);
      });
    });

    describe("Array.prototype.slice", () => {
      it("Can be called with no arguments", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Returns a copy of the array", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.slice();
          a === b;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(false);
      });

      it("Can be called with a start value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3]);
      });

      it("Can be called with a negative start value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(-1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([3]);
      });

      it("Can be called with a start value past the end", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Can be called with an end value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(0, 2);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2]);
      });

      it("Can be called with a negative end value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(0, -1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2]);
      });

      it("Can be called with an end value before the start", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(2, 1);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Can be called with an end value past the end", async () => {
        const code = `
          const a = [1, 2, 3];
          a.slice(1, 5);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3]);
      });

      it("Preserves empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.slice(0, 2);
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([1, undefined]);
        expect(Object.hasOwn(result, "1")).toEqual(false);
      });
    });

    describe("Array.prototype.sort", () => {
      it("Sorts numbers ascending", async () => {
        const code = `
          const a = [3, 1, 2];
          a.sort();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Floats missing items to the end", async () => {
        const code = `
          const a = [3, 1, 2];
          delete a[1];
          a.sort();
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([2, 3, undefined]);
        expect(Object.hasOwn(result, "2")).toEqual(false);
      });

      it("Supports a comparison function", async () => {
        const code = `
          const a = [3, 1, 2];
          a.sort((a, b) => b - a);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([3, 2, 1]);
      });

      it("Floats missing items to the end with reverse comparison", async () => {
        const code = `
          const a = [3, 1, 2];
          delete a[1];
          a.sort((a, b) => b - a);
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([3, 2, undefined]);
        expect(Object.hasOwn(result, "2")).toEqual(false);
      });

      it("returns the mutated array", async () => {
        const code = `
          const a = [3, 1, 2];
          const b = a.sort();
          a === b
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });
    });

    describe("Array.prototype.splice", () => {
      it("Removes no items when called with no args", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice();
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Returns a new array when called with no args", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice();
          b;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });

      it("Removes items past the start value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1]);
      });

      it("Returns the removed items", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(1);
          b;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([2, 3]);
      });

      it("Handles negative start values", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(-1);
          [a, b];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([[1, 2], [3]]);
      });

      it("Handles negative start values beyond the length", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(-4);
          [a, b];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([[], [1, 2, 3]]);
      });

      it("Handles start values beyond the length", async () => {
        const code = `
          const a = [1, 2, 3];
          const b = a.splice(4);
          [a, b];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([[1, 2, 3], []]);
      });

      it("Handles a zero delete count", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 0);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Handles a negative delete count", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, -1);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Handles an infinity delete count", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, Infinity);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1]);
      });

      it("Adds new items", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 0, 4, 5);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 5, 2, 3]);
      });

      it("Adds new items while deleting when there are less new items than deleted", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 1, 4);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 3]);
      });

      it("Adds new items while deleting when there are more new items than deleted", async () => {
        const code = `
          const a = [1, 2, 3];
          a.splice(1, 1, 4, 5);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 4, 5, 3]);
      });
    });

    describe("Array.prototype.unshift", () => {
      it("Unshifts a single value", async () => {
        const code = `
          const a = [1, 2, 3];
          a.unshift(0);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([0, 1, 2, 3]);
      });

      it("Unshifts multiple values", async () => {
        const code = `
          const a = [1, 2, 3];
          a.unshift(0, -1);
          a;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([0, -1, 1, 2, 3]);
      });

      it("Preserves empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          a.unshift(0);
          a;
        `;
        const result = (await evaluateScript(code)) as unknown[];
        expect(result).toEqual([0, 1, undefined, 3]);
        expect(Object.hasOwn(result, "2")).toEqual(false);
      });
    });

    describe("Array.prototype[Symbol.iterator]", () => {
      it("Returns an iterator", async () => {
        const code = `
          const a = [1, 2, 3];
          const it = a[Symbol.iterator]();
          typeof it.next === "function";
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(true);
      });

      it("Iterates the values", async () => {
        const code = `
          const a = [1, 2, 3];
          const it = a[Symbol.iterator]();
          [it.next(), it.next(), it.next(), it.next()];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          { value: 1, done: false },
          { value: 2, done: false },
          { value: 3, done: false },
          { value: undefined, done: true },
        ]);
      });

      it("Accepts items added during iteration", async () => {
        const code = `
          const a = [1, 2, 3];
          const it = a[Symbol.iterator]();
          const results = [it.next(), it.next()];
          a.push(4);
          results.push(it.next());
          a.push(5);
          results.push(it.next());
          results.push(it.next());
          results;
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          { value: 1, done: false },
          { value: 2, done: false },
          { value: 3, done: false },
          { value: 4, done: false },
          { value: undefined, done: true },
        ]);
      });

      it("Iterates empty items", async () => {
        const code = `
          const a = [1, 2, 3];
          delete a[1];
          const it = a[Symbol.iterator]();
          [it.next(), it.next(), it.next(), it.next()];
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([
          { value: 1, done: false },
          { value: undefined, done: false },
          { value: 3, done: false },
          { value: undefined, done: true },
        ]);
      });
    });
  });

  describe("Static Methods", () => {
    describe("Array.from", () => {
      it("Errors if called with no args", async () => {
        const code = `
          Array.from();
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Cannot convert undefined or null to object",
        );
      });

      it("Errors if called with null", async () => {
        const code = `
          Array.from(null);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Cannot convert undefined or null to object",
        );
      });

      it("Errors if called with undefined", async () => {
        const code = `
          Array.from(undefined);
        `;
        await expect(evaluateScript(code)).rejects.toThrow(
          "Cannot convert undefined or null to object",
        );
      });

      it("Creates an array from an array", async () => {
        const code = `
          const a = [1, 2, 3];
          Array.from(a);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Creates an array from an array-like", async () => {
        const code = `
          Array.from({length: 3, 0: "a", 1: "b", 2: "c"});
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual(["a", "b", "c"]);
      });

      it("Creates an array from an iterator", async () => {
        const code = `
          const iterable = {
            [Symbol.iterator]() {
              let i = 1;
              return {
                next() {
                  if (i <= 3) {
                    return { value: i++, done: false };
                  } else {
                    return { value: undefined, done: true };
                  }
                }
              };
            }
          };
          Array.from(iterable);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });
    });

    describe("Array.of", () => {
      it("Creates an array from the arguments", async () => {
        const code = `
          Array.of(1, 2, 3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([1, 2, 3]);
      });

      it("Creates an array with a single numeric argument", async () => {
        const code = `
          Array.of(3);
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([3]);
      });

      it("Creates an array with no arguments", async () => {
        const code = `
          Array.of();
        `;
        const result = await evaluateScript(code);
        expect(result).toEqual([]);
      });
    });
  });
});
