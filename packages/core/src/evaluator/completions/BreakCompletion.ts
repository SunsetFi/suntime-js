import { CompletionBase } from "./CompletionBase.js";

export interface BreakCompletion extends CompletionBase {
  type: "break";
  target: string | null;
}
export function BreakCompletion(target: string | null = null): BreakCompletion {
  return {
    type: "break",
    target,
  };
}
