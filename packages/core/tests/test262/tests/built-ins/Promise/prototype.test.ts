import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "S25.4.4.2_A1.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/S25.4.4.2_A1.1_T1.js"),
  );
  it(
    "S25.4.5_A3.1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/S25.4.5_A3.1_T1.js"),
  );
  it(
    "Symbol.toStringTag.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/Symbol.toStringTag.js"),
  );
  describe("catch", () => {
    it(
      "S25.4.5.1_A1.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A1.1_T1.js"),
    );
    it(
      "S25.4.5.1_A2.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A2.1_T1.js"),
    );
    it(
      "S25.4.5.1_A3.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A3.1_T1.js"),
    );
    it(
      "S25.4.5.1_A3.1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A3.1_T2.js"),
    );
    it(
      "invokes-then.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/invokes-then.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/prop-desc.js"),
    );
    it(
      "this-value-non-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/this-value-non-object.js"),
    );
    it(
      "this-value-obj-coercible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/this-value-obj-coercible.js"),
    );
    it(
      "this-value-then-not-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/this-value-then-not-callable.js"),
    );
    it(
      "this-value-then-poisoned.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/this-value-then-poisoned.js"),
    );
    it(
      "this-value-then-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/catch/this-value-then-throws.js"),
    );
  });
  describe("finally", () => {
    it(
      "invokes-then-with-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/invokes-then-with-function.js"),
    );
    it(
      "invokes-then-with-non-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/invokes-then-with-non-function.js"),
    );
    it(
      "is-a-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/is-a-function.js"),
    );
    it(
      "is-a-method.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/is-a-method.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/prop-desc.js"),
    );
    it(
      "rejected-observable-then-calls-PromiseResolve.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/rejected-observable-then-calls-PromiseResolve.js",
      ),
    );
    it(
      "rejected-observable-then-calls-argument.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/rejected-observable-then-calls-argument.js",
      ),
    );
    it(
      "rejected-observable-then-calls.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/rejected-observable-then-calls.js"),
    );
    it(
      "rejection-reason-no-fulfill.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/rejection-reason-no-fulfill.js"),
    );
    it(
      "rejection-reason-override-with-throw.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/rejection-reason-override-with-throw.js",
      ),
    );
    it(
      "resolution-value-no-override.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/resolution-value-no-override.js"),
    );
    it(
      "resolved-observable-then-calls-PromiseResolve.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/resolved-observable-then-calls-PromiseResolve.js",
      ),
    );
    it(
      "resolved-observable-then-calls-argument.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/resolved-observable-then-calls-argument.js",
      ),
    );
    it(
      "resolved-observable-then-calls.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/resolved-observable-then-calls.js"),
    );
    it(
      "species-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/species-constructor.js"),
    );
    it(
      "subclass-reject-count.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/subclass-reject-count.js"),
    );
    it(
      "subclass-resolve-count.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/subclass-resolve-count.js"),
    );
    it(
      "subclass-species-constructor-reject-count.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/subclass-species-constructor-reject-count.js",
      ),
    );
    it(
      "subclass-species-constructor-resolve-count.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/finally/subclass-species-constructor-resolve-count.js",
      ),
    );
    it(
      "this-value-non-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-non-object.js"),
    );
    it(
      "this-value-proxy.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-proxy.js"),
    );
    it(
      "this-value-then-not-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-then-not-callable.js"),
    );
    it(
      "this-value-then-poisoned.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-then-poisoned.js"),
    );
    it(
      "this-value-then-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-then-throws.js"),
    );
    it(
      "this-value-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/finally/this-value-thenable.js"),
    );
  });
  it(
    "no-promise-state.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/no-promise-state.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/prop-desc.js"),
  );
  it(
    "proto.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Promise/prototype/proto.js"),
  );
  describe("then", () => {
    it(
      "S25.4.4_A1.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A1.1_T1.js"),
    );
    it(
      "S25.4.4_A2.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T1.js"),
    );
    it(
      "S25.4.4_A2.1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T2.js"),
    );
    it(
      "S25.4.4_A2.1_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T3.js"),
    );
    it(
      "S25.4.5.3_A1.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A1.1_T1.js"),
    );
    it(
      "S25.4.5.3_A1.1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A1.1_T2.js"),
    );
    it(
      "S25.4.5.3_A2.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A2.1_T1.js"),
    );
    it(
      "S25.4.5.3_A2.1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A2.1_T2.js"),
    );
    it(
      "S25.4.5.3_A4.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.1_T1.js"),
    );
    it(
      "S25.4.5.3_A4.1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.1_T2.js"),
    );
    it(
      "S25.4.5.3_A4.2_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.2_T1.js"),
    );
    it(
      "S25.4.5.3_A4.2_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.2_T2.js"),
    );
    it(
      "S25.4.5.3_A5.1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.1_T1.js"),
    );
    it(
      "S25.4.5.3_A5.2_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.2_T1.js"),
    );
    it(
      "S25.4.5.3_A5.3_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.3_T1.js"),
    );
    it(
      "capability-executor-called-twice.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/capability-executor-called-twice.js"),
    );
    it(
      "capability-executor-not-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/capability-executor-not-callable.js"),
    );
    it(
      "context-check-on-entry.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/context-check-on-entry.js"),
    );
    it(
      "ctor-access-count.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-access-count.js"),
    );
    it(
      "ctor-custom.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-custom.js"),
    );
    it(
      "ctor-null.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-null.js"),
    );
    it(
      "ctor-poisoned.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-poisoned.js"),
    );
    it(
      "ctor-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-throws.js"),
    );
    it(
      "ctor-undef.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/ctor-undef.js"),
    );
    it(
      "deferred-is-resolved-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/deferred-is-resolved-value.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/not-a-constructor.js"),
    );
    it(
      "prfm-fulfilled.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/prfm-fulfilled.js"),
    );
    it(
      "prfm-pending-fulfulled.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/prfm-pending-fulfulled.js"),
    );
    it(
      "prfm-pending-rejected.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/prfm-pending-rejected.js"),
    );
    it(
      "prfm-rejected.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/prfm-rejected.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/prop-desc.js"),
    );
    it(
      "reject-pending-fulfilled.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/reject-pending-fulfilled.js"),
    );
    it(
      "reject-pending-rejected.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/reject-pending-rejected.js"),
    );
    it(
      "reject-settled-fulfilled.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/reject-settled-fulfilled.js"),
    );
    it(
      "reject-settled-rejected.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/reject-settled-rejected.js"),
    );
    it(
      "resolve-pending-fulfilled-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-non-obj.js"),
    );
    it(
      "resolve-pending-fulfilled-non-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-fulfilled-non-thenable.js",
      ),
    );
    it(
      "resolve-pending-fulfilled-poisoned-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-fulfilled-poisoned-then.js",
      ),
    );
    it(
      "resolve-pending-fulfilled-prms-cstm-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-fulfilled-prms-cstm-then.js",
      ),
    );
    it(
      "resolve-pending-fulfilled-self.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-self.js"),
    );
    it(
      "resolve-pending-fulfilled-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-thenable.js"),
    );
    it(
      "resolve-pending-rejected-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-non-obj.js"),
    );
    it(
      "resolve-pending-rejected-non-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-rejected-non-thenable.js",
      ),
    );
    it(
      "resolve-pending-rejected-poisoned-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-rejected-poisoned-then.js",
      ),
    );
    it(
      "resolve-pending-rejected-prms-cstm-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-pending-rejected-prms-cstm-then.js",
      ),
    );
    it(
      "resolve-pending-rejected-self.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-self.js"),
    );
    it(
      "resolve-pending-rejected-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-thenable.js"),
    );
    it(
      "resolve-settled-fulfilled-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-non-obj.js"),
    );
    it(
      "resolve-settled-fulfilled-non-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-fulfilled-non-thenable.js",
      ),
    );
    it(
      "resolve-settled-fulfilled-poisoned-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-fulfilled-poisoned-then.js",
      ),
    );
    it(
      "resolve-settled-fulfilled-prms-cstm-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-fulfilled-prms-cstm-then.js",
      ),
    );
    it(
      "resolve-settled-fulfilled-self.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-self.js"),
    );
    it(
      "resolve-settled-fulfilled-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-thenable.js"),
    );
    it(
      "resolve-settled-rejected-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-non-obj.js"),
    );
    it(
      "resolve-settled-rejected-non-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-rejected-non-thenable.js",
      ),
    );
    it(
      "resolve-settled-rejected-poisoned-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-rejected-poisoned-then.js",
      ),
    );
    it(
      "resolve-settled-rejected-prms-cstm-then.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/resolve-settled-rejected-prms-cstm-then.js",
      ),
    );
    it(
      "resolve-settled-rejected-self.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-self.js"),
    );
    it(
      "resolve-settled-rejected-thenable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-thenable.js"),
    );
    it(
      "rxn-handler-fulfilled-invoke-nonstrict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/rxn-handler-fulfilled-invoke-nonstrict.js",
      ),
    );
    it(
      "rxn-handler-fulfilled-invoke-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-invoke-strict.js"),
    );
    it(
      "rxn-handler-fulfilled-next-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-next-abrupt.js"),
    );
    it(
      "rxn-handler-fulfilled-next.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-next.js"),
    );
    it(
      "rxn-handler-fulfilled-return-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-return-abrupt.js"),
    );
    it(
      "rxn-handler-fulfilled-return-normal.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-return-normal.js"),
    );
    it(
      "rxn-handler-identity.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-identity.js"),
    );
    it(
      "rxn-handler-rejected-invoke-nonstrict.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Promise/prototype/then/rxn-handler-rejected-invoke-nonstrict.js",
      ),
    );
    it(
      "rxn-handler-rejected-invoke-strict.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-invoke-strict.js"),
    );
    it(
      "rxn-handler-rejected-next-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-next-abrupt.js"),
    );
    it(
      "rxn-handler-rejected-next.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-next.js"),
    );
    it(
      "rxn-handler-rejected-return-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-return-abrupt.js"),
    );
    it(
      "rxn-handler-rejected-return-normal.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-return-normal.js"),
    );
    it(
      "rxn-handler-thrower.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Promise/prototype/then/rxn-handler-thrower.js"),
    );
  });
});
