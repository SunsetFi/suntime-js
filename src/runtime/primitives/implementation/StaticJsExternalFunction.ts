import { StaticJsValue } from "../interfaces/index.js";

import StaticJsEnvFunction from "./StaticJsEnvFunction.js";

// Could call this 'intrinsic', but that has special meaning and we aren't currently implementing that system.
export default class StaticJsExternalFunction<
  TArgs extends StaticJsValue[] = StaticJsValue[],
> extends StaticJsEnvFunction<TArgs> {
  constructor(func: (thisArg: StaticJsValue, ...args: TArgs) => StaticJsValue) {
    super(null, function* (thisArg, ...args) {
      return func(thisArg, ...args);
    });
  }
}
