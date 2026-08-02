import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsObject, StaticJsObjectPropertyAccessOptions } from "#types/StaticJsObject.js";
import type { StaticJsPropertyKey } from "#types/StaticJsPropertyKey.js";

import { sameValue } from "#algorithms/same-value.js";
import { setImmutablePrototype } from "#algorithms/set-immutable-prototype.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { allocated } from "#memory/allocated.js";
import { getModuleNamespace } from "#modules/implementation/algorithms/get-module-namespace.js";
import { StaticJsOrdinaryObjectImpl } from "#types/implementation/objects/StaticJsOrdinaryObjectImpl.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "#types/StaticJsPropertyDescriptor.js";
import { isStaticJsSymbol } from "#types/StaticJsSymbol.js";
import { StaticJsTypeCode } from "#types/StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "#types/StaticJsValue.js";
import { assert } from "#utils/assert.js";
import { isTaggedSymbol } from "#utils/symbol-for.js";

import type { StaticJsModuleImpl } from "./StaticJsModuleImpl.js";

import { isStaticJsResolvedBindingRecord } from "../StaticJsResolvedBinding.js";
import { Namespace } from "../symbols/Namespace.js";

export class StaticJsNamespaceExoticObject extends StaticJsOrdinaryObjectImpl {
  static create(
    module: StaticJsModuleImpl,
    exports: string[],
    realm: StaticJsRealm,
  ): StaticJsNamespaceExoticObject {
    return allocated(new StaticJsNamespaceExoticObject(module, exports, realm));
  }

  protected constructor(
    private readonly _module: StaticJsModuleImpl,
    private readonly _exports: string[],
    realm: StaticJsRealm,
  ) {
    super(realm, null);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsNamespaceExoticObject";
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.PlainObject;
  }

  override *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null> {
    return null;
  }

  override *setPrototypeOfEvaluator(value: StaticJsObject | null): EvaluationGenerator<boolean> {
    return yield* setImmutablePrototype(this, value);
  }

  override *isExtensibleEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  override *preventExtensionsEvaluator(): EvaluationGenerator<boolean> {
    // No-op for namespace exotic objects.
    return true;
  }

  override *getOwnPropertyEvaluator(propertyKey: StaticJsPropertyKey) {
    if (isStaticJsSymbol(propertyKey)) {
      return yield* super.getOwnPropertyEvaluator(propertyKey);
    }

    const exports = this._exports;
    if (!exports.includes(propertyKey)) {
      return undefined;
    }

    const value = yield* Q(this.getEvaluator(propertyKey, this));
    return {
      value,
      writable: true,
      enumerable: true,
      configurable: false,
    };
  }

  override *defineOwnPropertyEvaluator(
    propertyKey: StaticJsPropertyKey,
    propertyDesc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (isStaticJsSymbol(propertyKey)) {
      return yield* super.defineOwnPropertyEvaluator(propertyKey, propertyDesc);
    }

    const current = yield* Q(this.getOwnPropertyEvaluator(propertyKey));
    // Note: In practice this should never be a non-data,
    // since we go through the above code and it never returns a non-data for
    // a non-symbol.
    if (!current || !isStaticJsDataPropertyDescriptor(current)) {
      return false;
    }

    if (propertyDesc.configurable === true) {
      return false;
    }

    if (propertyDesc.enumerable === false) {
      return false;
    }

    if (isStaticJsAccessorPropertyDescriptor(propertyDesc)) {
      return false;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    if (propertyDesc.value) {
      return sameValue(propertyDesc.value, current.value);
    }

    return true;
  }

  override *hasPropertyEvaluator(propertyKey: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    if (isStaticJsSymbol(propertyKey)) {
      return yield* super.hasPropertyEvaluator(propertyKey);
    }

    return this._exports.includes(propertyKey);
  }

  override *getEvaluator(
    propertyKey: StaticJsPropertyKey,
    opts?: StaticJsObjectPropertyAccessOptions | StaticJsValue,
  ): EvaluationGenerator<StaticJsValue> {
    const receiver = isStaticJsValue(opts) ? opts : (opts?.receiver ?? this);
    if (isStaticJsSymbol(propertyKey)) {
      return yield* super.getEvaluator(propertyKey, receiver);
    }

    const exports = this._exports;
    if (!exports.includes(propertyKey)) {
      return this.realm.types.undefined;
    }

    const module = this._module;
    const binding = module.resolveExport(propertyKey);
    if (!isStaticJsResolvedBindingRecord(binding)) {
      throw new StaticJsEngineError(`Invalid resolved binding for export "${String(propertyKey)}"`);
    }

    const targetModule = binding.module;
    assert.notNull(targetModule, "Resolved namespace binding must have a module");

    const bindingName = binding.bindingName;
    if (isTaggedSymbol(bindingName, Namespace)) {
      return getModuleNamespace(targetModule);
    }

    const targetEnv = targetModule.environment;
    if (!targetEnv) {
      throw Completion.Throw.create(
        "ReferenceError",
        `Module environment not found for binding "${String(bindingName)}"`,
      );
    }
    return yield* Q(targetEnv.getBindingValueEvaluator(bindingName, true));
  }

  override *setEvaluator(
    _propertyKey: StaticJsPropertyKey,
    _value: any,
    _opts?: StaticJsObjectPropertyAccessOptions | StaticJsValue,
  ): EvaluationGenerator<boolean> {
    return false;
  }

  override *deleteEvaluator(propertyKey: StaticJsPropertyKey): EvaluationGenerator<boolean> {
    if (isStaticJsSymbol(propertyKey)) {
      return yield* super.deleteEvaluator(propertyKey);
    }

    if (this._exports.includes(propertyKey)) {
      return false;
    }

    return true;
  }

  override *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    const exports = this._exports;
    const symbolKeys = yield* super.ownPropertyKeysEvaluator();
    return [...exports, ...symbolKeys];
  }
}
