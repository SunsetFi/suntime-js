import type { Function } from "@babel/types";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAstFunction, StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsDeclFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;

export class StaticJsDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    node: Function,
    opts: StaticJsDeclFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(
      realm,
      null,
      argumentDeclarations,
      node,
      {
        thisMode: "non-lexical-this",
        construct: true,
        ...opts,
      },
      functionFactory,
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
