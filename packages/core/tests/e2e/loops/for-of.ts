import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: For Of loops", () => {
  it("Can loop with a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(45);
  });

  it("Can break out of a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
          if (i === 5) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Breaks out of the closest for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += j;
            if (j === 5) {
              break;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(150);
  });

  it("Can break out of a labeled for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += j;
            if (j === 5) {
              break outer;
            }
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Can continue to the next iteration of a for-of loop", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(40);
  });

  it("Continues from the closest for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (j === 5) {
              continue;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(400);
  });

  it("Can continue from a labeled for-of loop", async () => {
    const code = `
        let sum = 0;
        outer: for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          for (const j of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            if (j === 5) {
              continue outer;
            }
            sum += j;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(100);
  });

  it("Can loop with a for-of loop over a custom iterator", async () => {
    const code = `
        let sum = 0;
        const counter = {
          [Symbol.iterator]: function() {
            let count = 0;
            return {
              next: function() {
                return { value: count++, done: false };
              }
            };
          }
        };
        for (const i of counter) {
          sum++;
          if (sum === 10) {
            break;
          }
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(10);
  });

  it("Calls iterator.return when abruptly terminated", async () => {
    const code = `
        let finalized = false;
        const iterable = {
          [Symbol.iterator]: function() {
            let count = 0;
            return {
              next: function() {
                return { value: count++, done: false };
              },
              return: function() {
                finalized = true;
                return { done: true };
              }
            };
          }
        };
        for (const i of iterable) {
          if (i === 5) {
            break;
          }
        }
        finalized;
      `;
    expect(await evaluateScript(code)).toBe(true);
  });

  it("Does not conflict iteration variable with outer scope", async () => {
    const code = `
        let i = -1;
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
        }
        [i, sum];
      `;

    expect(await evaluateScript(code)).toEqual([-1, 45]);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          throw "Error";
        }
        sum;
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Error");
  });

  it("Passes the last value as the result", async () => {
    const code = `
        let sum = 0;
        for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          sum += i;
          "value: " + i;
        }
      `;
    expect(await evaluateScript(code)).toBe("value: 9");
  });

  describe("Left Hand Side", () => {
    it("Supports var declarations", async () => {
      const code = `
          let sum = 0;
          for (var i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += i;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(45);
    });
    it("Supports let declarations", async () => {
      const code = `
          let sum = 0;
          for (let i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += i;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Supports const declarations", async () => {
      const code = `
          let sum = 0;
          for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
            sum += i;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Supports loose identifiers", async () => {
      const code = `
          let sum = 0;
          const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          var i;
          for (i of array) {
            sum += i;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Supports object destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [{ val: 1 }, { val: 2 }, { val: 3 }];
          for (const { val } of array) {
            sum += val;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(6);
    });

    it("Supports array destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [[1, 2], [3, 4], [5, 6]];
          for (const [a, b] of array) {
            sum += a + b;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(21);
    });

    it("Supports array-in-object destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [{ vals: [1, 2] }, { vals: [3, 4] }, { vals: [5, 6] }];
          for (const { vals: [a, b] } of array) {
            sum += a + b;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(21);
    });

    it("Supports object-in-array destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [[{ val: 1 }, { val: 2 }], [{ val: 3 }, { val: 4 }], [{ val: 5 }, { val: 6 }]];
          for (const [{ val: a }, { val: b }] of array) {
            sum += a + b;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(21);
    });

    it("Supports defaults in destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [{}, { val: 2 }, { val: 3 }];
          for (const { val = 1 } of array) {
            sum += val;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(6);
    });

    it("Supports loose destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [{ val: 1 }, { val: 2 }, { val: 3 }];
          let val;
          for ({ val } of array) {
            sum += val;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(6);
    });

    it("Supports loose member expressions in destructuring", async () => {
      const code = `
          let sum = 0;
          const array = [{ val: 1 }, { val: 2 }, { val: 3 }];
          const obj = {};
          for ({ val: obj.val } of array) {
            sum += obj.val;
          }
          sum;
        `;
      expect(await evaluateScript(code)).toBe(6);
    });
  });

  describe("Iterators", () => {
    it("Supports iterators", async () => {
      const code = `
        const iterator = {
          current: 0,
          last: 9,
          [Symbol.iterator]() {
            return this;
          },
          next() {
            if (this.current <= this.last) {
              return { value: this.current++, done: false };
            } else {
              return { value: undefined, done: true };
            }
          }
        };
        let sum = 0;
        for (const value of iterator) {
          sum += value;
        }
        sum;
      `;
      expect(await evaluateScript(code)).toBe(45);
    });

    it("Closes iterators on error", async () => {
      const code = `
        let closed = false;
        const iterator = {
          current: 0,
          last: 9,
          [Symbol.iterator]() {
            return this;
          },
          next() {
            if (this.current <= this.last) {
              return { value: this.current++, done: false };
            } else {
              return { value: undefined, done: true };
            }
          },
          return() {
            closed = true;
            return { value: undefined, done: true };
          }
        };
        try {
          for (const value of iterator) {
            if (value === 5) {
              throw new Error("Test error");
            }
          }
        } catch (e) {
          // Ignore
        }
        closed;
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Does not shadow a thrown error with an iterator close error", async () => {
      const code = `
        const iterator = {
          current: 0,
          last: 9,
          [Symbol.iterator]() {
            return this;
          },
          next() {
            if (this.current <= this.last) {
              return { value: this.current++, done: false };
            } else {
              return { value: undefined, done: true };
            }
          },
          return() {
            throw new Error("Iterator close error");
          }
        };
        try {
          for (const value of iterator) {
            if (value === 5) {
              throw new Error("Test error");
            }
          }
        } catch (e) {
          e.message;
        }
      `;
      expect(await evaluateScript(code)).toBe("Test error");
    });
  });

  describe("Completions", () => {
    it("Completes to undefined on abrupt completion", async () => {
      const code = `
        eval("1; for (var a of [0]) { break; }");
      `;
      expect(await evaluateScript(code)).toBeUndefined();
    });

    it("Completes to the last value on abrupt completion", async () => {
      const code = `
        eval("2; for (var b of [0]) { 3; break; }");
      `;
      expect(await evaluateScript(code)).toBe(3);
    });
  });
});
