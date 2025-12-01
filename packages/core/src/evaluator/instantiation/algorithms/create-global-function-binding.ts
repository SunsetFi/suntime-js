import type { StaticJsPropertyDescriptor } from "../../../runtime/types/StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "../../../runtime/types/StaticJsValue.js";

import { ThrowCompletion } from "../../completions/ThrowCompletion.js";

import type EvaluationContext from "../../EvaluationContext.js";
import type EvaluationGenerator from "../../EvaluationGenerator.js";

export default function* createGlobalFunctionBinding(
  name: string,
  value: StaticJsValue,
  deletable: boolean,
  context: EvaluationContext,
): EvaluationGenerator<void> {
  const globalObject = context.realm.global;

  const existingProp =
    yield* globalObject.getOwnPropertyDescriptorEvaluator(name);

  let desc: StaticJsPropertyDescriptor;
  if (!existingProp || existingProp.configurable) {
    desc = {
      value,
      writable: true,
      enumerable: true,
      configurable: deletable,
    };
  } else {
    desc = {
      value,
    };
  }

  const result = yield* globalObject.definePropertyEvaluator(name, desc);
  if (!result) {
    throw new ThrowCompletion(
      context.realm.types.error(
        "TypeError",
        `Cannot create global function binding for ${name}`,
      ),
    );
  }

  yield* globalObject.setEvaluator(name, value, false);
}
