import type { BlockStatement, Expression } from "@babel/types";

import type EvaluationContext from "../../../evaluator/EvaluationContext.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import setupEnvironment from "../../../evaluator/node-evaluators/setup-environment.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import StaticJsAstFunction, {
  type StaticJsAstFunctionArgumentDeclaration,
} from "./StaticJsAstFunction.js";
import newPromiseCapability from "../../algorithms/new-promise-capability.js";

export default class StaticJsAsyncDeclFunction extends StaticJsAstFunction {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _thisMode: "strict" | "lexical",
    argumentDeclarations: StaticJsAstFunctionArgumentDeclaration[],
    context: EvaluationContext,
    body: BlockStatement | Expression,
  ) {
    // Non-arrow and non-class-method functions are always constructors.
    super(realm, name, argumentDeclarations, context, body);
  }

  protected *_invoke(
    thisArg: StaticJsValue,
    args: StaticJsValue[],
  ): EvaluationGenerator {
    const functionContext = yield* this._createContext(thisArg, args);

    yield* this._declareArguments(args, functionContext);

    yield* setupEnvironment(this._body, functionContext);

    const capability = yield* newPromiseCapability(
      this.realm.types.constructors.Promise,
      this.realm,
    );

    // const iterator = yield* EvaluateNodeCommand(this._body, functionContext);
    // runIterator();

    return capability.promise;
  }
}
