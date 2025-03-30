import { StaticJsValue } from "../../types/index.js";

import StaticJsEnvironment from "../interfaces/StaticJsEnvironment.js";

import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    private readonly _thisArg: StaticJsValue,
    _args: StaticJsValue[],
  ) {
    super();
    // TODO: add arguments array-not-array-object.
  }

  hasThisBinding(): boolean {
    return true;
  }

  getThisBinding(): StaticJsValue {
    return this._thisArg;
  }

  getVarScope(): StaticJsEnvironment | null {
    return this;
  }
}
