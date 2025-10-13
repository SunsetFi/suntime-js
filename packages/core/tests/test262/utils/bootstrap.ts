import { readFileSync } from "node:fs";
import {
  createTimeBoundTaskRunner,
  type StaticJsRealm,
} from "../../../src/index.js";

import test262Path from "./test262-path.js";

const harnessMap = new Map<string, string>();
function getHarness(name: string): string {
  if (!harnessMap.has(name)) {
    const harness = readFileSync(test262Path("harness", name), "utf-8");
    harnessMap.set(name, harness);
  }
  return harnessMap.get(name)!;
}

export default async function bootstrapTest262(
  realm: StaticJsRealm,
  includes: string[],
): Promise<StaticJsRealm> {
  const includeContents = includes.map((include) => [
    include,
    getHarness(include),
  ]);

  for (const [include, content] of includeContents) {
    await realm.evaluateScript(content, {
      fileName: `<test262-harness>/${include}`,
      // Create and use our own task runner, rather than the realm's default,
      // so that:
      // 1) We do not start the realm task timer before starting the actual test
      // 2) We can enforce a harsher time limit on the test setup
      runTask: createTimeBoundTaskRunner({ maxRunTime: 500 }),
    });
  }

  return realm;
}
