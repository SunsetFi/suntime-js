import { Completion } from "../../../../evaluator/completions/Completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import getIteratorDirect from "../../../iterators/get-iterator-direct.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoToArrayDeclaration: IntrinsicPropertyDeclaration = {
  key: "toArray",
  *func(realm, thisArg) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.toArray called on non-object");
    }

    const iterated = yield* Q(getIteratorDirect(O));
    const items: StaticJsValue[] = [];
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated));
      if (value === null) {
        return realm.types.array(items);
      }

      items.push(value);
    }
  },
};

export default iteratorProtoToArrayDeclaration;
