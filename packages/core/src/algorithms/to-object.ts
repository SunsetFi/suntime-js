import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsBooleanBoxed } from "#types/implementation/primitives/StaticJsBooleanBoxed.js";
import { StaticJsNumberBoxed } from "#types/implementation/primitives/StaticJsNumberBoxed.js";
import { StaticJsStringExoticObject } from "#types/implementation/primitives/StaticJsStringExoticObject.js";
import { StaticJsSymbolBoxed } from "#types/implementation/primitives/StaticJsSymbolBoxed.js";
import { isStaticJsBoolean } from "#types/StaticJsBoolean.js";
import { isStaticJsNumber } from "#types/StaticJsNumber.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";
import { isStaticJsString } from "#types/StaticJsString.js";
import { isStaticJsSymbol } from "#types/StaticJsSymbol.js";

import { requireObjectCoercible } from "./require-object-coercible.js";

export function* toObject(
  value: StaticJsValue,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  yield* requireObjectCoercible(value);
  requireObjectCoercible.enforce(value);

  if (isStaticJsBoolean(value)) {
    return StaticJsBooleanBoxed.create({
      realm: realm ?? EvaluationContext.current.realm,
      value: value.value,
    });
  }

  if (isStaticJsNumber(value)) {
    return StaticJsNumberBoxed.create({
      realm: realm ?? EvaluationContext.current.realm,
      value: value.value,
    });
  }

  if (isStaticJsString(value)) {
    return StaticJsStringExoticObject.create({
      realm: realm ?? EvaluationContext.current.realm,
      value: value.value,
    });
  }

  if (isStaticJsSymbol(value)) {
    return StaticJsSymbolBoxed.create({ realm: realm ?? EvaluationContext.current.realm, value });
  }

  if (isStaticJsObject(value)) {
    return value;
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toObject: " + value.runtimeTypeOf,
  );
}
