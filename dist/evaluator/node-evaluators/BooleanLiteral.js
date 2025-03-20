import { StaticJsBoolean } from "../../environment/index.js";
export default function booleanLiteralNodeEvaluator(node) {
    return StaticJsBoolean(node.value);
}
