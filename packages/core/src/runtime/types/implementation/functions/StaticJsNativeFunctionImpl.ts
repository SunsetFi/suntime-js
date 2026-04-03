import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { type StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import { isStaticJsObjectLike, type StaticJsObjectLike } from "../../StaticJsObjectLike.js";

import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";
import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

export interface StaticJsNativeFunctionOptions {
  length?: number;
  prototype?: StaticJsObjectLike | StaticJsNull | null;
  construct?:
    | boolean
    | ((
        thisArg: StaticJsValue,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator<StaticJsObjectLike>);
}

export class StaticJsNativeFunctionImpl
  extends StaticJsAbstractFunction
  implements StaticJsFunction
{
  private _construct:
    | ((
        thisObj: StaticJsObjectLike,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator<StaticJsValue>)
    | null;

  constructor(
    realm: StaticJsRealm,
    private _name: string | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<StaticJsValue>,
    { construct, length, prototype }: StaticJsNativeFunctionOptions = {},
  ) {
    const resolvedLength = length ?? _call.length;
    super(realm, _name, resolvedLength, prototype ?? realm.types.prototypes.functionProto);

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

  *constructEvaluator(args: StaticJsValue[] = []): EvaluationGenerator<StaticJsObjectLike> {
    if (!this._construct) {
      throw Completion.Throw("TypeError", "This function is not a constructor.");
    }

    const result = yield* this._construct(this as unknown as StaticJsObjectLike, ...args);
    if (!isStaticJsObjectLike(result)) {
      throw new StaticJsEngineError(
        `Native function ${this._name ?? "<anonymous>"} construct did not return an object-like.`,
      );
    }
    return result;
  }
}
