import type { NormalizedStaticJsLaunchRequestArguments } from "./types/NormalizedStaticJsLaunchRequestArguments.js";
import type { StaticJsLaunchRequestArguments } from "./types/StaticJsLaunchRequestArguments.js";
import type { StaticJsSourceKind } from "./types/StaticJsSourceKind.js";

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
