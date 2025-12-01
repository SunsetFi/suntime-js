import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../types/StaticJsValue.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../types/StaticJsObjectLike.js";
import { isStaticJsFunction } from "../types/StaticJsFunction.js";

export default function* toPrimitive(
  value: StaticJsValue,
  preferredType: "string" | "number" | "default",
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsScalar> {
  if (!isStaticJsObjectLike(value)) {
    return value;
  }

  const exoticToPrim = yield* value.getEvaluator(
    realm.types.symbols.toPrimitive,
  );
  if (isStaticJsFunction(exoticToPrim)) {
    let hint: "string" | "number" | "default";
    if (!preferredType) {
      hint = "default";
    } else if (preferredType === "string") {
      hint = "string";
    } else {
      hint = "number";
    }

    const result = yield* exoticToPrim.callEvaluator(
      value,
      realm.types.string(hint),
    );
    if (!isStaticJsObjectLike(result)) {
      return result;
    }

    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        `Object[Symbol.toPrimitive] returned an object.`,
      ),
    );
  }

  return yield* ordinaryToPrimitive(value, preferredType, realm);
}

function* ordinaryToPrimitive(
  value: StaticJsObjectLike,
  preferredType: "string" | "number" | "default",
  realm: StaticJsRealm,
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

  throw new ThrowCompletion(
    realm.types.error("TypeError", `Cannot convert object to primitive value`),
  );
}
