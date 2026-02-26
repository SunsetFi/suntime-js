import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import sameValue from "../../algorithms/same-value.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";
import type { StaticJsObjectLike, StaticJsPropertyKey } from "../StaticJsObjectLike.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
  type StaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import type { StaticJsModuleImplementation } from "../../modules/StaticJsModuleImplementation.js";
import { BindingNameNamespace } from "../../modules/implementation/StaticJsResolvedBinding.js";

export default class StaticJsNamespaceExoticObject extends StaticJsAbstractObject {
  constructor(
    private readonly _module: StaticJsModuleImplementation,
    private readonly _exports: string[],
    realm: StaticJsRealm,
  ) {
    super(realm, null);
  }

  get runtimeTypeOf(): string {
    return "object";
  }

  get runtimeTypeCode(): StaticJsTypeCode {
    return StaticJsTypeCode.Object;
  }

  get prototype(): StaticJsObjectLike | null {
    return null;
  }

  get extensible(): boolean {
    return false;
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    return Array.from(this._exports);
  }

  *setPrototypeOfEvaluator(_prototype: StaticJsObjectLike | null): EvaluationGenerator<void> {
    // No-op for namespace exotic objects.
  }

  *preventExtensionsEvaluator(): EvaluationGenerator<void> {
    // No-op for namespace exotic objects.
  }

  *getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsDataPropertyDescriptor | undefined> {
    if (typeof key !== "string") {
      return undefined;
    }

    if (!this._exports.includes(key)) {
      return undefined;
    }

    const binding = yield* this._module.resolveExportEvaluator(key);
    if (!binding || binding === "ambiguous") {
      throw new StaticJsEngineError(
        `Failed to resolve namespace export for key '${key}' of module ${this._module.name}.`,
      );
    }

    const targetModule = binding.module;

    let value: StaticJsValue;
    if (binding.bindingName === BindingNameNamespace) {
      value = yield* targetModule.getModuleNamespaceEvaluator();
    } else {
      // Spec says we get it directly from the target module's env,
      // but that doesn't work for us due to external modules.
      const resolved = yield* targetModule.getOwnBindingValueEvaluator(binding.bindingName);
      if (!resolved) {
        throw new ThrowCompletion(
          this.realm.types.error(
            "ReferenceError",
            // TODO: What error message?
            // In theory we need to use the module's environment,
            // but '${name} is not defined` seems confusing for an object-like property.
            `Module ${targetModule.name} binding ${binding.bindingName} for export ${key} not found.`,
          ),
        );
      }

      value = resolved;
    }

    return {
      value,
      writable: true,
      enumerable: true,
      configurable: false,
    };
  }

  protected *_setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (typeof key !== "string") {
      return false;
    }

    const current = yield* this.getOwnPropertyEvaluator(key);
    if (!current) {
      return false;
    }

    if (descriptor.configurable === true) {
      return false;
    }
    if (descriptor.enumerable === false) {
      return false;
    }

    if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
      return false;
    }

    if (isStaticJsDataPropertyDescriptor(descriptor)) {
      if (descriptor.writable === false) {
        return false;
      }

      if (descriptor.value) {
        return sameValue(
          descriptor.value,
          // current.value will always be populated in practice.
          current.value ?? this.realm.types.undefined,
        );
      }
    }

    return true;
  }

  protected *_deleteConfigurablePropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<boolean> {
    if (typeof key !== "string") {
      // true for no-ops
      return true;
    }

    if (this._exports.includes(key)) {
      return false;
    }

    return true;
  }
}
