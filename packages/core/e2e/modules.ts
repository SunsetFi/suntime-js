import { describe, it, expect, vitest } from "vitest";

import { evaluateProgram } from "../src/index.js";
import StaticJsRealm from "../src/runtime/realm/factories/StaticJsRealm.js";

describe("E2E: Module", () => {
  describe("Imports", () => {
    it("Can import a named export", () => {
      const receiver = vitest.fn();
      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": {
            exports: {
              add: (a: number, b: number) => a + b,
            },
          },
        },
      });

      const program = `
        import { add } from "my-module";
        const result = add(1, 2);
        setResult(result);
      `;

      evaluateProgram(program, { sourceType: "module", realm });
      expect(receiver).toBeCalledWith(3);
    });
  });
});
