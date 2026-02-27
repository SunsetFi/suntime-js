import { type FunctionDeclaration } from "@babel/types";

import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { StaticJsFunction } from "../../runtime/types/StaticJsFunction.js";

import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import type EvaluationContext from "../EvaluationContext.js";

interface FunctionDeclarationExtra {
  function?: StaticJsFunction;
  annexBHoisted?: string;
}

function* functionDeclarationNodeEvaluator(
  node: FunctionDeclaration,
  context: EvaluationContext,
): EvaluationGenerator {
  const { annexBHoisted } = (node.extra ?? {}) as FunctionDeclarationExtra;

  if (annexBHoisted) {
    const id = node.id;
    if (!id) {
      throw new StaticJsEngineError("Hoisted function declarations must have an identifier");
    }

    if (id.type !== "Identifier") {
      throw new StaticJsEngineError(`Unsupported hoisted function declaration id type: ${id.type}`);
    }

    const F = id.name;
    const bEnv = context.lexicalEnv;
    const fObj = yield* bEnv.getBindingValueEvaluator(F, false);
    const gEnv = context.variableEnv;
    yield* gEnv.setMutableBindingEvaluator(annexBHoisted, fObj, false);
  }

  return null;
}

export default functionDeclarationNodeEvaluator;
