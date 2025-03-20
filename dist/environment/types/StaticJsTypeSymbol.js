const StaticJsTypeSymbol = Symbol.for("static-js::StaticJsType");
export default StaticJsTypeSymbol;
export function staticJsInstanceOf(value) {
    if (typeof value === "object" && value !== null) {
        return value[StaticJsTypeSymbol] ?? null;
    }
    return null;
}
