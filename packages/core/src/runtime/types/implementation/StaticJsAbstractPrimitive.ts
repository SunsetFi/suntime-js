import { StaticJsRealm } from "../../realm/StaticJsRealm.js";

export default abstract class StaticJsAbstractPrimitive {
  constructor(private readonly _realm: StaticJsRealm) {}

  get realm(): StaticJsRealm {
    return this._realm;
  }
}
