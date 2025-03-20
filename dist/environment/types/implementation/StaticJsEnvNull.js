import StaticJsTypeofSymbol from "../StaticJsTypeofSymbol.js";
import StaticJsTypeSymbol from "../StaticJsTypeSymbol.js";
class StaticJsEnvNull {
    get [StaticJsTypeSymbol]() {
        return "null";
    }
    get [StaticJsTypeofSymbol]() {
        // Javascript is truly a wonder to behold.
        return "object";
    }
    toString() {
        return "null";
    }
    toJs() {
        return null;
    }
}
StaticJsEnvNull.Instance = new StaticJsEnvNull();
export default StaticJsEnvNull;
