import type { File } from "@babel/types";

import { StaticJsSyntaxError } from "../../errors/StaticJsSyntaxError.js";
import { EvaluateNodeCommand } from "../../evaluator/commands/EvaluateNodeCommand.js";
import { Completion } from "../../evaluator/completions/Completion.js";
import { Q } from "../../evaluator/completions/Q.js";
import { EvaluationContext } from "../../evaluator/EvaluationContext.js";
import evalDeclarationInstantiation from "../../evaluator/instantiation/eval-declaration-instantiation.js";
import { parseScript } from "../../parser/parse-script.js";
import { getValue } from "../algorithms/get-value.js";
import { toString } from "../algorithms/to-string.js";
import { StaticJsDeclarativeEnvironmentRecord } from "../environments/implementation/StaticJsDeclarativeEnvironmentRecord.js";

import type { IntrinsicPropertyDeclaration } from "./utils.js";

const globalObjectEvalDeclaration: IntrinsicPropertyDeclaration = {
  key: "eval",
  *func(realm, _thisArg, str = realm.types.undefined) {
    str = yield* toString(str);

    let node: File;
    try {
      node = parseScript(str.value, "eval");
    } catch (e: unknown) {
      if (e instanceof StaticJsSyntaxError) {
        throw Completion.Throw("SyntaxError", e.message);
      }

      throw e;
    }

    const strict = node.program.directives.some((dir) => dir.value.value === "use strict");

    // FIXME: Should use the ScriptOrModule of the definer.
    // This will break stack traces, once we get them.
    // Normally, we would get this from GetActiveScriptOrModule, but we don't have any global state.
    let context = EvaluationContext.createRootContext(null, strict, realm, realm.globalEnv);

    const lexEnv = StaticJsDeclarativeEnvironmentRecord.from(context);
    const varEnv = strict ? lexEnv : context.variableEnv;

    return yield* context.with({ lexicalEnv: lexEnv, variableEnv: varEnv }).run(function* () {
      yield* evalDeclarationInstantiation(node, varEnv, lexEnv, null, context.strict);

      const result = yield* Q(EvaluateNodeCommand(node));
      if (!result) {
        return realm.types.undefined;
      }

      return yield* getValue(result);
    });
  },
};

export default globalObjectEvalDeclaration;
