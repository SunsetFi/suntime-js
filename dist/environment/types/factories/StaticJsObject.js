import { mapValues } from "lodash-es";
import StaticJsEnvObject from "../implementation/StaticJsEnvObject.js";
import StaticJsRuntimeObject from "../implementation/StaticJsRuntimeObject.js";
import toStaticJsValue from "../utils/to-static-js-value.js";
import { staticJsInstanceOf } from "../StaticJsTypeSymbol.js";
export default function StaticJsObject(obj = null, { static: isStatic, writable, mutatable } = {}) {
    if (staticJsInstanceOf(obj) === "object") {
        return obj;
    }
    if (typeof obj !== "object" && obj) {
        throw new Error("Not an object");
    }
    if (isStatic && writable) {
        throw new Error("Cannot be both static and writable");
    }
    if (obj === null) {
        return new StaticJsEnvObject();
    }
    if (writable) {
        // TODO: We need to unwrap the value for writeback
        throw new Error("Writable not implemented");
    }
    // By default allow mutations.
    return new StaticJsRuntimeObject(mapValues(obj, (key, value) => {
        let getter;
        if (isStatic) {
            const resolved = toStaticJsValue(value);
            getter = () => resolved;
        }
        else {
            getter = () => toStaticJsValue(obj[key]);
        }
        return {
            get: () => toStaticJsValue(obj[key]),
            // TODO: We need to unwrap the value for writeback.
            // set: writable
            //   ? (value: StaticJsValue) => {
            //       obj[key] = value;
            //     }
            //   : undefined,
        };
    }), mutatable ? new StaticJsEnvObject() : undefined);
}
