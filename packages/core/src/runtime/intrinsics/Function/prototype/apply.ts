import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { createListFromArrayLike } from "../../../algorithms/create-list-from-array-like.js";
import { isStaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const functionProtoApplyDeclaration: IntrinsicPropertyDeclaration = {
  key: "apply",
  length: 2,
  *func(realm, func, thisArg = realm.types.undefined, argArray = realm.types.undefined) {
    if (!isStaticJsCallable(func)) {
      throw Completion.Throw(
        "TypeError",
        "Function.prototype.apply called on incompatible receiver",
      );
    }

    if (isStaticJsNull(argArray) || isStaticJsUndefined(argArray)) {
      return yield* call(func, thisArg);
    }

    const argList = yield* createListFromArrayLike(argArray);
    return yield* call(func, thisArg, argList);
  },
};
