const StaticJsTypeSymbol: unique symbol = Symbol.for("static-js::StaticJsType");
export default StaticJsTypeSymbol;

export function staticJsInstanceOf(value: any): string | null {
  if (typeof value === "object" && value !== null) {
    return value[StaticJsTypeSymbol] ?? null;
  }

  return null;
}
