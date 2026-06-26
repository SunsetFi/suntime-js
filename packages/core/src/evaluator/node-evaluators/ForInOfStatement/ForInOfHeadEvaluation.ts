import type { Expression } from "@babel/types";

import { enumerateObjectProperties } from "#algorithms/enumerate-object-properties.js";
import { getValue } from "#algorithms/get-value.js";
import { get } from "#algorithms/get.js";
import { toObject } from "#algorithms/to-object.js";
import { StaticJsDeclarativeEnvironmentRecord } from "#environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { getIterator } from "#iterators/get-iterator.js";
import type { StaticJsIteratorRecord } from "#iterators/StaticJsIteratorRecord.js";
import { isStaticJsNull } from "#types/StaticJsNull.js";
import { isStaticJsUndefined } from "#types/StaticJsUndefined.js";

import { EvaluateNodeCommand } from "../../commands/EvaluateNodeCommand.js";
import { Completion } from "../../completions/Completion.js";
import { Q } from "../../completions/Q.js";
import { EvaluationContext } from "../../EvaluationContext.js";
import type { EvaluationGenerator } from "../../EvaluationGenerator.js";

export default function* forInOfHeadEvaluation(
  uninitializedBoundNames: string[],
  expr: Expression,
  iterationKind: "enumerate" | "iterate" | "async-iterate",
): EvaluationGenerator<StaticJsIteratorRecord> {
  const context = EvaluationContext.current;
  const { realm } = context;
  const oldEnv = context.lexicalEnv;

  try {
    if (uninitializedBoundNames.length > 0) {
      const newEnv = new StaticJsDeclarativeEnvironmentRecord(oldEnv, realm);
      for (const name of uninitializedBoundNames) {
        yield* newEnv.createMutableBindingEvaluator(name, false);
      }
      context.lexicalEnv = newEnv;
    }

    const exprRef = yield* Q(EvaluateNodeCommand(expr));

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
      const iterator = yield* enumerateObjectProperties(obj, realm);
      const nextMethod = yield* get(iterator, "next");
      return {
        iterator,
        nextMethod,
        done: false,
      };
    }

    return yield* getIterator(exprValue, iterationKind === "async-iterate" ? "async" : "sync");
  } finally {
    context.lexicalEnv = oldEnv;
  }
}
