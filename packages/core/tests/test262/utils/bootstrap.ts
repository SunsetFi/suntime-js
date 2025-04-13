import { readFileSync } from "node:fs";
import { evaluateProgram, StaticJsRealm } from "../../../src/index.js";

import test262Path from "./test262-path.js";

let harnessSta: string | null = null;
let harnessAssert: string | null = null;

export default function bootstrapTest262(realm: StaticJsRealm): StaticJsRealm {
  if (!harnessSta) {
    harnessSta = readFileSync(test262Path("harness/sta.js"), "utf-8");
  }
  if (!harnessAssert) {
    harnessAssert = readFileSync(
      new URL("../repo/harness/assert.js", import.meta.url),
      "utf-8",
    );
  }

  evaluateProgram(harnessSta, { realm });
  evaluateProgram(harnessAssert, { realm });

  return realm;
}
