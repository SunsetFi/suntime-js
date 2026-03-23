import type { BlockStatement, Expression } from "@babel/types";

import functionDeclarationInstantiation from "../../../evaluator/instantiation/function-declaration-instantiation.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import { Q } from "../../../evaluator/completions/Q.js";
import { ReturnCompletion } from "../../../evaluator/completions/completion-types/ReturnCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/completion-types/ThrowCompletion.js";
import { Completion } from "../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAstFunction, StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";
import { StaticJsGeneratorImpl } from "./StaticJsGeneratorImpl.js";

export type StaticJsGeneratorDeclFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export class StaticJsGeneratorDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsGeneratorDeclFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    super(
      realm,
      name,
      argumentDeclarations,
      body,
      {
        thisMode: "non-lexical-this",
        construct: false,
        ...opts,
      },
      functionFactory,
    );

    this.defineOwnPropertySync("prototype", {
      value: realm.types.object({}, realm.types.prototypes.generatorFunctionProto),
      writable: true,
      enumerable: false,
      configurable: false,
    });
  }

  protected override *_evaluateBody(
    args: StaticJsValue[],
  ): EvaluationGenerator<ReturnCompletion | ThrowCompletion> {
    const { realm, _body } = this;

    // it looks like errors thrown during argument initialization are not caught by the generator, so we don't need to catch them here.
    yield* functionDeclarationInstantiation(
      this,
      args,
      // Gross circular dependency workaround.
      this._createFunction,
    );

    const evaluator = Q(EvaluateNodeCommand(_body));

    const generator = new StaticJsGeneratorImpl(
      evaluator,
      null,
      realm.types.prototypes.generatorProto,
      realm,
    );

    return Completion.Return(generator);
  }
}
