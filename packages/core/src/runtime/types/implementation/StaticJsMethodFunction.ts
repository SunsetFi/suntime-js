import type { BlockStatement, Expression } from "@babel/types";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsAstFunctionArgument } from "./StaticJsAstFunctionArgument.js";
import type { StaticJsFunctionFactory } from "./StaticJsFunctionFactory.js";
import StaticJsAstFunction, { StaticJsAstFunctionOptions } from "./StaticJsAstFunction.js";

export type StaticJsMethodFunctionOptions = Omit<
  StaticJsAstFunctionOptions,
  "thisMode" | "construct"
>;
export default class StaticJsMethodFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgument[],
    body: BlockStatement | Expression,
    opts: StaticJsMethodFunctionOptions,
    functionFactory: StaticJsFunctionFactory,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(
      realm,
      name,
      argumentDeclarations,
      body,
      { thisMode: "non-lexical-this", construct: false, ...opts },
      functionFactory,
    );

    // Object methods get no prototype.
  }
}
