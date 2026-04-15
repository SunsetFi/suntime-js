import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { get } from "../../../algorithms/get.js";
import sameValue from "../../../algorithms/same-value.js";
import { set } from "../../../algorithms/set.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "../objects/StaticJsOrdinaryObjectImpl.js";

export class StaticJsArgumentsExoticObject extends StaticJsOrdinaryObjectImpl {
  constructor(
    private readonly _parameterMap: StaticJsObject,
    realm: StaticJsRealm,
  ) {
    super(realm);
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.PlainObject;
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
        value: yield* get(this._parameterMap, name),
      };
    }

    return desc;
  }

  override *defineOwnPropertyEvaluator(
    name: string,
    desc: StaticJsPropertyDescriptorRecord,
  ): EvaluationGenerator<boolean> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(name);
    let newArgDesc = desc;
    if (isMapped && isStaticJsDataPropertyDescriptor(desc)) {
      if (desc.value === undefined && desc.writable === false) {
        newArgDesc = {
          ...desc,
          value: yield* get(this._parameterMap, name),
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
          yield* set(this._parameterMap, name, desc.value, false);
        }
        if ("writable" in desc && desc.writable === false) {
          yield* this._parameterMap.deleteEvaluator(name);
        }
      }
    }

    return true;
  }

  override *getEvaluator(
    property: StaticJsPropertyKey,
    receiver: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue> {
    const isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(property);
    if (!isMapped) {
      return yield* super.getEvaluator(property, receiver);
    }

    return yield* get(this._parameterMap, property);
  }

  override *setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    receiver: StaticJsValue,
  ): EvaluationGenerator<boolean> {
    let isMapped: boolean;
    if (!sameValue(this, receiver)) {
      isMapped = false;
    } else {
      isMapped = yield* this._parameterMap.hasOwnPropertyEvaluator(key);
    }

    if (isMapped) {
      yield* set(this._parameterMap, key, value, false);
      // Fall through to OrdinarySet.
    }

    return yield* super.setEvaluator(key, value, receiver);
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
