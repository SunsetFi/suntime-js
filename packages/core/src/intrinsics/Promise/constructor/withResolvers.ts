import type { IntrinsicPropertyDeclaration } from "#intrinsics/apply-intrinsic-properties.js";

import { createDataPropertyOrThrow } from "#algorithms/create-data-property-or-throw.js";
import { newPromiseCapability } from "#algorithms/new-promise-capability.js";
import { Q } from "#evaluator/completions/Q.js";

export const promiseCtorWithResolversDeclaration: IntrinsicPropertyDeclaration = {
  key: "withResolvers",
  length: 0,
  *func(realm, thisArg) {
    const ctor = thisArg;
    const promiseCapability = yield* Q(newPromiseCapability(ctor));
    const obj = realm.types.object();
    yield* createDataPropertyOrThrow(obj, "promise", promiseCapability.promise);
    yield* createDataPropertyOrThrow(obj, "resolve", promiseCapability.resolve);
    yield* createDataPropertyOrThrow(obj, "reject", promiseCapability.reject);
    return obj;
  },
};
