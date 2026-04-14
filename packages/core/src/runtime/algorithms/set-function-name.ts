import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import { StaticJsFunction } from "../types/StaticJsFunction.js";
import { isStaticJsPrivateName, StaticJsPrivateName } from "../types/StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "../types/StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../types/StaticJsSymbol.js";

import definePropertyOrThrow from "./define-property-or-throw.js";

export type StaticJsFunctionNameable = StaticJsPropertyKey | StaticJsPrivateName;

export function* setFunctionName(
  f: StaticJsFunction,
  name: StaticJsFunctionNameable,
  prefix?: string,
): EvaluationGenerator<void> {
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
