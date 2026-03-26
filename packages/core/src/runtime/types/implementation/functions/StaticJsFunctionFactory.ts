import type { FunctionDeclaration } from "@babel/types";

import type { StaticJsFunction } from "../../StaticJsFunction.js";
import { StaticJsEnvironmentRecord } from "../../../environments/StaticJsEnvironmentRecord.js";

export type StaticJsFunctionFactory = (
  name: string | null,
  node: FunctionDeclaration,
  env: StaticJsEnvironmentRecord,
) => StaticJsFunction;
