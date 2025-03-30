import {
  StaticJsValue as IStaticJsValue,
  isStaticJsObjectPropertyDescriptorValue,
  isStaticJsObjectPropertyDescriptorGetter,
} from "../interfaces/index.js";

import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsEnvNumber from "./StaticJsEnvNumber.js";
import StaticJsEnvUndefined from "./StaticJsEnvUndefined.js";
import StaticJsEnvObject from "./StaticJsEnvObject.js";

export default class StaticJsEnvArray extends StaticJsEnvObject {
  constructor(items: IStaticJsValue[] = []) {
    // FIXME: Use Object.prototype, whatever that will be.
    super(null, "array");
    for (let i = 0; i < items.length; i++) {
      this.defineProperty(i.toString(), {
        value: items[i],
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    this._updateLength(items.length);
  }

  get runtimeTypeOf() {
    return "array";
  }

  get length(): number {
    const descr = this.getOwnPropertyDescriptor("length");
    if (!descr) {
      return 0;
    }

    if (isStaticJsObjectPropertyDescriptorValue(descr)) {
      return descr.value.toNumber();
    } else if (isStaticJsObjectPropertyDescriptorGetter(descr)) {
      return descr.get().toNumber();
    } else {
      return 0;
    }
  }

  get(index: number): IStaticJsValue {
    const descr = this.getOwnPropertyDescriptor(String(index));
    if (!descr) {
      return StaticJsEnvUndefined.Instance;
    }

    if (isStaticJsObjectPropertyDescriptorValue(descr)) {
      return descr.value;
    } else if (isStaticJsObjectPropertyDescriptorGetter(descr)) {
      return descr.get();
    } else {
      return StaticJsEnvUndefined.Instance;
    }
  }

  set(index: number, value: IStaticJsValue): void {
    this.setProperty(String(index), value, false);
  }

  slice(start = 0, end = this.length): StaticJsEnvArray {
    const array = new StaticJsEnvArray();
    for (let i = start; i < end; i++) {
      array.set(i, this.get(i));
    }
    return array;
  }

  sliceNative(start = 0, end = this.length): IStaticJsValue[] {
    const array = new Array<IStaticJsValue>();
    for (let i = start; i < end; i++) {
      array.push(this.get(i));
    }
    return array;
  }

  toJs() {
    const length = this.length;
    const array = new Array(length);
    for (const key of this.getOwnKeys()) {
      const descriptor = this.getOwnPropertyDescriptor(key)!;
      const objDescriptor = staticJsDescriptorToObjectDescriptor(descriptor);
      Object.defineProperty(array, key, objDescriptor);
    }

    // TODO: Set prototype if not Array.prototype
    return array;
  }

  toString() {
    const length = this.length;
    return Array(length)
      .fill(undefined)
      .map((_, i) => {
        const item = this.get(i);
        return item.toString();
      })
      .join(",");
  }

  toNumber() {
    const length = this.length;
    // Yes, really.
    if (length === 0) {
      return 0;
    }

    // Yes, really really.
    if (length === 1) {
      // Really really really.
      if (!this.hasProperty("0")) {
        return 0;
      }

      // Really really really really.
      return this.getProperty("0").toNumber();
    }

    // Really really really really really
    return Number.NaN;
  }

  protected _setWritableDataProperty(
    name: string,
    value: IStaticJsValue,
  ): void {
    super._setWritableDataProperty(name, value);
    const index = parseInt(name, 10);
    if (!Number.isNaN(index) && index >= this.length) {
      this._updateLength(index + 1);
    }
  }

  private _updateLength(length: number) {
    const currentLength = this.length;

    this.defineProperty("length", {
      value: new StaticJsEnvNumber(length),
      writable: true,
      enumerable: false,
      configurable: false,
    });

    if (length < currentLength) {
      for (let i = length; i < currentLength; i++) {
        this.deleteProperty(i.toString());
      }
    }
  }
}
