import { describe, it, expect } from "vitest";

import { evaluateString } from "../src/index.js";

describe("E2E: Strings", () => {
  it("Supports concatenation", () => {
    const code = `
        "a" + "b";
      `;
    expect(evaluateString(code)).toBe("ab");
  });

  describe("Boxing", () => {
    it("Supports length", () => {
      const code = `
        "abc".length;
      `;
      expect(evaluateString(code)).toBe(3);
    });

    it("Supports concat", () => {
      const code = `
        "a".concat("b");
      `;
      expect(evaluateString(code)).toBe("ab");
    });

    it("Supports substr", () => {
      const code = `
        "abc".substr(1);
      `;
      expect(evaluateString(code)).toBe("bc");
    });

    it("Supports substring", () => {
      const code = `
        "abc".substring(1);
      `;
      expect(evaluateString(code)).toBe("bc");
    });

    it("Supports slice", () => {
      const code = `
        "abc".slice(1);
      `;
      expect(evaluateString(code)).toBe("bc");
    });

    it("Supports startsWith", () => {
      const code = `
        "abc".startsWith("a");
      `;
      expect(evaluateString(code)).toBe(true);
    });

    it("Supports endsWith", () => {
      const code = `
        "abc".endsWith("c");
      `;
      expect(evaluateString(code)).toBe(true);
    });

    it("Supports includes", () => {
      const code = `
        "abc".includes("b");
      `;
      expect(evaluateString(code)).toBe(true);
    });

    it("Supports repeat", () => {
      const code = `
        "a".repeat(3);
      `;
      expect(evaluateString(code)).toBe("aaa");
    });

    it("Supports toLowerCase", () => {
      const code = `
        "ABC".toLowerCase();
      `;
      expect(evaluateString(code)).toBe("abc");
    });

    it("Supports toUpperCase", () => {
      const code = `
        "abc".toUpperCase();
      `;
      expect(evaluateString(code)).toBe("ABC");
    });

    it("Supports trim", () => {
      const code = `
        " abc ".trim();
      `;
      expect(evaluateString(code)).toBe("abc");
    });

    it("Supports trimStart", () => {
      const code = `
        " abc ".trimStart();
        `;
      expect(evaluateString(code)).toBe("abc ");
    });

    it("Supports trimEnd", () => {
      const code = `
        " abc ".trimEnd();
      `;
      expect(evaluateString(code)).toBe(" abc");
    });

    it("Supports charAt", () => {
      const code = `
        "abc".charAt(1);
      `;
      expect(evaluateString(code)).toBe("b");
    });

    it("Supports charCodeAt", () => {
      const code = `
        "abc".charCodeAt(1);
      `;
      expect(evaluateString(code)).toBe(98);
    });

    it("Supports split", () => {
      const code = `
        "a,b,c".split(",");
      `;
      expect(evaluateString(code)).toStrictEqual(["a", "b", "c"]);
    });

    it("Supports indexOf", () => {
      const code = `
        "abc".indexOf("b");
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports lastIndexOf", () => {
      const code = `
        "abc".lastIndexOf("b");
      `;
      expect(evaluateString(code)).toBe(1);
    });

    it("Supports padStart", () => {
      const code = `
        "abc".padStart(5, "x");
      `;
      expect(evaluateString(code)).toBe("xxabc");
    });

    it("Supports padEnd", () => {
      const code = `
        "abc".padEnd(5, "x");
      `;
      expect(evaluateString(code)).toBe("abcxx");
    });

    // Implementing regex seems complex, and risky if we were to just proxy it to native
    // Skipping for now.
    it.skip("Supports match", () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(evaluateString(code)).toStrictEqual(["b"]);
    });

    it.skip("Supports search", () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(evaluateString(code)).toStrictEqual(["b"]);
    });

    it("Supports replace", () => {
      const code = `
        "abc".replace("b", "d");
      `;
      expect(evaluateString(code)).toBe("adc");
    });

    // TODO: All the rest
  });
});
