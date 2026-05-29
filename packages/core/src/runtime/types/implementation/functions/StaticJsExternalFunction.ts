import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import {
  EvaluationGenerator,
  MaybeEvaluationGenerator,
} from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import type { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";

import { StaticJsNativeFunctionImpl } from "./StaticJsNativeFunctionImpl.js";

export interface StaticJsExternalFunctionOpts {
  getThisArg?: (thisArg: StaticJsValue) => MaybeEvaluationGenerator<unknown>;
  getArgs?: (args: StaticJsValue[]) => MaybeEvaluationGenerator<unknown[]>;
}

export class StaticJsExternalFunction extends StaticJsNativeFunctionImpl {
  constructor(
    realm: StaticJsRealm,
    name: string | null,
    private readonly _func: Function,
    private readonly _policy: HostAccessPolicy,
    private readonly _opts: StaticJsExternalFunctionOpts = {},
  ) {
    super(realm, name, (thisArg, ...args) => this._invoke(thisArg, ...args));
  }

  private *_invoke(
    thisArg: StaticJsValue,
    ...args: StaticJsValue[]
  ): EvaluationGenerator<StaticJsValue> {
    let thisArgResolved: unknown;
    if (this._opts.getThisArg) {
      thisArgResolved = yield* EvaluationGenerator(this._opts.getThisArg(thisArg));
    } else if (this._policy.options.useSandboxThis) {
      thisArgResolved = thisArg.toNative();
    } else {
      thisArgResolved = undefined;
    }

    let valueArgsResolved: unknown[];
    if (this._opts.getArgs) {
      valueArgsResolved = yield* EvaluationGenerator(this._opts.getArgs(args));
    } else {
      valueArgsResolved = args.map((arg) => arg.toNative());
    }

    try {
      const result = this._func.call(thisArgResolved, ...valueArgsResolved);
      return this._policy.wrapChild(result, false);
    } catch (e) {
      if (e instanceof StaticJsRuntimeError && e.thrown.realm === this.realm) {
        throw Completion.Throw(e.thrown);
      }
      throw Completion.Throw(this._policy.wrapChild(e, false));
    }
  }

  override toNative(): Function {
    return this._func;
  }
}
