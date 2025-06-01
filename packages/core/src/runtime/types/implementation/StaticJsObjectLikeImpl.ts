import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsObjectLike } from "../StaticJsObject.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default abstract class StaticJsObjectLikeImpl extends StaticJsAbstractObject {
  private readonly _contents = new Map<string, StaticJsPropertyDescriptor>();

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObjectLike | StaticJsNull | null = null,
  ) {
    super(realm, prototype);
  }

  *getOwnKeysEvaluator(): EvaluationGenerator<string[]> {
    return Array.from(this._contents.keys()).filter((x) =>
      this._contents.get(x),
    );
  }

  *getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const descriptor = this._contents.get(name);
    if (!descriptor) {
      return undefined;
    }

    // FIXME: Where should the defaults be resolved?
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

  protected *_setWritableDataPropertyEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    this._contents.set(name, {
      ...this._contents.get(name),
      value,
    });
  }

  protected *_definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void> {
    this._contents.set(name, {
      ...this._contents.get(name),
      ...descriptor,
    });
  }

  protected *_deleteConfigurablePropertyEvaluator(
    name: string,
  ): EvaluationGenerator<boolean> {
    return this._contents.delete(name);
  }
}
