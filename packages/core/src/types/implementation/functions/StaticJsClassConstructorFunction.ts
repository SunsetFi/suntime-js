import type { StaticJsClassFieldDefinitionRecord } from "#evaluator/node-evaluators/Classes/ClassFieldDefinitionRecord.js";
import type {
  StaticJsPrivateElementAccessor,
  StaticJsPrivateElementMethod,
} from "#types/StaticJsPrivateElement.js";

import { isStaticJsMethodFunction, type StaticJsMethodFunction } from "./StaticJsMethodFunction.js";

export interface StaticJsClassConstructorFunction extends StaticJsMethodFunction {
  privateMethods: (StaticJsPrivateElementMethod | StaticJsPrivateElementAccessor)[];
  fields: StaticJsClassFieldDefinitionRecord[];
}

export function isStaticJsClassConstructorFunction(
  value: unknown,
): value is StaticJsClassConstructorFunction {
  return isStaticJsMethodFunction(value) && "privateMethods" in value && "fields" in value;
}
