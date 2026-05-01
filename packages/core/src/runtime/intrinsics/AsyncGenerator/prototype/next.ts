import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { asyncGeneratorValidate } from "../../../algorithms/async-generator-validate.js";
import { promiseReject } from "../../../algorithms/promise-reject.js";
import { StaticJsAsyncGeneratorImpl } from "../../../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const asyncGeneratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (thisArg instanceof StaticJsAsyncGeneratorImpl === false) {
      const error = realm.types.error(
        "TypeError",
        "Generator next called on incompatible receiver",
      );
      return yield* promiseReject(error, realm);
    }

    const completion = yield* captureThrownCompletion(asyncGeneratorValidate(thisArg, null));
    if (Completion.Abrupt.is(completion)) {
      return yield* promiseReject(Completion.value(completion), realm);
    }

    return yield* thisArg.nextEvaluator(value);
  },
};

export default asyncGeneratorProtoNextDeclaration;
