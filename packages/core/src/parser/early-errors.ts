import { VisitNodeObject } from "@babel/traverse";
import {
  Block,
  Class,
  Function,
  File,
  Node,
  isFunction,
  WhileStatement,
  DoWhileStatement,
  ForOfStatement,
  ForInStatement,
  ForStatement,
  SwitchStatement,
} from "@babel/types";

import boundNames from "../evaluator/instantiation/algorithms/bound-names.js";

import { parseError } from "./parse-error.js";
import { traverse } from "./traverse.js";

/*
Note: This is incredibly seat-of-my-pants to catch up on failing tests after being forced to make @babel/parser continue on errors.
*/

type Scope =
  | Class
  | Function
  | Block
  | WhileStatement
  | DoWhileStatement
  | ForStatement
  | ForInStatement
  | ForOfStatement
  | SwitchStatement;

const forbiddenStrictIdentifiers = new Set([
  "eval",
  "arguments",
  "static",
  "implements",
  "interface",
  "package",
  "private",
  "protected",
  "public",
  "yield",
]);

const breakableNodeTypes = new Set([
  "WhileStatement",
  "DoWhileStatement",
  "ForStatement",
  "ForInStatement",
  "ForOfStatement",
  "SwitchStatement",
  "BlockStatement",
]);

const continuableNodeTypes = new Set([
  "WhileStatement",
  "DoWhileStatement",
  "ForStatement",
  "ForInStatement",
  "ForOfStatement",
]);

export function checkEarlyErrors(
  sourceText: string,
  file: File,
  strict: boolean,
  evalMode: "direct" | "indirect" | false,
): void {
  const scopes: Scope[] = [];
  const stricts: boolean[] = [strict];
  function enterScope(scope: Scope) {
    const currentStrict = stricts.at(-1)!;
    stricts.push(currentStrict || isNodeStrict(scope));
    scopes.push(scope);
  }

  function exitScope() {
    scopes.pop();
    stricts.pop();
  }

  function isStrict() {
    return stricts.at(-1) ?? false;
  }

  function isInFunctionBody() {
    if (scopes.length === 0) {
      return false;
    }

    let startAt = scopes.length - 1;

    if (isFunction(scopes.at(-1))) {
      // Has not yet hit the Block body.
      startAt--;
    }

    for (let i = startAt; i >= 0; i--) {
      const scope = scopes[i];
      if (isFunction(scope)) {
        return true;
      }
    }
    return false;
  }

  function isInBreakable() {
    for (let i = scopes.length - 1; i >= 0; i--) {
      const scope = scopes[i];
      if (breakableNodeTypes.has(scope.type)) {
        return true;
      }
    }
    return false;
  }

  function isInContinuable() {
    for (let i = scopes.length - 1; i >= 0; i--) {
      const scope = scopes[i];
      if (continuableNodeTypes.has(scope.type)) {
        return true;
      }
    }
    return false;
  }

  // TODO: Cache
  function hasIdentifier(target: string): boolean {
    for (const scope of scopes) {
      for (const identifier of nodeDeclaredIdentifiers(scope)) {
        if (identifier === target) {
          return true;
        }
      }
    }
    return false;
  }

  // TODO: Cache
  function hasPrivateName(name: string): boolean {
    for (const scope of scopes) {
      for (const privateName of nodePrivateNames(scope)) {
        if (privateName === name) {
          return true;
        }
      }
    }
    return false;
  }

  function checkIdentifier(name: string, node: Node, description: string = "Identifier") {
    if (forbiddenStrictIdentifiers.has(name) && isStrict()) {
      throw parseError(`${description} ${name} is not allowed in strict mode`, node);
    }
  }

  function checkBindings(node: Node, description: string = "Binding") {
    const bn = boundNames(node);
    for (const name of bn) {
      checkIdentifier(name, node, description);
    }
  }

  function checkFunctionParams(node: Function) {
    const { params } = node;

    const bn = params.flatMap((param) => boundNames(param));
    const set = new Set(bn);
    if (set.size !== bn.length) {
      throw parseError("Duplicate parameter names are not allowed in strict mode", node);
    }

    for (const name of bn) {
      checkIdentifier(name, node, "Parameter");
    }
  }

  const visitScope: VisitNodeObject<{}, Scope> = {
    enter({ node }) {
      enterScope(node);
    },
    exit() {
      exitScope();
    },
  };

  traverse(file, {
    Class: visitScope,
    // Gets called after explicit checks.
    Function: {
      enter({ node }) {
        enterScope(node);

        // Note: We must do this here instead of in explicit FunctionExpression() and friends, as
        // they would run before Function does and not have the enterScope.

        // HACK: boundNames returns the children of a function expression, not the name of the expression, so we have to special case it
        // FIX THIS
        if (node.type === "FunctionExpression" && node.id) {
          checkIdentifier(node.id.name, node, "Function name");
        } else if (node.type === "FunctionDeclaration" && node.id) {
          checkIdentifier(node.id.name, node, "Function name");
        }
        checkFunctionParams(node);
      },
      exit() {
        exitScope();
      },
    },
    Block: visitScope,
    WhileStatement: visitScope,
    DoWhileStatement: visitScope,
    ForStatement: visitScope,
    ForInStatement: visitScope,
    ForOfStatement: visitScope,
    SwitchStatement: visitScope,
    WithStatement({ node }) {
      if (isStrict()) {
        throw parseError("Strict mode code may not include a with statement", node);
      }
    },
    AssignmentExpression({ node }) {
      const { left } = node;
      const bn = boundNames(left);
      for (const name of bn) {
        if (forbiddenStrictIdentifiers.has(name) && isStrict() && !hasIdentifier(name)) {
          throw parseError(`Assignment to ${name} is not allowed in strict mode`, node);
        }
      }
    },
    VariableDeclaration({ node }) {
      checkBindings(node);
    },
    CatchClause({ node }) {
      const { param } = node;
      if (!param) {
        return;
      }
      const bn = boundNames(param);
      for (const name of bn) {
        if (forbiddenStrictIdentifiers.has(name) && isStrict()) {
          throw parseError(`Binding ${name} is not allowed in strict mode`, node);
        }
      }
    },
    PrivateName({ node, parent }) {
      if (parent.type === "ClassPrivateMethod" || parent.type === "ClassPrivateProperty") {
        return;
      }
      if (!hasPrivateName(node.id.name)) {
        throw parseError(`Private name ${node.id.name} is not declared`, node);
      }
    },
    ImportDeclaration({ node }) {
      if (evalMode) {
        throw parseError("Import declarations are not allowed in eval code", node);
      }
    },
    ExportDeclaration({ node }) {
      if (evalMode) {
        throw parseError("Export declarations are not allowed in eval code", node);
      }
    },
    MetaProperty({ node }) {
      if (evalMode && node.meta.name === "import") {
        throw parseError("Meta properties are not allowed in eval code", node);
      }
    },
    ReturnStatement({ node }) {
      if (!isInFunctionBody()) {
        throw parseError("Return statements are not allowed outside of functions", node);
      }
    },
    BreakStatement({ node }) {
      if (!isInBreakable()) {
        throw parseError(
          "Break statements are not allowed outside of loops or switch statements",
          node,
        );
      }
    },
    ContinueStatement({ node }) {
      if (!isInContinuable()) {
        throw parseError("Continue statements are not allowed outside of loops", node);
      }
    },
    NumericLiteral({ node }) {
      const { start, end } = node;
      if (start == null || end == null) {
        return;
      }

      const raw = sourceText.slice(start, end);
      if (raw.startsWith("0") && isDigit(raw[1]) && isStrict()) {
        throw parseError("Hexadecimal literals are not allowed in strict mode", node);
      }
    },
  });
}

