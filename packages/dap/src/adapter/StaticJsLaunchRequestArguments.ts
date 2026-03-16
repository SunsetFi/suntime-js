import type { DebugProtocol } from "@vscode/debugprotocol";

export type StaticJsSourceKind = "script" | "expression" | "module";

export interface StaticJsLaunchRequestArguments extends DebugProtocol.LaunchRequestArguments {
  sourceText: string;
  sourceKind: StaticJsSourceKind;
  sourceName?: string;
  stopOnEntry?: boolean;
}

export interface NormalizedStaticJsLaunchRequestArguments extends StaticJsLaunchRequestArguments {
  readonly sourceName: string;
}

let nextSyntheticSourceId = 1;

export function normalizeLaunchRequestArguments(
  args: StaticJsLaunchRequestArguments,
): NormalizedStaticJsLaunchRequestArguments | null {
  if (typeof args.sourceText !== "string" || args.sourceText.length === 0) {
    return null;
  }

  if (!isStaticJsSourceKind(args.sourceKind)) {
    return null;
  }

  const sourceName =
    typeof args.sourceName === "string" && args.sourceName.length > 0
      ? args.sourceName
      : createSyntheticSourceName(args.sourceKind);

  return {
    ...args,
    sourceName,
  };
}

function isStaticJsSourceKind(value: unknown): value is StaticJsSourceKind {
  return value === "script" || value === "expression" || value === "module";
}

function createSyntheticSourceName(sourceKind: StaticJsSourceKind): string {
  const sourceId = `session-${nextSyntheticSourceId++}`;
  return `staticjs:///${sourceKind}/${sourceId}.js`;
}
