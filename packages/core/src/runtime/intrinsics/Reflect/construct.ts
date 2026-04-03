import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { Q } from "../../../evaluator/completions/Q.js";

import { createListFromArrayLike } from "../../algorithms/create-list-from-array-like.js";

import { isStaticJsFunction } from "../../types/StaticJsFunction.js";

import { IntrinsicPropertyDeclaration } from "../utils.js";

export const reflectConstructDeclaration: IntrinsicPropertyDeclaration = {
  key: "construct",
  *func(
    realm,
    _thisArg,
    target = realm.types.undefined,
    argumentsList = realm.types.undefined,
    newTarget = target,
  ) {
    if (!isStaticJsFunction(target)) {
      throw Completion.Throw("TypeError", "Reflect.construct called on non-function");
    }

    if (!target.isConstructor) {
      throw Completion.Throw("TypeError", "Reflect.construct called on non-constructor");
    }

    if (!isStaticJsFunction(newTarget) || !newTarget.isConstructor) {
      throw Completion.Throw("TypeError", "newTarget must be a constructor");
    }

    if (newTarget !== target) {
      throw new StaticJsEngineError("Constructor newTarget is not currently supported.");
    }

    const args = yield* createListFromArrayLike(argumentsList);
    return yield* Q(target.constructEvaluator(args));
  },
};
