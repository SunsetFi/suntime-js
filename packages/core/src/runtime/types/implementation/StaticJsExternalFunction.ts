import { Completion } from "../../../evaluator/completions/Completion.js";
import EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { NormalCompletion } from "../../../evaluator/completions/NormalCompletion.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/StaticJsValue.js";

import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

export default class StaticJsExternalFunction extends StaticJsFunctionImpl {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _func: (...args: unknown[]) => unknown,
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, ...args));
  }

  private *_invoke(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator<Completion> {
    const thisArgResolved = thisArg.toJs();
    const valueArgsResolved = args.map((arg) => arg.toJs());
    try {
      const result = this._func.call(thisArgResolved, ...valueArgsResolved);
      return NormalCompletion(this.realm.types.toStaticJsValue(result));
    } catch (error) {
      return ThrowCompletion(this.realm.types.toStaticJsValue(error));
    }
  }

  toJs(): unknown {
    return this._func;
  }
}
