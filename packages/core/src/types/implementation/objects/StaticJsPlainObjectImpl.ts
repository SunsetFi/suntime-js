import type { StaticJsRealm } from "#realm/StaticJsRealm.js";

import { allocated } from "#memory/allocated.js";

import type { StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import type { StaticJsAbstractObjectCreateParams } from "../StaticJsAbstractObject.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export interface StaticJsPlainObjectImplCreateParams extends StaticJsAbstractObjectCreateParams {
  prototype?: StaticJsObject | StaticJsNull | null | undefined;
  properties?:
    | Record<string, StaticJsPropertyDescriptorRecord>
    | Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>
    | undefined;
}

export class StaticJsPlainObjectImpl extends StaticJsOrdinaryObjectImpl {
  static create(params: StaticJsPlainObjectImplCreateParams): StaticJsPlainObjectImpl {
    const { realm, prototype = null, properties } = params;

    const obj = allocated(new StaticJsPlainObjectImpl(realm, prototype));

    // Adding properties will add items for allocateSelf to count, so
    // we do it outside the constructor to ensure it is not double-counted by the above
    // allocated() call.

    let propertyIterator: Iterable<[StaticJsPropertyKey, StaticJsPropertyDescriptorRecord]>;
    if (properties instanceof Map) {
      propertyIterator = properties.entries();
    } else if (properties) {
      propertyIterator = Object.entries(properties);
    } else {
      propertyIterator = [];
    }

    for (const [key, descriptor] of propertyIterator) {
      obj.setOwnPropertyDescriptorSafe(key, descriptor);
    }

    return obj;
  }

  protected constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject | StaticJsNull | null = null,
  ) {
    super(realm, prototype);
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }
}
