import { readdirSync, statSync } from "node:fs";
import { join as joinPath } from "node:path";

export default function getFilesSync(
  dir: string,
  filter: (file: string) => boolean,
): string[] {
  const files = readdirSync(dir);
  const results: string[] = [];

  for (const file of files) {
    const filePath = joinPath(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...getFilesSync(filePath, filter));
    } else if (filter(file)) {
      results.push(filePath);
    }
  }

  return results;
}
