import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { toObject } from "../../../algorithms/to-object.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const objectCtorGetOwnPropertySymbolsDeclaration: IntrinsicPropertyDeclaration = {
  key: "getOwnPropertySymbols",
  length: 1,
  *func(realm, _thisArg, objValue = realm.types.undefined) {
    const obj = yield* toObject(objValue);

    const keys = yield* obj.ownPropertyKeysEvaluator();
    const symbols = keys.filter(isStaticJsSymbol);
    return yield* createArrayFromList(symbols);
  },
};

export default objectCtorGetOwnPropertySymbolsDeclaration;
