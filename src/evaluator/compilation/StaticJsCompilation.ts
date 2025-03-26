import { StaticJsRealm } from "../../runtime/index.js";

export default interface StaticJsCompilation {
  evaluate(realm?: StaticJsRealm): unknown;

  // TODO: generator() to get a step-by-step evaluation generator supporting introspection for debugging.
}
