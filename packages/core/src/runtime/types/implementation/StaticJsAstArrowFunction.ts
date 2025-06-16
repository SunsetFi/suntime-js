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

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import StaticJsLexicalEnvironment from "../../environments/implementation/StaticJsLexicalEnvironment.js";
import StaticJsFunctionEnvironmentRecord from "../../environments/implementation/StaticJsFunctionEnvironmentRecord.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

export type StaticJsAstArrowFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstArrowFunction extends StaticJsFunctionImpl {
  constructor(
    realm: StaticJsRealm,
    name: string,
    private readonly _argumentDeclarations: StaticJsAstArrowFunctionArgumentDeclaration[],
    private readonly _context: EvaluationContext,
    private readonly _body: BlockStatement | Expression,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args));
  }

  *constructEvaluator(): EvaluationGenerator {
    const nameValue = yield* this.getPropertyEvaluator("name");
    let name = nameValue.toStringSync();
    if (name === "") {
      name = "anonymous";
    }

    // FIXME: Use real error.
    throw new ThrowCompletion(
      this.realm.types.error("TypeError", `${name} is not a constructor`),
    );
  }

  private *_invoke(
    _thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator {
    const functionEnv = new StaticJsLexicalEnvironment(
      this.realm,
      new StaticJsFunctionEnvironmentRecord(
        this.realm,
        this.realm.types.undefined,
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
  ): EvaluationGenerator {
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

    return null;
  }
}
