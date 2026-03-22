import type { Expression } from "@babel/types";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import { isStaticJsNull } from "../../../runtime/types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../runtime/types/StaticJsUndefined.js";

import StaticJsDeclarativeEnvironmentRecord from "../../../runtime/environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import toObject from "../../../runtime/algorithms/to-object.js";
import enumerateObjectProperties from "../../../runtime/algorithms/enumerate-object-properties.js";
import getValue from "../../../runtime/algorithms/get-value.js";

import type { StaticJsIteratorRecord } from "../../../runtime/iterators/StaticJsIteratorRecord.js";
import getIterator from "../../../runtime/iterators/get-iterator.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";

import type { EvaluationGenerator } from "../../EvaluationGenerator.js";
import type EvaluationContext from "../../EvaluationContext.js";

import { Completion } from "../../completions/Completion.js";
import Q from "../../completions/Q.js";

export default function* forInOfHeadEvaluation(
  uninitializedBoundNames: string[],
  expr: Expression,
  iterationKind: "enumerate" | "iterate" | "async-iterate",
  context: EvaluationContext,
): EvaluationGenerator<StaticJsIteratorRecord> {
  const oldEnv = context.lexicalEnv;

  if (uninitializedBoundNames.length > 0) {
    const newEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, context.realm);
    for (const name of uninitializedBoundNames) {
      yield* newEnv.createMutableBindingEvaluator(name, false);
    }
    context.lexicalEnv = newEnv;
  }

  const exprRef = yield* Q(EvaluateNodeCommand(expr));
  context.lexicalEnv = oldEnv;

  // Evaluation of expressions should never result in EMPTY.
  if (!exprRef) {
    throw new StaticJsEngineError(
      `Expected expression to return a completion value, but got EMPTY.`,
    );
  }
  const exprValue = yield* Q(getValue(exprRef));

  if (iterationKind === "enumerate") {
    if (isStaticJsUndefined(exprValue) || isStaticJsNull(exprValue)) {
      throw Completion.Break();
    }

    const obj = yield* toObject(exprValue);
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
