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

  describe("Internal Modules", () => {
    it("Can export a named export", () => {
      const moduleCode = `
        export const foo = 42;
      `;
      const realm = StaticJsRealm();

      const module = evaluateModule(moduleCode, { realm });
      expect(module.getExport("foo")).toBe(42);
    });

    it("Can export a default export", () => {
      const moduleCode = `
          const foo = 42;
          export default foo;
        `;
      const realm = StaticJsRealm();

      const module = evaluateModule(moduleCode, { realm });
      expect(module.getExport("default")).toBe(42);
    });

    it("Can obtain a namespace", () => {
      const moduleCode = `
          const foo = 42;
          export default foo;
          export const bar = 64;
        `;
      const realm = StaticJsRealm();

      const module = evaluateModule(moduleCode, { realm });
      expect(module.getModuleNamespace()).toEqual({
        bar: 64,
      });
    });

    it("Obtains a live namespace", () => {
      const moduleCode = `
          export let value = 0;
          export function setValue(x) {
            value = x;
          }
        `;
      const realm = StaticJsRealm();

      const module = evaluateModule(moduleCode, { realm });
      const ns = module.getModuleNamespace() as {
        value: number;
        setValue: (x: number) => void;
      };
      expect(ns.value).toBe(0);
      ns.setValue(42);
      expect(ns.value).toBe(42);
    });

    it("Can import a named inline export", () => {
      const receiver = vitest.fn();

      const moduleCode = `
        export function add(a, b) {
          return a + b;
        }
      `;

      const programCode = `
        import { add } from "my-module";
        const result = add(1, 2);
        setResult(result);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import an indirect export", () => {
      const receiver = vitest.fn();

      const moduleCode = `
        function add(a, b) {
          return a + b;
        }

        export { add };
      `;

      const programCode = `
        import { add } from "my-module";
        const result = add(1, 2);
        setResult(result);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a default export", () => {
      const receiver = vitest.fn();

      const moduleCode = `
        export default function add(a, b) {
          return a + b;
        }
      `;

      const programCode = `
        import add from "my-module";
        const result = add(1, 2);
        setResult(result);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a namespace export", () => {
      const receiver = vitest.fn();

      const moduleCode = `
        export function add(a, b) {
          return a + b;
        }
      `;

      const programCode = `
        import * as myModule from "my-module";
        const result = myModule.add(1, 2);
        setResult(result);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import an all export", () => {
      const receiver = vitest.fn();

      const modOneCode = `
        export function add(a, b) {
          return a + b;
        }
      `;

      const modTwoCode = `
        export * from "module-1";
      `;

      const programCode = `
        import { add } from "module-2";
        const result = add(1, 2);
        setResult(result);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          switch (moduleName) {
            case "module-1":
              return modOneCode;
            case "module-2":
              return modTwoCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Imports a value as immutable", () => {
      const moduleCode = `
        let value = 0;
        export { value }
      `;

      const programCode = `
        import { value } from "my-module";
        value = 4;
      `;

      const realm = StaticJsRealm({
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      expect(() => evaluateModule(programCode, { realm })).toThrow(
        /Assignment to constant/,
      );
    });

    it("Imports a value as live", () => {
      const receiver = vitest.fn();
      const moduleCode = `
      export let value = 0;
      export function setValue(x) {
        value = x;
      }
    `;

      const programCode = `
      import { value, setValue } from "my-module";
      const preValue = value;
      setValue(4);
      setResult([preValue, value]);
      `;

      const realm = StaticJsRealm({
        globalObject: {
          value: {
            setResult: receiver,
          },
        },
        resolveModule(moduleName) {
          if (moduleName === "my-module") {
            return moduleCode;
          }
          return null;
        },
      });

      evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith([0, 4]);
    });
  });
});
