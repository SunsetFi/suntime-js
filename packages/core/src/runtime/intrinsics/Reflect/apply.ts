import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import call from "../../algorithms/call.js";
import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";
import { isCallable } from "../../algorithms/is-callable.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectApplyDeclaration: IntrinsicPropertyDeclaration = {
  key: "apply",
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    thisArgument = realm.types.undefined,
    argumentsList = realm.types.undefined,
  ) {
    if (!isCallable(target)) {
      throw Completion.Throw("TypeError", "Reflect.apply called on non-function");
    }

    const args = yield* createListFromArrayLike(argumentsList);
    return yield* Q(call(target, thisArgument, args));
  },
};
