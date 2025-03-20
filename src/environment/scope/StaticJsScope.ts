import { StaticJsValue, StaticJsUndefined } from "../types/index.js";

interface StaticJsScopeDecl {
  writable: boolean;
  value: StaticJsValue;
}

export default class StaticJsScope {
  private readonly _properties = new Map<string, StaticJsScopeDecl>();

  constructor(private readonly _parent: StaticJsScope | null = null) {}

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
    if (this.hasProperty(name)) {
      throw new Error(`Cannot redeclare const property ${name}`);
    }

    this._properties.set(name, { writable: false, value });
  }

  declareLetProperty(name: string, value: StaticJsValue): void {
    if (this.hasProperty(name)) {
      throw new Error(`Cannot redeclare let property ${name}`);
    }

    this._properties.set(name, { writable: true, value });
  }

  setProperty(name: string, value: StaticJsValue): void {
    const decl = this._properties.get(name);
    if (!decl) {
      throw new Error(`Cannot set undeclared property ${name}`);
    }

    if (!decl.writable) {
      throw new Error(`Cannot set const property ${name}`);
    }

    decl.value = value;
  }
}
