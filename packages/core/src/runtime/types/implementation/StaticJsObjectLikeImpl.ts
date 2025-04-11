import { EvaluationGenerator } from "../../../evaluator/internal.js";

import { StaticJsRealm } from "../../realm/index.js";

import {
  StaticJsValue,
  StaticJsPropertyDescriptor,
  StaticJsObjectLike,
  StaticJsNull,
} from "../interfaces/index.js";

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
    return this._contents.get(name);
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
