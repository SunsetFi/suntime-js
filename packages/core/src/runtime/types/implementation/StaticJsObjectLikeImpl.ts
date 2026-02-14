import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
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

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default abstract class StaticJsObjectLikeImpl extends StaticJsAbstractObject {
  private readonly _contents = new Map<
    StaticJsObjectPropertyKey,
    StaticJsPropertyDescriptor
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
    const descriptor = this._contents.get(name);
    if (!descriptor) {
      return undefined;
    }

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
    // Note: At one point, we merged the descriptor with the existing one.
    // No longer; that's done in AbstractObject.definePropertyEvaluator according to the spec.
    this._contents.set(key, {
      ...descriptor,
    });

    return true;
  }

  protected *_deleteConfigurablePropertyEvaluator(
    name: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<boolean> {
    return this._contents.delete(name);
  }
}
