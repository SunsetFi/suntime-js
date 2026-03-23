import type { WithStatement } from "@babel/types";

import StaticJsObjectEnvironmentRecord from "../../runtime/environments/implementation/StaticJsObjectEnvironmentRecord.js";

import toObject from "../../runtime/algorithms/to-object.js";

import { EvaluateNodeCommand } from "../commands/EvaluateNodeCommand.js";
import { Completion } from "../completions/Completion.js";

import { EvaluationContext } from "../EvaluationContext.js";
import type { EvaluationGenerator } from "../EvaluationGenerator.js";
import Q from "../completions/Q.js";
import captureThrownCompletion from "../completions/capture-thrown-completion.js";

export default function* withStatementNodeEvaluator(node: WithStatement): EvaluationGenerator {
  const context = EvaluationContext.current;
  const { lexicalEnv, realm } = context;
  const val = yield* Q.val(EvaluateNodeCommand(node.object));

  const obj = yield* toObject(val);

  const oldEnv = lexicalEnv;
  const newEnv = new StaticJsObjectEnvironmentRecord(obj, true, lexicalEnv, realm);

  context.lexicalEnv = newEnv;
  try {
    const result = yield* captureThrownCompletion(EvaluateNodeCommand(node.body));
    return yield* Q(Completion.updateEmpty(result, realm.types.undefined));
  } finally {
    context.lexicalEnv = oldEnv;
  }
}
