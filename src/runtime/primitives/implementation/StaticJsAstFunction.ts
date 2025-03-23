import {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import { StaticJsValue } from "../interfaces/index.js";
import StaticJsEnvArray from "./StaticJsEnvArray.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

import {
  EvaluationContext,
  isControlFlowEvaluationResult,
} from "../../../evaluator/index.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import {
  evaluateNode,
  setupEnvironment,
} from "../../../evaluator/node-evaluators/index.js";
import { runUntilCompletion } from "../../../evaluator/evaluator-runtime.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstFunction extends StaticJsExternalFunction {
  constructor(
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    bound?: StaticJsValue,
  ) {
    super(name, (thisArg, ...args) => {
      const functionEnv = new StaticJsLexicalEnvironment(
        new StaticJsFunctionEnvironmentRecord(bound ?? thisArg, args),
        context.env,
      );

      const functionContext: EvaluationContext = {
        realm: context.realm,
        env: functionEnv,
      };
      this._declareArguments(args, functionContext);

      setupEnvironment(body, functionContext);

      const evaluationResult = runUntilCompletion(
        evaluateNode(body, {
          realm: context.realm,
          env: functionEnv,
        }),
      );

      if (evaluationResult == null) {
        if (body.type === "BlockStatement") {
          // Block had no return statement.
          return StaticJsEnvUndefined.Instance;
        } else {
          throw new Error("Expression did not evaluate to a value");
        }
      }

      if (isControlFlowEvaluationResult(evaluationResult)) {
        throw new Error(
          "Control flow statements are not allowed in function bodies",
        );
      }

      return evaluationResult;
    });
  }

  private _declareArguments(args: StaticJsValue[], context: EvaluationContext) {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = new StaticJsEnvArray(args.slice(i));
        // FIXME: Make generator
        runUntilCompletion(
          setLVal(decl.argument, value, context, (name, value) => {
            context.env.createMutableBinding(name, false);

            // Strict mode is whatever; our binding is created above.
            context.env.setMutableBinding(name, value, true);
          }),
        );
        return;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? StaticJsEnvUndefined.Instance;

      // FIXME: make generator
      runUntilCompletion(
        setLVal(decl, value, context, (name, value) => {
          context.env.createMutableBinding(name, false);

          // Strict mode is whatever; our binding is created above.
          context.env.setMutableBinding(name, value, true);
        }),
      );
    }
  }
}
