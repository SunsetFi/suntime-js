import ts from "typescript";

export const LAUNDERER_NAMES: ReadonlySet<string> = new Set([
  "containerMarkable",
  "compoundMarkable",
]);

const ARRAY_LIKE = new Set([
  "Array",
  "ReadonlyArray",
  "Set",
  "ReadonlySet",
  "Iterable",
  "IterableIterator",
  "Iterator",
  "Generator",
]);
const MAP_LIKE = new Set(["Map", "ReadonlyMap", "WeakMap"]);

export function resolveSymbol(symbol: ts.Symbol, checker: ts.TypeChecker): ts.Symbol {
  return symbol.flags & ts.SymbolFlags.Alias ? checker.getAliasedSymbol(symbol) : symbol;
}

export function getDeclaredName(node: ts.Node, checker: ts.TypeChecker): string | undefined {
  const symbol = checker.getSymbolAtLocation(node);
  return symbol ? resolveSymbol(symbol, checker).getName() : undefined;
}

function unionConstituents(type: ts.Type): ts.Type[] {
  return type.isUnion() ? type.types : [type];
}

function hasMarkMethod(type: ts.Type, checker: ts.TypeChecker): boolean {
  const prop = checker.getPropertyOfType(type, "mark");
  if (!prop) {
    return false;
  }
  const decl = prop.valueDeclaration ?? prop.declarations?.[0];
  if (!decl) {
    return false;
  }
  const propType = checker.getTypeOfSymbolAtLocation(prop, decl);
  const signatures = propType.getCallSignatures();
  if (signatures.length === 0) {
    return false;
  }
  // Tighten: every signature's first parameter must be a Set<T> where T has a `mark` member.
  return signatures.every((sig) => {
    const param = sig.getParameters()[0];
    if (!param) {
      return false;
    }
    const pDecl = param.valueDeclaration ?? param.declarations?.[0];
    if (!pDecl) {
      return false;
    }
    const pType = checker.getTypeOfSymbolAtLocation(param, pDecl);
    const outerName =
      pType.getSymbol()?.getName() ?? (pType as ts.TypeReference).target?.symbol?.getName();
    if (outerName !== "Set") {
      return false;
    }
    // Require the Set's element type to itself carry a `mark` member (one-level check, no recursion).
    const typeArgs = checker.getTypeArguments(pType as ts.TypeReference);
    if (!typeArgs || typeArgs.length === 0) {
      return false;
    }
    const elementType = typeArgs[0];
    return !!checker.getPropertyOfType(elementType, "mark");
  });
}

export function isMarkableType(type: ts.Type, checker: ts.TypeChecker): boolean {
  const parts = unionConstituents(type);
  return parts.length > 0 && parts.every((t) => hasMarkMethod(t, checker));
}

function containerElementTypes(type: ts.Type, checker: ts.TypeChecker): ts.Type[] {
  const ref = type as ts.TypeReference;
  const name = ref.target?.symbol?.getName() ?? type.getSymbol()?.getName();
  if (!name) {
    return [];
  }
  const args = checker.getTypeArguments(ref) ?? [];
  if (ARRAY_LIKE.has(name)) {
    return args.length >= 1 ? [args[0]] : [];
  }
  if (MAP_LIKE.has(name)) {
    return args.length >= 2 ? [args[1]] : [];
  }
  return [];
}

export function isMarkableContainer(type: ts.Type, checker: ts.TypeChecker): boolean {
  return unionConstituents(type).some((t) =>
    containerElementTypes(t, checker).some((el) => isMarkableType(el, checker)),
  );
}

export const ALLOCATOR_NAMES: ReadonlySet<string> = new Set(["allocated"]);

/** True when `type` (an instance type) structurally implements StaticJsAllocation. */
export function isAllocationClass(type: ts.Type, checker: ts.TypeChecker): boolean {
  return (
    !!checker.getPropertyOfType(type, "allocateSelf") && !!checker.getPropertyOfType(type, "mark")
  );
}
