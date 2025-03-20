import StaticJsUndefined from "../../environment/types/factories/StaticJsUndefined.js";
export default function identifierNodeEvaluator(node, scope) {
    if (!scope.hasProperty(node.name)) {
        // undefined is actually an identifier because of course it is.
        // Assume the default value, but let people override it I guess...
        if (node.name === "undefined") {
            return StaticJsUndefined();
        }
        throw new Error(`Identifier ${node.name} is not defined`);
    }
    return scope.getProperty(node.name);
}
