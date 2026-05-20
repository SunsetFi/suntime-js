import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsAstFunction } from "../../../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { isStaticJsCallable } from "../../../types/StaticJsCallable.js";
import { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const functionProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (thisArg instanceof StaticJsAstFunction) {
      return realm.types.string(thisArg.sourceText);
    }

    // Also includes StaticJsExternalFunction
    if (thisArg instanceof StaticJsNativeFunctionImpl) {
      // The spec has some other weirdness here around native accessors...
      return realm.types.string(`function ${thisArg.intitialName}() { [ native code ] }`);
    }

    if (isStaticJsCallable(thisArg)) {
      return realm.types.string("function anonymous() { [ native code ] }");
    }

    throw Completion.Throw(
      "TypeError",
      "Function.prototype.toString called on incompatible receiver.",
    );
  },
};
