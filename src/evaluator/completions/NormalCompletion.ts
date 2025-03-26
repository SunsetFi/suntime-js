import { StaticJsValue, StaticJsUndefined } from "../../runtime/index.js";
import CompletionBase from "./CompletionBase.js";

interface NormalCompletion extends CompletionBase {
  type: "normal";
  value: StaticJsValue | null;
}
function NormalCompletion(
  value: StaticJsValue = StaticJsUndefined(),
): NormalCompletion {
  return {
    type: "normal",
    value,
  };
}
export default NormalCompletion;
