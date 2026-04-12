import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import { StaticJsClassMethodFunction } from "../../../../runtime/types/implementation/functions/StaticJsClassMethodFunction.js";
import { StaticJsFunction } from "../../../../runtime/types/StaticJsFunction.js";

export function makeConstructor(F: StaticJsFunction) {
  if (!(F instanceof StaticJsClassMethodFunction)) {
    throw new StaticJsEngineError("Class constructor method is not a StaticJsClassMethodFunction");
  }
  F.isClassConstructor = true;
}
