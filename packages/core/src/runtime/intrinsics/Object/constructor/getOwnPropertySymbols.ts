import toObject from "../../../algorithms/to-object.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGetOwnPropertySymbolsDeclaration: IntrinsicPropertyDeclaration =
  {
    key: "getOwnPropertySymbols",
    *func(realm, _thisArg, objValue) {
      const obj = yield* toObject(objValue ?? realm.types.undefined, realm);

      const ownSymbols = yield* obj.getOwnSymbolsEvaluator();

      return realm.types.array(ownSymbols);
    },
  };

export default objectCtorGetOwnPropertySymbolsDeclaration;
