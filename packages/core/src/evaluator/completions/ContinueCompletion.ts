import { CompletionBase } from "./CompletionBase.js";

export interface ContinueCompletion extends CompletionBase {
  type: "continue";
  target: string | null;
}
export function ContinueCompletion(
  target: string | null = null,
): ContinueCompletion {
  return {
    type: "continue",
    target,
  };
}
