import { readFileSync } from "node:fs";
import { evaluateProgram, StaticJsRealm } from "../../../src/index.js";

import test262Path from "./test262-path.js";

const harnessMap = new Map<string, string>();
function getHarness(name: string): string {
  if (!harnessMap.has(name)) {
    const harness = readFileSync(test262Path("harness", name), "utf-8");
    harnessMap.set(name, harness);
  }
  return harnessMap.get(name)!;
}

export default function bootstrapTest262(
  realm: StaticJsRealm,
  includes: string[],
): StaticJsRealm {
  for (const include of includes) {
    const content = getHarness(include);
    evaluateProgram(content, { realm });
  }

  return realm;
}
