import { StaticJsString, } from "../../environment/index.js";
export default function stringLiteralNodeEvaluator(node, scope) {
    return StaticJsString(node.value);
}
