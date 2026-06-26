import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";
import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../runtime/realm/StaticJsRealm.js";
import { StaticJsBooleanBoxed } from "../runtime/types/implementation/primitives/StaticJsBooleanBoxed.js";
import { StaticJsNumberBoxed } from "../runtime/types/implementation/primitives/StaticJsNumberBoxed.js";
import { StaticJsStringExoticObject } from "../runtime/types/implementation/primitives/StaticJsStringExoticObject.js";
import { StaticJsSymbolBoxed } from "../runtime/types/implementation/primitives/StaticJsSymbolBoxed.js";
import { isStaticJsBoolean } from "../runtime/types/StaticJsBoolean.js";
import { isStaticJsNumber } from "../runtime/types/StaticJsNumber.js";
import type { StaticJsObject } from "../runtime/types/StaticJsObject.js";
import { isStaticJsObject } from "../runtime/types/StaticJsObject.js";
import { isStaticJsString } from "../runtime/types/StaticJsString.js";
import { isStaticJsSymbol } from "../runtime/types/StaticJsSymbol.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { requireObjectCoercible } from "./require-object-coercible.js";

export function* toObject(
  value: StaticJsValue,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsObject> {
  yield* requireObjectCoercible(value);
  requireObjectCoercible.enforce(value);

  if (isStaticJsBoolean(value)) {
    return new StaticJsBooleanBoxed(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsNumber(value)) {
    return new StaticJsNumberBoxed(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsString(value)) {
    return new StaticJsStringExoticObject(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsSymbol(value)) {
    return new StaticJsSymbolBoxed(realm ?? EvaluationContext.current.realm, value);
  }

  if (isStaticJsObject(value)) {
    return value;
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toObject: " + value.runtimeTypeOf,
  );
}
