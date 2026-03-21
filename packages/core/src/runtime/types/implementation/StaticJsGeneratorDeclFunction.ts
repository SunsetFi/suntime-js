import type { BlockStatement, Expression } from "@babel/types";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { EvaluateNodeCommand } from "../../../evaluator/commands/EvaluateNodeCommand.js";

import Q from "../../../evaluator/completions/Q.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";
import StaticJsGeneratorImpl from "./StaticJsGeneratorImpl.js";

export type StaticJsGeneratorDeclFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export default class StaticJsGeneratorDeclFunction extends StaticJsAstFunction {
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

  protected override *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    // it looks like errors thrown during argument initialization are not caught by the generator, so we don't need to catch them here.
    const functionContext = yield* this._createContext(thisArg, args);

    const evaluator = Q(EvaluateNodeCommand(this._body, functionContext));

    const generator = new StaticJsGeneratorImpl(
      evaluator,
      null,
      this.realm.types.prototypes.generatorProto,
      this.realm,
    );

    return generator;
  }
}
