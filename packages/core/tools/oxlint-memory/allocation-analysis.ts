import ts from "typescript-api";

// .ts extension required: oxlint loads this via Node's native TS stripping, which (unlike tsc) does not remap .js -> .ts.
import {
  LAUNDERER_NAMES,
  getDeclaredName,
  isMarkableContainer,
  isMarkableType,
  resolveSymbol,
} from "./allocation-types.ts";

export interface Violation {
  start: number;
  end: number;
  bindingName: string;
  message: string;
}

const TARGET_CLASS = "StaticJsNativeFunctionImpl";

export function analyzeSourceFile(program: ts.Program, sourceFile: ts.SourceFile): Violation[] {
  const checker = program.getTypeChecker();
  const violations: Violation[] = [];

  const visit = (node: ts.Node): void => {
    if (ts.isNewExpression(node) && isTargetConstruction(node, checker)) {
      analyzeConstruction(node, checker, sourceFile, violations);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);

  return violations;
}

function isTargetConstruction(node: ts.NewExpression, checker: ts.TypeChecker): boolean {
  return getDeclaredName(node.expression, checker) === TARGET_CLASS;
}

function isFunctionLike(
  node: ts.Node | undefined,
): node is ts.FunctionExpression | ts.ArrowFunction {
  return !!node && (ts.isFunctionExpression(node) || ts.isArrowFunction(node));
}

function getOptionsObject(node: ts.NewExpression): ts.ObjectLiteralExpression | undefined {
  const arg = node.arguments?.[3];
  return arg && ts.isObjectLiteralExpression(arg) ? arg : undefined;
}

function getProperty(
  obj: ts.ObjectLiteralExpression | undefined,
  name: string,
): ts.Expression | undefined {
  const prop = obj?.properties.find(
    (p): p is ts.PropertyAssignment =>
      ts.isPropertyAssignment(p) && ts.isIdentifier(p.name) && p.name.text === name,
  );
  return prop?.initializer;
}

function analyzeConstruction(
  node: ts.NewExpression,
  checker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  const options = getOptionsObject(node);

  // --- captures list ---
  const capturesInit = getProperty(options, "captures");
  if (capturesInit && !ts.isArrayLiteralExpression(capturesInit)) {
    return; // opaque: skip the whole construction
  }
  const covered = buildCoveredSet(capturesInit, checker);

  // --- callbacks ---
  const callbacks: (ts.FunctionExpression | ts.ArrowFunction)[] = [];
  const call = node.arguments?.[2];
  if (isFunctionLike(call)) {
    callbacks.push(call);
  }
  const construct = getProperty(options, "construct");
  if (isFunctionLike(construct)) {
    callbacks.push(construct);
  }

  for (const cb of callbacks) {
    collectCaptures(cb, checker, sourceFile, covered, out);
  }
}

function buildCoveredSet(
  markInit: ts.Expression | undefined,
  checker: ts.TypeChecker,
): Set<ts.Symbol> {
  const covered = new Set<ts.Symbol>();
  if (!markInit || !ts.isArrayLiteralExpression(markInit)) {
    return covered;
  }
  for (const el of markInit.elements) {
    addElementCoverage(el, checker, covered);
  }
  return covered;
}

function addElementCoverage(
  el: ts.Expression,
  checker: ts.TypeChecker,
  covered: Set<ts.Symbol>,
): void {
  // identifier element → cover its own binding, and if it is a const initialized
  // from a launderer call, cover that call's arguments.
  if (ts.isIdentifier(el)) {
    const sym = checker.getSymbolAtLocation(el);
    if (sym) {
      const resolved = resolveSymbol(sym, checker);
      covered.add(resolved);
      const init = getVariableInitializer(resolved);
      if (init && isLaundererCall(init, checker)) {
        coverLaundererArgs(init, checker, covered);
      }
    }
    return;
  }
  // direct launderer call element → cover its arguments.
  if (ts.isCallExpression(el) && isLaundererCall(el, checker)) {
    coverLaundererArgs(el, checker, covered);
  }
}

function getVariableInitializer(symbol: ts.Symbol): ts.Expression | undefined {
  const decl = symbol.valueDeclaration ?? symbol.declarations?.[0];
  if (decl && ts.isVariableDeclaration(decl) && decl.initializer) {
    return decl.initializer;
  }
  return undefined;
}

function isLaundererCall(node: ts.Expression, checker: ts.TypeChecker): node is ts.CallExpression {
  return (
    ts.isCallExpression(node) &&
    LAUNDERER_NAMES.has(getDeclaredName(node.expression, checker) ?? "")
  );
}

function coverLaundererArgs(
  call: ts.CallExpression,
  checker: ts.TypeChecker,
  covered: Set<ts.Symbol>,
): void {
  for (const arg of call.arguments) {
    for (const sym of bindingSymbolsOf(arg, checker)) {
      covered.add(sym);
    }
  }
}

/** Unwrap identifier / ...spread / array literal / x.values()|keys()|entries() / launderer call into binding symbols. */
function bindingSymbolsOf(expr: ts.Expression, checker: ts.TypeChecker): ts.Symbol[] {
  if (ts.isIdentifier(expr)) {
    const sym = checker.getSymbolAtLocation(expr);
    return sym ? [resolveSymbol(sym, checker)] : [];
  }
  if (ts.isSpreadElement(expr)) {
    return bindingSymbolsOf(expr.expression, checker);
  }
  if (ts.isArrayLiteralExpression(expr)) {
    return expr.elements.flatMap((e) => bindingSymbolsOf(e, checker));
  }
  if (ts.isCallExpression(expr)) {
    // x.values() / x.keys() / x.entries() — unwrap the object
    if (
      ts.isPropertyAccessExpression(expr.expression) &&
      ["values", "keys", "entries"].includes(expr.expression.name.text)
    ) {
      return bindingSymbolsOf(expr.expression.expression, checker);
    }
    // nested launderer call — recurse into its arguments
    if (isLaundererCall(expr, checker)) {
      return expr.arguments.flatMap((a) => bindingSymbolsOf(a, checker));
    }
  }
  return [];
}

function collectCaptures(
  cb: ts.FunctionExpression | ts.ArrowFunction,
  checker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  covered: Set<ts.Symbol>,
  out: Violation[],
): void {
  const seen = new Set<ts.Symbol>();
  const cbStart = cb.getStart(sourceFile);
  const cbEnd = cb.getEnd();

  const walk = (node: ts.Node): void => {
    // A nested StaticJsNativeFunctionImpl construction is its own analysis unit
    // (it has its own `mark`); the top-level visit handles it. Do not let its
    // captures leak into this (outer) callback's analysis.
    if (node !== cb && ts.isNewExpression(node) && isTargetConstruction(node, checker)) {
      return;
    }
    if (ts.isIdentifier(node) && isValueReference(node)) {
      const sym = checker.getSymbolAtLocation(node);
      if (sym) {
        const resolved = resolveSymbol(sym, checker);
        if (!seen.has(resolved) && isExternalBinding(resolved, cbStart, cbEnd, sourceFile)) {
          const type = checker.getTypeAtLocation(node);
          if (isMarkableType(type, checker) || isMarkableContainer(type, checker)) {
            seen.add(resolved);
            if (!covered.has(resolved)) {
              out.push({
                start: node.getStart(sourceFile),
                end: node.getEnd(),
                bindingName: resolved.getName(),
                message:
                  `'${resolved.getName()}' is a StaticJsAllocation captured by a ` +
                  `StaticJsNativeFunctionImpl callback but is not reachable through the ` +
                  `constructor's 'mark' option. Add it to 'mark' (directly or via ` +
                  `containerMarkable/compoundMarkable).`,
              });
            }
          }
        }
      }
    }
    ts.forEachChild(node, walk);
  };
  // Walk only the callback body (params are internal and excluded by isExternalBinding).
  ts.forEachChild(cb, walk);
}

function isValueReference(id: ts.Identifier): boolean {
  const parent = id.parent;
  // property name in `a.b`
  if (ts.isPropertyAccessExpression(parent) && parent.name === id) {
    return false;
  }
  // property key in `{ b: ... }`
  if (ts.isPropertyAssignment(parent) && parent.name === id) {
    return false;
  }
  // shorthand/binding names, declaration names
  if (
    ts.isBindingElement(parent) ||
    ts.isParameter(parent) ||
    ts.isVariableDeclaration(parent) ||
    ts.isPropertySignature(parent)
  ) {
    return false;
  }
  // type annotation position (e.g. `foo: StaticJsValue` or `...args: StaticJsValue[]`)
  if (ts.isTypeNode(parent) || ts.isTypeReferenceNode(parent)) {
    return false;
  }
  // any identifier that is a direct child of a type-only parent node
  if (isInsideTypePosition(id)) {
    return false;
  }
  return true;
}

/** Walk up to detect whether `id` lives purely inside a type annotation. */
function isInsideTypePosition(node: ts.Node): boolean {
  let current: ts.Node = node.parent;
  while (current) {
    if (ts.isTypeNode(current)) {
      return true;
    }
    // Stop at expression boundaries — don't go past statements or declarations
    if (ts.isStatement(current) || ts.isFunctionLike(current)) {
      return false;
    }
    current = current.parent;
  }
  return false;
}

function isExternalBinding(
  symbol: ts.Symbol,
  cbStart: number,
  cbEnd: number,
  sourceFile: ts.SourceFile,
): boolean {
  const decl = symbol.valueDeclaration ?? symbol.declarations?.[0];
  if (!decl) {
    return false; // ambient/global with no source declaration
  }
  if (decl.getSourceFile() !== sourceFile) {
    return true; // imported / other file
  }
  const declStart = decl.getStart(sourceFile);
  // Declared inside the callback → internal (param/local).
  return declStart < cbStart || declStart >= cbEnd;
}
