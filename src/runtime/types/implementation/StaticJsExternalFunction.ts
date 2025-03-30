import {
  NormalCompletion,
  ThrowCompletion,
} from "../../../evaluator/internal.js";

import StaticJsValue from "../factories/StaticJsValue.js";

import StaticJsEnvFunction from "./StaticJsEnvFunction.js";

// Could call this 'intrinsic', but that has special meaning and we aren't currently implementing that system.
export default class StaticJsExternalFunction extends StaticJsEnvFunction {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  constructor(name: string | null, func: Function) {
    super(name, function* (thisArg, ...args) {
      const valueArgs = args.map((arg) => arg.toJs());
      try {
        const result = func.call(thisArg.toJs(), valueArgs);
        return NormalCompletion(StaticJsValue(result));
      } catch (error) {
        // FIXME: Wrap error.  Do we really want to pass errors?
        // Should probably filter to ensure the throw is deliberate.
        return ThrowCompletion(StaticJsValue(error));
      }
    });
  }
}
