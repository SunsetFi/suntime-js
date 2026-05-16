import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { isStaticJsArray } from "../types/StaticJsArray.js";
import { isStaticJsObject } from "../types/StaticJsObject.js";
import { isStaticJsProxy } from "../types/StaticJsProxy.js";
import type { StaticJsValue } from "../types/StaticJsValue.js";

export function* isArray(value: StaticJsValue): EvaluationGenerator<boolean> {
  if (!isStaticJsObject(value)) {
    return false;
  }

  if (isStaticJsArray(value)) {
    return true;
  }

  if (isStaticJsProxy(value)) {
    value.validateNonRevokedProxy();
    const proxyTarget = value.proxyTarget;
    return yield* isArray(proxyTarget);
  }

  return false;
}
