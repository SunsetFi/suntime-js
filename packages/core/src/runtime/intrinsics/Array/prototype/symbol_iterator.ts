import toObject from "../../../algorithms/to-object.js";
import StaticJsFunctionImpl from "../../../types/implementation/StaticJsFunctionImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import getLength from "./utils/get-length.js";

const arrayProtoSymbolIteratorDeclaration: IntrinsicPropertyDeclaration = {
  key: (_realm, symbols) => symbols.iterator,
  *func2({ realm, prototypes }, thisArg) {
    let index = 0;

    thisArg = yield* toObject(thisArg ?? realm.types.undefined, realm);

    const nextFunc = new StaticJsFunctionImpl(
      realm,
      "next",
      function* () {
        const length = yield* getLength(realm, thisArg);
        if (index < length) {
          const value = yield* thisArg.getPropertyEvaluator(String(index));

          index++;

          return realm.types.object({
            value: {
              value,
              writable: true,
              enumerable: true,
              configurable: true,
            },
            done: {
              value: realm.types.false,
              writable: true,
              enumerable: true,
              configurable: true,
            },
          });
        }

        return realm.types.object({
          value: {
            value: realm.types.undefined,
            writable: true,
            enumerable: true,
            configurable: true,
          },
          done: {
            value: realm.types.true,
            writable: true,
            enumerable: true,
            configurable: true,
          },
        });
      },
      { prototype: prototypes.functionProto },
    );

    const iteratorObj = realm.types.object(
      {
        next: {
          value: nextFunc,
          writable: true,
          enumerable: false,
          configurable: true,
        },
      },
      prototypes.iteratorProto,
    );

    return iteratorObj;
  },
};

export default arrayProtoSymbolIteratorDeclaration;
