import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import { isStaticJsObjectLike, type StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";

export default function* toPrimitive(
  value: StaticJsValue,
  preferredType: "string" | "number" | "default" | undefined,
): EvaluationGenerator<StaticJsScalar> {
  const { realm } = EvaluationContext.current;

  if (!isStaticJsObjectLike(value)) {
    return value;
  }

  const exoticToPrim = yield* value.getEvaluator(realm.types.symbols.toPrimitive);
  if (isStaticJsFunction(exoticToPrim)) {
    let hint: "string" | "number" | "default";
    if (!preferredType) {
      hint = "default";
    } else if (preferredType === "string") {
      hint = "string";
    } else {
      hint = "number";
    }

    const result = yield* exoticToPrim.callEvaluator(value, [realm.types.string(hint)]);
    if (!isStaticJsObjectLike(result)) {
      return result;
    }

    throw Completion.Throw("TypeError", `Object[Symbol.toPrimitive] returned an object.`);
  }

  return yield* ordinaryToPrimitive(value, preferredType ?? "number");
}

function* ordinaryToPrimitive(
  value: StaticJsObjectLike,
  preferredType: "string" | "number" | "default",
): EvaluationGenerator<StaticJsScalar> {
  let methodNames: string[];
  if (preferredType === "string") {
    methodNames = ["toString", "valueOf"];
  } else {
    // "number" or "default"
    methodNames = ["valueOf", "toString"];
  }

  for (const methodName of methodNames) {
    const method = yield* value.getEvaluator(methodName);
    if (!isStaticJsFunction(method)) {
      continue;
    }

    const result = yield* method.callEvaluator(value);
    if (!isStaticJsObjectLike(result)) {
      return result;
    }
  }

  throw Completion.Throw("TypeError", `Cannot convert object to primitive value`);
}
