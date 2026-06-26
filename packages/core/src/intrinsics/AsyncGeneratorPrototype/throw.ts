import { promiseReject } from "../../algorithms/promise-reject.js";
import { StaticJsAsyncGeneratorImpl } from "../../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const asyncGeneratorProtoThrowDeclaration: IntrinsicPropertyDeclaration = {
  key: "throw",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (thisArg instanceof StaticJsAsyncGeneratorImpl === false) {
      const error = realm.types.error(
        "TypeError",
        "Generator throw called on incompatible receiver",
      );
      return yield* promiseReject(error, realm);
    }

    return yield* thisArg.throwEvaluator(value);
  },
};

export default asyncGeneratorProtoThrowDeclaration;
