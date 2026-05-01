import { Completion } from "../../../../evaluator/completions/Completion.js";
import { asyncGeneratorValidate } from "../../../algorithms/async-generator-validate.js";
import { StaticJsAsyncGeneratorImpl } from "../../../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const asyncGeneratorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (thisArg instanceof StaticJsAsyncGeneratorImpl === false) {
      throw Completion.Throw("TypeError", "Generator return called on incompatible receiver");
    }

    yield* asyncGeneratorValidate(thisArg, null);

    return yield* thisArg.returnEvaluator(value);
  },
};

export default asyncGeneratorProtoReturnDeclaration;
