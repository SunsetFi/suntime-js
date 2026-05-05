import { Completion } from "../../../../evaluator/completions/Completion.js";
import { get } from "../../../algorithms/get.js";
import { toString } from "../../../algorithms/to-string.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const errorProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (!isStaticJsObject(thisArg)) {
      throw Completion.Throw("TypeError", "Error.prototype.toString called on non-object");
    }

    const nameValue = yield* get(thisArg, "name");
    let name: string;
    if (isStaticJsUndefined(nameValue)) {
      name = "Error";
    } else {
      name = yield* toString.js(nameValue);
    }

    const messageValue = yield* get(thisArg, "message");
    let message: string;
    if (isStaticJsUndefined(messageValue)) {
      message = "";
    } else {
      message = yield* toString.js(messageValue);
    }

    if (name === "") {
      return realm.types.string(message);
    }

    if (message === "") {
      return realm.types.string(name);
    }

    return realm.types.string(`${name}: ${message}`);
  },
};

export default errorProtoToStringDeclaration;
