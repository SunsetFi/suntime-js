import type { DebugProtocol } from "@vscode/debugprotocol";

export function toDapSource(sourceName: string): DebugProtocol.Source {
  return {
    name: getSourceLabel(sourceName),
    path: sourceName,
  };
}

function getSourceLabel(sourceName: string): string {
  const segments = sourceName.split("/");
  return segments[segments.length - 1] || sourceName;
}
