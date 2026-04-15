import { Completion } from "../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsObject, type StaticJsObject } from "../types/StaticJsObject.js";
import type { StaticJsScalar } from "../types/StaticJsScalar.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { call } from "./call.js";
import { get } from "./get.js";
import { isCallable } from "./is-callable.js";

export function* toPrimitive(
  value: StaticJsValue,
  preferredType: "string" | "number" | "default" | undefined,
): EvaluationGenerator<StaticJsScalar> {
  const { realm } = EvaluationContext.current;

  if (!isStaticJsObject(value)) {
    return value;
  }

  const exoticToPrim = yield* get(value, realm.types.symbols.toPrimitive);
  if (isCallable(exoticToPrim)) {
    let hint: "string" | "number" | "default";
    if (!preferredType) {
      hint = "default";
    } else if (preferredType === "string") {
      hint = "string";
    } else {
      hint = "number";
    }

    const result = yield* call(exoticToPrim, value, [realm.types.string(hint)]);
    if (!isStaticJsObject(result)) {
      return result;
    }

    throw Completion.Throw("TypeError", `Object[Symbol.toPrimitive] returned an object.`);
  }

  return yield* ordinaryToPrimitive(value, preferredType ?? "number");
}

function* ordinaryToPrimitive(
  value: StaticJsObject,
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
    const method = yield* get(value, methodName);
    if (!isCallable(method)) {
      continue;
    }

    const result = yield* call(method, value, []);
    if (!isStaticJsObject(result)) {
      return result;
    }
  }

  throw Completion.Throw("TypeError", `Cannot convert object to primitive value`);
}
