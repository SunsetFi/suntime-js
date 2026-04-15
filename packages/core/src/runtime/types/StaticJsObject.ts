import type { EvaluationGenerator } from "../../evaluator/EvaluationGenerator.js";
import type { StaticJsRunTaskOptions } from "../tasks/StaticJsRunTaskOptions.js";
import type { StaticJsPrimitive } from "./StaticJsPrimitive.js";
import type {
  StaticJsPropertyDescriptor,
  StaticJsPropertyDescriptorRecord,
} from "./StaticJsPropertyDescriptor.js";
import type { StaticJsValue } from "./StaticJsValue.js";

import { StaticJsPrivateElement } from "./StaticJsPrivateElement.js";
import { StaticJsPrivateName } from "./StaticJsPrivateName.js";
import { StaticJsPropertyKey } from "./StaticJsPropertyKey.js";
import { StaticJsTypeCode } from "./StaticJsTypeCode.js";
import { isStaticJsValue } from "./StaticJsValue.js";

export interface StaticJsObject extends StaticJsPrimitive {
  getPrototypeOfAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsObject | null>;
  getPrototypeOfSync(opts?: StaticJsRunTaskOptions): StaticJsObject | null;
  getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null>;

  setPrototypeOfAsync(
    prototype: StaticJsObject | null,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  setPrototypeOfSync(prototype: StaticJsObject | null, opts?: StaticJsRunTaskOptions): boolean;
  setPrototypeOfEvaluator(prototype: StaticJsObject | null): EvaluationGenerator<boolean>;

  isExtensibleAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>;
  isExtensibleSync(opts?: StaticJsRunTaskOptions): boolean;
  isExtensibleEvaluator(opts?: StaticJsRunTaskOptions): EvaluationGenerator<boolean>;

  preventExtensionsAsync(opts?: StaticJsRunTaskOptions): Promise<boolean>;
  preventExtensionsSync(opts?: StaticJsRunTaskOptions): boolean;
  preventExtensionsEvaluator(): EvaluationGenerator<boolean>;

  ownPropertyKeysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsPropertyKey[]>;
  ownPropertyKeysSync(opts?: StaticJsRunTaskOptions): StaticJsPropertyKey[];
  ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]>;

  ownEnumerableKeysAsync(opts?: StaticJsRunTaskOptions): Promise<string[]>;
  ownEnumerableKeysSync(opts?: StaticJsRunTaskOptions): string[];
  ownEnumerableKeysEvaluator(): EvaluationGenerator<string[]>;

  hasPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  hasPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;

  hasOwnPropertyAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  hasOwnPropertySync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  hasOwnPropertyEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;

  getPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined;
  getPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  getOwnPropertyAsync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsPropertyDescriptor | undefined>;
  getOwnPropertySync(
    key: StaticJsPropertyKey,
    opts?: StaticJsRunTaskOptions,
  ): StaticJsPropertyDescriptor | undefined;
  getOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined>;

  defineOwnPropertyAsync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  defineOwnPropertySync(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
    opts?: StaticJsRunTaskOptions,
  ): boolean;
  defineOwnPropertyEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptorRecord,
  ): EvaluationGenerator<boolean>;

  getAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue>;
  getSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): StaticJsValue;
  getEvaluator(
    key: StaticJsPropertyKey,
    receiver: StaticJsValue,
  ): EvaluationGenerator<StaticJsValue>;

  setAsync(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<boolean>;
  setSync(key: StaticJsPropertyKey, value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean;
  setEvaluator(
    key: StaticJsPropertyKey,
    value: StaticJsValue,
    receiver: StaticJsValue,
  ): EvaluationGenerator<boolean>;

  deleteAsync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): Promise<boolean>;
  deleteSync(key: StaticJsPropertyKey, opts?: StaticJsRunTaskOptions): boolean;
  deleteEvaluator(key: StaticJsPropertyKey): EvaluationGenerator<boolean>;

  privateElementFindEvaluator(
    p: StaticJsPrivateName,
  ): EvaluationGenerator<StaticJsPrivateElement | null>;
  privateElementAddEvaluator(element: StaticJsPrivateElement): EvaluationGenerator<void>;
}

export function isStaticJsObject(value: unknown): value is StaticJsObject {
  if (!isStaticJsValue(value)) {
    return false;
  }

  return Boolean(value.runtimeTypeCode & StaticJsTypeCode.IsObjectFlag);
}
