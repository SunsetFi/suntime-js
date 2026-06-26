import { Completion } from "../../../evaluator/completions/Completion.js";
import { StaticJsAstFunction } from "../../../types/implementation/functions/StaticJsAstFunction.js";
import { isStaticJsCallable } from "../../../types/StaticJsCallable.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const functionProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (thisArg instanceof StaticJsAstFunction) {
      return realm.types.string(thisArg.sourceText);
    }

    if (isStaticJsFunction(thisArg)) {
      // The spec has some other weirdness here around native accessors...
      return realm.types.string(`function ${thisArg.initialName}() { [ native code ] }`);
    }

    if (isStaticJsCallable(thisArg)) {
      return realm.types.string("function anonymous() { [ native code ] }");
    }

    throw yield* Completion.Throw.create(
      "TypeError",
      "Function.prototype.toString called on incompatible receiver.",
    );
  },
};
