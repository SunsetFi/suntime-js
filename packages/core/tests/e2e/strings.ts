import { describe, it, expect } from "vitest";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";
import { afterEach, beforeEach } from "node:test";

describe("E2E: Strings", () => {
  let realm: StaticJsRealm;

  beforeEach(() => {
    realm = StaticJsRealm();
  });

  afterEach(() => {});
  it("Supports concatenation", async () => {
    const code = `
        "a" + "b";
      `;
    expect(await evaluateScript(code, { realm })).toBe("ab");
  });

  describe("Casting", () => {
    it("Defaults to empty string", async () => {
      const code = `
        String();
      `;
      expect(await evaluateScript(code, { realm })).toBe("");
    });

    it("Supports casting a number to string", async () => {
      const code = `
        String(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe("1");
    });

    it("Supports casting a boolean to string", async () => {
      const code = `
        String(true);
      `;
      expect(await evaluateScript(code, { realm })).toBe("true");
    });

    it("Supports casting a string to string", async () => {
      const code = `
        String("abc");
      `;
      expect(await evaluateScript(code, { realm })).toBe("abc");
    });
  });

  describe("Constructor", () => {
    it("Supports casting constructed strings to strings", async () => {
      const code = `
        new String("abc") + "foo";
      `;
      const result = await evaluateScript(code, { realm });
      expect(result).toBe("abcfoo");
    });
  });

  it("Supports equality comparisons", async () => {
    const code = `
      new String("abc") == "abc";
    `;
    expect(await evaluateScript(code, { realm })).toBe(true);
  });

  it("Defaults to empty string", async () => {
    const code = `
      new String() == "";
    `;
    expect(await evaluateScript(code, { realm })).toBe(true);
  });

  describe("Boxing", () => {
    it("Supports length", async () => {
      const code = `
        "abc".length;
      `;
      expect(await evaluateScript(code, { realm })).toBe(3);
    });

    it("Supports indexing", async () => {
      const code = `
        "abc"[1];
      `;
      expect(await evaluateScript(code, { realm })).toBe("b");
    });

    it("Supports concat", async () => {
      const code = `
        "a".concat("b");
      `;
      expect(await evaluateScript(code, { realm })).toBe("ab");
    });

    it("Supports substr", async () => {
      const code = `
        "abc".substr(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe("bc");
    });

    it("Supports substring", async () => {
      const code = `
        "abc".substring(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe("bc");
    });

    it("Supports slice", async () => {
      const code = `
        "abc".slice(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe("bc");
    });

    it("Supports startsWith", async () => {
      const code = `
        "abc".startsWith("a");
      `;
      expect(await evaluateScript(code, { realm })).toBe(true);
    });

    it("Supports endsWith", async () => {
      const code = `
        "abc".endsWith("c");
      `;
      expect(await evaluateScript(code, { realm })).toBe(true);
    });

    it("Supports includes", async () => {
      const code = `
        "abc".includes("b");
      `;
      expect(await evaluateScript(code, { realm })).toBe(true);
    });

    it("Supports repeat", async () => {
      const code = `
        "a".repeat(3);
      `;
      expect(await evaluateScript(code, { realm })).toBe("aaa");
    });

    it("Supports toLowerCase", async () => {
      const code = `
        "ABC".toLowerCase();
      `;
      expect(await evaluateScript(code, { realm })).toBe("abc");
    });

    it("Supports toUpperCase", async () => {
      const code = `
        "abc".toUpperCase();
      `;
      expect(await evaluateScript(code, { realm })).toBe("ABC");
    });

    it("Supports trim", async () => {
      const code = `
        " abc ".trim();
      `;
      expect(await evaluateScript(code, { realm })).toBe("abc");
    });

    it("Supports trimStart", async () => {
      const code = `
        " abc ".trimStart();
        `;
      expect(await evaluateScript(code, { realm })).toBe("abc ");
    });

    it("Supports trimEnd", async () => {
      const code = `
        " abc ".trimEnd();
      `;
      expect(await evaluateScript(code, { realm })).toBe(" abc");
    });

    it("Supports charAt", async () => {
      const code = `
        "abc".charAt(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe("b");
    });

    it("Supports charCodeAt", async () => {
      const code = `
        "abc".charCodeAt(1);
      `;
      expect(await evaluateScript(code, { realm })).toBe(98);
    });

    it("Supports split", async () => {
      const code = `
        "a,b,c".split(",");
      `;
      expect(await evaluateScript(code, { realm })).toEqual(["a", "b", "c"]);
    });

    it("Supports indexOf", async () => {
      const code = `
        "abc".indexOf("b");
      `;
      expect(await evaluateScript(code, { realm })).toBe(1);
    });

    it("Supports lastIndexOf", async () => {
      const code = `
        "abc".lastIndexOf("b");
      `;
      expect(await evaluateScript(code, { realm })).toBe(1);
    });

    it("Supports padStart", async () => {
      const code = `
        "abc".padStart(5, "x");
      `;
      expect(await evaluateScript(code, { realm })).toBe("xxabc");
    });

    it("Supports padEnd", async () => {
      const code = `
        "abc".padEnd(5, "x");
      `;
      expect(await evaluateScript(code, { realm })).toBe("abcxx");
    });

    // Implementing regex seems complex, and risky if we were to just proxy it to native
    // Skipping for now.
    it.skip("Supports match", async () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(await evaluateScript(code, { realm })).toStrictEqual(["b"]);
    });

    it.skip("Supports search", async () => {
      const code = `
        "abc".match(/b/);
      `;
      expect(await evaluateScript(code, { realm })).toStrictEqual(["b"]);
    });

    it("Supports replace", async () => {
      const code = `
        "abc".replace("b", "d");
      `;
      expect(await evaluateScript(code, { realm })).toBe("adc");
    });

    // TODO: All the rest
  });
});
