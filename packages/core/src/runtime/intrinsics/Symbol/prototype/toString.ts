import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";
import toString from "../../../algorithms/to-string.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import StaticJsSymbolBoxed from "../../../types/implementation/StaticJsSymbolBoxed.js";

const symbolProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (isStaticJsSymbol(thisArg)) {
      return realm.types.string(`Symbol(${thisArg.description})`);
    }
    if (thisArg instanceof StaticJsSymbolBoxed) {
      return realm.types.string(`Symbol(${thisArg.value.description})`);
    }

    return yield* toString(thisArg, realm);
  },
};

export default symbolProtoToStringDeclaration;
