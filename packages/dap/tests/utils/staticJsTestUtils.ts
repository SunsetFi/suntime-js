import type { StaticJsLaunchRequestArguments } from "../../src/index.js";

export const MAIN_THREAD_ID = 1;

export function createScriptLaunchArgs(
  overrides: Omit<Partial<StaticJsLaunchRequestArguments>, "sourceKind" | "sourceText"> & {
    sourceText: string;
  },
): StaticJsLaunchRequestArguments {
  return {
    sourceKind: "script",
    stopOnEntry: true,
    ...overrides,
  };
}
