import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import type {
  StaticJsObjectLike,
  StaticJsObjectPropertyKey,
} from "../StaticJsObjectLike.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

interface ObjectKeyValueData {
  key: StaticJsValue;
  descriptor: StaticJsPropertyDescriptor;
}
export default abstract class StaticJsObjectLikeImpl extends StaticJsAbstractObject {
  // Note: Usage of a map is by far the biggest memory hog in here.
  // We might be able to convert both string and symbol keys to their js native primitives and use an object for storage instead.
  // BE CAREFUL OF LEAKING NATIVE PROPERTIES IF YOU DO THIS!
  private readonly _contents = new Map<
    StaticJsObjectPropertyKey,
    ObjectKeyValueData
  >();

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike | StaticJsNull | null = null,
  ) {
    super(realm, prototype);
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<
    StaticJsObjectPropertyKey[]
  > {
    return Array.from(this._contents.keys());
  }

  *getOwnPropertyEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const data = this._contents.get(name);
    if (!data) {
      return undefined;
    }

    const { descriptor } = data;

    if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
      return {
        configurable: false,
        enumerable: false,
        ...descriptor,
      };
    } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
      return {
        configurable: false,
        enumerable: false,
        writable: false,
        ...descriptor,
      };
    } else {
      throw new StaticJsEngineError(
        `Unknown descriptor type in getOwnPropertyDescriptor for property ${name}.`,
      );
    }
  }

  protected *_setPropertyDescriptorEvaluator(
    key: StaticJsObjectPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    let data = this._contents.get(key);

    const { descriptor: oldProperty } = data || {};
    const oldValue =
      oldProperty && isStaticJsDataPropertyDescriptor(oldProperty)
        ? oldProperty.value
        : undefined;

    const newValue = isStaticJsDataPropertyDescriptor(descriptor)
      ? descriptor.value
      : undefined;

    if (oldValue !== newValue) {
      if (oldValue) {
        oldValue.unref();
      }
      if (newValue) {
        newValue.ref();
      }
    }

    if (data) {
      data.descriptor = descriptor;
      return true;
    }

    data = {
      // Note: This is silly, but we need it to properly account for memory pressure.
      // We could rework this to accept the Engine key directly instead of a string, but then the backing store would need to account for this
      // similar to how MapImpl does it.
      key: isStaticJsSymbol(key) ? key : this.realm.types.string(key),
      descriptor,
    };

    data.key.ref();
    this._contents.set(key, data);

    return true;
  }

  protected *_deleteConfigurablePropertyEvaluator(
    name: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    const data = this._contents.get(name);
    if (!data) {
      return true;
    }

    const { key, descriptor } = data;

    key.unref();

    const value = isStaticJsDataPropertyDescriptor(descriptor)
      ? descriptor.value
      : undefined;
    if (value) {
      value.unref();
    }

    return this._contents.delete(name);
  }
}
