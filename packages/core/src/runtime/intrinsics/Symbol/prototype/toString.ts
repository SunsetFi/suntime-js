import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";
import toString from "../../../algorithms/to-string.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const symbolProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  name: "toString",
  *func(realm, thisArg) {
    if (isStaticJsSymbol(thisArg)) {
      return realm.types.string(`Symbol(${thisArg.description})`);
    }

    return yield* toString(thisArg, realm);
  },
};

export default symbolProtoToStringDeclaration;
