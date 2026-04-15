import type { Writable } from "type-fest";

import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";

import toNumber from "../../../algorithms/to-number.js";
import toUInt32 from "../../../algorithms/to-uint-32.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import type {
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../../StaticJsPropertyDescriptor.js";
import { isStaticJsDataPropertyDescriptor } from "../../StaticJsPropertyDescriptor.js";
import { type StaticJsArray } from "../../StaticJsArray.js";
import { isStaticJsNumber } from "../../StaticJsNumber.js";

import { StaticJsNumberImpl } from "../primitives/StaticJsNumberImpl.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";
import { isArrayIndex } from "./is-array-index.js";
import { StaticJsObjectProxyTarget } from "./create-object-proxy.js";

export class StaticJsArrayImpl extends StaticJsOrdinaryObjectImpl implements StaticJsArray {
  constructor(realm: StaticJsRealm, length = 0, prototype = realm.types.prototypes.arrayProto) {
    super(realm, prototype);
    realm.invokeEvaluatorSync(
      // Needs to explicitly be OrdinaryDefineOwnProperty, not our own
      super._setPropertyDescriptorEvaluator("length", {
        value: realm.types.number(length),
        writable: true,
        enumerable: false,
        configurable: false,
      }),
    );
  }

  get runtimeTypeOf() {
    return "array" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Array;
  }

  protected override _createtoNativeProxyTarget(): StaticJsObjectProxyTarget {
    return [] as StaticJsObjectProxyTarget;
  }

  protected override *_setPropertyDescriptorEvaluator(
    key: string,
    desc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (key === "length") {
      return yield* this._setLength(desc);
    }

    if (isArrayIndex(key)) {
      let lengthDesc = yield* this.getOwnPropertyEvaluator("length");
      if (!lengthDesc) {
        throw new StaticJsEngineError("Null length descriptor on array intrinsic");
      }
      if (lengthDesc.configurable) {
        throw new StaticJsEngineError("Configurable length descriptor on array intrinsic");
      }
      if (!isStaticJsDataPropertyDescriptor(lengthDesc)) {
        throw new StaticJsEngineError("Invalid length descriptor on array intrinsic");
      }

      const length = lengthDesc.value;
      if (!isStaticJsNumber(length) || length.value < 0) {
        throw new StaticJsEngineError("Invalid length value on array intrinsic");
      }

      const index = toUInt32.native(key);
      if (index >= length.value && !lengthDesc.writable) {
        return false;
      }

      const success = yield* super._setPropertyDescriptorEvaluator(key, desc);
      if (!success) {
        return false;
      }

      if (index >= length.value) {
        lengthDesc = {
          ...lengthDesc,
          value: new StaticJsNumberImpl(this.realm, index + 1),
        };

        const success = yield* super._setPropertyDescriptorEvaluator("length", lengthDesc);
        if (!success) {
          throw new StaticJsEngineError("Failed to update array length after adding element");
        }
      }

      return true;
    }

    return yield* super._setPropertyDescriptorEvaluator(key, desc);
  }

  private *_setLength(desc: StaticJsPropertyDescriptor): EvaluationGenerator<boolean> {
    if (!isStaticJsDataPropertyDescriptor(desc) || !desc.value) {
      return yield* super._setPropertyDescriptorEvaluator("length", desc);
    }

    const newLen = yield* toUInt32(desc.value, this.realm);

    const numberLen = yield* toNumber(desc.value);
    if (numberLen.value !== newLen) {
      throw Completion.Throw("RangeError", "Invalid array length");
    }

    const newLenDesc: Writable<StaticJsDataPropertyDescriptor> = {
      ...desc,
      value: this.realm.types.number(newLen),
    };

    const oldLenDesc = yield* this.getOwnPropertyEvaluator("length");
    if (oldLenDesc === undefined) {
      throw new StaticJsEngineError("Null length descriptor on array intrinsic");
    }
    if (!isStaticJsDataPropertyDescriptor(oldLenDesc)) {
      throw new StaticJsEngineError("Invalid length descriptor on array intrinsic");
    }
    if (oldLenDesc.configurable) {
      throw new StaticJsEngineError("Configurable length descriptor on array intrinsic");
    }

    const oldLenValue = oldLenDesc.value;
    if (!isStaticJsNumber(oldLenValue) || oldLenValue.value < 0) {
      throw new StaticJsEngineError("Invalid length value on array intrinsic");
    }
    const oldLen = oldLenValue.value;

    if (newLen >= oldLen) {
      return yield* super._setPropertyDescriptorEvaluator("length", newLenDesc);
    }

    if (oldLenDesc.writable === false) {
      return false;
    }

    let newWritable: boolean = true;
    if (newLenDesc.writable === false) {
      newWritable = false;
      newLenDesc.writable = true;
    }

    const succeeded = yield* super._setPropertyDescriptorEvaluator("length", newLenDesc);
    if (!succeeded) {
      return false;
    }

    const keys = yield* this.ownPropertyKeysEvaluator();
    // Madness to do the equivalent of toUInt32, which would be inefficient to use on account of being a generator.
    // We probably should make a non-generator version of it.
    const indicies = keys.filter(isArrayIndex).map(toUInt32.native).sort().reverse();
    for (const index of indicies) {
      if (index < newLen) {
        break;
      }

      const deleteSucceeded = yield* this.deleteEvaluator(String(index));
      if (!deleteSucceeded) {
        newLenDesc.value = this.realm.types.number(index + 1);
        if (!newWritable) {
          newLenDesc.writable = false;
        }

        yield* super._setPropertyDescriptorEvaluator("length", newLenDesc);
        return false;
      }
    }

    if (!newWritable) {
      const succeeded = yield* super._setPropertyDescriptorEvaluator("length", {
        ...newLenDesc,
        writable: false,
      });
      if (!succeeded) {
        throw new StaticJsEngineError("Failed to make array length non-writable");
      }
    }

    return true;
  }
}
