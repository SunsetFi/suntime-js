import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsMarkable, StaticJsMarkableAllocator } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { setFunctionLength } from "#algorithms/set-function-length.js";
import { setFunctionName } from "#algorithms/set-function-name.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationContext } from "#evaluator/EvaluationContext.js";

import type { StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsFunction } from "../../StaticJsFunction.js";
import type { StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { isStaticJsObject, type StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsAbstractFunction } from "./StaticJsAbstractFunction.js";

export interface StaticJsNativeFunctionOptions {
  length?: number;
  prototype?: StaticJsObject | StaticJsNull | null;
  construct?:
    | boolean
    | ((
        newTarget: StaticJsCallable,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator<StaticJsObject>);
  markables?: readonly StaticJsMarkable[];
}

export class StaticJsNativeFunctionImpl
  extends StaticJsAbstractFunction
  implements StaticJsFunction
{
  private _construct:
    | ((
        newTarget: StaticJsCallable,
        ...args: StaticJsValue[]
      ) => EvaluationGenerator<StaticJsValue>)
    | null;

  private readonly _markables: readonly StaticJsMarkable[];

  constructor(
    realm: StaticJsRealm,
    private readonly _name: StaticJsPropertyKey | null,
    private readonly _call: (
      thisArg: StaticJsValue,
      ...args: StaticJsValue[]
    ) => EvaluationGenerator<StaticJsValue>,
    { construct, length, prototype, markables }: StaticJsNativeFunctionOptions = {},
  ) {
    super(realm, prototype ?? realm.intrinsics["Function.prototype"]);
    this._markables = markables ?? [];

    const resolvedLength = length ?? _call.length;
    realm.invokeEvaluatorSync(setFunctionLength(this, resolvedLength));

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
    const { realm, scriptOrModule } = EvaluationContext.current;
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      scriptOrModule,
      realm,
      realm.globalEnv,
      null,
    );
    EvaluationContext.push(context);
    try {
      return yield* this._call(thisArg, ...args);
    } finally {
      EvaluationContext.pop();
    }
  }

  *constructEvaluator(
    args: StaticJsValue[] = [],
    newTarget: StaticJsCallable = this,
  ): EvaluationGenerator<StaticJsObject> {
    if (!this._construct) {
      throw yield* Completion.Throw.create("TypeError", "This function is not a constructor.");
    }

    const { realm, scriptOrModule } = EvaluationContext.current;
    const context = EvaluationContext.createFunctionInvocationContext(
      this,
      scriptOrModule,
      realm,
      realm.globalEnv,
      null,
    );
    EvaluationContext.push(context);

    let result: StaticJsValue;
    try {
      result = yield* this._construct(newTarget, ...args);
    } finally {
      EvaluationContext.pop();
    }

    if (!isStaticJsObject(result)) {
      throw new StaticJsEngineError(
        `Native function ${this._name ?? "<anonymous>"} construct did not return an object-like.`,
      );
    }
    return result;
  }

  override mark(marks: Set<StaticJsMarkable>, allocate?: StaticJsMarkableAllocator): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks, allocate);

    for (const markable of this._markables) {
      markable.mark(marks, allocate);
    }
  }
}
