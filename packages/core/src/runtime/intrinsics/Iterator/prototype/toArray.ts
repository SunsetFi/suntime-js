import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";

import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";

import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoToArrayDeclaration: IntrinsicPropertyDeclaration = {
  key: "toArray",
  *func(_realm, thisArg) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.toArray called on non-object");
    }

    const iterated = yield* Q(getIteratorDirect(O));
    const items: StaticJsValue[] = [];
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated));
      if (value === null) {
        return yield* createArrayFromList(items);
      }

      items.push(value);
    }
  },
};

export default iteratorProtoToArrayDeclaration;
