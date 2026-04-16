import type { MaybeEvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";

import type { StaticJsCallable } from "./StaticJsCallable.js";
import type { StaticJsObject } from "./StaticJsObject.js";
import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "./StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "./StaticJsPropertyKey.js";
import type { StaticJsValue } from "./StaticJsValue.js";

export type StaticJsProxyTarget =
  | StaticJsObject
  | StaticJsCallable
  | object
  | Function
  | "object"
  | "function";

export interface StaticJsProxyHandlers {
  getPrototypeOf?(target: StaticJsObject): MaybeEvaluationGenerator<StaticJsObject | null>;
  setPrototypeOf?(
    target: StaticJsObject,
    prototype: StaticJsObject | null,
  ): MaybeEvaluationGenerator<boolean>;
  isExtensible?(target: StaticJsObject): MaybeEvaluationGenerator<boolean>;
  preventExtensions?(target: StaticJsObject): MaybeEvaluationGenerator<boolean>;
  getOwnPropertyDescriptor?(
    target: StaticJsObject,
    key: StaticJsPropertyKey,
  ): MaybeEvaluationGenerator<StaticJsPropertyDescriptor | undefined>;
  defineProperty?(
    target: StaticJsObject,
    key: StaticJsPropertyKey,
    desc: StaticJsPropertyDescriptorRecord,
  ): MaybeEvaluationGenerator<boolean>;
  has?(target: StaticJsObject, key: StaticJsPropertyKey): MaybeEvaluationGenerator<boolean>;
  get?(
    target: StaticJsObject,
    key: StaticJsPropertyKey,
    receiver: StaticJsValue,
  ): MaybeEvaluationGenerator<StaticJsValue>;
  set?(
    target: StaticJsObject,
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    receiver: StaticJsValue,
  ): MaybeEvaluationGenerator<boolean>;
  deleteProperty?(
    target: StaticJsObject,
    key: StaticJsPropertyKey,
  ): MaybeEvaluationGenerator<boolean>;
  ownKeys?(target: StaticJsObject): MaybeEvaluationGenerator<StaticJsPropertyKey[]>;
  apply?(
    target: StaticJsCallable,
    thisArgument: StaticJsValue,
    argArray: StaticJsValue[],
  ): MaybeEvaluationGenerator<StaticJsValue>;
  construct?(
    target: StaticJsCallable,
    argArray: StaticJsValue[],
    newTarget: StaticJsCallable,
  ): MaybeEvaluationGenerator<StaticJsObject>;
}

export const StaticJsProxyHandlerKeys = [
  "getPrototypeOf",
  "setPrototypeOf",
  "isExtensible",
  "preventExtensions",
  "getOwnPropertyDescriptor",
  "defineProperty",
  "has",
  "get",
  "set",
  "deleteProperty",
  "ownKeys",
  "apply",
  "construct",
];

export interface StaticJsProxy extends StaticJsObject, StaticJsCallable {
  readonly runtimeTypeOf: "proxy";
}
