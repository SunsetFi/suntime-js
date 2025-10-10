import type { BlockStatement, Expression, Statement } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import toObject from "../../algorithms/to-object.js";

export default class StaticJsDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _thisMode: "strict" | "lexical",
    argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression | Statement[],
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(realm, name, argumentDeclarations, context, body, {
      construct: true,
    });

    // Create our prototype as we are implicitly a constructor.
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

  protected *_createContext(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<EvaluationContext> {
    let resolvedThisArg: StaticJsValue;
    if (this._thisMode === "strict") {
      resolvedThisArg = thisArg;
    } else if (isStaticJsUndefined(thisArg) || isStaticJsNull(thisArg)) {
      resolvedThisArg =
        yield* this._context.lexicalEnv.getThisBindingEvaluator();
    } else {
      resolvedThisArg = yield* toObject(thisArg, this.realm);
    }

    return yield* super._createContext(resolvedThisArg, args);
  }
}
