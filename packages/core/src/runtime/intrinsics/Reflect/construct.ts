import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";
import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";
import { isCallable } from "../../algorithms/is-callable.js";
import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectConstructDeclaration: IntrinsicPropertyDeclaration = {
  key: "construct",
  length: 3,
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    argumentsList = realm.types.undefined,
    newTarget = target,
  ) {
    if (!isCallable(target)) {
      throw Completion.Throw("TypeError", "Reflect.construct called on non-function");
    }

    if (!target.isConstructor) {
      throw Completion.Throw("TypeError", "Reflect.construct called on non-constructor");
    }

    if (!isCallable(newTarget) || !newTarget.isConstructor) {
      throw Completion.Throw("TypeError", "newTarget must be a constructor");
    }

    const args = yield* createListFromArrayLike(argumentsList);
    return yield* Q(target.constructEvaluator(args, newTarget));
  },
};
