import type { Function } from "@babel/types";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import { StaticJsAstFunction, StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsObjectMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export class StaticJsObjectMethodFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    node: Function,
    opts: StaticJsObjectMethodFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(
      realm,
      null,
      argumentDeclarations,
      node,
      { thisMode: "non-lexical-this", construct: false, ...opts },
      functionFactory,
    );

    // Object methods get no prototype.
  }
}
