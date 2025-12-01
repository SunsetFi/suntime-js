import { describe, it, expect } from "vitest";

import {
  type Node,
  arrayPattern,
  blockStatement,
  functionDeclaration,
  identifier,
  numericLiteral,
  objectPattern,
  objectProperty as babelObjectProperty,
  restElement,
  variableDeclaration,
  variableDeclarator,
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

import parseScript from "../../../parser/parse-script.js";

import varDeclaredNames from "./var-declared-names.js";
import varScopedDeclarations from "./var-scoped-declarations.js";

interface TestCase {
  name: string;
  code: string;
  expectedVarNames: string[];
  expectedNodes: Node[];
}

const testCases: TestCase[] = [
  {
    name: "Top-level var declaration",
    code: `var x = 10;`,
    expectedVarNames: ["x"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("x"), numericLiteral(10)),
      ]),
    ],
  },
  {
    name: "Block-scoped var declaration",
    code: `
      {
        var y = 20;
      }
    `,
    expectedVarNames: ["y"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("y"), numericLiteral(20)),
      ]),
    ],
  },
  {
    name: "Nested block-scoped var declaration",
    code: `
      {
        {
          var y = 20;
        }
      }
    `,
    expectedVarNames: ["y"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("y"), numericLiteral(20)),
      ]),
    ],
  },
  {
    name: "Switch with var",
    code: `
      switch (z) {
        case 1:
          var a = 1;
          break;
        case 2:
          var b = 2;
          break;
      }
      `,
    expectedVarNames: ["a", "b"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("a"), numericLiteral(1)),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("b"), numericLiteral(2)),
      ]),
    ],
  },
  {
    name: "No lexical let",
    code: `
      let a = 1;
      `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "No lexical const",
    code: `
      const b = 2;
      `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Function declaration hoists name",
    code: `
      function foo() {}
    `,
    expectedVarNames: ["foo"],
    expectedNodes: [
      functionDeclaration(identifier("foo"), [], blockStatement([])),
    ],
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
    name: "Function inside function",
    code: `
      function outer() {
        function inner() {}
      }
    `,
    expectedVarNames: ["outer"],
    expectedNodes: [
      functionDeclaration(
        identifier("outer"),
        [],
        blockStatement([
          functionDeclaration(identifier("inner"), [], blockStatement([])),
        ]),
      ),
    ],
  },
  {
    name: "For statement collects header and body vars",
    code: `
      for (var i = 0; i < 2; i++) {
        var j = i;
      }
    `,
    expectedVarNames: ["i", "j"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("i"), numericLiteral(0)),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("j"), identifier("i")),
      ]),
    ],
  },
  {
    name: "For statement ignores non-var header",
    code: `
      for (let i = 0; i < 2; i++) {
        var j = i;
      }
    `,
    expectedVarNames: ["j"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("j"), identifier("i")),
      ]),
    ],
  },
  {
    name: "For statement ignores non-var body",
    code: `
      for (var i = 0; i < 2; i++) {
        let j = i;
      }
    `,
    expectedVarNames: ["i"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("i"), numericLiteral(0)),
      ]),
    ],
  },
  {
    name: "For-in with var binding",
    code: `
      for (var key in obj) {
      }
    `,
    expectedVarNames: ["key"],
    expectedNodes: [
      variableDeclaration("var", [variableDeclarator(identifier("key"), null)]),
    ],
  },
  {
    name: "For-of with var binding and body var",
    code: `
      for (var value of list) {
        var count = 1;
      }
    `,
    expectedVarNames: ["value", "count"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("value"), null),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("count"), numericLiteral(1)),
      ]),
    ],
  },
  {
    name: "If statement branches contribute vars",
    code: `
      if (flag) var yes = 1;
      else var no = 2;
    `,
    expectedVarNames: ["yes", "no"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("yes"), numericLiteral(1)),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("no"), numericLiteral(2)),
      ]),
    ],
  },
  {
    name: "Try-catch-finally aggregates var declarations",
    code: `
      try {
        var tried = 1;
      } catch (e) {
        var caught = 2;
      } finally {
        var cleaned = 3;
      }
    `,
    expectedVarNames: ["tried", "caught", "cleaned"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("tried"), numericLiteral(1)),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("caught"), numericLiteral(2)),
      ]),
      variableDeclaration("var", [
        variableDeclarator(identifier("cleaned"), numericLiteral(3)),
      ]),
    ],
  },
  {
    name: "Class declaration is lexical, not var-scoped",
    code: `
      class C {}
    `,
    expectedVarNames: [],
    expectedNodes: [],
  },
  {
    name: "Destructuring object var declaration",
    code: `
      var { a, b: c } = obj;
    `,
    expectedVarNames: ["a", "c"],
    expectedNodes: [
      variableDeclaration("var", [
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
    name: "For-in with destructuring pattern",
    code: `
      for (var { key } in obj) {
      }
    `,
    expectedVarNames: ["key"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("key"), identifier("key"), false, true),
          ]),
          null,
        ),
      ]),
    ],
  },
  {
    name: "For-of with array destructuring and rest",
    code: `
      for (var [first, , ...rest] of list) {
      }
    `,
    expectedVarNames: ["first", "rest"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(
          arrayPattern([
            identifier("first"),
            null,
            restElement(identifier("rest")),
          ]),
          null,
        ),
      ]),
    ],
  },
  {
    name: "For statement with destructuring in header and body",
    code: `
      for (var { i } = start; ; ) {
        var [x, y] = coords;
      }
    `,
    expectedVarNames: ["i", "x", "y"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(
          objectPattern([
            objectProperty(identifier("i"), identifier("i"), false, true),
          ]),
          identifier("start"),
        ),
      ]),
      variableDeclaration("var", [
        variableDeclarator(
          arrayPattern([identifier("x"), identifier("y")]),
          identifier("coords"),
        ),
      ]),
    ],
  },
  {
    name: "Do-while body var",
    code: `
      do {
        var d = 1;
      } while (false);
    `,
    expectedVarNames: ["d"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("d"), numericLiteral(1)),
      ]),
    ],
  },
  {
    name: "While loop body var",
    code: `
      while (flag) {
        var w = 2;
      }
    `,
    expectedVarNames: ["w"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("w"), numericLiteral(2)),
      ]),
    ],
  },
  {
    name: "Labeled statement with var",
    code: `
      label: var x = 1;
    `,
    expectedVarNames: ["x"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("x"), numericLiteral(1)),
      ]),
    ],
  },
  {
    name: "Labeled block with var inside",
    code: `
      label: {
        var y = 2;
      }
    `,
    expectedVarNames: ["y"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("y"), numericLiteral(2)),
      ]),
    ],
  },
  {
    name: "Multiple declarators in one var",
    code: `
      var a, b = 1, c;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("a"), null),
        variableDeclarator(identifier("b"), numericLiteral(1)),
        variableDeclarator(identifier("c"), null),
      ]),
    ],
  },
  {
    name: "Generator function declaration",
    code: `
      function* gen() {}
    `,
    expectedVarNames: ["gen"],
    expectedNodes: [
      functionDeclaration(identifier("gen"), [], blockStatement([]), true),
    ],
  },
  {
    name: "Async function declaration",
    code: `
      async function af() {}
    `,
    expectedVarNames: ["af"],
    expectedNodes: [
      functionDeclaration(
        identifier("af"),
        [],
        blockStatement([]),
        false,
        true,
      ),
    ],
  },
  {
    name: "Async generator function declaration",
    code: `
      async function* ag() {}
    `,
    expectedVarNames: ["ag"],
    expectedNodes: [
      functionDeclaration(identifier("ag"), [], blockStatement([]), true, true),
    ],
  },
  {
    name: "For-in without block",
    code: `
      for (var i in obj);
    `,
    expectedVarNames: ["i"],
    expectedNodes: [
      variableDeclaration("var", [variableDeclarator(identifier("i"), null)]),
    ],
  },
  {
    name: "For-of without block",
    code: `
      for (var i of list);
    `,
    expectedVarNames: ["i"],
    expectedNodes: [
      variableDeclaration("var", [variableDeclarator(identifier("i"), null)]),
    ],
  },
  {
    name: "Mixed patterns in one var declaration",
    code: `
      var { a } = obj, [b, c] = arr;
    `,
    expectedVarNames: ["a", "b", "c"],
    expectedNodes: [
      variableDeclaration("var", [
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
    name: "With statement body var",
    code: `
      with (obj) {
        var v = 1;
      }
    `,
    expectedVarNames: ["v"],
    expectedNodes: [
      variableDeclaration("var", [
        variableDeclarator(identifier("v"), numericLiteral(1)),
      ]),
    ],
  },
  {
    name: "Nested destructuring var",
    code: `
      var { a: { b } } = src;
    `,
    expectedVarNames: ["b"],
    expectedNodes: [
      variableDeclaration("var", [
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

describe("Spec: Var Scope", () => {
  describe("varDeclaredNames", () => {
    it.each(testCases)("$name", ({ code, expectedVarNames }) => {
      const ast = parseScript(code);
      const varNames = varDeclaredNames(ast);
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

  describe("varScopedDeclarations", () => {
    it.each(testCases)("$name", ({ code, expectedNodes }) => {
      const ast = parseScript(code);
      const declarations = varScopedDeclarations(ast);
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
