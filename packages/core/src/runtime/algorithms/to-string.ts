import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";

import StaticJsRuntimeError from "../../errors/StaticJsRuntimeError.js";

import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import { isStaticJsString, type StaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import toPrimitive from "./to-primitive.js";

function* toString(value: StaticJsValue): EvaluationGenerator<StaticJsString> {
  const { realm } = EvaluationContext.current;
  if (isStaticJsUndefined(value)) {
    return realm.types.string("undefined");
  }

  if (isStaticJsNull(value)) {
    return realm.types.string("null");
  }

  if (isStaticJsBoolean(value)) {
    return realm.types.string(value.value ? "true" : "false");
  }

  if (isStaticJsNumber(value)) {
    return realm.types.string(value.value.toString());
  }

  if (isStaticJsString(value)) {
    return value;
  }

  // TODO: Symbol: throw TypeError
  // TODO: Is this really what we do?
  if (isStaticJsSymbol(value)) {
    throw new StaticJsRuntimeError(
      realm.types.error("TypeError", "Cannot convert symbol to string"),
    );
  }

  if (isStaticJsObjectLike(value)) {
    const primitive = yield* toPrimitive(value, "string");
    return yield* toString(primitive);
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toString: " + value.runtimeTypeOf,
  );
}

toString.js = function* js(value: StaticJsValue): EvaluationGenerator<string> {
  const strVal = yield* toString(value);
  return strVal.value;
};

export default toString;
