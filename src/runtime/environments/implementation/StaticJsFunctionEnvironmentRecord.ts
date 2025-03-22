import { StaticJsValue } from "../../primitives/index.js";
import StaticJsDeclarativeEnvironmentRecord from "./StaticJsDeclarativeEnvironmentRecord.js";
import StaticJsEnvironmentBinding from "./StaticJsEnvironmentBinding.js";

export default class StaticJsFunctionEnvironmentRecord extends StaticJsDeclarativeEnvironmentRecord {
  constructor(
    private readonly _thisArg: StaticJsValue,
    args: StaticJsValue[],
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
}
