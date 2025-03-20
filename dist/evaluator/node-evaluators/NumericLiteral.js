import { StaticJsNumber, } from "../../environment/index.js";
export default function numericLiteralNodeEvaluator(node, scope) {
    return StaticJsNumber(node.value);
}
