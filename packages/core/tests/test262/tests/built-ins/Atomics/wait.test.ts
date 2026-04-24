import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("wait", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/wait/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/wait/bigint/bad-range.js"));
});
describe("bigint", () => {
it("cannot-suspend-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/cannot-suspend-throws.js"));
});
describe("bigint", () => {
it("false-for-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/bigint/false-for-timeout-agent.js"));
});
describe("bigint", () => {
it("false-for-timeout.js", createTestHandler("built-ins/Atomics/wait/bigint/false-for-timeout.js"));
});
describe("bigint", () => {
it("nan-for-timeout.js", createTestHandler("built-ins/Atomics/wait/bigint/nan-for-timeout.js"));
});
describe("bigint", () => {
it("negative-index-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/negative-index-throws.js"));
});
describe("bigint", () => {
it("negative-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/bigint/negative-timeout-agent.js"));
});
describe("bigint", () => {
it("negative-timeout.js", createTestHandler("built-ins/Atomics/wait/bigint/negative-timeout.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-no-operation.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-no-operation.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-add.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-add.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-and.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-and.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-compareExchange.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-compareExchange.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-exchange.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-exchange.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-or.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-or.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-store.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-store.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-sub.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-sub.js"));
});
describe("bigint", () => {
it("no-spurious-wakeup-on-xor.js", createTestHandler("built-ins/Atomics/wait/bigint/no-spurious-wakeup-on-xor.js"));
});
describe("bigint", () => {
it("non-bigint64-typedarray-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/non-bigint64-typedarray-throws.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/non-shared-bufferdata-throws.js"));
});
describe("bigint", () => {
it("null-bufferdata-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/null-bufferdata-throws.js"));
});
describe("bigint", () => {
it("out-of-range-index-throws.js", createTestHandler("built-ins/Atomics/wait/bigint/out-of-range-index-throws.js"));
});
describe("bigint", () => {
it("value-not-equal.js", createTestHandler("built-ins/Atomics/wait/bigint/value-not-equal.js"));
});
describe("bigint", () => {
it("waiterlist-block-indexedposition-wake.js", createTestHandler("built-ins/Atomics/wait/bigint/waiterlist-block-indexedposition-wake.js"));
});
describe("bigint", () => {
it("waiterlist-order-of-operations-is-fifo.js", createTestHandler("built-ins/Atomics/wait/bigint/waiterlist-order-of-operations-is-fifo.js"));
});
describe("bigint", () => {
it("was-woken-before-timeout.js", createTestHandler("built-ins/Atomics/wait/bigint/was-woken-before-timeout.js"));
});
it("cannot-suspend-throws.js", createTestHandler("built-ins/Atomics/wait/cannot-suspend-throws.js"));
it("descriptor.js", createTestHandler("built-ins/Atomics/wait/descriptor.js"));
it("false-for-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/false-for-timeout-agent.js"));
it("false-for-timeout.js", createTestHandler("built-ins/Atomics/wait/false-for-timeout.js"));
it("good-views.js", createTestHandler("built-ins/Atomics/wait/good-views.js"));
it("length.js", createTestHandler("built-ins/Atomics/wait/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/wait/name.js"));
it("nan-for-timeout.js", createTestHandler("built-ins/Atomics/wait/nan-for-timeout.js"));
it("negative-index-throws.js", createTestHandler("built-ins/Atomics/wait/negative-index-throws.js"));
it("negative-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/negative-timeout-agent.js"));
it("negative-timeout.js", createTestHandler("built-ins/Atomics/wait/negative-timeout.js"));
it("no-spurious-wakeup-no-operation.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-no-operation.js"));
it("no-spurious-wakeup-on-add.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-add.js"));
it("no-spurious-wakeup-on-and.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-and.js"));
it("no-spurious-wakeup-on-compareExchange.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-compareExchange.js"));
it("no-spurious-wakeup-on-exchange.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-exchange.js"));
it("no-spurious-wakeup-on-or.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-or.js"));
it("no-spurious-wakeup-on-store.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-store.js"));
it("no-spurious-wakeup-on-sub.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-sub.js"));
it("no-spurious-wakeup-on-xor.js", createTestHandler("built-ins/Atomics/wait/no-spurious-wakeup-on-xor.js"));
it("non-int32-typedarray-throws.js", createTestHandler("built-ins/Atomics/wait/non-int32-typedarray-throws.js"));
it("non-shared-bufferdata-throws.js", createTestHandler("built-ins/Atomics/wait/non-shared-bufferdata-throws.js"));
it("not-a-typedarray-throws.js", createTestHandler("built-ins/Atomics/wait/not-a-typedarray-throws.js"));
it("not-an-object-throws.js", createTestHandler("built-ins/Atomics/wait/not-an-object-throws.js"));
it("null-bufferdata-throws.js", createTestHandler("built-ins/Atomics/wait/null-bufferdata-throws.js"));
it("null-for-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/null-for-timeout-agent.js"));
it("null-for-timeout.js", createTestHandler("built-ins/Atomics/wait/null-for-timeout.js"));
it("object-for-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/object-for-timeout-agent.js"));
it("object-for-timeout.js", createTestHandler("built-ins/Atomics/wait/object-for-timeout.js"));
it("out-of-range-index-throws.js", createTestHandler("built-ins/Atomics/wait/out-of-range-index-throws.js"));
it("poisoned-object-for-timeout-throws-agent.js", createTestHandler("built-ins/Atomics/wait/poisoned-object-for-timeout-throws-agent.js"));
it("poisoned-object-for-timeout-throws.js", createTestHandler("built-ins/Atomics/wait/poisoned-object-for-timeout-throws.js"));
it("retrieve-length-before-index-coercion.js", createTestHandler("built-ins/Atomics/wait/retrieve-length-before-index-coercion.js"));
it("symbol-for-index-throws-agent.js", createTestHandler("built-ins/Atomics/wait/symbol-for-index-throws-agent.js"));
it("symbol-for-index-throws.js", createTestHandler("built-ins/Atomics/wait/symbol-for-index-throws.js"));
it("symbol-for-timeout-throws-agent.js", createTestHandler("built-ins/Atomics/wait/symbol-for-timeout-throws-agent.js"));
it("symbol-for-timeout-throws.js", createTestHandler("built-ins/Atomics/wait/symbol-for-timeout-throws.js"));
it("symbol-for-value-throws-agent.js", createTestHandler("built-ins/Atomics/wait/symbol-for-value-throws-agent.js"));
it("symbol-for-value-throws.js", createTestHandler("built-ins/Atomics/wait/symbol-for-value-throws.js"));
it("true-for-timeout-agent.js", createTestHandler("built-ins/Atomics/wait/true-for-timeout-agent.js"));
it("true-for-timeout.js", createTestHandler("built-ins/Atomics/wait/true-for-timeout.js"));
it("undefined-for-timeout.js", createTestHandler("built-ins/Atomics/wait/undefined-for-timeout.js"));
it("undefined-index-defaults-to-zero.js", createTestHandler("built-ins/Atomics/wait/undefined-index-defaults-to-zero.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/wait/validate-arraytype-before-index-coercion.js"));
it("validate-arraytype-before-timeout-coercion.js", createTestHandler("built-ins/Atomics/wait/validate-arraytype-before-timeout-coercion.js"));
it("validate-arraytype-before-value-coercion.js", createTestHandler("built-ins/Atomics/wait/validate-arraytype-before-value-coercion.js"));
it("value-not-equal.js", createTestHandler("built-ins/Atomics/wait/value-not-equal.js"));
it("wait-index-value-not-equal.js", createTestHandler("built-ins/Atomics/wait/wait-index-value-not-equal.js"));
it("waiterlist-block-indexedposition-wake.js", createTestHandler("built-ins/Atomics/wait/waiterlist-block-indexedposition-wake.js"));
it("waiterlist-order-of-operations-is-fifo.js", createTestHandler("built-ins/Atomics/wait/waiterlist-order-of-operations-is-fifo.js"));
it("was-woken-before-timeout.js", createTestHandler("built-ins/Atomics/wait/was-woken-before-timeout.js"));
});
