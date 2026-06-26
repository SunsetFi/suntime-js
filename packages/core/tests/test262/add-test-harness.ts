import { readFileSync } from "node:fs";

import { type StaticJsRealm } from "../../src/index.js";
import getTest262Path from "./utils/get-test262-path.js";

const harnessMap = new Map<string, string>();
function getHarness(name: string): string {
  if (!harnessMap.has(name)) {
    const harness = readFileSync(getTest262Path("harness", name), "utf-8");
    harnessMap.set(name, harness);
  }
  return harnessMap.get(name)!;
}

export default async function addTestHarness(realm: StaticJsRealm, harness: string): Promise<void> {
  const content = getHarness(harness);

  await realm.evaluateScript(content, {
    sourceName: `<test262-harness>/${harness}`,
  });
}
