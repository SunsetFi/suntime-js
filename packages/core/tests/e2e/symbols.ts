import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe("E2E: Symbols", () => {
  it("Supports Symbol()", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        sym.toString();
      `;
    const result = await evaluateScript(code);
    expect(result).toBe("Symbol(mySymbol)");
  });

  it("Uses strict equality", async () => {
    const code = `
        const sym1 = Symbol("mySymbol");
        const sym2 = Symbol("mySymbol");
        sym1 === sym2;
      `;
    const result = await evaluateScript(code);
    expect(result).toBe(false);
  });

  it("Supports symbol property keys", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        const obj = {};
        obj[sym] = 42;
        obj[sym];
      `;
    const result = await evaluateScript(code);
    expect(result).toBe(42);
  });

  it("Does not enumerate symbol keys", async () => {
    const code = `
        const sym = Symbol("mySymbol");
        const obj = {};
        obj[sym] = 42;
        Object.keys(obj);
      `;
    const result = await evaluateScript(code);
    expect(result).toEqual([]);
  });
});
