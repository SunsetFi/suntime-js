import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: If", () => {
  it("Evaluates true statements", async () => {
    const code = `
      let a = 0;
      if (true) {
        a = 1;
      }
      a;
    `;
    expect(await evaluateScript(code)).toBe(1);
  });

  it("Does not evaluate false statements", async () => {
    const code = `
      let a = 0;
      if (false) {
        a = 1;
      }
      a;
    `;
    expect(await evaluateScript(code)).toBe(0);
  });

  it("Does not evaluate elses for true statements", async () => {
    const code = `
      let a = 0;
      if (true) {
        a = 1;
      } else {
        a = 2;
      }
      a;
    `;
    expect(await evaluateScript(code)).toBe(1);
  });

  it("Evaluates elses for false statements", async () => {
    const code = `
      let a = 0;
      if (false) {
        a = 1;
      } else {
        a = 2;
      }
      a;
    `;
    expect(await evaluateScript(code)).toBe(2);
  });
});
