import { describe, it, expect } from "vitest";

import {
  type Node,
  arrayPattern,
  identifier,
  numericLiteral,
  objectPattern,
  objectProperty as babelObjectProperty,
  restElement,
  variableDeclaration,
  variableDeclarator,
  classDeclaration as babelClassDeclaration,
  classBody,
} from "@babel/types";

// The babel objectProperty sets decorators to null, but the parser omits it entirely.
const objectProperty: typeof babelObjectProperty = (
  ...args: Parameters<typeof babelObjectProperty>
) => {
  const result = babelObjectProperty(...args);
  if (!result.decorators) {
    delete result.decorators;
  }

  return result;
};

const classDeclaration: typeof babelClassDeclaration = (
  ...args: Parameters<typeof babelClassDeclaration>
) => {
  const result = babelClassDeclaration(...args);
  if (result.decorators?.length == 0) {
    delete result.decorators;
  }

  return result;
};

import parseModule from "../../parser/parse-module.js";

import lexicallyDeclaredNames from "./lexically-declared-names.js";
import lexicallyScopedDeclarations from "./lexically-scoped-declarations.js";

interface TestCase {
  name: string;
  code: string;
  expectedVarNames: string[];
  expectedNodes: Node[];
}

const testCases: TestCase[] = [
  {
    name: "Top-level let/const declaration",
    code: `
      let x = 10;
      const y = 20;
    `,
    expectedVarNames: ["x", "y"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(identifier("x"), numericLiteral(10)),
      ]),
      variableDeclaration("const", [
        variableDeclarator(identifier("y"), numericLiteral(20)),
      ]),
    ],
  },
  {
    name: "Block-scoped let/const declaration",
    code: `
      {
        let y = 20;
        const z = 30;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Nested block-scoped var declaration",
    code: `
      {
        {
          let y = 20;
          const z = 30;
        }
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Switch with let/const declarations",
    code: `
      switch (z) {
        case 1:
          let a = 1;
          break;
        case 2:
          const b = 2;
          break;
      }
      `,
    expectedVarNames: ["a", "b"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(identifier("a"), numericLiteral(1)),
      ]),
      variableDeclaration("const", [
        variableDeclarator(identifier("b"), numericLiteral(2)),
      ]),
    ],
  },
  {
    name: "No lexical var",
    code: `
      var a = 1;
      `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "No block-scoped var",
    code: `
      {
        var a = 1;
      }
      `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Top-level function declaration returns no lexical vars",
    code: `
      function foo() {}
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Top-level generator function declaration returns no lexical vars",
    code: `
      function* gen() {}
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Top-level async function declaration returns no lexical vars",
    code: `
      async function af() {}
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Top-level async generator function declaration returns no lexical vars",
    code: `
      async function* ag() {}
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    // Note: This does hoist, but through a special process in Annex B.
    name: "Block-level function declaration does not hoist",
    code: `
      {
        function bar() {}
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For statement does not hoist",
    code: `
      for (let i = 0; i < 2; i++) {
        let j = i;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For-in does not hoist",
    code: `
      for (let key in obj) {
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For-of does not hoist",
    code: `
      for (const value of list) {
        const count = 1;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "If statement branches do not contribute lexical vars",
    code: `
      if (flag) { let yes = 1; }
      else { const no = 2; }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "If statement branches do not contribute vars",
    code: `
      if (flag) var yes = 1;
      else var no = 2;
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Try-catch-finally do not contribute lexical declarations",
    code: `
      try {
        let a = 1;
        const b = 2;
        var c = 3;
      } catch (err) {
        let d = 1;
        const e = 2;
        var f = 3;
      } finally {
        let g = 1;
        const h = 2;
        var i = 3;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Class declaration is lexical",
    code: `
      class C {}
    `,
    expectedVarNames: ["C"],
    expectedNodes: [classDeclaration(identifier("C"), null, classBody([]), [])],
  },
  {
    name: "Destructuring object let declaration",
    code: `
      let { a, b: c, ...d } = obj;
    `,
    expectedVarNames: ["a", "c", "d"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("a"), identifier("a"), false, true),
            objectProperty(identifier("b"), identifier("c"), false, false),
            restElement(identifier("d")),
          ]),
          identifier("obj"),
        ),
      ]),
    ],
  },
  {
    name: "Destructuring object const declaration",
    code: `
      const { a, b: c } = obj;
    `,
    expectedVarNames: ["a", "c"],
    expectedNodes: [
      variableDeclaration("const", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("a"), identifier("a"), false, true),
            objectProperty(identifier("b"), identifier("c"), false, false),
          ]),
          identifier("obj"),
        ),
      ]),
    ],
  },
  {
    name: "Do-while body does not hoist",
    code: `
      do {
        let a = 1;
        const b = 2;
        var c = 3;
      } while (false);
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "While loop body does not hoist",
    code: `
      while (flag) {
        let a = 1;
        const b = 2;
        var c = 3;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Labeled block statement with let",
    code: `
      label: { let x = 1; }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Labeled statement with var",
    code: `
      label: var x = 1;
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Labeled block does not hoist",
    code: `
      label: {
        let a = 1;
        const b = 2;
        var c = 3;
      }
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Multiple declarators in one let",
    code: `
      let a, b = 1, c;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(identifier("a"), null),
        variableDeclarator(identifier("b"), numericLiteral(1)),
        variableDeclarator(identifier("c"), null),
      ]),
    ],
  },
  {
    name: "Multiple declarators in one const",
    code: `
      const a = 1, b = 2, c = 3;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("const", [
        variableDeclarator(identifier("a"), numericLiteral(1)),
        variableDeclarator(identifier("b"), numericLiteral(2)),
        variableDeclarator(identifier("c"), numericLiteral(3)),
      ]),
    ],
  },
  {
    name: "For-in with let without block does not hoist",
    code: `
      for (let i in obj);
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For-in with const without block does not hoist",
    code: `
      for (const i in obj);
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For-of with let without block does not hoist",
    code: `
      for (let i of list);
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "For-of with const without block does not hoist",
    code: `
      for (const i of list);
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Mixed patterns in one let declaration",
    code: `
      let { a } = obj, [b, c] = arr;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("a"), identifier("a"), false, true),
          ]),
          identifier("obj"),
        ),
        variableDeclarator(
          arrayPattern([identifier("b"), identifier("c")]),
          identifier("arr"),
        ),
      ]),
    ],
  },
  {
    name: "Mixed patterns in one const declaration",
    code: `
      const { a } = obj, [b, c] = arr;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("const", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("a"), identifier("a"), false, true),
          ]),
          identifier("obj"),
        ),
        variableDeclarator(
          arrayPattern([identifier("b"), identifier("c")]),
          identifier("arr"),
        ),
      ]),
    ],
  },
  {
    name: "Nested destructuring let",
    code: `
      let { a: { b } } = src;
    `,
    expectedVarNames: ["b"],
    expectedNodes: [
      variableDeclaration("let", [
        variableDeclarator(
          objectPattern([
            objectProperty(
              identifier("a"),
              objectPattern([
                objectProperty(identifier("b"), identifier("b"), false, true),
              ]),
              false,
              false,
            ),
          ]),
          identifier("src"),
        ),
      ]),
    ],
  },
  {
    name: "Nested destructuring const",
    code: `
      const { a: { b } } = src;
    `,
    expectedVarNames: ["b"],
    expectedNodes: [
      variableDeclaration("const", [
        variableDeclarator(
          objectPattern([
            objectProperty(
              identifier("a"),
              objectPattern([
                objectProperty(identifier("b"), identifier("b"), false, true),
              ]),
              false,
              false,
            ),
          ]),
          identifier("src"),
        ),
      ]),
    ],
  },
];

describe("Spec: Lexical Scope", () => {
  describe("lexicalDeclaredNames", () => {
    it.each(testCases)("$name", ({ code, expectedVarNames }) => {
      const ast = parseModule(code);
      const varNames = lexicallyDeclaredNames(ast);
      for (const varName of expectedVarNames) {
        expect(varNames).toContain(varName);
      }
      if (varNames.length !== expectedVarNames.length) {
        expect.fail(
          `Expected var names length ${expectedVarNames.length}, but got ${varNames.length}`,
        );
      }
    });
  });

  describe("lexicallyScopedDeclarations", () => {
    it.each(testCases)("$name", ({ code, expectedNodes }) => {
      const ast = parseModule(code);
      const declarations = lexicallyScopedDeclarations(ast);
      for (let i = 0; i < expectedNodes.length; i++) {
        const expected = expectedNodes[i];
        const declaration = declarations[i];
        expect(declaration).toMatchObject(expected);
      }
      if (declarations.length !== expectedNodes.length) {
        expect.fail(
          `Expected declarations length ${expectedNodes.length}, but got ${declarations.length}`,
        );
      }
    });
  });
});
