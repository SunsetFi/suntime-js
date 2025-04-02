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

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/index.js";

import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

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
    // No eslint... You cant make a variable const if its assigned late...
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args));

    this.defineProperty("prototype", {
      value: realm.types.createObject(),
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

    yield* this._declareArguments(args, functionContext);

    yield* setupEnvironment(this._body, functionContext);

    const evaluationCompletion = yield* EvaluateNodeCommand(
      this._body,
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

    return NormalCompletion(null);
  }

  private *_declareArguments(
    args: StaticJsValue[],
    context: EvaluationContext,
  ): EvaluationGenerator<void> {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = this.realm.types.createArray(args.slice(i));
        yield* setLVal(decl.argument, value, context, function* (name, value) {
          yield* context.env.createMutableBindingEvaluator(name, false);

          // Strict mode is whatever; our binding is created above.
          yield* context.env.setMutableBindingEvaluator(name, value, true);
        });
        return;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? this.realm.types.undefined;

      yield* setLVal(decl, value, context, function* (name, value) {
        yield* context.env.createMutableBindingEvaluator(name, false);

        // Strict mode is whatever; our binding is created above.
        yield* context.env.setMutableBindingEvaluator(name, value, true);
      });
    }
  }
}
