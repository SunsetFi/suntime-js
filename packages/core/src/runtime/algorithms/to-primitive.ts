import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import { isStaticJsObjectLike } from "../types/StaticJsObject.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";

export default function* toPrimitive(
  value: StaticJsValue,
  preferredType: "string" | "number" | "default",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsScalar> {
  if (!isStaticJsObjectLike(value)) {
    return value;
  }

  // TODO: Spec @@exoticToPrimitive, Symbol.toPrimitive

  let methodNames: string[];
  if (preferredType === "string") {
    methodNames = ["toString", "valueOf"];
  } else {
    // "number" or "default"
    methodNames = ["valueOf", "toString"];
  }

  for (const methodName of methodNames) {
    const method = yield* value.getPropertyEvaluator(methodName);
    if (!isStaticJsFunction(method)) {
      continue;
    }

    const result = yield* method.callEvaluator(value);
    if (!isStaticJsObjectLike(result)) {
      return result;
    }
  }

  throw new ThrowCompletion(
    realm.types.error(
      "TypeError",
      `Cannot convert object to primitive value: ${value.toStringSync()}`,
    ),
  );
}
