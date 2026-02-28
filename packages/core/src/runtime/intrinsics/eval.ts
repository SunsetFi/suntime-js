import type { File } from "@babel/types";

import StaticJsSyntaxError from "../../errors/StaticJsSyntaxError.js";

import parseScript from "../../parser/parse-script.js";

import StaticJsDeclarativeEnvironmentRecord from "../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import EvaluationContext from "../../evaluator/EvaluationContext.js";

import { Completion } from "../../evaluator/completions/Completion.js";

import evalDeclarationInstantiation from "../../evaluator/instantiation/eval-declaration-instantiation.js";

import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";

import Q from "../../evaluator/completions/Q.js";

import toString from "../algorithms/to-string.js";
import getValue from "../algorithms/get-value.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectEvalDeclaration: IntrinsicPropertyDeclaration = {
  key: "eval",
  *func(realm, _thisArg, str) {
    str = yield* toString(str ?? realm.types.undefined, realm);

    let node: File;
    try {
      node = parseScript(str.value);
    } catch (e: unknown) {
      if (e instanceof StaticJsSyntaxError) {
        throw Completion.Throw(realm.types.error("SyntaxError", e.message));
      }

      throw e;
    }

    const strict = node.program.directives.some(
      (dir) => dir.value.value === "use strict",
    );

    let context = EvaluationContext.createRootContext(
      strict,
      realm,
      realm.globalEnv,
    );

    const lexEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    const varEnv = strict ? lexEnv : context.variableEnv;

    context = context.createLexicalAndVariableEnvContext(lexEnv, varEnv);

    yield* evalDeclarationInstantiation(node, context.strict, context);

    const result = yield* Q(EvaluateNodeCommand(node, context));
    if (!result) {
      return realm.types.undefined;
    }

    return yield* getValue(result, context.realm);
  },
};

export default globalObjectEvalDeclaration;
