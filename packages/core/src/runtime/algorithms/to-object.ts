import { StaticJsEngineError } from "../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../realm/StaticJsRealm.js";

import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../evaluator/completions/Completion.js";

import { isStaticJsBoolean } from "../types/StaticJsBoolean.js";
import { isStaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsNumber } from "../types/StaticJsNumber.js";
import type { StaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsObjectLike } from "../types/StaticJsObjectLike.js";
import { isStaticJsString } from "../types/StaticJsString.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";
import { isStaticJsUndefined } from "../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

import { StaticJsBooleanBoxed } from "../types/implementation/primitives/StaticJsBooleanBoxed.js";
import { StaticJsNumberBoxed } from "../types/implementation/primitives/StaticJsNumberBoxed.js";
import { StaticJsStringBoxed } from "../types/implementation/primitives/StaticJsStringBoxed.js";
import { StaticJsSymbolBoxed } from "../types/implementation/primitives/StaticJsSymbolBoxed.js";

export default function* toObject(
  value: StaticJsValue,
  realm?: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  if (isStaticJsUndefined(value) || isStaticJsNull(value)) {
    throw Completion.Throw("TypeError", "Cannot convert undefined or null to object");
  }

  if (isStaticJsBoolean(value)) {
    return new StaticJsBooleanBoxed(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsNumber(value)) {
    return new StaticJsNumberBoxed(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsString(value)) {
    return new StaticJsStringBoxed(realm ?? EvaluationContext.current.realm, value.value);
  }

  if (isStaticJsSymbol(value)) {
    return new StaticJsSymbolBoxed(realm ?? EvaluationContext.current.realm, value);
  }

  if (isStaticJsObjectLike(value)) {
    return value;
  }

  throw new StaticJsEngineError(
    // @ts-expect-error - Want to know when we get weird values.
    "Unhandled internal value type in toObject: " + value.runtimeTypeOf,
  );
}
