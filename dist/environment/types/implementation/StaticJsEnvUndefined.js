import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
class StaticJsEnvUndefined {
    get [StaticJsTypeSymbol]() {
        return "undefined";
    }
    get [StaticJsTypeofSymbol]() {
        return "undefined";
    }
    toString() {
        return "undefined";
    }
    toJs() {
        return undefined;
    }
}
StaticJsEnvUndefined.Instance = new StaticJsEnvUndefined();
export default StaticJsEnvUndefined;
