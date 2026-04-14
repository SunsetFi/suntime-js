import { blockStatement, functionDeclaration, type Program } from "@babel/types";

import { parseParameters } from "../../../parser/parse-parameters.js";
import { parseFunctionBody } from "../../../parser/parse-function-body.js";

import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toString from "../../algorithms/to-string.js";
import definePropertyOrThrow from "../../algorithms/define-property-or-throw.js";
import { setFunctionName } from "../../algorithms/set-function-name.js";

import type { StaticJsObject } from "../../types/StaticJsObject.js";

import { StaticJsNativeFunctionImpl } from "../../types/implementation/functions/StaticJsNativeFunctionImpl.js";
import {
  StaticJsAstFunction,
  StaticJsAstFunctionArgument,
} from "../../types/implementation/functions/StaticJsAstFunction.js";

export default function createAsyncGeneratorFunctionConstructor(
  realm: StaticJsRealm,
  asyncGeneratorFunctionProto: StaticJsObject,
) {
  const ctor = new StaticJsNativeFunctionImpl(
    realm,
    "AsyncGeneratorFunction",
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

      const fnBody = blockStatement(body.body, body.directives);
      const fn = functionDeclaration(null, parameters, fnBody, false, true);

      const func = new StaticJsAstFunction(realm, fn, {
        thisMode: "non-lexical-this",
        strict: false,
        env: realm.globalEnv,
        scriptOrModule: null,
        construct: false,
      });

      yield* setFunctionName(func, "");

      const prototype = realm.types.object(undefined, realm.types.prototypes.asyncGeneratorProto);
      yield* definePropertyOrThrow(func, "prototype", {
        value: prototype,
        writable: true,
        enumerable: false,
        configurable: false,
      });

      return func;
    },
    {
      // What should this be???
      construct: true,
      length: 1,
    },
  );

  ctor.defineOwnPropertySync("prototype", {
    value: asyncGeneratorFunctionProto,
    writable: false,
    enumerable: false,
    configurable: false,
  });
  asyncGeneratorFunctionProto.defineOwnPropertySync("constructor", {
    value: ctor,
    writable: true,
    enumerable: false,
    configurable: true,
  });

  return ctor;
}
