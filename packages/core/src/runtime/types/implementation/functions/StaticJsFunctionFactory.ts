import type { FunctionDeclaration } from "@babel/types";

import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";

export type StaticJsFunctionFactory = (
  node: FunctionDeclaration,
  env: StaticJsEnvironmentRecord,
) => StaticJsFunction;
