import { type Statement } from "@babel/types";

import parseFunctionBody from "../../../parser/parse-function-body.js";

import EvaluationContext from "../../../evaluator/EvaluationContext.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsDeclFunction from "../../types/implementation/StaticJsDeclFunction.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";
import { isStaticJsString } from "../../types/StaticJsString.js";

export { default as populateFunctionPrototype } from "./prototype/index.js";

export function createFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Function",
    function* (_thisArg, nameValue, bodyStrValue) {
      let name = "anonymous";
      if (isStaticJsString(nameValue)) {
        name = nameValue.value;
      }

      // Node seems to be very loose about this.
      let statements: Statement[] = [];
      if (isStaticJsString(bodyStrValue)) {
        try {
          statements = parseFunctionBody(bodyStrValue.value);
        } catch {
          throw new ThrowCompletion(
            realm.types.error("SyntaxError", "Failed to parse function body"),
          );
        }
      }

      const context = EvaluationContext.createRootContext(false, realm);

      return new StaticJsDeclFunction(
        realm,
        name,
        "lexical",
        [],
        context,
        statements,
      );
    },
    { prototype: functionProto, construct: true },
  );

  ctor.definePropertySync("prototype", {
    value: functionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  functionProto.definePropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
