import { StaticJsNull, StaticJsValue } from "../../runtime/index.js";

export default function nullLiteralNodeEvaluator(): StaticJsValue {
  return StaticJsNull();
}
