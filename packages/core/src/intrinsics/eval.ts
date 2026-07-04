import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { definePropertyOrThrow } from "#algorithms/define-property-or-throw.js";
import { performEval } from "#algorithms/perform-eval.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { StaticJsNativeFunctionImpl } from "#types/implementation/functions/StaticJsNativeFunctionImpl.js";

import type { IntrinsicPropertyDeclaration } from "./apply-intrinsic-properties.js";
import type { IntrinsicsRecord } from "./intrinsics.js";

export function* createEval(realm: StaticJsRealm, intrinsics: IntrinsicsRecord) {
  const evalFunc = StaticJsNativeFunctionImpl.create(
    realm,
    "eval",
    function* (_thisArg, source = realm.types.undefined) {
      // FIXME SPEC WEIRDNESS:
      // The spec say we ONLY call performEval without touching the context.
      // However, performEval says if direct is false,
      // "runningContext will be the execution context for the invocation of the eval function"
      // I have no idea where that execution context is supposed to be set.
      // Presumably it is captured by the function on function declaration?
      // Are all our intrinsics supposed to capture and use the global context?

      const globalContext = EvaluationContext.createRootContext(null, false, realm);
      return yield* globalContext.run(() => performEval(source, false, false));
    },
    {
      construct: false,
    },
  );

  yield* definePropertyOrThrow(evalFunc, "length", {
    value: realm.types.number(1),
    enumerable: false,
    configurable: true,
    writable: false,
  });

  intrinsics["eval"] = evalFunc;
}

export const globalObjectEvalDeclaration: IntrinsicPropertyDeclaration = {
  key: "eval",
  writable: true,
  configurable: true,
  value: (realm) => realm.intrinsics.eval,
};
