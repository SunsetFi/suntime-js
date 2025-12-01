import type { BlockStatement, Expression } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";

export default class StaticJsArrowFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
  ) {
    super(realm, name, argumentDeclarations, context, body);
  }

  *constructEvaluator(): EvaluationGenerator<StaticJsValue> {
    const nameValue = yield* this.getEvaluator("name");
    let name = nameValue.toStringSync();
    if (name === "") {
      name = "anonymous";
    }

    throw new ThrowCompletion(
      this.realm.types.error("TypeError", `${name} is not a constructor`),
    );
  }

  protected *_createContext(
    _thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator<EvaluationContext> {
    return yield* super._createContext(this.realm.types.undefined, args);
  }
}
