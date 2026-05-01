import { Completion } from "../../evaluator/completions/Completion.js";
import { isStaticJsNull, StaticJsNull } from "../types/StaticJsNull.js";
import { isStaticJsUndefined, StaticJsUndefined } from "../types/StaticJsUndefined.js";
import { StaticJsValue } from "../types/StaticJsValue.js";

export function requireObjectCoercable(
  argument: StaticJsValue,
): asserts argument is Exclude<StaticJsValue, StaticJsNull | StaticJsUndefined> {
  if (isStaticJsUndefined(argument) || isStaticJsNull(argument)) {
    throw Completion.Throw("TypeError", "Cannot convert undefined or null to object");
  }
}
