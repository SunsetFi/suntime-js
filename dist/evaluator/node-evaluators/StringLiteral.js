import { StaticJsString } from "../../environment/index.js";
export default function stringLiteralNodeEvaluator(node) {
    return StaticJsString(node.value);
}
