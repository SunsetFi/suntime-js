import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Duration", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/basic.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/builtin.js"));
it("call-builtin.js", createTestHandler("built-ins/Temporal/Duration/call-builtin.js"));
describe("compare", () => {
it("argument-cast.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-cast.js"));
});
describe("compare", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-duration-max.js"));
});
describe("compare", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-duration-out-of-range.js"));
});
describe("compare", () => {
it("argument-duration-precision-exact-numerical-values.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-duration-precision-exact-numerical-values.js"));
});
describe("compare", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-propertybag-optional-properties.js"));
});
describe("compare", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-string-fractional-units-rounding-mode.js"));
});
describe("compare", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Duration/compare/argument-string-negative-fractional-units.js"));
});
describe("compare", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/compare/basic.js"));
});
describe("compare", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/compare/blank-duration.js"));
});
describe("compare", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/compare/builtin.js"));
});
describe("compare", () => {
it("calendar-possibly-required.js", createTestHandler("built-ins/Temporal/Duration/compare/calendar-possibly-required.js"));
});
describe("compare", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/Duration/compare/calendar-temporal-object.js"));
});
describe("compare", () => {
it("compare-no-precision-loss.js", createTestHandler("built-ins/Temporal/Duration/compare/compare-no-precision-loss.js"));
});
describe("compare", () => {
it("duration-out-of-range-added-to-relativeto.js", createTestHandler("built-ins/Temporal/Duration/compare/duration-out-of-range-added-to-relativeto.js"));
});
describe("compare", () => {
it("exhaustive.js", createTestHandler("built-ins/Temporal/Duration/compare/exhaustive.js"));
});
describe("compare", () => {
it("instances-identical.js", createTestHandler("built-ins/Temporal/Duration/compare/instances-identical.js"));
});
describe("compare", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/compare/length.js"));
});
describe("compare", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/compare/name.js"));
});
describe("compare", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/compare/not-a-constructor.js"));
});
describe("compare", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/Duration/compare/options-object.js"));
});
describe("compare", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Duration/compare/options-read-before-algorithmic-validation.js"));
});
describe("compare", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/Duration/compare/options-undefined.js"));
});
describe("compare", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/compare/options-wrong-type.js"));
});
describe("compare", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/compare/order-of-operations.js"));
});
describe("compare", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/compare/prop-desc.js"));
});
describe("compare", () => {
it("relativeto-argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("relativeto-argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-argument-string-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("relativeto-hour.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-hour.js"));
});
describe("compare", () => {
it("relativeto-month.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-month.js"));
});
describe("compare", () => {
it("relativeto-no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-no-fractional-minutes-hours.js"));
});
describe("compare", () => {
it("relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js"));
});
describe("compare", () => {
it("relativeto-propertybag-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-infinity-throws-rangeerror.js"));
});
describe("compare", () => {
it("relativeto-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-invalid-offset-string.js"));
});
describe("compare", () => {
it("relativeto-propertybag-invalid.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-invalid.js"));
});
describe("compare", () => {
it("relativeto-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-optional-properties.js"));
});
describe("compare", () => {
it("relativeto-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-datetime.js"));
});
describe("compare", () => {
it("relativeto-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-leap-second.js"));
});
describe("compare", () => {
it("relativeto-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-year-zero.js"));
});
describe("compare", () => {
it("relativeto-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string.js"));
});
describe("compare", () => {
it("relativeto-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-wrong-type.js"));
});
describe("compare", () => {
it("relativeto-string-invalid.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-invalid.js"));
});
describe("compare", () => {
it("relativeto-string-limits.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-limits.js"));
});
describe("compare", () => {
it("relativeto-string-plaindatetime.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-plaindatetime.js"));
});
describe("compare", () => {
it("relativeto-string-zoneddatetime-wrong-offset.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-zoneddatetime-wrong-offset.js"));
});
describe("compare", () => {
it("relativeto-string-zoneddatetime.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-zoneddatetime.js"));
});
describe("compare", () => {
it("relativeto-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-sub-minute-offset.js"));
});
describe("compare", () => {
it("relativeto-undefined-throw-on-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-undefined-throw-on-calendar-units.js"));
});
describe("compare", () => {
it("relativeto-year.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-year.js"));
});
describe("compare", () => {
it("relativeto-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/Duration/compare/relativeto-zoneddatetime-negative-epochnanoseconds.js"));
});
describe("compare", () => {
it("throws-when-target-zoned-date-time-outside-valid-limits.js", createTestHandler("built-ins/Temporal/Duration/compare/throws-when-target-zoned-date-time-outside-valid-limits.js"));
});
describe("compare", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Duration/compare/year-zero.js"));
});
it("constructor.js", createTestHandler("built-ins/Temporal/Duration/constructor.js"));
it("days-undefined.js", createTestHandler("built-ins/Temporal/Duration/days-undefined.js"));
it("fractional-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/fractional-throws-rangeerror.js"));
describe("from", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Duration/from/argument-duration-max.js"));
});
describe("from", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/from/argument-duration-out-of-range.js"));
});
describe("from", () => {
it("argument-duration-precision-exact-numerical-values.js", createTestHandler("built-ins/Temporal/Duration/from/argument-duration-precision-exact-numerical-values.js"));
});
describe("from", () => {
it("argument-duration.js", createTestHandler("built-ins/Temporal/Duration/from/argument-duration.js"));
});
describe("from", () => {
it("argument-existing-object.js", createTestHandler("built-ins/Temporal/Duration/from/argument-existing-object.js"));
});
describe("from", () => {
it("argument-non-string.js", createTestHandler("built-ins/Temporal/Duration/from/argument-non-string.js"));
});
describe("from", () => {
it("argument-object-invalid.js", createTestHandler("built-ins/Temporal/Duration/from/argument-object-invalid.js"));
});
describe("from", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/from/argument-propertybag-optional-properties.js"));
});
describe("from", () => {
it("argument-propertybag.js", createTestHandler("built-ins/Temporal/Duration/from/argument-propertybag.js"));
});
describe("from", () => {
it("argument-string-fractional-precision.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-fractional-precision.js"));
});
describe("from", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-fractional-units-rounding-mode.js"));
});
describe("from", () => {
it("argument-string-fractional-with-zero-subparts.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-fractional-with-zero-subparts.js"));
});
describe("from", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-invalid.js"));
});
describe("from", () => {
it("argument-string-is-infinity.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-is-infinity.js"));
});
describe("from", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string-negative-fractional-units.js"));
});
describe("from", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Duration/from/argument-string.js"));
});
describe("from", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/from/blank-duration.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/from/builtin.js"));
});
describe("from", () => {
it("get-property-throws.js", createTestHandler("built-ins/Temporal/Duration/from/get-property-throws.js"));
});
describe("from", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/from/infinity-throws-rangeerror.js"));
});
describe("from", () => {
it("invalid-type.js", createTestHandler("built-ins/Temporal/Duration/from/invalid-type.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/from/length.js"));
});
describe("from", () => {
it("lower-limit.js", createTestHandler("built-ins/Temporal/Duration/from/lower-limit.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/from/name.js"));
});
describe("from", () => {
it("negative-inifinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/from/negative-inifinity-throws-rangeerror.js"));
});
describe("from", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/from/non-integer-throws-rangeerror.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/from/not-a-constructor.js"));
});
describe("from", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/from/order-of-operations.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/from/prop-desc.js"));
});
describe("from", () => {
it("string-with-skipped-units.js", createTestHandler("built-ins/Temporal/Duration/from/string-with-skipped-units.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/from/subclassing-ignored.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/Duration/get-prototype-from-constructor-throws.js"));
it("hours-undefined.js", createTestHandler("built-ins/Temporal/Duration/hours-undefined.js"));
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/infinity-throws-rangeerror.js"));
it("invalid-type.js", createTestHandler("built-ins/Temporal/Duration/invalid-type.js"));
it("large-number.js", createTestHandler("built-ins/Temporal/Duration/large-number.js"));
it("length.js", createTestHandler("built-ins/Temporal/Duration/length.js"));
it("lower-limit.js", createTestHandler("built-ins/Temporal/Duration/lower-limit.js"));
it("max.js", createTestHandler("built-ins/Temporal/Duration/max.js"));
it("microseconds-undefined.js", createTestHandler("built-ins/Temporal/Duration/microseconds-undefined.js"));
it("milliseconds-undefined.js", createTestHandler("built-ins/Temporal/Duration/milliseconds-undefined.js"));
it("minutes-undefined.js", createTestHandler("built-ins/Temporal/Duration/minutes-undefined.js"));
it("mixed.js", createTestHandler("built-ins/Temporal/Duration/mixed.js"));
it("months-undefined.js", createTestHandler("built-ins/Temporal/Duration/months-undefined.js"));
it("name.js", createTestHandler("built-ins/Temporal/Duration/name.js"));
it("nanoseconds-undefined.js", createTestHandler("built-ins/Temporal/Duration/nanoseconds-undefined.js"));
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/negative-infinity-throws-rangeerror.js"));
it("out-of-range.js", createTestHandler("built-ins/Temporal/Duration/out-of-range.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prop-desc.js"));
describe("prototype", () => {
describe("abs", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/basic.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/branding.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/builtin.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/length.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/name.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("new-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/new-object.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/prop-desc.js"));
});
});
describe("prototype", () => {
describe("abs", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/abs/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-precision-exact-numerical-values.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-duration-precision-exact-numerical-values.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("balance-negative-result.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/balance-negative-result.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/basic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/blank-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/branding.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/builtin.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/length.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/name.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("nanoseconds-is-number-max-safe-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/nanoseconds-is-number-max-safe-integer.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("no-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/no-calendar-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("precision-exact-mathematical-values.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/precision-exact-mathematical-values.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("precision-no-floating-point-loss.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/precision-no-floating-point-loss.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/prop-desc.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("result-out-of-range-1.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-1.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("result-out-of-range-2.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-2.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("result-out-of-range-3.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-3.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/add/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("blank", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/blank/basic.js"));
});
});
describe("prototype", () => {
describe("blank", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/blank/branding.js"));
});
});
describe("prototype", () => {
describe("blank", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/blank/prop-desc.js"));
});
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/constructor.js"));
});
describe("prototype", () => {
describe("days", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/days/blank-duration.js"));
});
});
describe("prototype", () => {
describe("days", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/days/branding.js"));
});
});
describe("prototype", () => {
describe("days", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/days/prop-desc.js"));
});
});
describe("prototype", () => {
describe("hours", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/hours/blank-duration.js"));
});
});
describe("prototype", () => {
describe("hours", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/hours/branding.js"));
});
});
describe("prototype", () => {
describe("hours", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/hours/prop-desc.js"));
});
});
describe("prototype", () => {
describe("microseconds", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/blank-duration.js"));
});
});
describe("prototype", () => {
describe("microseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/branding.js"));
});
});
describe("prototype", () => {
describe("microseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("milliseconds", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/blank-duration.js"));
});
});
describe("prototype", () => {
describe("milliseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/branding.js"));
});
});
describe("prototype", () => {
describe("milliseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("minutes", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/minutes/blank-duration.js"));
});
});
describe("prototype", () => {
describe("minutes", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/minutes/branding.js"));
});
});
describe("prototype", () => {
describe("minutes", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/minutes/prop-desc.js"));
});
});
describe("prototype", () => {
describe("months", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/months/blank-duration.js"));
});
});
describe("prototype", () => {
describe("months", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/months/branding.js"));
});
});
describe("prototype", () => {
describe("months", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/months/prop-desc.js"));
});
});
describe("prototype", () => {
describe("nanoseconds", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/blank-duration.js"));
});
});
describe("prototype", () => {
describe("nanoseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/branding.js"));
});
});
describe("prototype", () => {
describe("nanoseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/basic.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/branding.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/builtin.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/length.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/name.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/prop-desc.js"));
});
});
describe("prototype", () => {
describe("negated", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/negated/subclassing-ignored.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("round", () => {
it("accepts-datetime-strings-for-relative-to.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/accepts-datetime-strings-for-relative-to.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balance-negative-result.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balance-negative-result.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balance-subseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balance-subseconds.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balances-days-up-to-both-years-and-months.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-days-up-to-both-years-and-months.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balances-down-differently-depending-on-relative-to.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-down-differently-depending-on-relative-to.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balances-up-differently-depending-on-relative-to.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-up-differently-depending-on-relative-to.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balances-up-to-next-unit-after-rounding.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-up-to-next-unit-after-rounding.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("balances-up-to-weeks.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-up-to-weeks.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/blank-duration.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/branding.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("bubble-time-unit.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/bubble-time-unit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/builtin.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("calendar-possibly-required.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/calendar-possibly-required.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("casts-relative-to-to-plain-date.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/casts-relative-to-to-plain-date.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("days-24-hours-relative-to-plain-date.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/days-24-hours-relative-to-plain-date.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("days-24-hours-relative-to-zoned-date-time.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/days-24-hours-relative-to-zoned-date-time.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("days-24-hours.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/days-24-hours.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("does-not-accept-non-string-primitives-for-relative-to.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/does-not-accept-non-string-primitives-for-relative-to.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("does-not-balance-up-to-weeks-if-largest-unit-is-larger-than-weeks.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/does-not-balance-up-to-weeks-if-largest-unit-is-larger-than-weeks.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("duration-out-of-range-added-to-relativeto.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/duration-out-of-range-added-to-relativeto.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("durations-do-not-balance-beyond-largest-unit.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/durations-do-not-balance-beyond-largest-unit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("end-of-month-round-up.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/end-of-month-round-up.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("february-leap-year.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/february-leap-year.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("half-expand-is-default.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/half-expand-is-default.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("invalid-increments.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/invalid-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-correct-rebalancing.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-correct-rebalancing.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-smallestunit-combinations-relativeto.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-combinations-relativeto.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-smallestunit-combinations.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-combinations.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-smallestunit-default.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-default.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/length.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/name.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("next-day-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/next-day-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("out-of-range-when-converting-from-normalized-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/out-of-range-when-converting-from-normalized-duration.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("precision-exact-in-balance-time-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/precision-exact-in-balance-time-duration.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("precision-exact-in-round-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/precision-exact-in-round-duration.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/prop-desc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relative-to-not-required-to-round-non-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relative-to-not-required-to-round-non-calendar-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relative-to-required-for-rounding-durations-with-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relative-to-required-for-rounding-durations-with-calendar-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relative-to-required-to-round-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relative-to-required-to-round-calendar-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeTo-ignores-incorrect-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeTo-ignores-incorrect-properties.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeTo-required-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeTo-required-properties.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-date-limits.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-date-limits.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-leap-second.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-leap-second.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-number.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-number.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-invalid-offset-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-datetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-datetime.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-invalid.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-invalid.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-limits.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-limits.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-plaindatetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-zoneddatetime-wrong-offset.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-zoneddatetime-wrong-offset.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-string-zoneddatetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-string-zoneddatetime.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-undefined-throw-on-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-undefined-throw-on-calendar-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("relativeto-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-zoneddatetime-slots.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("result-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/result-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("round-and-balance-calendar-units-with-increment-disallowed.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/round-and-balance-calendar-units-with-increment-disallowed.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("round-negative-result.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/round-negative-result.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-is-noop.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-is-noop.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-relative-to-date.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-relative-to-date.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-window.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-window.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundto-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/roundto-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("singular-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/singular-units.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-plurals-accepted-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-plurals-accepted-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-string-shorthand-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-string-shorthand-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("succeeds-with-largest-unit-auto.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/succeeds-with-largest-unit-auto.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-if-neither-largestUnit-nor-smallestUnit-is-given.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/throws-if-neither-largestUnit-nor-smallestUnit-is-given.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-on-wrong-offset-for-zoned-date-time-relative-to.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/throws-on-wrong-offset-for-zoned-date-time-relative-to.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("total-duration-nanoseconds-too-large-with-zoned-datetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/total-duration-nanoseconds-too-large-with-zoned-datetime.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("valid-increments.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/valid-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/year-zero.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("zero-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/round/zero-duration.js"));
});
});
describe("prototype", () => {
describe("seconds", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/seconds/blank-duration.js"));
});
});
describe("prototype", () => {
describe("seconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/seconds/branding.js"));
});
});
describe("prototype", () => {
describe("seconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/seconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("sign", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/sign/blank-duration.js"));
});
});
describe("prototype", () => {
describe("sign", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/sign/branding.js"));
});
});
describe("prototype", () => {
describe("sign", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/sign/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-precision-exact-numerical-values.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-duration-precision-exact-numerical-values.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("balance-negative-result.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/balance-negative-result.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/basic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/blank-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/branding.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/builtin.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/length.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/name.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("nanoseconds-is-number-max-safe-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/nanoseconds-is-number-max-safe-integer.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("no-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/no-calendar-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("precision-exact-mathematical-values.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/precision-exact-mathematical-values.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("precision-no-floating-point-loss.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/precision-no-floating-point-loss.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("result-out-of-range-1.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-1.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("result-out-of-range-2.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-2.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("result-out-of-range-3.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-3.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/subtract/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("balance-subseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/balance-subseconds.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("large-with-small-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/large-with-small-units.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("max-value.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/max-value.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("negative-components.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/negative-components.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("options.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/options.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("balance-subseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/balance-subseconds.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("balance.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/balance.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("blank-duration-precision.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/blank-duration-precision.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-auto.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-exact-number-of-digits.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-exact-number-of-digits.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-nan.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-nan.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-non-integer.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-non-integer.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-number.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-number.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-out-of-range.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("large-with-small-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/large-with-small-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("max-value.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/max-value.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("negative-components.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/negative-components.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("no-precision-loss.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/no-precision-loss.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("precision.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/precision.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-fractionalseconddigits.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-fractionalseconddigits.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-valid-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-valid-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("throws-when-rounded-duration-is-invalid.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/throws-when-rounded-duration-is-invalid.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("total-of-duration-time-units-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/toString/total-of-duration-time-units-out-of-range.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("balance-negative-result.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/balance-negative-result.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("balance-subseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/balance-subseconds.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("balances-days-up-to-both-years-and-months.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/balances-days-up-to-both-years-and-months.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/blank-duration.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/branding.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/builtin.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("calendar-possibly-required.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/calendar-possibly-required.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("does-not-accept-non-string-primitives-for-relativeTo.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/does-not-accept-non-string-primitives-for-relativeTo.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("duration-out-of-range-added-to-relativeto.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/duration-out-of-range-added-to-relativeto.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("incorrect-properties-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/incorrect-properties-ignored.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/length.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/name.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("no-dst-day-length.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/no-dst-day-length.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("no-precision-loss-for-small-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/no-precision-loss-for-small-units.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("precision-exact-mathematical-values-1.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-1.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("precision-exact-mathematical-values-2.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-2.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("precision-exact-mathematical-values-5.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-5.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("precision-exact-mathematical-values-6.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-6.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("precision-exact-mathematical-values-7.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-7.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/prop-desc.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeTo-must-have-required-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeTo-must-have-required-properties.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-date-limits.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-date-limits.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-leap-second.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-leap-second.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-number.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-number.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-plaindatetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-invalid-offset-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-datetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-datetime.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-invalid.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-invalid.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-limits.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-limits.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-plaindatetime-invalid.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-plaindatetime-invalid.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-plaindatetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-zoneddatetime-wrong-offset.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-zoneddatetime-wrong-offset.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-string-zoneddatetime.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-string-zoneddatetime.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-sub-minute-offset.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-undefined-throw-on-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-undefined-throw-on-calendar-units.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-wrong-type.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("relativeto-zoneddatetime-with-fractional-days.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-zoneddatetime-with-fractional-days.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("rounding-window.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/rounding-window.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("rounds-calendar-units-in-durations-without-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/rounds-calendar-units-in-durations-without-calendar-units.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("rounds-durations-with-calendar-units.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/rounds-durations-with-calendar-units.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-if-date-time-invalid-with-plaindate-relative.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-if-date-time-invalid-with-plaindate-relative.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-if-date-time-invalid-with-zoneddatetime-relative.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-if-date-time-invalid-with-zoneddatetime-relative.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-if-target-nanoseconds-outside-valid-limits.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-if-target-nanoseconds-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-if-unit-property-missing.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-if-unit-property-missing.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-on-disallowed-or-invalid-unit.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-on-disallowed-or-invalid-unit.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("throws-on-wrong-offset-for-zoneddatetime-relativeto.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/throws-on-wrong-offset-for-zoneddatetime-relativeto.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("total-of-each-unit-relativeto.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/total-of-each-unit-relativeto.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("total-of-each-unit.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/total-of-each-unit.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-disallowed-units-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-disallowed-units-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-invalid-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-plurals-accepted-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-plurals-accepted-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-plurals-accepted.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-string-shorthand-string.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-string-shorthand-string.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("unit-wrong-type.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/year-zero.js"));
});
});
describe("prototype", () => {
describe("total", () => {
it("zero-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/total/zero-duration.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/prop-desc.js"));
});
});
describe("prototype", () => {
describe("weeks", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/weeks/blank-duration.js"));
});
});
describe("prototype", () => {
describe("weeks", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/weeks/branding.js"));
});
});
describe("prototype", () => {
describe("weeks", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/weeks/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("all-negative.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/all-negative.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("all-positive.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/all-positive.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/blank-duration.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/branding.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/builtin.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("copy-properties-not-undefined.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/copy-properties-not-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("length.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/length.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("name.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/name.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("partial-positive.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/partial-positive.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("sign-conflict-throws-rangeerror.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/sign-conflict-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("sign-replace.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/sign-replace.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/Duration/prototype/with/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("years", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/Duration/prototype/years/blank-duration.js"));
});
});
describe("prototype", () => {
describe("years", () => {
it("branding.js", createTestHandler("built-ins/Temporal/Duration/prototype/years/branding.js"));
});
});
describe("prototype", () => {
describe("years", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/Duration/prototype/years/prop-desc.js"));
});
});
it("seconds-undefined.js", createTestHandler("built-ins/Temporal/Duration/seconds-undefined.js"));
it("subclass.js", createTestHandler("built-ins/Temporal/Duration/subclass.js"));
it("weeks-undefined.js", createTestHandler("built-ins/Temporal/Duration/weeks-undefined.js"));
it("years-undefined.js", createTestHandler("built-ins/Temporal/Duration/years-undefined.js"));
});
