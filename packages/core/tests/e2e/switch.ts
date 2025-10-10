import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Switch statements", () => {
  it("Can switch on a value", async () => {
    const code = `
        let result = 0;
        const value = 2;
        switch (value) {
          case 1:
            result = 10;
            break;
          case 2:
            result = 20;
            break;
          case 3:
            result = 30;
            break;
          default:
            result = 40;
        }
        result;
      `;
    expect(await evaluateScript(code)).toBe(20);
  });

  it("Can switch with no matching case", async () => {
    const code = `
        let result = 0;
        const value = 4;
        switch (value) {
          case 1:
            result = 10;
            break;
          case 2:
            result = 20;
            break;
          case 3:
            result = 30;
            break;
          default:
            result = 40;
        }
        result;
      `;
    expect(await evaluateScript(code)).toBe(40);
  });

  it("Can switch with no cases", async () => {
    const code = `
        let result = 0;
        const value = 4;
        switch (value) {
          default:
            result = 40;
        }
        result;
      `;
    expect(await evaluateScript(code)).toBe(40);
  });

  it("Can switch with fallthrough", async () => {
    const code = `
        let result = 0;
        const value = 2;
        switch (value) {
          case 1:
            result = 10;
          case 2:
            result = 20;
          case 3:
            result = 30;
            break;
          default:
            result = 40;
        }
        result;
      `;
    expect(await evaluateScript(code)).toBe(30);
  });
});
