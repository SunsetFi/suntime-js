import type { Expression } from "@babel/types";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";
import type EvaluationContext from "../../EvaluationContext.js";

import { isStaticJsNull } from "../../../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../runtime/types/StaticJsUndefined.js";

import StaticJsDeclarativeEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toObject from "../../../runtime/algorithms/to-object.js";
import enumerateObjectProperties from "../../../runtime/algorithms/enumerate-object-properties.js";

import type { IteratorRecord } from "../../../runtime/iterators/IteratorRecord.js";
import getIterator from "../../../runtime/iterators/get-iterator.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";

import { Completion } from "../../completions/Completion.js";
import Q from "../../completions/Q.js";

export default function* forInOfHeadEvaluation(
  uninitializedBoundNames: string[],
  expr: Expression,
  iterationKind: "enumerate" | "iterate" | "async-iterate",
  context: EvaluationContext,
): EvaluationGenerator<IteratorRecord> {
  const oldEnv = context.lexicalEnv;

  let exprContext: EvaluationContext = context;
  if (uninitializedBoundNames.length > 0) {
    const newEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, context.realm);
    for (const name of uninitializedBoundNames) {
      yield* newEnv.createMutableBindingEvaluator(name, false);
    }
    exprContext = context.createLexicalEnvContext(newEnv);
  }

  const exprValue = yield* Q.val(EvaluateNodeCommand(expr, exprContext), exprContext.realm);

  if (iterationKind === "enumerate") {
    if (isStaticJsUndefined(exprValue) || isStaticJsNull(exprValue)) {
      throw Completion.Break();
    }

    const obj = yield* toObject(exprValue, context.realm);
    const iterator = yield* enumerateObjectProperties(obj, context.realm);
    const nextMethod = yield* iterator.getEvaluator("next");
    return {
      iterator,
      nextMethod,
      done: false,
    };
  } else {
    return yield* getIterator(
      exprValue,
      iterationKind === "async-iterate" ? "async" : "sync",
      context.realm,
    );
  }
}
