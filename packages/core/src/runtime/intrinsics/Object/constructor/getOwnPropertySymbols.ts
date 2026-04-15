import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";

const objectCtorGetOwnPropertySymbolsDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertySymbols",
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    const keys = yield* obj.ownPropertyKeysEvaluator();
    const symbols = keys.filter(isStaticJsSymbol);
    return yield* createArrayFromList(symbols);
  },
};

export default objectCtorGetOwnPropertySymbolsDeclaration;
