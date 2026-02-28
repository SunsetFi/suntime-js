import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

describe("E2E: Strings", () => {
  it("Supports concatenation", async () => {
    const code = `
        "a" + "b";
      `;
    expect(await evaluateScript(code)).toBe("ab");
  });

  describe("Casting", () => {
    it("Defaults to empty string", async () => {
      const code = `
        String();
      `;
      expect(await evaluateScript(code)).toBe("");
    });

    it("Supports casting a number to string", async () => {
      const code = `
        String(1);
      `;
      expect(await evaluateScript(code)).toBe("1");
    });

    it("Supports casting a boolean to string", async () => {
      const code = `
        String(true);
      `;
      expect(await evaluateScript(code)).toBe("true");
    });

    it("Supports casting a string to string", async () => {
      const code = `
        String("abc");
      `;
      expect(await evaluateScript(code)).toBe("abc");
    });
  });

  describe("Constructor", () => {
    it("Supports casting constructed strings to strings", async () => {
      const code = `
        new String("abc") + "foo";
      `;
      const result = await evaluateScript(code);
      expect(result).toBe("abcfoo");
    });
  });

  it("Supports equality comparisons", async () => {
    const code = `
      new String("abc") == "abc";
    `;
    expect(await evaluateScript(code)).toBe(true);
  });

  it("Defaults to empty string", async () => {
    const code = `
      new String() == "";
    `;
    expect(await evaluateScript(code)).toBe(true);
  });

  describe("Boxing", () => {
    it("Supports length", async () => {
      const code = `
        "abc".length;
      `;
      expect(await evaluateScript(code)).toBe(3);
    });

    it("Supports indexing", async () => {
      const code = `
        "abc"[1];
      `;
      expect(await evaluateScript(code)).toBe("b");
    });

    it("Supports concat", async () => {
      const code = `
        "a".concat("b");
      `;
      expect(await evaluateScript(code)).toBe("ab");
    });

    it("Supports substr", async () => {
      const code = `
        "abc".substr(1);
      `;
      expect(await evaluateScript(code)).toBe("bc");
    });

    it("Supports substring", async () => {
      const code = `
        "abc".substring(1);
      `;
      expect(await evaluateScript(code)).toBe("bc");
    });

    it("Supports slice", async () => {
      const code = `
        "abc".slice(1);
      `;
      expect(await evaluateScript(code)).toBe("bc");
    });

    it("Supports startsWith", async () => {
      const code = `
        "abc".startsWith("a");
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Supports endsWith", async () => {
      const code = `
        "abc".endsWith("c");
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Supports includes", async () => {
      const code = `
        "abc".includes("b");
      `;
      expect(await evaluateScript(code)).toBe(true);
    });

    it("Supports repeat", async () => {
      const code = `
        "a".repeat(3);
      `;
      expect(await evaluateScript(code)).toBe("aaa");
    });

    it("Supports toLowerCase", async () => {
      const code = `
        "ABC".toLowerCase();
      `;
      expect(await evaluateScript(code)).toBe("abc");
    });

    it("Supports toUpperCase", async () => {
      const code = `
        "abc".toUpperCase();
      `;
      expect(await evaluateScript(code)).toBe("ABC");
    });

    it("Supports trim", async () => {
      const code = `
        " abc ".trim();
      `;
      expect(await evaluateScript(code)).toBe("abc");
    });

    it("Supports trimStart", async () => {
      const code = `
        " abc ".trimStart();
        `;
      expect(await evaluateScript(code)).toBe("abc ");
    });

    it("Supports trimEnd", async () => {
      const code = `
        " abc ".trimEnd();
      `;
      expect(await evaluateScript(code)).toBe(" abc");
    });

    it("Supports charAt", async () => {
      const code = `
        "abc".charAt(1);
      `;
      expect(await evaluateScript(code)).toBe("b");
    });

    it("Supports charCodeAt", async () => {
      const code = `
        "abc".charCodeAt(1);
      `;
      expect(await evaluateScript(code)).toBe(98);
    });

    it("Supports split", async () => {
      const code = `
        "a,b,c".split(",");
      `;
      expect(await evaluateScript(code)).toEqual(["a", "b", "c"]);
    });

    it("Supports indexOf", async () => {
      const code = `
        "abc".indexOf("b");
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports lastIndexOf", async () => {
      const code = `
        "abc".lastIndexOf("b");
      `;
      expect(await evaluateScript(code)).toBe(1);
    });

    it("Supports padStart", async () => {
      const code = `
        "abc".padStart(5, "x");
      `;
      expect(await evaluateScript(code)).toBe("xxabc");
    });

    it("Supports padEnd", async () => {
      const code = `
        "abc".padEnd(5, "x");
      `;
      expect(await evaluateScript(code)).toBe("abcxx");
    });

    // Implementing regex seems complex, and risky if we were to just proxy it to native
    // Skipping for now.
    it.skip("Supports match", async () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(await evaluateScript(code)).toStrictEqual(["b"]);
    });

    it.skip("Supports search", async () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(await evaluateScript(code)).toStrictEqual(["b"]);
    });

    it("Supports replace", async () => {
      const code = `
        "abc".replace("b", "d");
      `;
      expect(await evaluateScript(code)).toBe("adc");
    });

    // TODO: All the rest
  });

  describe("Iteration", () => {
    it("Supports iterating over string characters", async () => {
      const code = `
        const chars = [];
        for (const char of "abc") {
          chars.push(char);
        }
        chars;
      `;
      expect(await evaluateScript(code)).toEqual(["a", "b", "c"]);
    });
  });
});
