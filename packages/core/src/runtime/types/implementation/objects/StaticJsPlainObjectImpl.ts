import { EvaluationContext } from "../../../../evaluator/EvaluationContext.js";
import { validateAndApplyPropertyDescriptor } from "../../../algorithms/validate-and-apply-property-descriptor.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { drainIterator } from "../../../utils/drain-iterator.js";
import type { StaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import { StaticJsPropertyDescriptorRecord } from "../../StaticJsPropertyDescriptor.js";
import { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";

import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsPlainObjectImpl extends StaticJsOrdinaryObjectImpl {
  constructor(
    realm: StaticJsRealm,
    prototype: StaticJsObject | StaticJsNull | null = null,
    properties:
      | Record<string, StaticJsPropertyDescriptorRecord>
      | Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>
      | null = null,
  ) {
    super(realm, prototype);

    let propertyIterator: Iterable<[StaticJsPropertyKey, StaticJsPropertyDescriptorRecord]>;
    if (properties instanceof Map) {
      propertyIterator = properties.entries();
    } else if (properties && typeof properties === "object") {
      propertyIterator = Object.entries(properties);
    } else {
      propertyIterator = [];
    }

    // We can be instantiated outside of sandbox code, so ensure we have a realm for
    // validateAndApplyPropertyDescriptor to reference types from.
    EvaluationContext.withRealm(realm, () => {
      // This should be safe, as plain objects extend OrdinaryObject, which does not do anything special
      // here.
      // We could expose _contents and set it directly, but this is our route to populating defaults for StaticJsPropertyDescriptorRecord.
      // We know this function doesn't actually yield any values or run sandboxed code,
      // and this is the only function yielded from validateAndApplyPropertyDescriptor
      const setSlot = this._setPropertyDescriptorEvaluator.bind(this);
      for (const [key, descriptor] of propertyIterator) {
        drainIterator(validateAndApplyPropertyDescriptor(setSlot, key, true, descriptor));
      }
    });
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }
}
