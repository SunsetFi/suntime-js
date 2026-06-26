import { StaticJsEngineError } from "../errors/StaticJsEngineError.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import type { StaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsPrivateName, type StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import type { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";

export type StaticJsFunctionNameable = StaticJsPropertyKey | StaticJsPrivateName;

export function* setFunctionName(
  f: StaticJsFunction,
  name: StaticJsFunctionNameable,
  prefix?: string,
): EvaluationGenerator<void> {
  const isExtensible = yield* f.isExtensibleEvaluator();
  if (!isExtensible) {
    throw new StaticJsEngineError("Cannot set function name on non-extensible object");
  }

  const hasName = yield* f.hasOwnPropertyEvaluator("name");
  if (hasName) {
    throw new StaticJsEngineError("Function already has a name");
  }

  // SetFunctionName
  // This is wonky.  This is normally done elsewhere by calls and the function
  // creator doesn't always know the name.
  let definedName: string;
  if (isStaticJsSymbol(name)) {
    const description = name.description;
    if (!description) {
      definedName = "";
    } else {
      definedName = `[${description}]`;
    }
  } else if (isStaticJsPrivateName(name)) {
    definedName = name.description;
  } else {
    definedName = name;
  }

  f.setInitialName(definedName);

  if (prefix) {
    definedName = `${prefix} ${definedName}`;
  }

  yield* definePropertyOrThrow(f, "name", {
    value: f.realm.types.string(definedName),
    writable: false,
    enumerable: false,
    configurable: true,
  });
}
