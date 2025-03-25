import {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import { isStaticJsValue, StaticJsValue } from "../interfaces/index.js";
import StaticJsEnvArray from "./StaticJsEnvArray.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

import {
  EvaluationContext,
  EvaluationGenerator,
} from "../../../evaluator/internal.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import { setupEnvironment } from "../../../evaluator/node-evaluators/index.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/index.js";

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
    super(
      name,
      function* (thisArg, ...args): EvaluationGenerator<StaticJsValue> {
        const functionEnv = new StaticJsLexicalEnvironment(
          new StaticJsFunctionEnvironmentRecord(bound ?? thisArg, args),
          context.env,
        );

        const functionContext: EvaluationContext = {
          realm: context.realm,
          env: functionEnv,
        };

        yield* self._declareArguments(args, functionContext);

        setupEnvironment(body, functionContext);

        const evaluationResult = yield* EvaluateNodeCommand(
          body,
          functionContext,
        );

        if (evaluationResult == null) {
          if (body.type === "BlockStatement") {
            // Block had no return statement.
            return StaticJsEnvUndefined.Instance;
          } else {
            throw new Error("Expression did not evaluate to a value");
          }
        }

        if (!isStaticJsValue(evaluationResult)) {
          throw new Error("Evaluation result was not a static JS value");
        }

        return evaluationResult;
      },
    );

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
