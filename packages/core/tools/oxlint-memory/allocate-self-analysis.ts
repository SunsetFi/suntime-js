import ts from "typescript-api";

// .ts extension required: oxlint loads this via Node's native TS stripping, which (unlike tsc) does not remap .js -> .ts.
import type { Violation } from "./allocation-analysis.ts";

import { ALLOCATOR_NAMES, getDeclaredName, isAllocationClass } from "./allocation-types.ts";

export function analyzeAllocateSelf(program: ts.Program, sourceFile: ts.SourceFile): Violation[] {
  const checker = program.getTypeChecker();
  const violations: Violation[] = [];

  const visit = (node: ts.Node): void => {
    if (ts.isClassLike(node)) {
      checkClass(node, checker, sourceFile, violations);
    }
    if (ts.isNewExpression(node)) {
      checkNewExpression(node, checker, sourceFile, violations);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
  return violations;
}

function classInstanceType(
  node: ts.ClassLikeDeclaration,
  checker: ts.TypeChecker,
): ts.Type | undefined {
  const symbol = node.name
    ? checker.getSymbolAtLocation(node.name)
    : (node as ts.Node & { symbol?: ts.Symbol }).symbol;
  return symbol ? checker.getDeclaredTypeOfSymbol(symbol) : undefined;
}

function isAllocationClassNode(node: ts.ClassLikeDeclaration, checker: ts.TypeChecker): boolean {
  const type = classInstanceType(node, checker);
  return !!type && isAllocationClass(type, checker);
}

function checkClass(
  node: ts.ClassLikeDeclaration,
  checker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  if (!isAllocationClassNode(node, checker)) {
    return;
  }
  reportAllocateSelfInConstruction(node, sourceFile, out);
  reportPublicConstructor(node, sourceFile, out);
  reportMissingCreate(node, sourceFile, out);
}

function reportAllocateSelfInConstruction(
  node: ts.ClassLikeDeclaration,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  for (const member of node.members) {
    const region =
      ts.isConstructorDeclaration(member) && member.body
        ? member.body
        : ts.isPropertyDeclaration(member) && member.initializer
          ? member.initializer
          : undefined;
    if (!region) {
      continue;
    }
    const walk = (n: ts.Node): void => {
      // Do not descend into nested functions/classes — their `this` differs.
      if (ts.isFunctionLike(n) || ts.isClassLike(n)) {
        return;
      }
      if (
        ts.isCallExpression(n) &&
        ts.isPropertyAccessExpression(n.expression) &&
        n.expression.expression.kind === ts.SyntaxKind.ThisKeyword &&
        n.expression.name.text === "allocateSelf"
      ) {
        out.push({
          start: n.getStart(sourceFile),
          end: n.getEnd(),
          bindingName: "allocateSelf",
          message:
            "'allocateSelf' must not be called from a constructor or field " +
            "initializer — it runs before the most-derived constructor finishes. " +
            "Allocation happens once via 'allocated()' in the static 'create' method.",
        });
      }
      ts.forEachChild(n, walk);
    };
    // Walk `region` itself, not just its children: for field initializers,
    // `region` is the initializer expression itself (e.g. `this.allocateSelf()`
    // directly), so a children-only walk would skip it.
    walk(region);
  }
}

function reportPublicConstructor(
  node: ts.ClassLikeDeclaration,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  for (const member of node.members) {
    if (!ts.isConstructorDeclaration(member)) {
      continue;
    }
    const mods = ts.getModifiers(member) ?? [];
    const isProtected = mods.some((m) => m.kind === ts.SyntaxKind.ProtectedKeyword);
    const isPrivate = mods.some((m) => m.kind === ts.SyntaxKind.PrivateKeyword);
    if (!isProtected && !isPrivate) {
      const name = member.getFirstToken(sourceFile) ?? member;
      out.push({
        start: name.getStart(sourceFile),
        end: name.getEnd(),
        bindingName: "constructor",
        message:
          "Constructor of a StaticJsAllocation class must be 'protected' or " +
          "'private' so instances can only be built through the static 'create' factory.",
      });
    }
  }
}

function reportMissingCreate(
  node: ts.ClassLikeDeclaration,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  const isAbstract = (ts.canHaveModifiers(node) ? (ts.getModifiers(node) ?? []) : []).some(
    (m) => m.kind === ts.SyntaxKind.AbstractKeyword,
  );
  if (isAbstract || !ts.isClassDeclaration(node) || !node.name) {
    return;
  }
  const hasCreate = node.members.some(
    (m) =>
      ts.isMethodDeclaration(m) &&
      (ts.getModifiers(m) ?? []).some((mod) => mod.kind === ts.SyntaxKind.StaticKeyword) &&
      ts.isIdentifier(m.name) &&
      m.name.text === "create",
  );
  if (!hasCreate) {
    out.push({
      start: node.name.getStart(sourceFile),
      end: node.name.getEnd(),
      bindingName: node.name.text,
      message:
        `Non-abstract StaticJsAllocation class '${node.name.text}' must declare a ` +
        `static 'create' factory that returns 'allocated(new ${node.name.text}(...))'.`,
    });
  }
}

function checkNewExpression(
  node: ts.NewExpression,
  checker: ts.TypeChecker,
  sourceFile: ts.SourceFile,
  out: Violation[],
): void {
  const className = getDeclaredName(node.expression, checker);
  if (!className) {
    return; // opaque construction — skip
  }
  // Resolve the type from the constructed class's own symbol rather than
  // `checker.getTypeAtLocation(node)`: when the constructor is protected/private
  // (the very case invariant C exists to catch), a `new C()` outside the class
  // is itself a TS access error, and getTypeAtLocation on such a node returns
  // the checker's error type (no symbol, no members) instead of C's instance
  // type — which would silently defeat isAllocationClass below.
  const classSymbol = checker.getSymbolAtLocation(node.expression);
  const type = classSymbol
    ? checker.getDeclaredTypeOfSymbol(classSymbol)
    : checker.getTypeAtLocation(node);
  if (!isAllocationClass(type, checker)) {
    return;
  }

  const create = enclosingStaticCreate(node);
  const insideOwnCreate = !!create && enclosingClassName(create, sourceFile) === className;

  if (!insideOwnCreate) {
    out.push({
      start: node.getStart(sourceFile),
      end: node.getEnd(),
      bindingName: className,
      message:
        `'${className}' must be constructed via its static 'create' factory, ` + `not with 'new'.`,
    });
    return;
  }

  // Inside create: the `new` must be the direct argument of an `allocated(...)` call.
  const parent = node.parent;
  const wrapped =
    ts.isCallExpression(parent) &&
    ALLOCATOR_NAMES.has(getDeclaredName(parent.expression, checker) ?? "") &&
    parent.arguments.includes(node);
  if (!wrapped) {
    out.push({
      start: node.getStart(sourceFile),
      end: node.getEnd(),
      bindingName: className,
      message:
        `'new ${className}()' inside 'create' must be wrapped by 'allocated()' ` +
        `so 'allocateSelf' runs exactly once after construction.`,
    });
  }
}

function enclosingStaticCreate(node: ts.Node): ts.MethodDeclaration | undefined {
  let cur: ts.Node | undefined = node.parent;
  while (cur) {
    if (ts.isMethodDeclaration(cur)) {
      const isStatic = (ts.getModifiers(cur) ?? []).some(
        (m) => m.kind === ts.SyntaxKind.StaticKeyword,
      );
      const named = ts.isIdentifier(cur.name) && cur.name.text === "create";
      return isStatic && named ? cur : undefined;
    }
    if (ts.isFunctionLike(cur) && !ts.isArrowFunction(cur) && !ts.isFunctionExpression(cur)) {
      return undefined;
    }
    cur = cur.parent;
  }
  return undefined;
}

function enclosingClassName(
  method: ts.MethodDeclaration,
  sourceFile: ts.SourceFile,
): string | undefined {
  const cls = method.parent;
  return ts.isClassLike(cls) && cls.name ? cls.name.getText(sourceFile) : undefined;
}
