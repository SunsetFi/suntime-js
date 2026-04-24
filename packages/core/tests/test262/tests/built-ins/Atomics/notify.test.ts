import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("notify", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/notify/bad-range.js"));
describe("bigint", () => {
it("bad-range.js", createTestHandler("built-ins/Atomics/notify/bigint/bad-range.js"));
});
describe("bigint", () => {
it("non-bigint64-typedarray-throws.js", createTestHandler("built-ins/Atomics/notify/bigint/non-bigint64-typedarray-throws.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata-count-evaluation-throws.js", createTestHandler("built-ins/Atomics/notify/bigint/non-shared-bufferdata-count-evaluation-throws.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata-index-evaluation-throws.js", createTestHandler("built-ins/Atomics/notify/bigint/non-shared-bufferdata-index-evaluation-throws.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata-non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/notify/bigint/non-shared-bufferdata-non-shared-int-views-throws.js"));
});
describe("bigint", () => {
it("non-shared-bufferdata-returns-0.js", createTestHandler("built-ins/Atomics/notify/bigint/non-shared-bufferdata-returns-0.js"));
});
describe("bigint", () => {
it("notify-all-on-loc.js", createTestHandler("built-ins/Atomics/notify/bigint/notify-all-on-loc.js"));
});
describe("bigint", () => {
it("null-bufferdata-throws.js", createTestHandler("built-ins/Atomics/notify/bigint/null-bufferdata-throws.js"));
});
it("count-boundary-cases.js", createTestHandler("built-ins/Atomics/notify/count-boundary-cases.js"));
it("count-defaults-to-infinity-missing.js", createTestHandler("built-ins/Atomics/notify/count-defaults-to-infinity-missing.js"));
it("count-defaults-to-infinity-undefined.js", createTestHandler("built-ins/Atomics/notify/count-defaults-to-infinity-undefined.js"));
it("count-from-nans.js", createTestHandler("built-ins/Atomics/notify/count-from-nans.js"));
it("count-symbol-throws.js", createTestHandler("built-ins/Atomics/notify/count-symbol-throws.js"));
it("count-tointeger-throws-then-wake-throws.js", createTestHandler("built-ins/Atomics/notify/count-tointeger-throws-then-wake-throws.js"));
it("descriptor.js", createTestHandler("built-ins/Atomics/notify/descriptor.js"));
it("length.js", createTestHandler("built-ins/Atomics/notify/length.js"));
it("name.js", createTestHandler("built-ins/Atomics/notify/name.js"));
it("negative-count.js", createTestHandler("built-ins/Atomics/notify/negative-count.js"));
it("negative-index-throws.js", createTestHandler("built-ins/Atomics/notify/negative-index-throws.js"));
it("non-int32-typedarray-throws.js", createTestHandler("built-ins/Atomics/notify/non-int32-typedarray-throws.js"));
it("non-shared-bufferdata-count-evaluation-throws.js", createTestHandler("built-ins/Atomics/notify/non-shared-bufferdata-count-evaluation-throws.js"));
it("non-shared-bufferdata-index-evaluation-throws.js", createTestHandler("built-ins/Atomics/notify/non-shared-bufferdata-index-evaluation-throws.js"));
it("non-shared-bufferdata-non-shared-int-views-throws.js", createTestHandler("built-ins/Atomics/notify/non-shared-bufferdata-non-shared-int-views-throws.js"));
it("non-shared-bufferdata-returns-0.js", createTestHandler("built-ins/Atomics/notify/non-shared-bufferdata-returns-0.js"));
it("non-shared-int-views.js", createTestHandler("built-ins/Atomics/notify/non-shared-int-views.js"));
it("non-views.js", createTestHandler("built-ins/Atomics/notify/non-views.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Atomics/notify/not-a-constructor.js"));
it("not-a-typedarray-throws.js", createTestHandler("built-ins/Atomics/notify/not-a-typedarray-throws.js"));
it("not-an-object-throws.js", createTestHandler("built-ins/Atomics/notify/not-an-object-throws.js"));
it("notify-all-on-loc.js", createTestHandler("built-ins/Atomics/notify/notify-all-on-loc.js"));
it("notify-all.js", createTestHandler("built-ins/Atomics/notify/notify-all.js"));
it("notify-in-order-one-time.js", createTestHandler("built-ins/Atomics/notify/notify-in-order-one-time.js"));
it("notify-in-order.js", createTestHandler("built-ins/Atomics/notify/notify-in-order.js"));
it("notify-nan.js", createTestHandler("built-ins/Atomics/notify/notify-nan.js"));
it("notify-one.js", createTestHandler("built-ins/Atomics/notify/notify-one.js"));
it("notify-renotify-noop.js", createTestHandler("built-ins/Atomics/notify/notify-renotify-noop.js"));
it("notify-two.js", createTestHandler("built-ins/Atomics/notify/notify-two.js"));
it("notify-with-no-agents-waiting.js", createTestHandler("built-ins/Atomics/notify/notify-with-no-agents-waiting.js"));
it("notify-with-no-matching-agents-waiting.js", createTestHandler("built-ins/Atomics/notify/notify-with-no-matching-agents-waiting.js"));
it("notify-zero.js", createTestHandler("built-ins/Atomics/notify/notify-zero.js"));
it("null-bufferdata-throws.js", createTestHandler("built-ins/Atomics/notify/null-bufferdata-throws.js"));
it("out-of-range-index-throws.js", createTestHandler("built-ins/Atomics/notify/out-of-range-index-throws.js"));
it("retrieve-length-before-index-coercion-non-shared-detached.js", createTestHandler("built-ins/Atomics/notify/retrieve-length-before-index-coercion-non-shared-detached.js"));
it("retrieve-length-before-index-coercion-non-shared-resize-to-zero.js", createTestHandler("built-ins/Atomics/notify/retrieve-length-before-index-coercion-non-shared-resize-to-zero.js"));
it("retrieve-length-before-index-coercion-non-shared.js", createTestHandler("built-ins/Atomics/notify/retrieve-length-before-index-coercion-non-shared.js"));
it("retrieve-length-before-index-coercion.js", createTestHandler("built-ins/Atomics/notify/retrieve-length-before-index-coercion.js"));
it("symbol-for-index-throws.js", createTestHandler("built-ins/Atomics/notify/symbol-for-index-throws.js"));
it("undefined-index-defaults-to-zero.js", createTestHandler("built-ins/Atomics/notify/undefined-index-defaults-to-zero.js"));
it("validate-arraytype-before-count-coercion.js", createTestHandler("built-ins/Atomics/notify/validate-arraytype-before-count-coercion.js"));
it("validate-arraytype-before-index-coercion.js", createTestHandler("built-ins/Atomics/notify/validate-arraytype-before-index-coercion.js"));
});
