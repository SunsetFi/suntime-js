import type {
  BlockStatement,
  Expression,
  Identifier,
  Pattern,
  RestElement,
} from "@babel/types";

import setLVal from "../../../evaluator/node-evaluators/LVal.js";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

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
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args));

    this.definePropertySync("prototype", {
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
  ): EvaluationGenerator {
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
      ...this._context,
      env: functionEnv,
      label: null,
    };

    yield* this._declareArguments(args, functionContext);

    yield* setupEnvironment(this._body, functionContext);

    return yield* EvaluateNodeCommand(this._body, functionContext);
  }

  private *_declareArguments(
    args: StaticJsValue[],
    context: EvaluationContext,
  ): EvaluationGenerator<void> {
    for (let i = 0; i < this._argumentDeclarations.length; i++) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        const value = this.realm.types.array(args.slice(i));
        yield* setLVal(decl.argument, value, context, function* (name, value) {
          yield* context.env.createMutableBindingEvaluator(name, false);

          // Strict mode is whatever; our binding is created above.
          yield* context.env.setMutableBindingEvaluator(name, value, true);
        });

        break;
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
