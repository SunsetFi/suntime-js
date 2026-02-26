import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsTypeCode from "../StaticJsTypeCode.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsObjectLike, StaticJsPropertyKey } from "../StaticJsObjectLike.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsArgumentsExoticObject extends StaticJsObjectLikeImpl {
  constructor(
    private readonly _parameterMap: StaticJsObjectLike,
    realm: StaticJsRealm,
  ) {
    super(realm);
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.Object;
  }

  override *getOwnPropertyEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    let desc = yield* super.getOwnPropertyEvaluator(name);
    if (!desc) {
      return undefined;
    }

    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(name);
    // The spec says we just override value.
    // I guess that assumes we MUST be a data property?
    if (isMapped && isStaticJsDataPropertyDescriptor(desc)) {
      desc = {
        ...desc,
        value: yield* this._parameterMap.getEvaluator(name),
      };
    }

    return desc;
  }

  override *defineOwnPropertyEvaluator(
    name: string,
    desc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(name);
    let newArgDesc = desc;
    if (isMapped && isStaticJsDataPropertyDescriptor(desc)) {
      if (desc.value === undefined && desc.writable === false) {
        newArgDesc = {
          ...desc,
          value: yield* this._parameterMap.getEvaluator(name),
        };
      }
    }

    const allowed = yield* super.defineOwnPropertyEvaluator(name, newArgDesc);
    if (!allowed) {
      return false;
    }

    if (isMapped) {
      if (isStaticJsAccessorPropertyDescriptor(desc)) {
        yield* this._parameterMap.deleteEvaluator(name);
      } else {
        if ("value" in desc && desc.value !== undefined) {
          yield* this._parameterMap.setEvaluator(name, desc.value, false);
        }
        if ("writable" in desc && desc.writable === false) {
          yield* this._parameterMap.deleteEvaluator(name);
        }
      }
    }

    return true;
  }

  override *getEvaluator(property: string): EvaluationGenerator<StaticJsValue> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(property);
    if (!isMapped) {
      return yield* super.getEvaluator(property);
    }

    return yield* this._parameterMap.getEvaluator(property);
  }

  override *setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    strict: boolean,
  ): EvaluationGenerator<boolean> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(key);
    if (isMapped) {
      yield* this._parameterMap.setEvaluator(key, value, false);
    }

    return yield* super.setEvaluator(key, value, strict);
  }

  override *deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(key);
    const result = yield* super.deleteEvaluator(key);
    if (isMapped && result) {
      yield* this._parameterMap.deleteEvaluator(key);
    }
    return result;
  }
}
