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

    it("Can call Array.prototype.splice with no arguments", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice();
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 2, 3], []]);
    });

    it("Can call Array.prototype.splice with a start value", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(1);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1], [2, 3]]);
    });

    it("Can call Array.prototype.splice with a negative start value", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(-1);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 2], [3]]);
    });

    it("Can call Array.prototype.splice with a start and deleteCount", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 3], [2]]);
    });

    it("Can call Array.prototype.splice with a negative start and positive deleteCount", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(-2, 1);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 3], [2]]);
    });

    it("Can call array.prototype.slice removing 1 element with one new value", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1, 4);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 4, 3], [2]]);
    });

    it("Can call array.prototype.splice with two new values", () => {
      const code = `
        const a = [1, 2, 3];
        const b = a.splice(1, 1, 4, 5);
        [a, b];
      `;
      const result = evaluateProgram(code);
      expect(result).toEqual([[1, 4, 5, 3], [2]]);
    });

    it("Can call Array.prototype.concat", () => {
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
  });
});
