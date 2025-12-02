import type { FunctionDeclaration } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";

import type { StaticJsFunction } from "../StaticJsFunction.js";

export type StaticJsFunctionFactory = (
  name: string | null,
  node: FunctionDeclaration,
  context: EvaluationContext,
) => StaticJsFunction;
