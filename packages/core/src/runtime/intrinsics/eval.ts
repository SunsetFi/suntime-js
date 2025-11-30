import type { Node } from "@babel/types";

import StaticJsSyntaxError from "../../errors/StaticJsSyntaxError.js";

import parseScript from "../../parser/parse-script.js";

import StaticJsDeclarativeEnvironmentRecord from "../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../../evaluator/EvaluationContext.js";

import { ThrowCompletion } from "../../evaluator/completions/ThrowCompletion.js";

import evalDeclarationInstantiation from "../../evaluator/instantiation/eval-declaration-instantiation.js";

import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";

import toString from "../algorithms/to-string.js";
import getValue from "../algorithms/get-value.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectEvalDeclaration: IntrinsicPropertyDeclaration = {
  key: "eval",
  *func(realm, _thisArg, str) {
    str = yield* toString(str ?? realm.types.undefined, realm);

    let node: Node;
    try {
      node = parseScript(str.value);
    } catch (e: unknown) {
      if (e instanceof StaticJsSyntaxError) {
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
    context = context.createLexicalEnvContext(
      StaticJsDeclarativeEnvironmentRecord.from(context),
    );

    yield* evalDeclarationInstantiation(node, context.strict, context);

    const result = yield* EvaluateNodeCommand(node, context);
    if (!result) {
      return realm.types.undefined;
    }

    return yield* getValue(result, context.realm);
  },
};

export default globalObjectEvalDeclaration;
