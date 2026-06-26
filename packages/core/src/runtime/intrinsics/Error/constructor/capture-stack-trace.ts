import { captureStackTrace } from "../../../../algorithms/capture-stack-trace.js";
import { toObject } from "../../../../algorithms/to-object.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

export const errorCtorCaptureStackTraceDeclaration: IntrinsicPropertyDeclaration = {
  key: "captureStackTrace",
  *func(realm, _thisArg, target = realm.types.undefined, constructor = undefined) {
    target = yield* toObject(target);
    yield* captureStackTrace(target, constructor);
    return realm.types.undefined;
  },
};
