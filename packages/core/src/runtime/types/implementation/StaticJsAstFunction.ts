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

import toObject from "../../algorithms/to-object.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";
import { isStaticJsNull } from "../StaticJsNull.js";

import StaticJsFunctionBase from "./StaticJsFunctionBase.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;

export default class StaticJsAstFunction extends StaticJsFunctionBase {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _thisMode: "lexical" | "strict",
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
    let resolvedThisArg: StaticJsValue;
    if (this._thisMode === "strict") {
      resolvedThisArg = thisArg;
    } else {
      if (isStaticJsUndefined(thisArg) || isStaticJsNull(thisArg)) {
        resolvedThisArg = yield* this._context.env.getThisBindingEvaluator();
      } else {
        resolvedThisArg = yield* toObject(thisArg, this.realm);
      }
    }

    const functionEnv = new StaticJsLexicalEnvironment(
      this.realm,
      new StaticJsFunctionEnvironmentRecord(
        this.realm,
        // Having a bound input here is weird... I'm starting to think the env is actually set up ahead of time in the declaration phase.
        this._bound ?? resolvedThisArg,
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
    const seen = new Set<string>();

    function* setArgument(name: string, value: StaticJsValue) {
      if (seen.has(name)) {
        return;
      }

      seen.add(name);
      yield* context.env.createMutableBindingEvaluator(name, false);
      yield* context.env.initializeBindingEvaluator(name, value);
    }

    // Start from the end and work backwards.
    for (let i = this._argumentDeclarations.length - 1; i >= 0; i--) {
      const decl = this._argumentDeclarations[i];

      if (decl.type === "RestElement") {
        if (i !== this._argumentDeclarations.length - 1) {
          // I think babel should catch this for us...
          throw new StaticJsEngineError(
            "Function rest argument not at last position.",
          );
        }

        const value = this.realm.types.array(args.slice(i));
        yield* setLVal(decl.argument, value, context, setArgument);
        continue;
      }

      // We might not get enough arguments, so fill in the rest with undefined.
      const value: StaticJsValue = args[i] ?? this.realm.types.undefined;

      yield* setLVal(decl, value, context, setArgument);
    }
  }
}