function isNodeStrict(node: Node): boolean {
  switch (node.type) {
    case "BlockStatement":
    case "Program":
      if (node.directives.some((d) => d.value.value === "use strict")) {
        return true;
      }
      return false;
    // Functions are strict if their body is strict.
    // This affects function parameters, which are outside the body.
    case "FunctionDeclaration":
    case "FunctionExpression":
    case "ClassMethod":
    case "ObjectMethod":
      if (!Array.isArray(node.body) && node.body.type === "BlockStatement") {
        return isNodeStrict(node.body);
      }
      break;
  }
  return false;
}

function* nodeDeclaredIdentifiers(node: Node): Iterable<string> {
  switch (node.type) {
    case "BlockStatement":
    case "Program":
      for (const stmt of node.body) {
        yield* nodeDeclaredIdentifiersChildren(stmt);
      }
      break;
  }

  yield* nodeDeclaredIdentifiersChildren(node);
}

function* nodeDeclaredIdentifiersChildren(node: Node): Iterable<string> {
  switch (node.type) {
    case "FunctionDeclaration":
      if (node.id) {
        yield node.id.name;
      }
      break;
    case "VariableDeclaration":
      for (const decl of node.declarations) {
        if (decl.id.type === "Identifier") {
          yield decl.id.name;
        }
      }
      break;
    case "ClassDeclaration":
      if (node.id) {
        yield node.id.name;
      }
      break;
  }
}

function* nodePrivateNames(node: Node): Iterable<string> {
  switch (node.type) {
    case "ClassDeclaration":
    case "ClassExpression":
      for (const member of node.body.body) {
        if (member.type === "ClassPrivateProperty" || member.type === "ClassPrivateMethod") {
          yield member.key.id.name;
        }
      }
      break;
  }
}

function isDigit(char: string): boolean {
  return char >= "0" && char <= "9";
}
