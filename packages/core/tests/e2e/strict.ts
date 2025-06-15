import { describe, it, expect } from "vitest";
import { evaluateScript } from "../../src/index.js";

describe.skip("E2E: Strict mode", () => {
  describe("Non-strict mode behavior", () => {
    it("should allow assigning to undeclared variables", async () => {
      const code = `
        x = 10;
      `;
      await expect(evaluateScript(code)).resolves.toBe(10);
    });

    it("should bind `this` to global in non-method function calls", async () => {
      const code = `
        function getThis() { return this; }
        getThis() === globalThis;
      `;
      await expect(evaluateScript(code)).resolves.toBe(true);
    });

    it("should allow duplicate parameter names", async () => {
      const code = `
        function f(a, a) { return a; }
        f(1, 2);
      `;
      await expect(evaluateScript(code)).resolves.toBe(2);
    });

    it("should allow octal literals", async () => {
      const code = `
        010 === 8;
      `;
      await expect(evaluateScript(code)).resolves.toBe(true);
    });

    it("should fail silently on reassigning immutable variables", async () => {
      const code = `
        const x = 10;
        x = 20;
      `;
      await expect(evaluateScript(code)).resolves.toBe(10);
    });

    it("should fail silently on deleting undeclared variables", async () => {
      const code = `
        delete x;
      `;
      await expect(evaluateScript(code)).resolves.toBe(true);
    });
  });

  describe("Strict mode behavior", () => {
    it("should throw on assigning to undeclared variables", async () => {
      const code = `
        'use strict';
        x = 10;
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "ReferenceError",
      });
    });

    it("should have undefined `this` in non-method calls", async () => {
      const code = `
        'use strict';
        function getThis() { return this; }
        getThis() === undefined;
      `;
      await expect(evaluateScript(code)).resolves.toBe(true);
    });

    it("should throw on duplicate parameter names", async () => {
      const code = `
        'use strict';
        function f(a, a) { return a; }
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });

    it("should allow ES6 octal literals but not legacy ones", async () => {
      const octalCode = `
        'use strict';
        0o10 === 8;
      `;
      await expect(evaluateScript(octalCode)).resolves.toBe(true);

      const legacyOctalCode = `
        'use strict';
        010 === 8;
      `;
      await expect(evaluateScript(legacyOctalCode)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });

    it("should throw on reassigning immutable variables", async () => {
      const code = `
        'use strict';
        const x = 10;
        x = 20;
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "TypeError",
      });
    });

    it("should throw on deleting undeclared variables", async () => {
      const code = `
        'use strict';
        delete x;
      `;
      await expect(evaluateScript(code)).rejects.toMatchObject({
        name: "SyntaxError",
      });
    });
  });
});
