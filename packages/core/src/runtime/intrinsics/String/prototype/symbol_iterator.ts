import toString from "../../../algorithms/to-string.js";

import { isStaticJsNull } from "../../../types/StaticJsNull.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import codePointAt from "../../../algorithms/code-point-at.js";

import createIteratorFromClosure from "../../../iterators/create-iterator-from-closure.js";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const stringProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (realm) => realm.types.symbols.iterator,
  *func(realm, thisArg = realm.types.undefined) {
    if (isStaticJsNull(thisArg) || isStaticJsUndefined(thisArg)) {
      throw Completion.Throw(
        realm.types.error(
          "TypeError",
          "String.prototype[Symbol.iterator] called on null or undefined",
        ),
      );
    }

    const str = yield* toString.js(thisArg, realm);

    function* stringIterationGenerator(): EvaluationGenerator<StaticJsValue> {
      const len = str.length;
      let position = 0;
      while (position < len) {
        const cp = codePointAt(str, position);
        const nextIndex = position + cp.codeUnitCount;
        const resultString = str.slice(position, nextIndex);

        position = nextIndex;

        const result = realm.types.string(resultString);
        yield* YieldCommand(result);
      }
      return realm.types.undefined;
    }

    return yield* createIteratorFromClosure(
      stringIterationGenerator(),
      "%StringIteratorPrototype%",
      realm.types.prototypes.stringIteratorProto,
      realm,
    );
  },
};

export default stringProtoSymbolIteratorDeclaration;
