import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { get } from "../../../algorithms/get.js";
import toString from "../../../algorithms/to-string.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";

const errorProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (!isStaticJsObject(thisArg)) {
      return yield* toString(thisArg);
    }

    const nameValue = yield* get(thisArg, "name");
    const name = yield* toString.js(nameValue);

    const messageValue = yield* get(thisArg, "message");
    const message = yield* toString.js(messageValue);

    let result: string;

    if (name === "") {
      result = message;
    } else if (message === "") {
      result = name;
    } else {
      result = `${name}: ${message}`;
    }

    return realm.types.string(result);
  },
};

export default errorProtoToStringDeclaration;
