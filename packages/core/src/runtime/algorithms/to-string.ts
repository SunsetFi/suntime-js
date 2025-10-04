import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import {
  isStaticJsString,
  type StaticJsString,
} from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import toPrimitive from "./to-primitive.js";

export default function* toString(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsString> {
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

  if (isStaticJsObjectLike(value)) {
    const primitive = yield* toPrimitive(value, "string", realm);
    return yield* toString(primitive, realm);
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toString: " + value.runtimeTypeOf,
  );
}
