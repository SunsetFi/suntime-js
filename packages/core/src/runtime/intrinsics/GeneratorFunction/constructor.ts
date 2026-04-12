import { blockStatement, functionDeclaration, type Program } from "@babel/types";

import { parseParameters } from "../../../parser/parse-parameters.js";
import { parseFunctionBody } from "../../../parser/parse-function-body.js";

import { EvaluationContext } from "../../../evaluator/EvaluationContext.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import { createFunction } from "../../../evaluator/node-evaluators/Function.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";

import type { StaticJsAstFunctionArgument } from "../../types/implementation/functions/StaticJsAstFunctionArgument.js";
import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsGeneratorDeclFunction } from "../../types/implementation/functions/StaticJsGeneratorDeclFunction.js";

export default function createGeneratorFunctionConstructor(
  realm: StaticJsRealm,
  functionProto: StaticJsObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "GeneratorFunction",
    function* (_thisArg, ...args) {
      const paramValues = args.length > 1 ? args.slice(0, -1) : [];
      const bodyStrValue = args.length > 0 ? args[args.length - 1] : realm.types.string("");

      const parameters: StaticJsAstFunctionArgument[] = [];
      for (const paramValue of paramValues) {
        try {
          const paramStr = yield* toString.js(paramValue);
          const parseParams = parseParameters(paramStr);
          parameters.push(...parseParams);
        } catch (e) {
          if (e instanceof SyntaxError) {
            throw Completion.Throw("SyntaxError", "Arg string terminates parameters early");
          }

          throw e;
        }
      }

      const bodyStr = yield* toString(bodyStrValue);

      // We don't really have a proper Node type to represent a function body...
      let body: Program;
      try {
        body = parseFunctionBody(bodyStr.value);
      } catch {
        throw Completion.Throw("SyntaxError", "Failed to parse function body");
      }

      // FIXME: Should use the ScriptOrModule of the definer.
      // This will break stack traces, once we get them.
      // Normally, we would get this from GetActiveScriptOrModule, but we don't have any global state.
      const context = EvaluationContext.createRootContext(null, false, realm);

      const fnBody = blockStatement(body.body, body.directives);
      const fn = functionDeclaration(null, parameters, fnBody, false, true);

      return new StaticJsGeneratorDeclFunction(
        realm,
        parameters,
        fn,
        {
          strict: context.strict,
          env: context.lexicalEnv,
          scriptOrModule: context.scriptOrModule,
        },
        createFunction,
      );
    },
    {
      // What should this be???
      construct: true,
      length: 1,
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: functionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  functionProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
