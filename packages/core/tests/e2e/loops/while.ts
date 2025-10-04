import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../../src/index.js";

describe("E2E: While loops", () => {
  it("Can loop with a while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          sum += i;
          i++;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(45);
  });

  it("Can break out of a while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          sum += i;
          if (i === 5) {
            break;
          }
          i++;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(15);
  });

  it("Can continue to the next iteration of a while loop", async () => {
    const code = `
        let sum = 0;
        let i = 0;
        while (i < 10) {
          i++;
          if (i === 5) {
            continue;
          }
          sum += i;
        }
        sum;
      `;
    expect(await evaluateScript(code)).toBe(50);
  });

  it("Propagates thrown errors", async () => {
    const code = `
        let sum = 0;
        while (true) {
          throw "Error";
        }
        sum;
      `;
    await expect(evaluateScript(code)).rejects.toThrow("Error");
  });
});
