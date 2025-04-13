import { describe, it, expect } from "vitest";

import { evaluateProgram } from "../../src/index.js";

describe("E2E: Strings", () => {
  it("Supports concatenation", () => {
    const code = `
        "a" + "b";
      `;
    expect(evaluateProgram(code)).toBe("ab");
  });

  describe("Casting", () => {
    it("Supports casting a number to string", () => {
      const code = `
        String(1);
      `;
      expect(evaluateProgram(code)).toBe("1");
    });

    it("Supports casting a boolean to string", () => {
      const code = `
        String(true);
      `;
      expect(evaluateProgram(code)).toBe("true");
    });

    it("Supports casting a string to string", () => {
      const code = `
        String("abc");
      `;
      expect(evaluateProgram(code)).toBe("abc");
    });
  });

  describe("Boxing", () => {
    it("Supports length", () => {
      const code = `
        "abc".length;
      `;
      expect(evaluateProgram(code)).toBe(3);
    });

    it("Supports concat", () => {
      const code = `
        "a".concat("b");
      `;
      expect(evaluateProgram(code)).toBe("ab");
    });

    it("Supports substr", () => {
      const code = `
        "abc".substr(1);
      `;
      expect(evaluateProgram(code)).toBe("bc");
    });

    it("Supports substring", () => {
      const code = `
        "abc".substring(1);
      `;
      expect(evaluateProgram(code)).toBe("bc");
    });

    it("Supports slice", () => {
      const code = `
        "abc".slice(1);
      `;
      expect(evaluateProgram(code)).toBe("bc");
    });

    it("Supports startsWith", () => {
      const code = `
        "abc".startsWith("a");
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Supports endsWith", () => {
      const code = `
        "abc".endsWith("c");
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Supports includes", () => {
      const code = `
        "abc".includes("b");
      `;
      expect(evaluateProgram(code)).toBe(true);
    });

    it("Supports repeat", () => {
      const code = `
        "a".repeat(3);
      `;
      expect(evaluateProgram(code)).toBe("aaa");
    });

    it("Supports toLowerCase", () => {
      const code = `
        "ABC".toLowerCase();
      `;
      expect(evaluateProgram(code)).toBe("abc");
    });

    it("Supports toUpperCase", () => {
      const code = `
        "abc".toUpperCase();
      `;
      expect(evaluateProgram(code)).toBe("ABC");
    });

    it("Supports trim", () => {
      const code = `
        " abc ".trim();
      `;
      expect(evaluateProgram(code)).toBe("abc");
    });

    it("Supports trimStart", () => {
      const code = `
        " abc ".trimStart();
        `;
      expect(evaluateProgram(code)).toBe("abc ");
    });

    it("Supports trimEnd", () => {
      const code = `
        " abc ".trimEnd();
      `;
      expect(evaluateProgram(code)).toBe(" abc");
    });

    it("Supports charAt", () => {
      const code = `
        "abc".charAt(1);
      `;
      expect(evaluateProgram(code)).toBe("b");
    });

    it("Supports charCodeAt", () => {
      const code = `
        "abc".charCodeAt(1);
      `;
      expect(evaluateProgram(code)).toBe(98);
    });

    it("Supports split", () => {
      const code = `
        "a,b,c".split(",");
      `;
      expect(evaluateProgram(code)).toStrictEqual(["a", "b", "c"]);
    });

    it("Supports indexOf", () => {
      const code = `
        "abc".indexOf("b");
      `;
      expect(evaluateProgram(code)).toBe(1);
    });

    it("Supports lastIndexOf", () => {
      const code = `
        "abc".lastIndexOf("b");
      `;
      expect(evaluateProgram(code)).toBe(1);
    });

    it("Supports padStart", () => {
      const code = `
        "abc".padStart(5, "x");
      `;
      expect(evaluateProgram(code)).toBe("xxabc");
    });

    it("Supports padEnd", () => {
      const code = `
        "abc".padEnd(5, "x");
      `;
      expect(evaluateProgram(code)).toBe("abcxx");
    });

    // Implementing regex seems complex, and risky if we were to just proxy it to native
    // Skipping for now.
    it.skip("Supports match", () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(evaluateProgram(code)).toStrictEqual(["b"]);
    });

    it.skip("Supports search", () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(evaluateProgram(code)).toStrictEqual(["b"]);
    });

    it("Supports replace", () => {
      const code = `
        "abc".replace("b", "d");
      `;
      expect(evaluateProgram(code)).toBe("adc");
    });

    // TODO: All the rest
  });
});
