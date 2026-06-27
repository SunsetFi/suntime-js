import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import {
  STATICJS_OBJECT_OVERHEAD_BYTES,
  STATICJS_OBJECT_PROPERTY_OVERHEAD_BYTES,
} from "#memory/implementation/measurements.js";
import { stringSizeBytes } from "#memory/implementation/string-size.js";

import type { StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPropertyDescriptor } from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import type { StaticJsSymbol } from "../../StaticJsSymbol.js";

import {
  isStaticJsAccessorPropertyDescriptor,
  isStaticJsDataPropertyDescriptor,
} from "../../StaticJsPropertyDescriptor.js";
import { StaticJsAbstractObject } from "../StaticJsAbstractObject.js";
import { isArrayIndex } from "./is-array-index.js";

export abstract class StaticJsOrdinaryObjectImpl extends StaticJsAbstractObject {
  private readonly _contents = new Map<StaticJsPropertyKey, StaticJsPropertyDescriptor>();

  constructor(realm: StaticJsRealm, prototype: StaticJsObject | StaticJsNull | null = null) {
    super(realm, prototype);
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    // These keys have a special order they are returned in.
    // We can probably precompute this rather than computing it on the fly...
    const indexes: number[] = [];
    const keys: string[] = [];
    const symbols: StaticJsSymbol[] = [];
    for (const key of this._contents.keys()) {
      if (isArrayIndex(key)) {
        indexes.push(Number(key));
      } else if (typeof key === "string") {
        keys.push(key);
      } else {
        symbols.push(key);
      }
    }

    return [...indexes.sort((a, b) => a - b).map(String), ...keys, ...symbols];
  }

  *getOwnPropertyEvaluator(
    name: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const descriptor = this._contents.get(name);
    if (!descriptor) {
      return undefined;
    }

    if (isStaticJsAccessorPropertyDescriptor(descriptor)) {
      return {
        ...descriptor,
      };
    } else if (isStaticJsDataPropertyDescriptor(descriptor)) {
      return {
        ...descriptor,
      };
    } else {
      throw new StaticJsEngineError(
        `Unknown descriptor type in getOwnPropertyDescriptor for property ${name}.`,
      );
    }
  }

  override mark(marks: Set<StaticJsMarkable>, allocate?: (size: number) => void): void {
    if (marks.has(this)) {
      return;
    }

    marks.add(this);

    allocate?.(STATICJS_OBJECT_OVERHEAD_BYTES);

    for (const [key, descr] of this._contents.entries()) {
      allocate?.(STATICJS_OBJECT_PROPERTY_OVERHEAD_BYTES);

      if (typeof key === "string") {
        allocate?.(stringSizeBytes(key));
      } else {
        key.mark(marks, allocate);
      }

      if (isStaticJsDataPropertyDescriptor(descr)) {
        descr.value.mark(marks, allocate);
      } else if (isStaticJsAccessorPropertyDescriptor(descr)) {
        if (descr.get) {
          descr.get.mark(marks, allocate);
        }
        if (descr.set) {
          descr.set.mark(marks, allocate);
        }
      }
    }
  }

  protected *_setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    // TODO: Accept StaticJsStrings as property keys too and use that as a sign we do not need to allocate
    if (!this._contents.has(key)) {
      let size = STATICJS_OBJECT_PROPERTY_OVERHEAD_BYTES;
      if (typeof key === "string") {
        size += stringSizeBytes(key);
      }
      this.realm.memory.allocate(size);
    }

    // Note: At one point, we merged the descriptor with the existing one.
    // No longer; that's done in AbstractObject.definePropertyEvaluator according to the spec.
    this._contents.set(key, {
      ...descriptor,
    });

    return true;
  }

  protected *_deleteConfigurablePropertyEvaluator(
    name: StaticJsPropertyKey,
  ): EvaluationGenerator<boolean> {
    // We don't track deletions in memory; rely on sweep instead.
    return this._contents.delete(name);
  }
}
