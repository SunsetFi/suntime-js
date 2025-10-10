import {
  isIdentifier,
  isPattern,
  isRestElement,
  type Node,
  type BlockStatement,
  type Expression,
  type Identifier,
  type Pattern,
  type RestElement,
  type Statement,
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

import StaticJsFunctionBase, {
  type StaticJsFunctionImplOptions,
} from "./StaticJsFunctionImpl.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

export type StaticJsAstFunctionArgumentDeclaration =
  | Identifier
  | Pattern
  | RestElement;
export function isStaticJsAstFunctionArgumentDeclaration(
  node: Node,
): node is StaticJsAstFunctionArgumentDeclaration {
  return isIdentifier(node) || isPattern(node) || isRestElement(node);
}

export default abstract class StaticJsAstFunction extends StaticJsFunctionBase {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    protected readonly _context: EvaluationContext,
    protected readonly _body: BlockStatement | Expression | Statement[],
    opts?: StaticJsFunctionImplOptions,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, args), {
      length: _argumentDeclarations.length,
      ...opts,
    });
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator {
    const functionContext = yield* this._createContext(thisArg, args);

    yield* this._declareArguments(args, functionContext);

    if (Array.isArray(this._body)) {
      for (const stmt of this._body) {
        yield* setupEnvironment(stmt, functionContext);
      }

      for (const stmt of this._body) {
        yield* EvaluateNodeCommand(stmt, functionContext);
      }

      // ReturnCompletion is a throwable, so if we get here we just return undefined.
      return functionContext.realm.types.undefined;
    } else {
      yield* setupEnvironment(this._body, functionContext);

      return yield* EvaluateNodeCommand(this._body, functionContext);
    }
  }

  protected *_createContext(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<EvaluationContext> {
    const functionEnv = new StaticJsLexicalEnvironment(
      this.realm,
      new StaticJsFunctionEnvironmentRecord(this.realm, thisArg, args),
      this._context.lexicalEnv,
    );

    return this._context.createStackContext(functionEnv, this);
  }

  protected *_declareArguments(
    args: StaticJsValue[],
    context: EvaluationContext,
  ): EvaluationGenerator<void> {
    const seen = new Set<string>();

    function* setArgument(name: string, value: StaticJsValue) {
      if (seen.has(name)) {
        return;
      }

      seen.add(name);
      yield* context.lexicalEnv.createMutableBindingEvaluator(name, false);
      yield* context.lexicalEnv.initializeBindingEvaluator(name, value);
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
