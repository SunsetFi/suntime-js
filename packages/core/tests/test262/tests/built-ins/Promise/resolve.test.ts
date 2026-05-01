import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S25.4.4.5_A1.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A1.1_T1.js"),
);

it(
  "S25.4.4.5_A2.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A2.1_T1.js"),
);

it(
  "S25.4.4.5_A2.2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A2.2_T1.js"),
);

it(
  "S25.4.4.5_A2.3_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A2.3_T1.js"),
);

it(
  "S25.4.4.5_A3.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A3.1_T1.js"),
);

it(
  "S25.4.4.5_A4.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.4.4.5_A4.1_T1.js"),
);

it(
  "S25.Promise_resolve_foreign_thenable_1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.Promise_resolve_foreign_thenable_1.js"),
);

it(
  "S25.Promise_resolve_foreign_thenable_2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/S25.Promise_resolve_foreign_thenable_2.js"),
);

it(
  "arg-non-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/arg-non-thenable.js"),
);

it(
  "arg-poisoned-then.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/arg-poisoned-then.js"),
);

it(
  "arg-uniq-ctor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve/arg-uniq-ctor.js"),
);

it(
  "capability-executor-called-twice.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve/capability-executor-called-twice.js"),
);

it(
  "capability-executor-not-callable.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve/capability-executor-not-callable.js"),
);

it(
  "capability-invocation-error.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/capability-invocation-error.js"),
);

it(
  "context-non-object-with-promise.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/context-non-object-with-promise.js"),
);

it(
  "ctx-ctor-throws.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/ctx-ctor-throws.js"),
);

it(
  "ctx-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/ctx-ctor.js"),
);

it(
  "ctx-non-ctor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/ctx-non-ctor.js"),
);

it(
  "ctx-non-object.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/ctx-non-object.js"),
);

it(
  "length.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/length.js"),
);

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Promise/resolve/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/prop-desc.js"),
);

it(
  "resolve-from-promise-capability.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-from-promise-capability.js"),
);

it(
  "resolve-non-obj.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-non-obj.js"),
);

it(
  "resolve-non-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-non-thenable.js"),
);

it(
  "resolve-poisoned-then.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-poisoned-then.js"),
);

it(
  "resolve-prms-cstm-then.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-prms-cstm-then.js"),
);

it(
  "resolve-self.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-self.js"),
);

it(
  "resolve-thenable.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Promise/resolve/resolve-thenable.js"),
);
