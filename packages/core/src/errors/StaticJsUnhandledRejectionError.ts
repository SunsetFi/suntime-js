import type { StaticJsValue } from "../runtime/types/StaticJsValue.js";

import { StaticJsRuntimeError } from "./StaticJsRuntimeError.js";

export class StaticJsUnhandledRejectionError extends StaticJsRuntimeError {
  constructor(thrown: StaticJsValue) {
    super(thrown, "Unhandled Rejection: ");
    this.name = "StaticJsUnhandledRejectionError";
  }
}
