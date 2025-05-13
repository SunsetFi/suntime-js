import {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import Completion from "../../../evaluator/completions/Completion.js";
import EvaluationContext from "../../../evaluator/EvaluationContext.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import { setupEnvironment } from "../../../evaluator/node-evaluators/index.js";
import { EvaluateNodeCommand } from "../../../evaluator/commands/index.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/index.js";

import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";
import StaticJsEngineError from "../../../evaluator/StaticJsEngineError.js";
import { isThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstFunction extends StaticJsFunctionImpl {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    private readonly _context: EvaluationContext,
    private readonly _body: BlockStatement | Expression,
    private readonly _bound?: StaticJsValue,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args));

    this.defineProperty("prototype", {
      value: realm.types.object({
        constructor: {
          value: this,
          writable: true,
          enumerable: false,
          configurable: true,
        },
      }),
      writable: true,
      enumerable: false,
      configurable: false,
    });
  }

  private *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<Completion> {
    const functionEnv = new StaticJsLexicalEnvironment(
      this.realm,
      new StaticJsFunctionEnvironmentRecord(
        this.realm,
        this._bound ?? thisArg,
        args,
      ),
      this._context.env,
    );

    const functionContext: EvaluationContext = {
      realm: this._context.realm,
      env: functionEnv,
      label: null,
    };

    const completion = yield* this._declareArguments(args, functionContext);
    if (completion.type !== "normal") {
      return completion;
    }

    const setupBodyResult = yield* setupEnvironment(
      this._body,
      functionContext,
    );
    if (isThrowCompletion(setupBodyResult)) {
      return setupBodyResult;
    }

    const evaluationCompletion = yield* EvaluateNodeCommand(
      this._body,
      functionContext,
    );

    switch (evaluationCompletion.type) {
      case "break":
      case "continue":
        throw new StaticJsEngineError("Unexpected break/continue in function");
      case "return":
        return NormalCompletion(evaluationCompletion.value);
      case "throw":
        return evaluationCompletion;
    }

    return NormalCompletion();
  }

  private *_declareArguments(
    args: StaticJsValue[],
    context: EvaluationContext,
  ): EvaluationGenerator {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = this.realm.types.array(args.slice(i));
        const completion = yield* setLVal(
          decl.argument,
          value,
          context,
          function* (name, value) {
            const result = yield* context.env.createMutableBindingEvaluator(
              name,
              false,
            );
            if (isThrowCompletion(result)) {
              return result;
            }

            // Strict mode is whatever; our binding is created above.
            yield* context.env.setMutableBindingEvaluator(name, value, true);
          },
        );

        if (completion.type !== "normal") {
          return completion;
        }

        break;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? this.realm.types.undefined;

      const completion = yield* setLVal(
        decl,
        value,
        context,
        function* (name, value) {
          const result = yield* context.env.createMutableBindingEvaluator(
            name,
            false,
          );
          if (isThrowCompletion(result)) {
            return result;
          }

          // Strict mode is whatever; our binding is created above.
          yield* context.env.setMutableBindingEvaluator(name, value, true);
        },
      );

      if (completion.type !== "normal") {
        return completion;
      }
    }

    return NormalCompletion();
  }
}
