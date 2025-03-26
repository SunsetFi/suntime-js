import CompletionBase from "./CompletionBase.js";

interface BreakCompletion extends CompletionBase {
  type: "break";
  target: string | null;
}
function BreakCompletion(target: string | null = null): BreakCompletion {
  return {
    type: "break",
    target,
  };
}
export default BreakCompletion;
