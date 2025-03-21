import {
  StaticJsValue,
  StaticJsUndefined,
  assertStaticJsValue,
} from "../types/index.js";

interface StaticJsScopeDecl {
  writable: boolean;
  value: StaticJsValue;
}

export interface StaticJsScopeOptions {
  thisObj?: StaticJsValue | null;
  parent?: StaticJsScope | null;
}
export default class StaticJsScope {
  private readonly _properties = new Map<string, StaticJsScopeDecl>();
  private readonly _thisObj: StaticJsValue | null;
  private readonly _parent: StaticJsScope | null;
  constructor({ thisObj, parent }: StaticJsScopeOptions = {}) {
    this._thisObj = thisObj ?? null;
    this._parent = parent ?? null;
  }

  get thisObj(): StaticJsValue {
    // Do we want to return the parent's thisObj?  Or make it explicitly opt-in?
    return this._thisObj ?? this._parent?.thisObj ?? StaticJsUndefined();
  }

  hasProperty(name: string): boolean {
    if (this._properties.has(name)) {
      return true;
    }

    if (this._parent && this._parent.hasProperty(name)) {
      return true;
    }

    return false;
  }

  getProperty(name: string): StaticJsValue {
    return (
      this._properties.get(name)?.value ??
      this._parent?.getProperty(name) ??
      StaticJsUndefined()
    );
  }

  declareConstProperty(name: string, value: StaticJsValue): void {
    assertStaticJsValue(value);

    if (this.hasProperty(name)) {
      throw new Error(`Cannot redeclare const property ${name}`);
    }

    this._properties.set(name, { writable: false, value });
  }

  declareLetProperty(name: string, value: StaticJsValue): void {
    assertStaticJsValue(value);

    if (this.hasProperty(name)) {
      throw new Error(`Cannot redeclare let property ${name}`);
    }

    this._properties.set(name, { writable: true, value });
  }

  setProperty(name: string, value: StaticJsValue): void {
    assertStaticJsValue(value);

    const decl = this._properties.get(name);
    if (!decl) {
      throw new Error(`Undeclared identifier \"${name}\".`);
    }

    if (!decl.writable) {
      throw new Error(`Cannot set const variable \"${name}\".`);
    }

    decl.value = value;
  }
}
