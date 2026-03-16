import { Source } from "@vscode/debugadapter";

export function toDapSource(sourceName: string): Source {
  return new Source(getSourceLabel(sourceName), sourceName);
}

function getSourceLabel(sourceName: string): string {
  const segments = sourceName.split("/");
  return segments[segments.length - 1] || sourceName;
}
