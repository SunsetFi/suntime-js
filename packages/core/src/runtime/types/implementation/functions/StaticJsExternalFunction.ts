import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import {
  EvaluationGenerator,
  MaybeEvaluationGenerator,
} from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { HostAccessArg } from "../../HostAccessOptions.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import type { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";
import { applyChildPolicy } from "../host-access/resolve-host-access-options.js";

import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";
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
      // A sandbox function passed as an argument is bridged with this wrapper's
      // per-argument child access (the parent function's childPolicy applied to
      // the argument). That access is carried into the bridge so it is honored
      // when the function is later called back with foreign-realm values. Other
      // values keep the plain native conversion.
      valueArgsResolved = args.map((arg) =>
        arg instanceof StaticJsAbstractFunction
          ? // ResolvedHostAccessOptions is a structural HostAccessOptions; the
            // cast only sheds the resolved type's explicit-undefined childPolicy.
            arg.toNative({ access: applyChildPolicy(this._policy.options, arg) as HostAccessArg })
          : arg.toNative(),
      );
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
