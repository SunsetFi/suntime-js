import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
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
  ): EvaluationGenerator<StaticJsValue> {
    const thisArgResolved = thisArg.toJsSync();
    const valueArgsResolved = args.map((arg) => arg.toJsSync());
    try {
      const result = this._func.call(thisArgResolved, ...valueArgsResolved);
      return this.realm.types.toStaticJsValue(result);
    } catch (e) {
      if (e instanceof StaticJsRuntimeError && e.thrown.realm === this.realm) {
        throw new ThrowCompletion(e.thrown);
      } else {
        const converted = this.realm.types.toStaticJsValue(e);
        throw new ThrowCompletion(converted);
      }
    }
  }

  toJsSync(): (...args: unknown[]) => unknown {
    return this._func;
  }
}
