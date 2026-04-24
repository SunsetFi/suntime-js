import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Instant", () => {
it("argument.js", createTestHandler("built-ins/Temporal/Instant/argument.js"));
it("basic.js", createTestHandler("built-ins/Temporal/Instant/basic.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/builtin.js"));
describe("compare", () => {
it("argument-object-tostring.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-object-tostring.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-calendar-annotation-invalid-key.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-calendar-annotation.js"));
});
describe("compare", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-critical-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-date-with-utc-offset.js"));
});
describe("compare", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-invalid.js"));
});
describe("compare", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-limits.js"));
});
describe("compare", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-minus-sign.js"));
});
describe("compare", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-multiple-calendar.js"));
});
describe("compare", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-multiple-time-zone.js"));
});
describe("compare", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-time-separators.js"));
});
describe("compare", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-time-zone-annotation.js"));
});
describe("compare", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-with-offset-not-valid-epoch-nanoseconds.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-string-with-offset-not-valid-epoch-nanoseconds.js"));
});
describe("compare", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-wrong-type.js"));
});
describe("compare", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/Instant/compare/argument-zoneddatetime.js"));
});
describe("compare", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/compare/builtin.js"));
});
describe("compare", () => {
it("cross-epoch.js", createTestHandler("built-ins/Temporal/Instant/compare/cross-epoch.js"));
});
describe("compare", () => {
it("exhaustive.js", createTestHandler("built-ins/Temporal/Instant/compare/exhaustive.js"));
});
describe("compare", () => {
it("instant-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/compare/instant-string-multiple-offsets.js"));
});
describe("compare", () => {
it("instant-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/compare/instant-string-sub-minute-offset.js"));
});
describe("compare", () => {
it("instant-string.js", createTestHandler("built-ins/Temporal/Instant/compare/instant-string.js"));
});
describe("compare", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/Instant/compare/leap-second.js"));
});
describe("compare", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/compare/length.js"));
});
describe("compare", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/compare/name.js"));
});
describe("compare", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Instant/compare/no-fractional-minutes-hours.js"));
});
describe("compare", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/compare/not-a-constructor.js"));
});
describe("compare", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/compare/prop-desc.js"));
});
describe("compare", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Instant/compare/year-zero.js"));
});
it("constructor.js", createTestHandler("built-ins/Temporal/Instant/constructor.js"));
describe("from", () => {
it("argument-instant.js", createTestHandler("built-ins/Temporal/Instant/from/argument-instant.js"));
});
describe("from", () => {
it("argument-object-tostring.js", createTestHandler("built-ins/Temporal/Instant/from/argument-object-tostring.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-calendar-annotation-invalid-key.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-calendar-annotation.js"));
});
describe("from", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-critical-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-date-with-utc-offset.js"));
});
describe("from", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-invalid.js"));
});
describe("from", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-limits.js"));
});
describe("from", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-minus-sign.js"));
});
describe("from", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-multiple-calendar.js"));
});
describe("from", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-multiple-time-zone.js"));
});
describe("from", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-time-separators.js"));
});
describe("from", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-time-zone-annotation.js"));
});
describe("from", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Instant/from/argument-string.js"));
});
describe("from", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/from/argument-wrong-type.js"));
});
describe("from", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/Instant/from/argument-zoneddatetime.js"));
});
describe("from", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/from/basic.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/from/builtin.js"));
});
describe("from", () => {
it("instant-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/from/instant-string-multiple-offsets.js"));
});
describe("from", () => {
it("instant-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/from/instant-string-sub-minute-offset.js"));
});
describe("from", () => {
it("instant-string.js", createTestHandler("built-ins/Temporal/Instant/from/instant-string.js"));
});
describe("from", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/Instant/from/leap-second.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/from/length.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/from/name.js"));
});
describe("from", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Instant/from/no-fractional-minutes-hours.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/from/not-a-constructor.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/from/prop-desc.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/from/subclassing-ignored.js"));
});
describe("from", () => {
it("timezone-custom.js", createTestHandler("built-ins/Temporal/Instant/from/timezone-custom.js"));
});
describe("from", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Instant/from/year-zero.js"));
});
describe("fromEpochMilliseconds", () => {
it("argument.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/argument.js"));
});
describe("fromEpochMilliseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/basic.js"));
});
describe("fromEpochMilliseconds", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/builtin.js"));
});
describe("fromEpochMilliseconds", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/length.js"));
});
describe("fromEpochMilliseconds", () => {
it("limits.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/limits.js"));
});
describe("fromEpochMilliseconds", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/name.js"));
});
describe("fromEpochMilliseconds", () => {
it("non-integer.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/non-integer.js"));
});
describe("fromEpochMilliseconds", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/not-a-constructor.js"));
});
describe("fromEpochMilliseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/prop-desc.js"));
});
describe("fromEpochMilliseconds", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/subclassing-ignored.js"));
});
describe("fromEpochNanoseconds", () => {
it("argument.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/argument.js"));
});
describe("fromEpochNanoseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/basic.js"));
});
describe("fromEpochNanoseconds", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/builtin.js"));
});
describe("fromEpochNanoseconds", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/length.js"));
});
describe("fromEpochNanoseconds", () => {
it("limits.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/limits.js"));
});
describe("fromEpochNanoseconds", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/name.js"));
});
describe("fromEpochNanoseconds", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/not-a-constructor.js"));
});
describe("fromEpochNanoseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/prop-desc.js"));
});
describe("fromEpochNanoseconds", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/subclassing-ignored.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/Instant/get-prototype-from-constructor-throws.js"));
it("large-bigint.js", createTestHandler("built-ins/Temporal/Instant/large-bigint.js"));
it("length.js", createTestHandler("built-ins/Temporal/Instant/length.js"));
it("limits.js", createTestHandler("built-ins/Temporal/Instant/limits.js"));
it("name.js", createTestHandler("built-ins/Temporal/Instant/name.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prop-desc.js"));
describe("prototype", () => {
describe("add", () => {
it("add-large-subseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/add-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/basic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/blank-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/branding.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/builtin.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("cross-epoch.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/cross-epoch.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("disallowed-duration-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/disallowed-duration-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/length.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("minimum-maximum-instant.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/minimum-maximum-instant.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/name.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/prop-desc.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("result-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/result-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/prototype/add/subclassing-ignored.js"));
});
});
describe("prototype", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/builtin.js"));
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/constructor.js"));
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/basic.js"));
});
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/branding.js"));
});
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/basic.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/branding.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-object-tostring.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-object-tostring.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-zoneddatetime.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/basic.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/branding.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/builtin.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("cross-epoch.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/cross-epoch.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("instant-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/instant-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("instant-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/instant-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("instant-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/instant-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/length.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/name.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Instant/prototype/equals/year-zero.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("round", () => {
it("accepts-plural-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/accepts-plural-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("accepts-string-parameter-for-smallestunit.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/accepts-string-parameter-for-smallestunit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("allow-increments-that-divide-evenly-into-solar-days.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/allow-increments-that-divide-evenly-into-solar-days.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/branding.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/builtin.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/length.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/name.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("negative-instant.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/negative-instant.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/prop-desc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("round-to-days.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/round-to-days.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundto-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/roundto-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-string-shorthand.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/smallestunit-string-shorthand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-on-increments-that-do-not-divide-evenly.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/throws-on-increments-that-do-not-divide-evenly.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-without-smallest-unit.js", createTestHandler("built-ins/Temporal/Instant/prototype/round/throws-without-smallest-unit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("add-subtract.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/add-subtract.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-object-tostring.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-object-tostring.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-zoneddatetime.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/blank-result.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/branding.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/builtin.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("instant-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/instant-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("instant-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/instant-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("instant-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/instant-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("invalid-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/invalid-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largest-unit-default.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largest-unit-default.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/length.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("minutes-and-hours.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/minutes-and-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/name.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-may-be-function.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/options-may-be-function.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/options-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/options-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/subseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("valid-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/valid-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Instant/prototype/since/year-zero.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/basic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/blank-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/branding.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/builtin.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("disallowed-duration-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/disallowed-duration-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/length.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("minimum-maximum-instant.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/minimum-maximum-instant.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/name.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("result-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/result-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subtract-large-subseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/subtract/subtract-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("fromEpochMilliseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/fromEpochMilliseconds.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/year-format.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/basic.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-auto.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-nan.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-nan.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-negative.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-negative.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-non-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-non-integer.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-number.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-number.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-out-of-range.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("get-timezone-throws.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/get-timezone-throws.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("negative-instant-rounding.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/negative-instant-rounding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("precision.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/precision.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-cross-midnight.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/rounding-cross-midnight.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-fractionalseconddigits.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-fractionalseconddigits.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-valid-units.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-valid-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-offset.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string-datetime.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/Instant/prototype/toString/year-format.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/branding.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/builtin.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("calendar-is-builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/calendar-is-builtin.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/length.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/name.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("no-observable-array-iteration.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/no-observable-array-iteration.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-missing.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-missing.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string-datetime.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTimeISO", () => {
it("to-zoned-date-time-iso.js", createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/to-zoned-date-time-iso.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("add-subtract.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/add-subtract.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-object-tostring.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-object-tostring.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-zoneddatetime.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/blank-result.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/branding.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/builtin.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("instant-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/instant-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("instant-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/instant-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("instant-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/instant-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("invalid-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/invalid-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-default.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-default.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/length.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("minutes-and-hours.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/minutes-and-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/name.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-may-be-function.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/options-may-be-function.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/options-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/options-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/prop-desc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/subseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("valid-increments.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/valid-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Instant/prototype/until/year-zero.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/prop-desc.js"));
});
});
it("subclass.js", createTestHandler("built-ins/Temporal/Instant/subclass.js"));
});
