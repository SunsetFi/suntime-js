import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../src/index.js";

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

    it("Can call Array.prototype.push", () => {
      const code = `
        const a = [];
        a.push(1);
        a;
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([1]);
    });

    it("Can call Array.prototype.pop", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.pop();
        a;
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([1, 2]);
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

    it("Can call Array.prototype.includes with primitives", () => {
      const code = `
        const a = [1, 2, 3];
        a.includes(2);
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual(true);
    });

    it("Can call Array.prototype.includes with NaN", () => {
      const code = `
        const a = [1, 2, 3, NaN];
        a.includes(NaN);
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual(true);
    });

    it("Can call Array.prototype.includes with am object", () => {
      const code = `
        const search = {}
        const a = ["1", search, "3"];
        a.includes(search);
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual(true);
    });
  });
});
