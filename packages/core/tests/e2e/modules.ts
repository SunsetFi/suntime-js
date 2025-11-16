import { describe, it, expect, vitest } from "vitest";

import {
  StaticJsRealm,
  StaticJsSyntaxError,
  evaluateModule,
} from "../../src/index.js";

describe("E2E: Module", () => {
  it("Throws ReferenceError when a module is not found", async () => {
    const realm = StaticJsRealm();
    await expect(
      evaluateModule('import { foo } from "not-found";', { realm }),
    ).rejects.toThrow(/not found/);
  });

  it("Throws ReferenceError when an indirect module is not found", async () => {
    const realm = StaticJsRealm({
      modules: {
        "module-1": `import { foo } from "bar"; export const test = 42;`,
      },
    });
    await expect(
      evaluateModule('import { test } from "module-1";', { realm }),
    ).rejects.toThrow(/not found/);
  });

  describe("External Value Modules", () => {
    it("Can import a named export", async () => {
      const receiver = vitest.fn();
      const realm = StaticJsRealm({
        global: {
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

      await evaluateModule(program, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a default export", async () => {
      const receiver = vitest.fn();
      const realm = StaticJsRealm({
        global: {
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

      await evaluateModule(program, { realm });
      expect(receiver).toBeCalledWith(3);
    });
  });

  describe("AST Modules", () => {
    it("Can export a named export", async () => {
      const moduleCode = `
        export const foo = 42;
      `;
      const realm = StaticJsRealm();

      const module = await evaluateModule(moduleCode, { realm });
      expect(module.getExport("foo")).toBe(42);
    });

    it("Can export a default export", async () => {
      const moduleCode = `
          const foo = 42;
          export default foo;
        `;
      const realm = StaticJsRealm();

      const module = await evaluateModule(moduleCode, { realm });
      expect(module.getExport("default")).toBe(42);
    });

    it("Can obtain a namespace", async () => {
      const moduleCode = `
          const foo = 42;
          export default foo;
          export const bar = 64;
        `;
      const realm = StaticJsRealm();

      const module = await evaluateModule(moduleCode, { realm });
      expect(module.getModuleNamespace()).toEqual({
        bar: 64,
      });
    });

    it("Obtains a live namespace", async () => {
      const moduleCode = `
          export let value = 0;
          export function setValue(x) {
            value = x;
          }
        `;
      const realm = StaticJsRealm();

      const module = await evaluateModule(moduleCode, { realm });
      const ns = module.getModuleNamespace() as {
        value: number;
        setValue: (x: number) => void;
      };
      expect(ns.value).toBe(0);
      ns.setValue(42);
      expect(ns.value).toBe(42);
    });

    it("Can import a named inline export", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": moduleCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import an indirect export", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": moduleCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a default export", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": moduleCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import a namespace export", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": moduleCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Can import an all export", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "module-1": modOneCode,
          "module-2": modTwoCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith(3);
    });

    it("Imports a value as immutable", async () => {
      const moduleCode = `
        let value = 0;
        export { value }
      `;

      const programCode = `
        import { value } from "my-module";
        value = 4;
      `;

      const realm = StaticJsRealm({
        modules: {
          "my-module": moduleCode,
        },
      });

      await expect(evaluateModule(programCode, { realm })).rejects.toThrow(
        /Assignment to constant/,
      );
    });

    it("Imports a value as live", async () => {
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
        global: {
          value: {
            setResult: receiver,
          },
        },
        modules: {
          "my-module": moduleCode,
        },
      });

      await evaluateModule(programCode, { realm });
      expect(receiver).toBeCalledWith([0, 4]);
    });

    it("Handles circular dependencies", async () => {
      const receiver = vitest.fn();
      const realm = StaticJsRealm({
        modules: {
          "module-1": `
            import { getMod2 } from "module-2";
            export function getValue() { return "a" + getMod2(); };
            export function getMod1() { return "c"; }
          `,
          "module-2": `
            import { getMod1 } from "module-1";
            export function getMod2() {
              return "b" + getMod1();
            };`,
        },
        global: {
          value: {
            setResult: receiver,
          },
        },
      });

      const code = `
          import { getValue } from "module-1";
          const result = getValue();
          setResult(result);
        `;

      await evaluateModule(code, { realm });

      expect(receiver).toBeCalledWith("abc");
    });

    it("Throws on syntax errors", async () => {
      expect(() =>
        StaticJsRealm({
          modules: {
            "module-1": `export const a = ;`,
          },
        }),
      ).toThrow(StaticJsSyntaxError);
    });

    it("Supports top-level await", async () => {
      const receiver = vitest.fn();
      let resolver: (() => void) | undefined = undefined;
      const realm = StaticJsRealm({
        global: {
          value: {
            setValue: receiver,
            setResolver: (r: () => void) => {
              resolver = r;
            },
          },
        },
        modules: {
          "module-1": `
            await new Promise((r) => setResolver(r));
            export const value = 42;
          `,
        },
      });

      const code = `import { value } from "module-1"; setValue(value);`;

      let moduleResolved = false;
      evaluateModule(code, { realm }).then(() => (moduleResolved = true));

      await delay(0);

      expect(moduleResolved).toBe(false);
      expect(receiver).not.toBeCalled();
      expect(resolver).toBeDefined();

      resolver!();

      await delay(0);

      expect(moduleResolved).toBe(true);
      expect(receiver).toBeCalledWith(42);
    });
  });

  describe("resolveImportedModule", () => {
    it("Supports strings", async () => {
      const receiver = vitest.fn();
      const moduleCode = `export const value = 42`;
      const realm = StaticJsRealm({
        global: {
          value: {
            setValue: receiver,
          },
        },
        async resolveImportedModule() {
          await delay(100);
          return moduleCode;
        },
      });

      const code = `
      import { value } from "module-1";
      setValue(value);
      `;
      await evaluateModule(code, { realm });
      await expect(receiver).toBeCalledWith(42);
    });

    it("Supports external objects", async () => {
      const receiver = vitest.fn();
      const realm = StaticJsRealm({
        global: {
          value: {
            setValue: receiver,
          },
        },
        async resolveImportedModule() {
          await delay(100);
          return {
            exports: {
              value: 42,
            },
          };
        },
      });

      const code = `
      import { value } from "module-1";
      setValue(value);
      `;
      await evaluateModule(code, { realm });
      await expect(receiver).toBeCalledWith(42);
    });
  });
});

function delay(time: number): Promise<void> {
  return new Promise((accept) => setTimeout(accept, time));
}
