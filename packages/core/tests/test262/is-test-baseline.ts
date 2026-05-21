import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import Test262File from "./Test262File.js";

type BaselineIndex = Set<string>;

let index: BaselineIndex | null = null;

export function parseBaselineText(content: string): BaselineIndex {
  return new Set(content.split("\n").filter((line) => line.length > 0));
}

function getIndex(): BaselineIndex {
  if (!index) {
    const content = readFileSync(
      fileURLToPath(new URL("../test262-baseline.txt", import.meta.url)),
      "utf-8",
    );
    index = parseBaselineText(content);
  }
  return index;
}

export function isTestBaseline(test: Test262File): boolean {
  const { testPathParts } = test;
  const category = testPathParts[0];

  if (category !== "language" && category !== "built-ins") {
    return false;
  }

  return getIndex().has(testPathParts.join("/"));
}
