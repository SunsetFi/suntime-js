import type { DebugProtocol } from "@vscode/debugprotocol";

import type { StaticJsSourceKind } from "./StaticJsSourceKind.js";

export interface StaticJsLaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
  sourceText: string;
  sourceKind: StaticJsSourceKind;
  sourceName?: string;
  stopOnEntry?: boolean;
}
