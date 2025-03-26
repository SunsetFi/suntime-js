import { uniq, filter } from "lodash-es";

import {
  StaticJsObject as IStaticJsObject,
  StaticJsObjectPropertyDescriptor,
  StaticJsValue as IStaticJsValue,
  getStaticJsObjectPropertyDescriptorValue,
} from "../interfaces/index.js";
import {
  StaticJsObject,
  StaticJsUndefined,
  StaticJsValue,
} from "../factories/index.js";
import StaticJsObjectBase from "./StaticJsObjectBase.js";

export interface StaticJsRuntimeObjectOptions {
  extensible?: boolean;
  mutationTarget?: IStaticJsObject;
}

export default class StaticJsExternalObject extends StaticJsObjectBase<"object"> {
  private readonly _extensible: boolean;
  private readonly _mutationTarget: IStaticJsObject | undefined;
  private readonly _deletedKeys = new Set<string>();

  constructor(
    private readonly _obj: object,
    { mutationTarget, extensible }: StaticJsRuntimeObjectOptions = {},
  ) {
    super("object");
    this._mutationTarget = mutationTarget;

    this._extensible = extensible ?? mutationTarget != null;
    if (this._extensible && !mutationTarget) {
      this._mutationTarget = StaticJsObject();
    }
  }

  enumerateKeys(): string[] {
    return filter(
      uniq([
        ...Object.keys(this._obj),
        ...(this._mutationTarget?.enumerateKeys() ?? []),
      ]),
      (x) => !this._deletedKeys.has(x),
    );
  }

  toJs() {
    if (this._mutationTarget) {
      const result: Record<string, unknown> = {};
      for (const key of this.enumerateKeys()) {
        result[key] =
          this._mutationTarget.getProperty(key).toJs() ??
          this.getProperty(key).toJs();
      }
      return result;
    }

    // Not mutatable, return the same reference.
    // FIXME: By default for non-writables we proxy them, so this will be different than the original.
    // This is unintuitive.  We should instead make this class handle immutability.
    return this._obj;
  }

  getPropertyDescriptor(
    name: string,
  ): StaticJsObjectPropertyDescriptor | undefined {
    const descr = this._mutationTarget?.getPropertyDescriptor(name);
    if (descr) {
      return descr;
    }

    const objDescr = Object.getOwnPropertyDescriptor(this._obj, name);
    if (!objDescr) {
      return undefined;
    }

    const {
      writable,
      enumerable,
      configurable,
      value,
      get: descrGet,
      set: descrSet,
    } = objDescr;

    const get = () => {
      const mutatorDescr = this._mutationTarget?.getPropertyDescriptor(name);
      if (mutatorDescr) {
        return (
          getStaticJsObjectPropertyDescriptorValue(mutatorDescr) ??
          StaticJsUndefined()
        );
      }

      return StaticJsValue(descrGet?.call(this._obj) ?? value);
    };
    const set = (value: IStaticJsValue) => {
      if (this._mutationTarget) {
        this._mutationTarget.setProperty(name, value);
        return;
      }

      if (!writable) {
        return;
      }

      const jsValue = value.toJs();
      if (descrSet) {
        descrSet.call(this._obj, jsValue);
      } else {
        // @ts-expect-error: We know the name is a valid key of the object due to the Object.getOwnPropertyDescriptor call.
        this._obj[name] = jsValue;
      }
    };

    return {
      writable: this._mutationTarget != null || writable,
      enumerable,
      configurable,
      get,
      set,
    };
  }

  protected _setWritablePropertyByValue(
    name: string,
    value: IStaticJsValue,
  ): void {
    if (this._mutationTarget) {
      this._mutationTarget.setProperty(name, value);
      return;
    }

    // @ts-expect-error: We can trust that this is a valid key due to the checks made by StaticJsObjectBase.
    this._obj[typedName] = value.toJs();
  }

  protected _defineNewProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    if (!this._extensible) {
      // FIXME: Throw real error.
      throw new Error("Cannot define new property on non-extensible object.");
    }

    if (!this._mutationTarget) {
      // FIXME: Throw real error.
      throw new Error("Cannot define new property on non-extensible object.");
    }

    this._mutationTarget.defineProperty(name, descriptor);
  }

  protected _reconfigureProperty(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): void {
    if (!this._mutationTarget) {
      // FIXME: Throw real error.
      throw new Error("Cannot redefine property on non-extensible object.");
    }

    this._mutationTarget.defineProperty(name, descriptor);
  }

  protected _deleteConfigurableProperty(name: string): boolean {
    if (!this._mutationTarget) {
      return false;
    }

    if (this._deletedKeys.has(name)) {
      return false;
    }

    if (!this.hasProperty(name)) {
      return false;
    }

    this._deletedKeys.add(name);
    return true;
  }
}
