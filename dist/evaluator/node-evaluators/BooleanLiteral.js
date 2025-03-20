import { StaticJsBoolean, } from "../../environment/index.js";
export default function booleanLiteralNodeEvaluator(node, scope) {
    return StaticJsBoolean(node.value);
}
