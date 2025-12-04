import toString from "../../../algorithms/to-string.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const errorProtoToStringDeclaration: IntrinsicPropertyDeclaration = {
  key: "toString",
  *func(realm, thisArg) {
    if (!isStaticJsObjectLike(thisArg)) {
      return yield* toString(thisArg, realm);
    }

    const nameValue = yield* thisArg.getEvaluator("name");
    const name = yield* toString.js(nameValue, realm);

    const messageValue = yield* thisArg.getEvaluator("message");
    const message = yield* toString.js(messageValue, realm);

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
