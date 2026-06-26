import type { FunctionExpression } from "@babel/types";

import { EvaluationContext } from "../evaluator/EvaluationContext.js";
import { EvaluationGenerator } from "../evaluator/EvaluationGenerator.js";
import { verifyNoTsParameterProperties } from "../grammar/verify-no-ts-parameter-properties.js";
import type { StaticJsFunction } from "../runtime/types/StaticJsFunction.js";
import type { StaticJsPrivateName } from "../runtime/types/StaticJsPrivateName.js";
import type { StaticJsPropertyKey } from "../runtime/types/StaticJsPropertyKey.js";

import { definePropertyOrThrow } from "./define-property-or-throw.js";
import { ordinaryFunctionCreate } from "./ordinary-function-create.js";
import { setFunctionName } from "./set-function-name.js";

export function* instantiateFunctionExpression(
  node: FunctionExpression,
  name: StaticJsPropertyKey | StaticJsPrivateName | null,
): EvaluationGenerator<StaticJsFunction> {
  if (node.async) {
    if (node.generator) {
      return yield* instantiateAsyncGeneratorFunctionExpression(node, name);
    }

    return yield* instantiateAsyncFunctionExpression(node, name);
  } else if (node.generator) {
    return yield* instantiateGeneratorFunctionExpression(node, name);
  }

  return yield* instantiateOrdinaryFunctionExpression(node, name);
}

function* instantiateOrdinaryFunctionExpression(
  node: FunctionExpression,
  name: StaticJsPropertyKey | StaticJsPrivateName | null,
): EvaluationGenerator<StaticJsFunction> {
  verifyNoTsParameterProperties(node.params);

  if (!name) {
    name = "";
  }

  const { realm, lexicalEnv: env, privateEnv, scriptOrModule } = EvaluationContext.current;
  const sourceText = scriptOrModule?.ecmaScriptSource.slice(node.start!, node.end!) ?? "";
  const closure = yield* ordinaryFunctionCreate(
    realm.intrinsics["Function.prototype"],
    sourceText,
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(closure, name);

  yield* closure.makeConstructor();

  return closure;
}

function* instantiateGeneratorFunctionExpression(
  node: FunctionExpression,
  name: StaticJsPropertyKey | StaticJsPrivateName | null,
): EvaluationGenerator<StaticJsFunction> {
  verifyNoTsParameterProperties(node.params);

  if (!name) {
    name = "";
  }

  const { realm, lexicalEnv: env, privateEnv, scriptOrModule } = EvaluationContext.current;
  const sourceText = scriptOrModule?.ecmaScriptSource.slice(node.start!, node.end!) ?? "";
  const closure = yield* ordinaryFunctionCreate(
    realm.intrinsics["GeneratorFunction.prototype"],
    sourceText,
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(closure, name);

  const prototype = realm.types.object(undefined, realm.intrinsics.GeneratorPrototype);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return closure;
}

function* instantiateAsyncGeneratorFunctionExpression(
  node: FunctionExpression,
  name: StaticJsPropertyKey | StaticJsPrivateName | null,
): EvaluationGenerator<StaticJsFunction> {
  verifyNoTsParameterProperties(node.params);

  if (!name) {
    name = "";
  }

  const { realm, lexicalEnv: env, privateEnv, scriptOrModule } = EvaluationContext.current;
  const sourceText = scriptOrModule?.ecmaScriptSource.slice(node.start!, node.end!) ?? "";
  const closure = yield* ordinaryFunctionCreate(
    realm.intrinsics["AsyncGeneratorFunction.prototype"],
    sourceText,
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(closure, name);

  const prototype = realm.types.object(undefined, realm.intrinsics.AsyncGeneratorPrototype);
  yield* definePropertyOrThrow(closure, "prototype", {
    value: prototype,
    writable: true,
    enumerable: false,
    configurable: false,
  });

  return closure;
}

function* instantiateAsyncFunctionExpression(
  node: FunctionExpression,
  name: StaticJsPropertyKey | StaticJsPrivateName | null,
): EvaluationGenerator<StaticJsFunction> {
  verifyNoTsParameterProperties(node.params);

  if (!name) {
    name = "";
  }

  const { realm, lexicalEnv: env, privateEnv, scriptOrModule } = EvaluationContext.current;
  const sourceText = scriptOrModule?.ecmaScriptSource.slice(node.start!, node.end!) ?? "";
  const closure = yield* ordinaryFunctionCreate(
    realm.intrinsics["AsyncFunction.prototype"],
    sourceText,
    node.params,
    node,
    "non-lexical-this",
    env,
    privateEnv,
  );

  yield* setFunctionName(closure, name);
  return closure;
}
