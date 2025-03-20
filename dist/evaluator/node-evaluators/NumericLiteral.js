import { StaticJsNumber } from "../../environment/index.js";
export default function numericLiteralNodeEvaluator(node) {
    return StaticJsNumber(node.value);
}
