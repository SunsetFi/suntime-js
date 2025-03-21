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
} from "../../../evaluator/node-evaluators/index.js";
import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import StaticJsEnvironment from "../../StaticJsEnvironment.js";

import { StaticJsValue } from "../interfaces/index.js";
import { StaticJsArray, StaticJsUndefined } from "../factories/index.js";

import StaticJsRuntimeFunction from "./StaticJsRuntimeFunction.js";

export type StaticJsEnvFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsEnvFunction extends StaticJsRuntimeFunction {
  constructor(
    name: string | null,
    private readonly _argumentDeclarations: StaticJsEnvFunctionArgumentDeclaration[],
    body: BlockStatement | Expression,
    bound?: StaticJsValue,
  ) {
    super(name, (env, ...args) => {
      return env.withScope(
        { thisObj: bound ?? env.currentScope.thisObj },
        () => {
          this._declareArguments(env, args);

          const evaluationResult = evaluateNode(body, env);
          if (evaluationResult == null) {
            if (body.type === "BlockStatement") {
              // Block had no return statement.
              return StaticJsUndefined();
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
        },
      );
    });
  }

  private _declareArguments(env: StaticJsEnvironment, args: StaticJsValue[]) {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = StaticJsArray(args.slice(i));
        setLVal(decl.argument, value, env, (name, value) =>
          env.currentScope.declareLetProperty(name, value),
        );
        return;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? StaticJsUndefined();

      setLVal(decl, value, env, (name, value) =>
        env.currentScope.declareLetProperty(name, value),
      );
    }
  }
}
