import type { FunctionDeclaration } from "@babel/types";

import { StaticJsScriptOrModuleRecord } from "../../../evaluator/ScriptOrModuleRecord/StaticJsScriptOrModuleRecod.js";

import { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsFunction } from "../StaticJsFunction.js";
import { StaticJsEnvironmentRecord } from "../../environments/StaticJsEnvironmentRecord.js";

export type StaticJsFunctionFactory = (
  name: string | null,
  node: FunctionDeclaration,
  env: StaticJsEnvironmentRecord,
  // FIXME: Should come from node, once we can track parents.
  strict: boolean,
  // FIXME: Should come from GetActiveScriptOrModule, once we have global state.
  scriptOrModule: StaticJsScriptOrModuleRecord,
  realm: StaticJsRealm,
) => StaticJsFunction;
