import { StaticJsPrimitive } from "./interfaces/StaticJsPrimitive.js";

const StaticJsTypeSymbol: unique symbol = Symbol.for("static-js::StaticJsType");
export default StaticJsTypeSymbol;

export function staticJsInstanceOf(value: unknown): string | null {
  if (typeof value === "object" && value !== null) {
    return (value as StaticJsPrimitive)[StaticJsTypeSymbol] ?? null;
  }

  return null;
}
