import type { DebugProtocol } from "@vscode/debugprotocol";

import type { AdapterSessionState } from "../session/AdapterSessionState.js";

export function getSourceNameFromDapSource(
  source: DebugProtocol.Source | undefined,
  sessionState: AdapterSessionState,
): string | null {
  if (typeof source?.path === "string" && source.path.length > 0) {
    return source.path;
  }

  if (typeof source?.name === "string" && source.name.length > 0) {
    return source.name;
  }

  return sessionState.launchArgs?.sourceName ?? null;
}
