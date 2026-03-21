import type { WithStatement } from "@babel/types";

import StaticJsObjectEnvironmentRecord from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";

import type EvaluationContext from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import Q from "../completions/Q.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

export default function* withStatementNodeEvaluator(
  node: WithStatement,
  context: EvaluationContext,
): EvaluationGenerator {
  const val = yield* Q.val(EvaluateNodeCommand(node.object, context), context.realm);

  const obj = yield* toObject(val, context.realm);

  const oldEnv = context.lexicalEnv;
  const newEnv = new StaticJsObjectEnvironmentRecord(obj, true, context.lexicalEnv, context.realm);

  context.lexicalEnv = newEnv;
  const result = yield* captureThrownCompletion(EvaluateNodeCommand(node.body, context));
  context.lexicalEnv = oldEnv;
  return yield* Q(Completion.updateEmpty(result, context.realm.types.undefined));
}
