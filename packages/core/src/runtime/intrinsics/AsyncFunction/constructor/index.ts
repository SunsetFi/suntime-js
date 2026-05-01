import { blockStatement, functionDeclaration, Program } from "@babel/types";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { parseFunctionBody } from "../../../../parser/parse-function-body.js";
import { parseParameters } from "../../../../parser/parse-parameters.js";
import { setFunctionName } from "../../../algorithms/set-function-name.js";
import { toString } from "../../../algorithms/to-string.js";
import { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import {
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
} from "../../../types/implementation/functions/StaticJsAstFunction.js";
import { StaticJsNativeFunctionImpl } from "../../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import { StaticJsCallable } from "../../../types/StaticJsCallable.js";
import { StaticJsObject } from "../../../types/StaticJsObject.js";

export function createAsyncFunctionConstructor(
  realm: StaticJsRealm,
  asyncFunctionProto: StaticJsObject,
  functionConstructor: StaticJsCallable,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "AsyncFunction",
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
        body = parseFunctionBody(bodyStr.value, { async: true });
      } catch {
        throw Completion.Throw("SyntaxError", "Failed to parse function body");
      }

      // FIXME: Should use the ScriptOrModule of the definer.
      // This will break stack traces, once we get them.
      // Normally, we would get this from GetActiveScriptOrModule, but we don't have any global state.
      const context = EvaluationContext.createRootContext(null, false, realm);

      const fnBody = blockStatement(body.body, body.directives);
      const fn = functionDeclaration(null, parameters, fnBody);

      const func = new StaticJsAstFunction(realm, fn, {
        thisMode: "non-lexical-this",
        strict: context.strict,
        env: context.lexicalEnv,
        scriptOrModule: context.scriptOrModule,
      });

      yield* setFunctionName(func, "");

      return func;
    },
    { prototype: functionConstructor, construct: true },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: asyncFunctionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });

  asyncFunctionProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
