import type { Program } from "@babel/types";

import parseFunctionBody from "../../../parser/parse-function-body.js";

import EvaluationContext from "../../../evaluator/EvaluationContext.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import createFunction from "../../../evaluator/node-evaluators/Function.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsFunctionImpl from "../../types/implementation/StaticJsFunctionImpl.js";
import StaticJsDeclFunction from "../../types/implementation/StaticJsDeclFunction.js";
import type { StaticJsObject } from "../../types/StaticJsObject.js";

import toString from "../../algorithms/to-string.js";

export { default as populateFunctionPrototype } from "./prototype/index.js";

export function createFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsFunctionImpl(
    realm,
    "Function",
    function* (_thisArg, ...args) {
      // TODO: Previous args are formal parameters
      const bodyStrValue =
        args.length > 0 ? args[args.length - 1] : realm.types.string("");

      const bodyStr = yield* toString(bodyStrValue, realm);

      // We don't really have a proper Node type to represent a function body...
      let body: Program;
      try {
        body = parseFunctionBody(bodyStr.value);
      } catch {
        throw new ThrowCompletion(
          realm.types.error("SyntaxError", "Failed to parse function body"),
        );
      }

      const context = EvaluationContext.createRootContext(false, realm);

      return new StaticJsDeclFunction(
        realm,
        "anonymous",
        [],
        context,
        body,
        createFunction,
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
