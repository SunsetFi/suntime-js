import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";

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
  ): EvaluationGenerator {
    const thisArgResolved = thisArg.toJs();
    const valueArgsResolved = args.map((arg) => arg.toJs());
    try {
      const result = this._func.call(thisArgResolved, ...valueArgsResolved);
      return this.realm.types.toStaticJsValue(result);
    } catch (error) {
      throw new ThrowCompletion(this.realm.types.toStaticJsValue(error));
    }
  }

  toJs(): unknown {
    return this._func;
  }
}
