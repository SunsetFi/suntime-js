import { Completion } from "../../../../evaluator/completions/Completion.js";

import { createIteratorResultObject } from "../../../iterators/create-iterator-result-object.js";

import StaticJsGeneratorImpl from "../../../types/implementation/StaticJsGeneratorImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringIteratorProtoNextDeclaration: IntrinsicPropertyDeclaration = {
  key: "next",
  *func(realm, thisArg) {
    // FIXME: Doesn't work if subclasses.
    if (thisArg instanceof StaticJsGeneratorImpl === false) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "String Iterator.prototype.next called on incompatible receiver",
        ),
      );
    }

    if (thisArg.generatorBrand !== "%StringIteratorPrototype%") {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "String Iterator.prototype.next called on incompatible receiver",
        ),
      );
    }

    const iterator = yield* thisArg.nextEvaluator();
    return yield* createIteratorResultObject(
      iterator.value,
      iterator.done,
      realm,
    );
  },
};

export default stringIteratorProtoNextDeclaration;
