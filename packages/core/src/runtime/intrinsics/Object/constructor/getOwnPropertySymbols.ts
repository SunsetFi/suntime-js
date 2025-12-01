import toObject from "../../../algorithms/to-object.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertySymbolsDeclaration: IntrinsicPropertyDeclaration =
  {
    key: "getOwnPropertySymbols",
    *func(realm, _thisArg, objValue) {
      const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

      const keys = yield* obj.ownPropertyKeysEvaluator();
      const symbols = keys.filter(isStaticJsSymbol);
      return realm.types.array(symbols);
    },
  };

export default objectCtorGetOwnPropertySymbolsDeclaration;
