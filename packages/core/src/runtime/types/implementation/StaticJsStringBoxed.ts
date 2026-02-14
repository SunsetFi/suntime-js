import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsObjectPropertyKey } from "../StaticJsObjectLike.js";
import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";

export default class StaticJsStringBoxed extends StaticJsAbstractObject {
  constructor(
    realm: StaticJsRealm,
    private readonly _value: string,
  ) {
    super(realm, realm.types.prototypes.stringProto);
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Object;
  }

  get value(): string {
    return this._value;
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<
    StaticJsObjectPropertyKey[]
  > {
    return Object.keys(this._value).map((_, i) => i.toString());
  }

  *getOwnPropertyEvaluator(
    key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    if (typeof key !== "string") {
      return undefined;
    }

    const index = Number(key);
    if (!Number.isInteger(index) || index < 0 || index >= this._value.length) {
      return undefined;
    }

    return {
      value: this.realm.types.string(this._value.charAt(index)),
      writable: false,
      enumerable: true,
      configurable: false,
    };
  }

  protected *_setPropertyDescriptorEvaluator(
    _key: StaticJsObjectPropertyKey,
    _descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    return false;
  }

  protected *_deleteConfigurablePropertyEvaluator(
    _key: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    return false;
  }

  toStringSync(): string {
    return this._value;
  }

  toJsSync(): unknown {
    return new Object(this._value);
  }
}
