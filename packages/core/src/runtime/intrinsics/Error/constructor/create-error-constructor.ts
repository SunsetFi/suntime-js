import { captureStackTrace } from "../../../../algorithms/capture-stack-trace.js";
import { createNonEnumerableDataPropertyOrThrow } from "../../../../algorithms/create-non-enumerable-data-property-or-throw.js";
import { installErrorCause } from "../../../../algorithms/install-error-cause.js";
import { ordinaryCreateFromConstructor } from "../../../../algorithms/ordinary-create-from-constructor.js";
import { toString } from "../../../../algorithms/to-string.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { StaticJsNativeFunctionImpl } from "../../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsErrorImpl } from "../../../../types/implementation/objects/StaticJsErrorImpl.js";
import type { StaticJsCallable } from "../../../../types/StaticJsCallable.js";
import type { StaticJsObject } from "../../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../../types/StaticJsValue.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import {
  applyIntrinsicProperties,
  type IntrinsicPropertyDeclaration,
} from "../../apply-intrinsic-properties.js";

import { errorCtorIsErrorDeclaration } from "./is-error.js";

const declarations: IntrinsicPropertyDeclaration[] = [errorCtorIsErrorDeclaration];

export function* createErrorConstructor(realm: StaticJsRealm, errorProto: StaticJsObject) {
  function* constructError(
    newTarget: StaticJsCallable | null,
    message: StaticJsValue,
    options: StaticJsValue,
  ): EvaluationGenerator<StaticJsObject> {
    if (!newTarget) {
      newTarget = EvaluationContext.current.function!;
    }

    const obj = yield* ordinaryCreateFromConstructor(
      newTarget,
      "Error.prototype",
      StaticJsErrorImpl,
    );
    if (!isStaticJsUndefined(message)) {
      const msg = yield* toString(message);
      yield* createNonEnumerableDataPropertyOrThrow(obj, "message", msg);
    }

    yield* installErrorCause(obj, options);

    // Note: The spec doesn't define this, but v8 and spidermonkey do this, with minor differences.
    // We may yet want to figure out where exactly this occurs.  Is it before or after cause?
    // Stuff like that matters to test262, but this isn't spec, so...
    yield* captureStackTrace(obj, newTarget);

    return obj;
  }

  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "Error",
    function* (_thisArg, message = realm.types.undefined, options = realm.types.undefined) {
      return yield* constructError(null, message, options);
    },
    {
      *construct(newTarget, message = realm.types.undefined, options = realm.types.undefined) {
        return yield* constructError(newTarget, message, options);
      },
    },
  );

  yield* ctor.defineOwnPropertyEvaluator("prototype", {
    value: errorProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  yield* errorProto.defineOwnPropertyEvaluator("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  yield* applyIntrinsicProperties(realm, ctor, declarations);

  return ctor;
}
