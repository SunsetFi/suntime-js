import { describe, it, expect } from "vitest";

import { evaluateScript } from "../../src/index.js";

interface DestructuringScenarioDefinition {
  title: string;
  exclude?: string[];
  varDeclare?: string;
  bindingsCode: string;
  valueCode: string;
  resultCollector: string;
  assert(ctx: DestructuringAssertionContext): void;
}

interface DestructuringAssertionContext {
  result: unknown;
  error: unknown;
}

const destructuringScenarios: DestructuringScenarioDefinition[] = [
  {
    title: "Basic array",
    varDeclare: "let x, y",
    bindingsCode: `[x, y]`,
    valueCode: `[1, 2]`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, 2]);
    },
  },
  {
    title: "Basic object",
    varDeclare: "let a, b",
    bindingsCode: `{ a, b }`,
    valueCode: `{ a: 10, b: 20 }`,
    resultCollector: `[a, b]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([10, 20]);
    },
  },
  {
    title: "Array in object nesting",
    varDeclare: "let x, y",
    bindingsCode: `{ a: [x, y] }`,
    valueCode: `{ a: [5, 15] }`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([5, 15]);
    },
  },
  {
    title: "Object in array nesting",
    varDeclare: "let x, y",
    bindingsCode: `[{ a: x }, { b: y }]`,
    valueCode: `[{ a: 7 }, { b: 14 }]`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([7, 14]);
    },
  },
  {
    title: "Object rest",
    varDeclare: "let x, rest",
    bindingsCode: `{ a: x, ...rest }`,
    valueCode: `{ a: 1, b: 2, c: 3 }`,
    resultCollector: `[x, rest]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([1, { b: 2, c: 3 }]);
    },
  },
  {
    title: "Array rest",
    varDeclare: "let x, rest",
    bindingsCode: `[x, ...rest]`,
    valueCode: `[10, 20, 30, 40]`,
    resultCollector: `[x, rest]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([10, [20, 30, 40]]);
    },
  },
  {
    title: "Array rest into nested array",
    varDeclare: "let x, y",
    bindingsCode: `[x, ...[y]]`,
    valueCode: `[100, 200, 300]`,
    resultCollector: `[x, y]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([100, 200]);
    },
  },
  {
    title: "Object with computed key",
    varDeclare: "let x",
    bindingsCode: `{ ['a' + 'b']: x }`,
    valueCode: `{ ab: 42 }`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(42);
    },
  },
  {
    title: "Array with computed key",
    varDeclare: "let x",
    bindingsCode: `[{ ['a' + 'b']: x }]`,
    valueCode: `[{ ab: 84 }]`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(84);
    },
  },
  {
    title: "Object initializer with value",
    varDeclare: "let x",
    bindingsCode: `{ a: x = 55 }`,
    valueCode: `{ a: 42 }`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(42);
    },
  },
  {
    title: "Object initializer without value",
    varDeclare: "let x",
    bindingsCode: `{ a: x = 55 }`,
    valueCode: `{}`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(55);
    },
  },
  {
    title: "Array initializer with value",
    varDeclare: "let x",
    bindingsCode: `[x = 77]`,
    valueCode: `[33]`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(33);
    },
  },
  {
    title: "Array initializer without value",
    varDeclare: "let x",
    bindingsCode: `[x = 99]`,
    valueCode: `[]`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(99);
    },
  },
  {
    title: "Object into Member expression",
    exclude: ["function arguments"],
    varDeclare: "const x = {}",
    bindingsCode: `{ a: x.value }`,
    valueCode: `{a: 1}`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual({ value: 1 });
    },
  },
  {
    title: "Array into Member expression",
    exclude: ["function arguments"],
    varDeclare: "const x = []",
    bindingsCode: `[x[0]]`,
    valueCode: `[42]`,
    resultCollector: `x`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual([42]);
    },
  },
  {
    title: "String into array destructuring",
    varDeclare: "let a, b",
    bindingsCode: `[a, b]`,
    valueCode: `"hi"`,
    resultCollector: `[a, b]`,
    assert({ result, error }) {
      expect(error).toBeUndefined();
      expect(result).toEqual(["h", "i"]);
    },
  },
];

function scenariosFor(declarationType: string) {
  return destructuringScenarios.filter(
    (scenario) => !scenario.exclude || !scenario.exclude.includes(declarationType),
  );
}

describe("E2E: Destructuring Assignment", () => {
  it.each(scenariosFor("for.of"))(
    "For Of: $title",
    async ({ bindingsCode, valueCode, resultCollector, varDeclare = "", assert }) => {
      const script = `
        ${varDeclare}
        for (${bindingsCode} of [${valueCode}]) {
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
  it.each(scenariosFor("function arguments"))(
    "Function arguments: $title",
    async ({ bindingsCode, valueCode, resultCollector, assert }) => {
      const script = `
        let result;
        (function(${bindingsCode}) {
          result = ${resultCollector};
        })(${valueCode});
        result;
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

  it("Resolves properties in correct enumeration order", async () => {
    // Adapted from test262 language/statements/for-of/dstr/obj-rest-order.js
    const code = `
      var rest;
      var calls = [];
      var o = { get z() { calls.push('z') }, get a() { calls.push('a') } };
      Object.defineProperty(o, 1, { get: () => { calls.push(1) }, enumerable: true });
      Object.defineProperty(o, Symbol('foo'), { get: () => { calls.push("Symbol(foo)") }, enumerable: true });

      for ({...rest} of [o]) {
        calls;
      }
    `;

    const result = await evaluateScript(code);
    expect(result).toEqual([1, "z", "a", "Symbol(foo)"]);
  });
});
