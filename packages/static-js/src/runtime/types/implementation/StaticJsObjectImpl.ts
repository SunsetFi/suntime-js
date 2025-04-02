import { EvaluationGenerator } from "../../../evaluator/internal.js";

import { StaticJsRealm } from "../../realm/index.js";

import {
  StaticJsValue,
  StaticJsObjectPropertyDescriptor,
  StaticJsObject,
  StaticJsNull,
} from "../interfaces/index.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default class StaticJsObjectImpl extends StaticJsAbstractObject {
  private readonly _contents = new Map<
    string,
    StaticJsObjectPropertyDescriptor
  >();

  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject | StaticJsNull | null = null,
    runtimeTypeOf: StaticJsObject["runtimeTypeOf"] = "object",
  ) {
    super(realm, prototype, runtimeTypeOf);
  }

  *getOwnKeysEvaluator(): EvaluationGenerator<string[]> {
    return Array.from(this._contents.keys());
  }

  *getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined> {
    return this._contents.get(name);
  }

  deleteProperty(name: string): boolean {
    if (!this.extensible) {
      return false;
    }

    const decl = this._contents.get(name);
    if (!decl || !decl.configurable) {
      return false;
    }

    return this._contents.delete(name);
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
    descriptor: StaticJsObjectPropertyDescriptor,
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
