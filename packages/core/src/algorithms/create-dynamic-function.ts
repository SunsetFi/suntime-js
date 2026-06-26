import {
  blockStatement,
  functionDeclaration,
  type FunctionParameter,
  type Program,
} from "@babel/types";

import { StaticJsSyntaxError } from "#errors/StaticJsSyntaxError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { Prototypes } from "#intrinsics/intrinsics.js";
import { parseFunctionBody } from "#parser/parse-function-body.js";
import { parseParameters } from "#parser/parse-parameters.js";
import type { StaticJsCallable } from "#types/StaticJsCallable.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";
import { getPrototypeFromConstructor } from "./get-prototype-from-constructor.js";
import { ordinaryFunctionCreate } from "./ordinary-function-create.js";
import { setFunctionName } from "./set-function-name.js";
import { toString } from "./to-string.js";

export function* createDynamicFunction(
  constructor: StaticJsCallable,
  newTarget: StaticJsCallable | undefined,
  kind: "normal" | "generator" | "async" | "async-generator",
  parameterArgs: StaticJsValue[],
  bodyArg: StaticJsValue,
): EvaluationGenerator<StaticJsCallable> {
  if (!newTarget) {
    newTarget = constructor;
  }

  let prefix: string;
  let fallbackProto: keyof Prototypes;
  let async = false;
  let generator = false;
  if (kind === "normal") {
    prefix = "function";
    fallbackProto = "Function.prototype";
  } else if (kind === "generator") {
    prefix = "function*";
    generator = true;
    fallbackProto = "GeneratorFunction.prototype";
  } else if (kind === "async") {
    prefix = "async function";
    async = true;
    fallbackProto = "AsyncFunction.prototype";
  } else {
    prefix = "async function*";
    async = true;
    generator = true;
    fallbackProto = "AsyncGeneratorFunction.prototype";
  }

  let argCount = parameterArgs.length;
  let parameterStrings: string[] = [];
  for (const arg of parameterArgs) {
    const str = yield* toString.js(arg);
    parameterStrings.push(str);
  }

  const bodyString = yield* toString.js(bodyArg);

  const { realm: currentRealm, scriptOrModule } = EvaluationContext.current;

  let parameterString = "";

  if (argCount > 0) {
    parameterString = parameterStrings[0];
    let k = 1;
    while (k < argCount) {
      const nextArgString = parameterStrings[k];
      parameterString += `,${nextArgString}`;
      k++;
    }
  }

  const bodyParseString = `\n${bodyString}\n`;
  const sourceString = `${prefix} anonymous(${parameterString}\n){${bodyParseString}}`;
  // Weird speccy stuff:
  // Spec says params come first, but test262 says params need to be validated based on the body strictness.
  // Maybe this is because the spec tests syntax errors after parsing.

  let body: Program;
  try {
    body = parseFunctionBody(bodyParseString, {
      async,
      generator,
      module: scriptOrModule?.type === "module",
    });
  } catch (e) {
    if (e instanceof StaticJsSyntaxError) {
      throw yield* Completion.Throw.create("SyntaxError", e.message);
    }

    throw e;
  }

  const localStrict = body.directives.some((d) => d.value.value === "use strict");

  let parameters: FunctionParameter[];
  try {
    parameters = parseParameters(parameterString, { strict: localStrict });
  } catch (e) {
    if (e instanceof StaticJsSyntaxError) {
      throw yield* Completion.Throw.create("SyntaxError", e.message);
    }

    throw e;
  }

  const fnBody = blockStatement(body.body, body.directives);
  const fn = functionDeclaration(null, parameters, fnBody, generator, async);

  const proto = yield* getPrototypeFromConstructor(newTarget, fallbackProto);
  const env = currentRealm.globalEnv;
  const privateEnv = null;
  const func = yield* ordinaryFunctionCreate(
    proto,
    sourceString,
    parameters,
    fn,
    "non-lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(func, "anonymous");

  if (kind === "generator") {
    const prototype = currentRealm.types.object(
      undefined,
      currentRealm.intrinsics["GeneratorPrototype"],
    );
    yield* definePropertyOrThrow(func, "prototype", {
      value: prototype,
      writable: true,
      enumerable: false,
      configurable: false,
    });
  } else if (kind === "async-generator") {
    const prototype = currentRealm.types.object(
      undefined,
      currentRealm.intrinsics["AsyncGeneratorPrototype"],
    );
    yield* definePropertyOrThrow(func, "prototype", {
      value: prototype,
      writable: true,
      enumerable: false,
      configurable: false,
    });
  } else if (kind === "normal") {
    yield* func.makeConstructor();
  }

  return func;
}
