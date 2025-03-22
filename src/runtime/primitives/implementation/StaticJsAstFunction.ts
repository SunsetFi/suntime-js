import {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import {
  evaluateNode,
  isControlFlowEvaluationResult,
  setupEnvironment,
} from "../../../evaluator/node-evaluators/index.js";
import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import { StaticJsValue } from "../interfaces/index.js";
import StaticJsEnvArray from "./StaticJsEnvArray.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";

import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import { NodeEvaluationContext } from "../../../evaluator/node-evaluators/node-evaluation-context.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstFunction extends StaticJsExternalFunction {
  constructor(
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: NodeEvaluationContext,
    body: BlockStatement | Expression,
    bound?: StaticJsValue,
  ) {
    super(name, (thisArg, ...args) => {
      const functionEnv = new StaticJsLexicalEnvironment(
        new StaticJsFunctionEnvironmentRecord(bound ?? thisArg, args),
        context.env,
      );

      const functionContext: NodeEvaluationContext = {
        realm: context.realm,
        env: functionEnv,
      };
      this._declareArguments(args, functionContext);

      setupEnvironment(body, functionContext);
      const evaluationResult = evaluateNode(body, {
        realm: context.realm,
        env: functionEnv,
      });

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

  private _declareArguments(
    args: StaticJsValue[],
    context: NodeEvaluationContext,
  ) {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = new StaticJsEnvArray(args.slice(i));
        setLVal(decl.argument, value, context, (name, value) => {
          context.env.createMutableBinding(name, false);

          // Strict mode is whatever; our binding is created above.
          context.env.setMutableBinding(name, value, true);
        });
        return;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? StaticJsEnvUndefined.Instance;

      setLVal(decl, value, context, (name, value) => {
        context.env.createMutableBinding(name, false);

        // Strict mode is whatever; our binding is created above.
        context.env.setMutableBinding(name, value, true);
      });
    }
  }
}
