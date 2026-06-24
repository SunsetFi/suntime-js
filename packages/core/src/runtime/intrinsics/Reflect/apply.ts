import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { call } from "../../algorithms/call.js";
import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";
import { isCallable } from "../../algorithms/is-callable.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

export const reflectApplyDeclaration: IntrinsicPropertyDeclaration = {
  key: "apply",
  length: 3,
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    thisArgument = realm.types.undefined,
    argumentsList = realm.types.undefined,
  ) {
    if (!isCallable(target)) {
      throw yield* Completion.Throw.create("TypeError", "Reflect.apply called on non-function");
    }

    const args = yield* createListFromArrayLike(argumentsList);
    return yield* Q(call(target, thisArgument, args));
  },
};
