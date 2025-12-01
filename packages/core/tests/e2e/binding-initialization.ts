import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

interface BindingScenarioDefinition {
  title: string;
  exclude?: string[];
  bindingsCode: string;
  valueCode: string;
  resultCollector: string;
  setupCode?: string;
  assert(ctx: BindingAssertionContext): void;
}

interface BindingAssertionContext {
  result: unknown;
  error: unknown;
}

const bindingScenarios: BindingScenarioDefinition[] = [
  {
    title: "Simple assignment",
    bindingsCode: `x`,
    valueCode: `1`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toBe(1);
    },
  },
  {
    title: "Basic object destructuring",
    bindingsCode: `{ a, b }`,
    valueCode: `{ a: 10, b: 20 }`,
    resultCollector: `[a, b]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([10, 20]);
    },
  },
  {
    title: "Basic object destructuring with defaults",
    bindingsCode: `{ a, b = 5 }`,
    valueCode: `{ a: 10 }`,
    resultCollector: `[a, b]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([10, 5]);
    },
  },
  {
    title: "Basic object destructuring with renaming",
    bindingsCode: `{ a: x, b: y }`,
    valueCode: `{ a: 15, b: 25 }`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([15, 25]);
    },
  },
  {
    title: "Nested object destructuring",
    bindingsCode: `{ a: { b, c } }`,
    valueCode: `{ a: { b: 30, c: 40 } }`,
    resultCollector: `[b, c]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([30, 40]);
    },
  },
  {
    title: "Nested object destructuring with outer defaults",
    bindingsCode: `{ a: { b, c } = { b: 5, c: 10 } }`,
    valueCode: `{}`,
    resultCollector: `[b, c]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([5, 10]);
    },
  },
  {
    title: "Nested object destructuring with inner defaults",
    bindingsCode: `{ a: { b = 7, c = 14 } }`,
    valueCode: `{ a: {} }`,
    resultCollector: `[b, c]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([7, 14]);
    },
  },
  {
    title: "Basic array destructuring",
    bindingsCode: `[x, y]`,
    valueCode: `[1, 2]`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 2]);
    },
  },
  {
    title: "Basic array destructuring with defaults",
    bindingsCode: `[x, y = 3]`,
    valueCode: `[1]`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 3]);
    },
  },
  {
    title: "Nested array destructuring",
    bindingsCode: `[x, [y, z]]`,
    valueCode: `[1, [2, 3]]`,
    resultCollector: `[x, y, z]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 2, 3]);
    },
  },
  {
    title: "Nested array destructuring with outer defaults",
    bindingsCode: `[x, [y, z] = [3, 4]]`,
    valueCode: `[1]`,
    resultCollector: `[x, y, z]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 3, 4]);
    },
  },
  {
    title: "Nested array destructuring with inner defaults",
    bindingsCode: `[x, [y = 4, z = 5]]`,
    valueCode: `[1, []]`,
    resultCollector: `[x, y, z]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 4, 5]);
    },
  },
  {
    title: "Object rest collects remaining properties",
    bindingsCode: `{ a, ...rest }`,
    valueCode: `{ a: 1, b: 2, c: 3 }`,
    resultCollector: `[a, rest]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, { b: 2, c: 3 }]);
    },
  },
  {
    title: "Array rest after elision with nested pattern",
    bindingsCode: `[head, , ...[tailStart, tailEnd]]`,
    valueCode: `[1, 2, 3, 4]`,
    resultCollector: `[head, tailStart, tailEnd]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 3, 4]);
    },
  },
  {
    title: "Mixed object/array destructuring",
    bindingsCode: `{ top: [first, { second }] }`,
    valueCode: `{ top: [1, { second: 2 }] }`,
    resultCollector: `[first, second]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 2]);
    },
  },
  {
    title: "Computed property name binding",
    setupCode: `const dynamicKey = "value";\nconst source = { value: 42 };`,
    bindingsCode: `{ [dynamicKey]: collected }`,
    valueCode: `source`,
    resultCollector: `collected`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toBe(42);
    },
  },
  {
    title: "Default initializer referencing earlier binding",
    // 'var' can access the variable being initialized, unlike 'let' and 'const'
    exclude: ["var"],
    bindingsCode: `{ a = b, b = 1 }`,
    valueCode: `{}`,
    resultCollector: `[a, b]`,
    assert({ error }) {
      expect(error).toMatchObject({
        name: "ReferenceError",
      });
    },
  },
  {
    title: "Array elisions without rest",
    bindingsCode: `[, second, , fourth]`,
    valueCode: `[0, 1, 2, 3]`,
    resultCollector: `[second, fourth]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 3]);
    },
  },
];

function scenariosFor(declarationType: string) {
  return bindingScenarios.filter(
    (scenario) =>
      !scenario.exclude || !scenario.exclude.includes(declarationType),
  );
}

describe("E2E: Binding Initialization", () => {
  it.each(scenariosFor("let"))(
    "let: $title",
    async ({
      bindingsCode,
      valueCode,
      resultCollector,
      setupCode = "",
      assert,
    }) => {
      const script = `
        ${setupCode}
        let ${bindingsCode} = ${valueCode};
        ${resultCollector};
      `;

      let result: unknown;
      let error: unknown;
      try {
        result = await evaluateScript(script);
      } catch (err) {
        error = err;
      }

      assert({ result, error });
    },
  );
  it.each(scenariosFor("const"))(
    "const: $title",
    async ({
      bindingsCode,
      valueCode,
      resultCollector,
      setupCode = "",
      assert,
    }) => {
      const script = `
        ${setupCode}
        const ${bindingsCode} = ${valueCode};
        ${resultCollector};
      `;

      let result: unknown;
      let error: unknown;
      try {
        result = await evaluateScript(script);
      } catch (err) {
        error = err;
      }

      assert({ result, error });
    },
  );

  it.each(scenariosFor("var"))(
    "var: $title",
    async ({
      bindingsCode,
      valueCode,
      resultCollector,
      setupCode = "",
      assert,
    }) => {
      const script = `
        ${setupCode}
        var ${bindingsCode} = ${valueCode};
        ${resultCollector};
      `;

      let result: unknown;
      let error: unknown;
      try {
        result = await evaluateScript(script);
      } catch (err) {
        error = err;
      }

      assert({ result, error });
    },
  );

  it.each(scenariosFor("forOf"))(
    "for-of: $title",
    async ({
      bindingsCode,
      valueCode,
      resultCollector,
      setupCode = "",
      assert,
    }) => {
      const script = `
        ${setupCode}
        for (let ${bindingsCode} of [${valueCode}]) {
          ${resultCollector};
        }
      `;

      let result: unknown;
      let error: unknown;
      try {
        result = await evaluateScript(script);
      } catch (err) {
        error = err;
      }

      assert({ result, error });
    },
  );
});
