import { parse as parseAst } from "@babel/parser";
import type { Node } from "@babel/types";

import StaticJsDeclarativeEnvironmentRecord from "../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../../evaluator/EvaluationContext.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import setupEnvironment from "../../evaluator/node-evaluators/setup-environment.js";

import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";

import toString from "../algorithms/to-string.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectEvalDeclaration: IntrinsicPropertyDeclaration = {
  key: "eval",
  *func(realm, _thisArg, str) {
    str = yield* toString(str ?? realm.types.undefined, realm);

    let node: Node;
    try {
      node = parseAst(str.value, { sourceType: "script" });
    } catch (e: unknown) {
      if (e instanceof SyntaxError) {
        throw new ThrowCompletion(realm.types.error("SyntaxError", e.message));
      }

      throw e;
    }

    // FIXME: If this is a direct call, we need to inherit the context
    // from the caller!
    let context = EvaluationContext.createRootContext(
      false,
      realm,
      realm.globalEnv,
    );

    // FIXME: Only do this if strict mode.
    context = context.createBlockContext(
      new StaticJsDeclarativeEnvironmentRecord(realm),
    );

    yield* setupEnvironment(node, context);
    const result = yield* EvaluateNodeCommand(node, context);
    return result ?? realm.types.undefined;
  },
};

export default globalObjectEvalDeclaration;
