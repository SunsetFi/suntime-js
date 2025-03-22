import { describe, it, expect } from "vitest";

import { evaluateString } from "static-js";

describe("E2E: If", () => {
  it("Evaluates true statements", () => {
    const code = `
      let a = 0;
      if (true) {
        a = 1;
      }
      a;
    `;
    expect(evaluateString(code)).toBe(1);
  });

  it("Does not evaluate false statements", () => {
    const code = `
      let a = 0;
      if (false) {
        a = 1;
      }
      a;
    `;
    expect(evaluateString(code)).toBe(0);
  });

  it("Does not evaluate elses for true statements", () => {
    const code = `
      let a = 0;
      if (true) {
        a = 1;
      } else {
        a = 2;
      }
      a;
    `;
    expect(evaluateString(code)).toBe(1);
  });

  it("Evaluates elses for false statements", () => {
    const code = `
      let a = 0;
      if (false) {
        a = 1;
      } else {
        a = 2;
      }
      a;
    `;
    expect(evaluateString(code)).toBe(2);
  });
});
