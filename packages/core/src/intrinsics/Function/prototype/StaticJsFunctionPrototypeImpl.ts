import type { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import type { StaticJsAbstractObjectCreateParams } from "#types/implementation/StaticJsAbstractObject.js";
import type { StaticJsCallable } from "#types/StaticJsCallable.js";
import type { StaticJsNull } from "#types/StaticJsNull.js";
import type { StaticJsObject } from "#types/StaticJsObject.js";
import type { StaticJsValue } from "#types/StaticJsValue.js";

import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import { allocated } from "#memory/allocated.js";
import { StaticJsAbstractFunction } from "#types/implementation/functions/StaticJsAbstractFunction.js";
import { StaticJsTypeCode } from "#types/StaticJsTypeCode.js";

export interface StaticJsFunctionPrototypeImplCreateParams extends StaticJsAbstractObjectCreateParams {
  prototype: StaticJsObject | StaticJsNull | null;
  tag?: StaticJsMemoryAllocationTag | undefined;
}

export class StaticJsFunctionPrototypeImpl extends StaticJsAbstractFunction {
  static create(params: StaticJsFunctionPrototypeImplCreateParams): StaticJsFunctionPrototypeImpl {
    const { realm, prototype, tag } = params;
    return allocated(new StaticJsFunctionPrototypeImpl(realm, prototype, tag));
  }

  override get typeOf(): "function" {
    return "function";
  }

  override get runtimeTypeOf(): "function" {
    return "function";
  }

  override get runtimeTypeCode() {
    return StaticJsTypeCode.Function;
  }

  *callEvaluator(
    _thisArg: StaticJsValue,
    _args?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsValue> {
    return this.realm.types.undefined;
  }

  *constructEvaluator(
    _args?: StaticJsValue[],
    _newTarget?: StaticJsCallable,
  ): EvaluationGenerator<StaticJsObject> {
    throw yield* Completion.Throw.create("TypeError", "Function.prototype is not a constructor");
  }
}
