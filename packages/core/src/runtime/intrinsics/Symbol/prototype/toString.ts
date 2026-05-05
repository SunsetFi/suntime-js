import { toString } from "../../../algorithms/to-string.js";
import { StaticJsSymbolBoxed } from "../../../types/implementation/primitives/StaticJsSymbolBoxed.js";
import { isStaticJsSymbol } from "../../../types/StaticJsSymbol.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const symbolProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (isStaticJsSymbol(thisArg)) {
      return realm.types.string(`Symbol(${thisArg.description})`);
    }
    if (thisArg instanceof StaticJsSymbolBoxed) {
      return realm.types.string(`Symbol(${thisArg.value.description})`);
    }

    return yield* toString(thisArg);
  },
};

export default symbolProtoToStringDeclaration;
