import { StaticJsNull, StaticJsValue } from "../../environment/index.js";

export default function nullLiteralNodeEvaluator(): StaticJsValue {
  return StaticJsNull();
}
