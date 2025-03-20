import { StaticJsNull, } from "../../environment/index.js";
export default function nullLiteralNodeEvaluator(node, scope) {
    return StaticJsNull();
}
