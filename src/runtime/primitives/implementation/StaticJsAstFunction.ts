import {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import {
  Completion,
  EvaluationContext,
  EvaluationGenerator,
  NormalCompletion,
} from "../../../evaluator/internal.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import { setupEnvironment } from "../../../evaluator/node-evaluators/index.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/index.js";

import { StaticJsValue } from "../interfaces/index.js";

import StaticJsEnvArray from "./StaticJsEnvArray.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
import StaticJsEnvFunction from "./StaticJsEnvFunction.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstFunction extends StaticJsEnvFunction {
  constructor(
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    bound?: StaticJsValue,
  ) {
    let self: StaticJsAstFunction;
    super(name, function* (thisArg, ...args): EvaluationGenerator<Completion> {
      const functionEnv = new StaticJsLexicalEnvironment(
        new StaticJsFunctionEnvironmentRecord(bound ?? thisArg, args),
        context.env,
      );

      const functionContext: EvaluationContext = {
        realm: context.realm,
        env: functionEnv,
        label: null,
      };

      yield* self._declareArguments(args, functionContext);

      setupEnvironment(body, functionContext);

      const evaluationCompletion = yield* EvaluateNodeCommand(
        body,
        functionContext,
      );

      switch (evaluationCompletion.type) {
        case "break":
        case "continue":
          throw new Error("Unexpected break/continue in function");
        case "return":
        case "throw":
          return evaluationCompletion;
      }

      return NormalCompletion();
    });

    self = this;
  }

  private *_declareArguments(
    args: StaticJsValue[],
    context: EvaluationContext,
  ): EvaluationGenerator<void> {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = new StaticJsEnvArray(args.slice(i));
        yield* setLVal(decl.argument, value, context, (name, value) => {
          context.env.createMutableBinding(name, false);

          // Strict mode is whatever; our binding is created above.
          context.env.setMutableBinding(name, value, true);
        });
        return;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? StaticJsEnvUndefined.Instance;

      yield* setLVal(decl, value, context, (name, value) => {
        context.env.createMutableBinding(name, false);

        // Strict mode is whatever; our binding is created above.
        context.env.setMutableBinding(name, value, true);
      });
    }
  }
}
