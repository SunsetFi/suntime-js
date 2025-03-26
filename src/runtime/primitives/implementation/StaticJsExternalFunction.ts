import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";

import { StaticJsValue as IStaticJsValue } from "../interfaces/index.js";
import { StaticJsValue } from "../factories/index.js";

import StaticJsEnvFunction from "./StaticJsEnvFunction.js";

// Could call this 'intrinsic', but that has special meaning and we aren't currently implementing that system.
export default class StaticJsExternalFunction<
  TArgs extends IStaticJsValue[] = IStaticJsValue[],
> extends StaticJsEnvFunction<TArgs> {
  constructor(
    name: string | null,
    func: (thisArg: IStaticJsValue, ...args: TArgs) => IStaticJsValue,
  ) {
    super(name, function* (thisArg, ...args) {
      try {
        const result = func(thisArg, ...args);
        return NormalCompletion(result);
      } catch (error) {
        // FIXME: Wrap error.  Do we really want to pass errors?
        // Should probably filter to ensure the throw is deliberate.
        return ThrowCompletion(StaticJsValue(error));
      }
    });
  }
}
