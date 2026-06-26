import type { CallExpression, OptionalCallExpression } from "@babel/types";

import type { StaticJsValue } from "#types/StaticJsValue.js";

import { call } from "#algorithms/call.js";
import { getThisValue } from "#algorithms/get-this-value.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import {
  isStaticJsPropertyReference,
  isStaticJsReferenceRecord,
  type StaticJsReferenceRecord,
} from "#references/StaticJsReferenceRecord.js";
import { isStaticJsCallable } from "#types/StaticJsCallable.js";

import { Completion } from "../../completions/Completion.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import { EvaluationGenerator } from "../../EvaluationGenerator.js";
import nameNode from "../name-node.js";
import { argumentsListEvaluation } from "./ArgumentsListEvaluation.js";

export function* evaluateCall(
  node: CallExpression | OptionalCallExpression,
  func: StaticJsValue,
  ref: StaticJsValue | StaticJsReferenceRecord,
  callArgs: CallExpression["arguments"],
): EvaluationGenerator {
  let thisValue: StaticJsValue | null = null;
  if (isStaticJsReferenceRecord(ref)) {
    if (isStaticJsPropertyReference(ref)) {
      thisValue = yield* getThisValue(ref);
    } else {
      if (!ref.base) {
        throw new StaticJsEngineError("evaluateCall: Reference base is null or undefined");
      }

      const refEnv = ref.base;
      thisValue = yield* refEnv.withBaseObjectEvaluator();
    }
  } else {
    thisValue = EvaluationContext.current.realm.types.undefined;
  }

  const args = yield* argumentsListEvaluation(callArgs);

  if (!isStaticJsCallable(func)) {
    throw yield* Completion.Throw.create(
      "TypeError",
      `TypeError: ${nameNode(node.callee)} is not a function`,
    );
  }

  return yield* call(func, thisValue, args);
}
