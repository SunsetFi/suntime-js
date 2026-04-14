import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { type StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import { isStaticJsObject, type StaticJsObject } from "../../StaticJsObject.js";

import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";
import { setFunctionName } from "../../../algorithms/set-function-name.js";

export interface StaticJsNativeFunctionOptions {
  length?: number;
  prototype?: StaticJsObject | StaticJsNull | null;
  construct?:
    | boolean
    | ((thisArg: StaticJsValue, ...args: StaticJsValue[]) => EvaluationGenerator<StaticJsObject>);
}

export class StaticJsNativeFunctionImpl
  extends StaticJsAbstractFunction
  implements StaticJsFunction
{
  private _construct:
    | ((thisObj: StaticJsObject, ...args: StaticJsValue[]) => EvaluationGenerator<StaticJsValue>)
    | null;

  constructor(
    realm: StaticJsRealm,
    private _name: StaticJsPropertyKey | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<StaticJsValue>,
    { construct, length, prototype }: StaticJsNativeFunctionOptions = {},
  ) {
    const resolvedLength = length ?? _call.length;
    super(realm, resolvedLength, prototype ?? realm.types.prototypes.functionProto);

    // FIXME: Shim for old code.  Remove.
    if (_name) {
      realm.invokeEvaluatorSync(setFunctionName(this, _name));
    }
    if (typeof construct === "boolean") {
      this._construct = construct ? this._call : null;
    } else if (typeof construct === "function") {
      this._construct = construct;
    } else {
      this._construct = null;
    }
  }

  override get isConstructor() {
    return !!this._construct;
  }

  *callEvaluator(
    thisArg: StaticJsValue,
    args: StaticJsValue[] = [],
  ): EvaluationGenerator<StaticJsValue> {
    return yield* this._call(thisArg, ...args);
  }

  *constructEvaluator(args: StaticJsValue[] = []): EvaluationGenerator<StaticJsObject> {
    if (!this._construct) {
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    const result = yield* this._construct(this as unknown as StaticJsObject, ...args);
    if (!isStaticJsObject(result)) {
      throw new StaticJsEngineError(
        `Native function ${this._name ?? "<anonymous>"} construct did not return an object-like.`,
      );
    }
    return result;
  }
}
