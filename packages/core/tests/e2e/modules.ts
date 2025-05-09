import { describe, it, expect, vitest } from "vitest";

import { StaticJsRealm, evaluateModule } from "../../src/index.js";

describe("E2E: Module", () => {
  describe("External Modules", () => {
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

      evaluateModule(program, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a default export", () => {
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
              default: (a: number, b: number) => a + b,
            },
          },
        },
      });

      const program = `
        import add from "my-module";
        const result = add(1, 2);
        setResult(result);
      `;

      evaluateModule(program, { realm });
      expect(receiver).toBeCalledWith(3);
    });
  });
});
