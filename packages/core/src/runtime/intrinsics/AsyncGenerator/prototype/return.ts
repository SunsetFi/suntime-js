import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { asyncGeneratorValidate } from "../../../algorithms/async-generator-validate.js";
import { StaticJsAsyncGeneratorImpl } from "../../../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";

const asyncGeneratorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  *func(realm, thisArg, value = realm.types.undefined) {
    if (thisArg instanceof StaticJsAsyncGeneratorImpl === false) {
      throw Completion.Throw("TypeError", "Generator return called on incompatible receiver");
    }

    yield* asyncGeneratorValidate(thisArg, null);

    return yield* thisArg.returnEvaluator(value);
  },
};

export default asyncGeneratorProtoReturnDeclaration;
