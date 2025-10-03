import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

import type EvaluationGenerator from "../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import StaticJsBooleanBoxed from "../types/implementation/StaticJsBooleanBoxed.js";
import StaticJsNumberBoxed from "../types/implementation/StaticJsNumberBoxed.js";
import StaticJsStringBoxed from "../types/implementation/StaticJsStringBoxed.js";

export default function* toObject(
  value: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  if (isStaticJsUndefined(value) || isStaticJsNull(value)) {
    throw new ThrowCompletion(
      realm.types.error(
        "TypeError",
        "Cannot convert undefined or null to object",
      ),
    );
  }

  if (isStaticJsBoolean(value)) {
    return new StaticJsBooleanBoxed(realm, value.value);
  }

  if (isStaticJsNumber(value)) {
    return new StaticJsNumberBoxed(realm, value.value);
  }

  if (isStaticJsString(value)) {
    return new StaticJsStringBoxed(realm, value.value);
  }

  if (isStaticJsObjectLike(value)) {
    return value;
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toObject: " + value.runtimeTypeOf,
  );
}
