import { StaticJsValue } from "../../primitives/index.js";

import { StaticJsEnvironment } from "../interfaces/index.js";

import StaticJsBaseEnvironment from "./StaticJsBaseEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";
import StaticJsEnvironmentBindingProvider, {
  isStaticJsEnvironmentBindingProvider,
  StaticJsEnvironmentGetBinding,
} from "./StaticJsEnvironmentBindingProvider.js";

export default class StaticJsLexicalEnvironment extends StaticJsBaseEnvironment {
  private readonly _record: StaticJsEnvironment &
    StaticJsEnvironmentBindingProvider;
  private readonly _parent:
    | (StaticJsEnvironment & StaticJsEnvironmentBindingProvider)
    | null;

  constructor(record: StaticJsEnvironment, parent: StaticJsEnvironment | null) {
    super();

    // FIXME: We use getBinding as an implementation optimization but I don't want to expose it.
    // I'm too overwhelmed to figure out what to do about this right now.

    if (!isStaticJsEnvironmentBindingProvider(record)) {
      throw new Error("Invalid record.");
    }

    if (!isStaticJsEnvironmentBindingProvider(parent)) {
      throw new Error("Invalid parent.");
    }

    this._record = record;
    this._parent = parent;
  }

  createMutableBinding(name: string, deletable: boolean): void {
    this._record.createMutableBinding(name, deletable);
  }

  createImmutableBinding(name: string, strict: boolean): void {
    this._record.createImmutableBinding(name, strict);
  }

  hasThisBinding(): boolean {
    return this._record.hasThisBinding();
  }

  hasSuperBinding(): boolean {
    return this._record.hasSuperBinding();
  }

  withBaseObject(): StaticJsValue {
    return this._record.withBaseObject();
  }

  getThisBinding(): StaticJsValue {
    return this._record.getThisBinding();
  }

  getSuperBase(): StaticJsValue {
    return this._record.getSuperBase();
  }

  getVarScope(): StaticJsEnvironment | null {
    return this._record.getVarScope() ?? this._parent?.getVarScope() ?? null;
  }

  [StaticJsEnvironmentGetBinding](
    name: string,
  ): StaticJsEnvironmentBinding | undefined {
    return (
      this._record[StaticJsEnvironmentGetBinding](name) ??
      this._parent?.[StaticJsEnvironmentGetBinding](name)
    );
  }
}
