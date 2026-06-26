import type { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { isStaticJsArray } from "../runtime/types/StaticJsArray.js";
import { isStaticJsObject } from "../runtime/types/StaticJsObject.js";
import { isStaticJsProxy } from "../runtime/types/StaticJsProxy.js";
import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

export function* isArray(value: StaticJsValue): EvaluationGenerator<boolean> {
  if (!isStaticJsObject(value)) {
    return false;
  }

  if (isStaticJsArray(value)) {
    return true;
  }

  if (isStaticJsProxy(value)) {
    yield* value.validateNonRevokedProxyEvaluator();
    const proxyTarget = value.proxyTarget!;
    return yield* isArray(proxyTarget);
  }

  return false;
}
