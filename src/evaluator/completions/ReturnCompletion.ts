import { StaticJsValue } from "../../runtime/index.js";
import CompletionBase from "./CompletionBase.js";

interface ReturnCompletion extends CompletionBase {
  type: "return";
  value: StaticJsValue;
}
function ReturnCompletion(value: StaticJsValue): ReturnCompletion {
  return {
    type: "return",
    value,
  };
}
export default ReturnCompletion;
