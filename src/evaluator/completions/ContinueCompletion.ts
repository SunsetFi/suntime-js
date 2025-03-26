import CompletionBase from "./CompletionBase.js";

interface ContinueCompletion extends CompletionBase {
  type: "continue";
  target: string | null;
}
function ContinueCompletion(target: string | null = null): ContinueCompletion {
  return {
    type: "continue",
    target,
  };
}
export default ContinueCompletion;
