import type { BlockStatement, Expression } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction from "./StaticJsAstFunction.js";

export default class StaticJsDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
    functionFactory: StaticJsFunctionFactory,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(
      realm,
      name,
      "non-lexical-this",
      argumentDeclarations,
      context,
      body,
      functionFactory,
      {
        construct: true,
      },
    );

    // Create our prototype as we are implicitly a constructor.
    this.defineOwnPropertySync("prototype", {
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
}
