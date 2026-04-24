import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("S25.4.4.2_A1.1_T1.js", createTestHandler("built-ins/Promise/prototype/S25.4.4.2_A1.1_T1.js"));
it("S25.4.5_A3.1_T1.js", createTestHandler("built-ins/Promise/prototype/S25.4.5_A3.1_T1.js"));
it("Symbol.toStringTag.js", createTestHandler("built-ins/Promise/prototype/Symbol.toStringTag.js"));
describe("catch", () => {
it("S25.4.5.1_A1.1_T1.js", createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A1.1_T1.js"));
});
describe("catch", () => {
it("S25.4.5.1_A2.1_T1.js", createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A2.1_T1.js"));
});
describe("catch", () => {
it("S25.4.5.1_A3.1_T1.js", createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A3.1_T1.js"));
});
describe("catch", () => {
it("S25.4.5.1_A3.1_T2.js", createTestHandler("built-ins/Promise/prototype/catch/S25.4.5.1_A3.1_T2.js"));
});
describe("catch", () => {
it("invokes-then.js", createTestHandler("built-ins/Promise/prototype/catch/invokes-then.js"));
});
describe("catch", () => {
it("length.js", createTestHandler("built-ins/Promise/prototype/catch/length.js"));
});
describe("catch", () => {
it("name.js", createTestHandler("built-ins/Promise/prototype/catch/name.js"));
});
describe("catch", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Promise/prototype/catch/not-a-constructor.js"));
});
describe("catch", () => {
it("prop-desc.js", createTestHandler("built-ins/Promise/prototype/catch/prop-desc.js"));
});
describe("catch", () => {
it("this-value-non-object.js", createTestHandler("built-ins/Promise/prototype/catch/this-value-non-object.js"));
});
describe("catch", () => {
it("this-value-obj-coercible.js", createTestHandler("built-ins/Promise/prototype/catch/this-value-obj-coercible.js"));
});
describe("catch", () => {
it("this-value-then-not-callable.js", createTestHandler("built-ins/Promise/prototype/catch/this-value-then-not-callable.js"));
});
describe("catch", () => {
it("this-value-then-poisoned.js", createTestHandler("built-ins/Promise/prototype/catch/this-value-then-poisoned.js"));
});
describe("catch", () => {
it("this-value-then-throws.js", createTestHandler("built-ins/Promise/prototype/catch/this-value-then-throws.js"));
});
describe("finally", () => {
it("invokes-then-with-function.js", createTestHandler("built-ins/Promise/prototype/finally/invokes-then-with-function.js"));
});
describe("finally", () => {
it("invokes-then-with-non-function.js", createTestHandler("built-ins/Promise/prototype/finally/invokes-then-with-non-function.js"));
});
describe("finally", () => {
it("is-a-function.js", createTestHandler("built-ins/Promise/prototype/finally/is-a-function.js"));
});
describe("finally", () => {
it("is-a-method.js", createTestHandler("built-ins/Promise/prototype/finally/is-a-method.js"));
});
describe("finally", () => {
it("length.js", createTestHandler("built-ins/Promise/prototype/finally/length.js"));
});
describe("finally", () => {
it("name.js", createTestHandler("built-ins/Promise/prototype/finally/name.js"));
});
describe("finally", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Promise/prototype/finally/not-a-constructor.js"));
});
describe("finally", () => {
it("prop-desc.js", createTestHandler("built-ins/Promise/prototype/finally/prop-desc.js"));
});
describe("finally", () => {
it("rejected-observable-then-calls-PromiseResolve.js", createTestHandler("built-ins/Promise/prototype/finally/rejected-observable-then-calls-PromiseResolve.js"));
});
describe("finally", () => {
it("rejected-observable-then-calls-argument.js", createTestHandler("built-ins/Promise/prototype/finally/rejected-observable-then-calls-argument.js"));
});
describe("finally", () => {
it("rejected-observable-then-calls.js", createTestHandler("built-ins/Promise/prototype/finally/rejected-observable-then-calls.js"));
});
describe("finally", () => {
it("rejection-reason-no-fulfill.js", createTestHandler("built-ins/Promise/prototype/finally/rejection-reason-no-fulfill.js"));
});
describe("finally", () => {
it("rejection-reason-override-with-throw.js", createTestHandler("built-ins/Promise/prototype/finally/rejection-reason-override-with-throw.js"));
});
describe("finally", () => {
it("resolution-value-no-override.js", createTestHandler("built-ins/Promise/prototype/finally/resolution-value-no-override.js"));
});
describe("finally", () => {
it("resolved-observable-then-calls-PromiseResolve.js", createTestHandler("built-ins/Promise/prototype/finally/resolved-observable-then-calls-PromiseResolve.js"));
});
describe("finally", () => {
it("resolved-observable-then-calls-argument.js", createTestHandler("built-ins/Promise/prototype/finally/resolved-observable-then-calls-argument.js"));
});
describe("finally", () => {
it("resolved-observable-then-calls.js", createTestHandler("built-ins/Promise/prototype/finally/resolved-observable-then-calls.js"));
});
describe("finally", () => {
it("species-constructor.js", createTestHandler("built-ins/Promise/prototype/finally/species-constructor.js"));
});
describe("finally", () => {
it("subclass-reject-count.js", createTestHandler("built-ins/Promise/prototype/finally/subclass-reject-count.js"));
});
describe("finally", () => {
it("subclass-resolve-count.js", createTestHandler("built-ins/Promise/prototype/finally/subclass-resolve-count.js"));
});
describe("finally", () => {
it("subclass-species-constructor-reject-count.js", createTestHandler("built-ins/Promise/prototype/finally/subclass-species-constructor-reject-count.js"));
});
describe("finally", () => {
it("subclass-species-constructor-resolve-count.js", createTestHandler("built-ins/Promise/prototype/finally/subclass-species-constructor-resolve-count.js"));
});
describe("finally", () => {
it("this-value-non-object.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-non-object.js"));
});
describe("finally", () => {
it("this-value-proxy.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-proxy.js"));
});
describe("finally", () => {
it("this-value-then-not-callable.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-then-not-callable.js"));
});
describe("finally", () => {
it("this-value-then-poisoned.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-then-poisoned.js"));
});
describe("finally", () => {
it("this-value-then-throws.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-then-throws.js"));
});
describe("finally", () => {
it("this-value-thenable.js", createTestHandler("built-ins/Promise/prototype/finally/this-value-thenable.js"));
});
it("no-promise-state.js", createTestHandler("built-ins/Promise/prototype/no-promise-state.js"));
it("prop-desc.js", createTestHandler("built-ins/Promise/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/Promise/prototype/proto.js"));
describe("then", () => {
it("S25.4.4_A1.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A1.1_T1.js"));
});
describe("then", () => {
it("S25.4.4_A2.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T1.js"));
});
describe("then", () => {
it("S25.4.4_A2.1_T2.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T2.js"));
});
describe("then", () => {
it("S25.4.4_A2.1_T3.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.4_A2.1_T3.js"));
});
describe("then", () => {
it("S25.4.5.3_A1.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A1.1_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A1.1_T2.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A1.1_T2.js"));
});
describe("then", () => {
it("S25.4.5.3_A2.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A2.1_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A2.1_T2.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A2.1_T2.js"));
});
describe("then", () => {
it("S25.4.5.3_A4.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.1_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A4.1_T2.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.1_T2.js"));
});
describe("then", () => {
it("S25.4.5.3_A4.2_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.2_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A4.2_T2.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A4.2_T2.js"));
});
describe("then", () => {
it("S25.4.5.3_A5.1_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.1_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A5.2_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.2_T1.js"));
});
describe("then", () => {
it("S25.4.5.3_A5.3_T1.js", createTestHandler("built-ins/Promise/prototype/then/S25.4.5.3_A5.3_T1.js"));
});
describe("then", () => {
it("capability-executor-called-twice.js", createTestHandler("built-ins/Promise/prototype/then/capability-executor-called-twice.js"));
});
describe("then", () => {
it("capability-executor-not-callable.js", createTestHandler("built-ins/Promise/prototype/then/capability-executor-not-callable.js"));
});
describe("then", () => {
it("context-check-on-entry.js", createTestHandler("built-ins/Promise/prototype/then/context-check-on-entry.js"));
});
describe("then", () => {
it("ctor-access-count.js", createTestHandler("built-ins/Promise/prototype/then/ctor-access-count.js"));
});
describe("then", () => {
it("ctor-custom.js", createTestHandler("built-ins/Promise/prototype/then/ctor-custom.js"));
});
describe("then", () => {
it("ctor-null.js", createTestHandler("built-ins/Promise/prototype/then/ctor-null.js"));
});
describe("then", () => {
it("ctor-poisoned.js", createTestHandler("built-ins/Promise/prototype/then/ctor-poisoned.js"));
});
describe("then", () => {
it("ctor-throws.js", createTestHandler("built-ins/Promise/prototype/then/ctor-throws.js"));
});
describe("then", () => {
it("ctor-undef.js", createTestHandler("built-ins/Promise/prototype/then/ctor-undef.js"));
});
describe("then", () => {
it("deferred-is-resolved-value.js", createTestHandler("built-ins/Promise/prototype/then/deferred-is-resolved-value.js"));
});
describe("then", () => {
it("length.js", createTestHandler("built-ins/Promise/prototype/then/length.js"));
});
describe("then", () => {
it("name.js", createTestHandler("built-ins/Promise/prototype/then/name.js"));
});
describe("then", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Promise/prototype/then/not-a-constructor.js"));
});
describe("then", () => {
it("prfm-fulfilled.js", createTestHandler("built-ins/Promise/prototype/then/prfm-fulfilled.js"));
});
describe("then", () => {
it("prfm-pending-fulfulled.js", createTestHandler("built-ins/Promise/prototype/then/prfm-pending-fulfulled.js"));
});
describe("then", () => {
it("prfm-pending-rejected.js", createTestHandler("built-ins/Promise/prototype/then/prfm-pending-rejected.js"));
});
describe("then", () => {
it("prfm-rejected.js", createTestHandler("built-ins/Promise/prototype/then/prfm-rejected.js"));
});
describe("then", () => {
it("prop-desc.js", createTestHandler("built-ins/Promise/prototype/then/prop-desc.js"));
});
describe("then", () => {
it("reject-pending-fulfilled.js", createTestHandler("built-ins/Promise/prototype/then/reject-pending-fulfilled.js"));
});
describe("then", () => {
it("reject-pending-rejected.js", createTestHandler("built-ins/Promise/prototype/then/reject-pending-rejected.js"));
});
describe("then", () => {
it("reject-settled-fulfilled.js", createTestHandler("built-ins/Promise/prototype/then/reject-settled-fulfilled.js"));
});
describe("then", () => {
it("reject-settled-rejected.js", createTestHandler("built-ins/Promise/prototype/then/reject-settled-rejected.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-non-obj.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-non-obj.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-non-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-non-thenable.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-poisoned-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-poisoned-then.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-prms-cstm-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-prms-cstm-then.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-self.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-self.js"));
});
describe("then", () => {
it("resolve-pending-fulfilled-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-fulfilled-thenable.js"));
});
describe("then", () => {
it("resolve-pending-rejected-non-obj.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-non-obj.js"));
});
describe("then", () => {
it("resolve-pending-rejected-non-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-non-thenable.js"));
});
describe("then", () => {
it("resolve-pending-rejected-poisoned-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-poisoned-then.js"));
});
describe("then", () => {
it("resolve-pending-rejected-prms-cstm-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-prms-cstm-then.js"));
});
describe("then", () => {
it("resolve-pending-rejected-self.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-self.js"));
});
describe("then", () => {
it("resolve-pending-rejected-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-pending-rejected-thenable.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-non-obj.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-non-obj.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-non-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-non-thenable.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-poisoned-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-poisoned-then.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-prms-cstm-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-prms-cstm-then.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-self.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-self.js"));
});
describe("then", () => {
it("resolve-settled-fulfilled-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-fulfilled-thenable.js"));
});
describe("then", () => {
it("resolve-settled-rejected-non-obj.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-non-obj.js"));
});
describe("then", () => {
it("resolve-settled-rejected-non-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-non-thenable.js"));
});
describe("then", () => {
it("resolve-settled-rejected-poisoned-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-poisoned-then.js"));
});
describe("then", () => {
it("resolve-settled-rejected-prms-cstm-then.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-prms-cstm-then.js"));
});
describe("then", () => {
it("resolve-settled-rejected-self.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-self.js"));
});
describe("then", () => {
it("resolve-settled-rejected-thenable.js", createTestHandler("built-ins/Promise/prototype/then/resolve-settled-rejected-thenable.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-invoke-nonstrict.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-invoke-nonstrict.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-invoke-strict.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-invoke-strict.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-next-abrupt.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-next-abrupt.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-next.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-next.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-return-abrupt.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-return-abrupt.js"));
});
describe("then", () => {
it("rxn-handler-fulfilled-return-normal.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-fulfilled-return-normal.js"));
});
describe("then", () => {
it("rxn-handler-identity.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-identity.js"));
});
describe("then", () => {
it("rxn-handler-rejected-invoke-nonstrict.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-invoke-nonstrict.js"));
});
describe("then", () => {
it("rxn-handler-rejected-invoke-strict.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-invoke-strict.js"));
});
describe("then", () => {
it("rxn-handler-rejected-next-abrupt.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-next-abrupt.js"));
});
describe("then", () => {
it("rxn-handler-rejected-next.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-next.js"));
});
describe("then", () => {
it("rxn-handler-rejected-return-abrupt.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-return-abrupt.js"));
});
describe("then", () => {
it("rxn-handler-rejected-return-normal.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-rejected-return-normal.js"));
});
describe("then", () => {
it("rxn-handler-thrower.js", createTestHandler("built-ins/Promise/prototype/then/rxn-handler-thrower.js"));
});
});
