import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { StaticJsNativeFunctionImpl } from "./StaticJsNativeFunctionImpl.js";

export class StaticJsExternalFunction extends StaticJsNativeFunctionImpl {
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
    const thisArgResolved = thisArg.toNative();
    const valueArgsResolved = args.map((arg) => arg.toNative());
    try {
      const result = this._func.call(thisArgResolved, ...valueArgsResolved);
      return this.realm.types.toStaticJsValue(result);
    } catch (e) {
      if (e instanceof StaticJsRuntimeError && e.thrown.realm === this.realm) {
        throw Completion.Throw(e.thrown);
      } else {
        const converted = this.realm.types.toStaticJsValue(e);
        throw Completion.Throw(converted);
      }
    }
  }

  override toNative(): (...args: unknown[]) => unknown {
    return this._func;
  }
}
