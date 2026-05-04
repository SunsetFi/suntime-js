import { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import { StaticJsRealm } from "../realm/StaticJsRealm.js";
import { StaticJsBoundFunction } from "../types/implementation/functions/StaticJsBoundFunctionImpl.js";
import { StaticJsProxyImpl } from "../types/implementation/StaticJsProxyImpl.js";
import { StaticJsCallable } from "../types/StaticJsCallable.js";

export function* getFunctionRealm(func: StaticJsCallable): EvaluationGenerator<StaticJsRealm> {
  // We always have a realm on every function, but the spec
  // says not all functions have a realm.
  // So this is slightly weird in its ordering and function.

  if (func instanceof StaticJsBoundFunction) {
    return yield* getFunctionRealm(func.boundTargetFunction);
  }

  if (func instanceof StaticJsProxyImpl) {
    func.validateNonRevokedProxy();
    return yield* getFunctionRealm(func.proxyTarget as StaticJsCallable);
  }

  return func.realm;
}
