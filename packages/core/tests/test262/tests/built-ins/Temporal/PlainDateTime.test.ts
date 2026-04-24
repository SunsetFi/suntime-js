import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PlainDateTime", () => {
it("argument-convert.js", createTestHandler("built-ins/Temporal/PlainDateTime/argument-convert.js"));
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/basic.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/builtin.js"));
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/calendar-case-insensitive.js"));
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/calendar-invalid-iso-string.js"));
it("calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/calendar-string.js"));
it("calendar-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/calendar-undefined.js"));
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/calendar-wrong-type.js"));
describe("compare", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-number.js"));
});
describe("compare", () => {
it("argument-object-insufficient-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-object-insufficient-data.js"));
});
describe("compare", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-plaindate.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-case-insensitive.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-leap-second.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-wrong-type.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-calendar-year-zero.js"));
});
describe("compare", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-propertybag-optional-properties.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-calendar-annotation-invalid-key.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-calendar-annotation.js"));
});
describe("compare", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-critical-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-date-with-utc-offset.js"));
});
describe("compare", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-invalid.js"));
});
describe("compare", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-limits.js"));
});
describe("compare", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-minus-sign.js"));
});
describe("compare", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-multiple-calendar.js"));
});
describe("compare", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-multiple-time-zone.js"));
});
describe("compare", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-time-separators.js"));
});
describe("compare", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-time-zone-annotation.js"));
});
describe("compare", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-string-with-utc-designator.js"));
});
describe("compare", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-wrong-type.js"));
});
describe("compare", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
describe("compare", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/basic.js"));
});
describe("compare", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/builtin.js"));
});
describe("compare", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/calendar-temporal-object.js"));
});
describe("compare", () => {
it("cast.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/cast.js"));
});
describe("compare", () => {
it("exhaustive.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/exhaustive.js"));
});
describe("compare", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/infinity-throws-rangeerror.js"));
});
describe("compare", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/leap-second.js"));
});
describe("compare", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/length.js"));
});
describe("compare", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/name.js"));
});
describe("compare", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/no-fractional-minutes-hours.js"));
});
describe("compare", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/not-a-constructor.js"));
});
describe("compare", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/prop-desc.js"));
});
describe("compare", () => {
it("use-internal-slots.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/use-internal-slots.js"));
});
describe("compare", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/compare/year-zero.js"));
});
it("constructor-full.js", createTestHandler("built-ins/Temporal/PlainDateTime/constructor-full.js"));
it("constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/constructor.js"));
it("datetime-math.js", createTestHandler("built-ins/Temporal/PlainDateTime/datetime-math.js"));
describe("from", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-number.js"));
});
describe("from", () => {
it("argument-object-month.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-object-month.js"));
});
describe("from", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-object.js"));
});
describe("from", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-plaindate.js"));
});
describe("from", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-plaindatetime.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-case-insensitive.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-leap-second.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-wrong-type.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-calendar-year-zero.js"));
});
describe("from", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-propertybag-optional-properties.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-calendar-annotation-invalid-key.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-calendar-annotation.js"));
});
describe("from", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-string-comma-decimal-separator.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-comma-decimal-separator.js"));
});
describe("from", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-critical-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-date-with-utc-offset.js"));
});
describe("from", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-invalid.js"));
});
describe("from", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-limits.js"));
});
describe("from", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-minus-sign.js"));
});
describe("from", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-multiple-calendar.js"));
});
describe("from", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-multiple-time-zone.js"));
});
describe("from", () => {
it("argument-string-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-offset.js"));
});
describe("from", () => {
it("argument-string-optional-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-optional-data.js"));
});
describe("from", () => {
it("argument-string-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-out-of-range.js"));
});
describe("from", () => {
it("argument-string-subsecond.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-subsecond.js"));
});
describe("from", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-time-separators.js"));
});
describe("from", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-time-zone-annotation.js"));
});
describe("from", () => {
it("argument-string-timezone.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-timezone.js"));
});
describe("from", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string-with-utc-designator.js"));
});
describe("from", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-string.js"));
});
describe("from", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-wrong-type.js"));
});
describe("from", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-zoneddatetime-balance-negative-time-units.js"));
});
describe("from", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/builtin.js"));
});
describe("from", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/calendar-temporal-object.js"));
});
describe("from", () => {
it("calendarresolvefields-error-ordering.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/calendarresolvefields-error-ordering.js"));
});
describe("from", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/infinity-throws-rangeerror.js"));
});
describe("from", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/leap-second.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/length.js"));
});
describe("from", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/limits.js"));
});
describe("from", () => {
it("month-code-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/month-code-wrong-type.js"));
});
describe("from", () => {
it("monthcode-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/monthcode-invalid.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/name.js"));
});
describe("from", () => {
it("negative-month-or-day.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/negative-month-or-day.js"));
});
describe("from", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/no-fractional-minutes-hours.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/not-a-constructor.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-primitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/observable-get-overflow-argument-primitive.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/observable-get-overflow-argument-string-invalid.js"));
});
describe("from", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/options-object.js"));
});
describe("from", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/options-read-before-algorithmic-validation.js"));
});
describe("from", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/options-undefined.js"));
});
describe("from", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/options-wrong-type.js"));
});
describe("from", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/order-of-operations.js"));
});
describe("from", () => {
it("overflow-default-constrain.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/overflow-default-constrain.js"));
});
describe("from", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/overflow-invalid-string.js"));
});
describe("from", () => {
it("overflow-reject.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/overflow-reject.js"));
});
describe("from", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/overflow-undefined.js"));
});
describe("from", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/overflow-wrong-type.js"));
});
describe("from", () => {
it("parser.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/parser.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/prop-desc.js"));
});
describe("from", () => {
it("roundtrip-from-property-bag.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/roundtrip-from-property-bag.js"));
});
describe("from", () => {
it("roundtrip-from-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/roundtrip-from-string.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/subclassing-ignored.js"));
});
describe("from", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/from/year-zero.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/PlainDateTime/get-prototype-from-constructor-throws.js"));
it("hour-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/hour-undefined.js"));
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/infinity-throws-rangeerror.js"));
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/length.js"));
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/limits.js"));
it("microsecond-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/microsecond-undefined.js"));
it("millisecond-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/millisecond-undefined.js"));
it("minute-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/minute-undefined.js"));
it("missing-arguments.js", createTestHandler("built-ins/Temporal/PlainDateTime/missing-arguments.js"));
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/name.js"));
it("nanosecond-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/nanosecond-undefined.js"));
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/negative-infinity-throws-rangeerror.js"));
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/order-of-operations.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prop-desc.js"));
describe("prototype", () => {
describe("add", () => {
it("add-large-subseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/add-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("ambiguous-date.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/ambiguous-date.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/argument-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/blank-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/branding.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/builtin.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("hour-overflow.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/hour-overflow.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/length.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/limits.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/month-boundary.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/name.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/negative-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-empty.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/options-empty.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/options-invalid.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/options-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-adding-months-to-max-year.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/overflow-adding-months-to-max-year.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/prop-desc.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("throws-if-duration-days-too-large.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/add/throws-if-duration-days-too-large.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/calendarId/branding.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/calendarId/prop-desc.js"));
});
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/constructor.js"));
});
describe("prototype", () => {
describe("day", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/day/basic.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/day/branding.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/day/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfWeek/basic.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/dayOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInMonth/basic.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInMonth/branding.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInMonth/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInWeek/basic.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInWeek/branding.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInYear/basic.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInYear/branding.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/daysInYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-number.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-object-insufficient-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-object-insufficient-data.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-plaindate.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/basic.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/branding.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/builtin.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("cast.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/cast.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/length.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/name.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/equals/year-zero.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/era/branding.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/era/prop-desc.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/eraYear/branding.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/eraYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("hour", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/hour/branding.js"));
});
});
describe("prototype", () => {
describe("hour", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/hour/prop-desc.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/inLeapYear/basic.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/inLeapYear/branding.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/inLeapYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/microsecond/branding.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/microsecond/prop-desc.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/millisecond/branding.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/millisecond/prop-desc.js"));
});
});
describe("prototype", () => {
describe("minute", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/minute/branding.js"));
});
});
describe("prototype", () => {
describe("minute", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/minute/prop-desc.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/month/basic.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/month/branding.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/month/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthCode/basic.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthCode/branding.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("no-leap-months.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthCode/no-leap-months.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthCode/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthsInYear/basic.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthsInYear/branding.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/monthsInYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("nanosecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/nanosecond/branding.js"));
});
});
describe("prototype", () => {
describe("nanosecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/nanosecond/prop-desc.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("round", () => {
it("balance.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/balance.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/branding.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/builtin.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/length.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/limits.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/name.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("negative-time.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/negative-time.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/prop-desc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-divides.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-divides.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-does-not-divide.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-does-not-divide.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-one-day.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-one-day.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-basic.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfexpand-is-default.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-halfexpand-is-default.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundto-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/roundto-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-string-shorthand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/smallestunit-string-shorthand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-argument-object-insufficient-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/throws-argument-object-insufficient-data.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-argument-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/throws-argument-object.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-no-argument.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/throws-no-argument.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/round/throws-undefined.js"));
});
});
describe("prototype", () => {
describe("second", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/second/branding.js"));
});
});
describe("prototype", () => {
describe("second", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/second/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-number.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-plaindate.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("balance-negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/balance-negative-duration.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/basic.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/blank-result.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/branding.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("bubble-time-unit.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/bubble-time-unit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/builtin.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/largestunit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/length.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/name.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("no-unnecessary-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/no-unnecessary-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-empty.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/options-empty.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/options-invalid.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/options-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("returns-days.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/returns-days.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/round-negative-duration.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-relative-to-receiver.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/round-relative-to-receiver.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-basic.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-cleanly-divides.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-cleanly-divides.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-does-not-divide.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-does-not-divide.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfexpand-default-changes.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-halfexpand-default-changes.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-trunc-is-default.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-trunc-is-default.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/subseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("throws-if-rounded-date-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/throws-if-rounded-date-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("weeks-months-mutually-exclusive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/weeks-months-mutually-exclusive.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/since/year-zero.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("ambiguous-date.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/ambiguous-date.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/argument-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/blank-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/branding.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/builtin.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("hour-overflow.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/hour-overflow.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/length.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/limits.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/month-boundary.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/name.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/negative-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-empty.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/options-empty.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/options-invalid.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/options-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-subtracting-months-from-min-year.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/overflow-subtracting-months-from-min-year.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subtract-large-subseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/subtract-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("throws-if-duration-days-too-large.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/subtract/throws-if-duration-days-too-large.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toJSON/year-format.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/length.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/limits.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/name.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainDate/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/length.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/name.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toPlainTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/basic.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-always.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-always.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-auto.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-critical.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-critical.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-never.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/calendarname-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-auto.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-nan.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-nan.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-negative.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-negative.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-non-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-non-integer.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-number.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-out-of-range.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/fractionalseconddigits-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-cross-midnight.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/rounding-cross-midnight.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-edge-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/rounding-edge-of-range.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-fractionalseconddigits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-fractionalseconddigits.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-valid-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-valid-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toString/year-format.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/basic.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/branding.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("constant-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/constant-offset.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("disambiguation-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/disambiguation-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("disambiguation-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/disambiguation-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("disambiguation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/disambiguation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("fixed-offset-near-date-time-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/fixed-offset-near-date-time-limits.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("invalid-instant.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/invalid-instant.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/length.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/name.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("negative-year.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/negative-year.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("no-observable-array-iteration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/no-observable-array-iteration.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/options-object.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("plain-date-time-near-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/plain-date-time-near-limits.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-datetime.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-string.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("two-digit-year.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/two-digit-year.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/toZonedDateTime/year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-number.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-plaindate.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("balance-negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/balance-negative-duration.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("balance.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/balance.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/basic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/blank-result.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/branding.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("bubble-time-unit.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/bubble-time-unit.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/builtin.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/casts-argument.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("inverse.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/inverse.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/length.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/name.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-unnecessary-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/no-unnecessary-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-empty.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/options-empty.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/options-invalid.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/options-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/prop-desc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("returns-days.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/returns-days.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-negative-duration.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/round-negative-duration.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-relative-to-receiver.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/round-relative-to-receiver.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-basic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-cleanly-divides.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-cleanly-divides.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-does-not-divide.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-does-not-divide.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfexpand-default-changes.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-halfexpand-default-changes.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-trunc-is-default.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-trunc-is-default.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/subseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("throws-if-rounded-date-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/throws-if-rounded-date-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("units-changed.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/units-changed.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("weeks-months-mutually-exclusive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/weeks-months-mutually-exclusive.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/until/year-zero.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/valueOf/prop-desc.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/weekOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/weekOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/weekOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("argument-object-insufficient-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/argument-object-insufficient-data.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic-year-month-day.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/basic-year-month-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/basic.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/branding.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/builtin.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("calendar-temporal-object-throws.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/calendar-temporal-object-throws.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("calendar-throws.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/calendar-throws.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("constrain-day.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/constrain-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("copy-properties-not-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/copy-properties-not-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/length.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("month-and-monthcode-must-agree.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/month-and-monthcode-must-agree.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("multiple-unrecognized-properties-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/multiple-unrecognized-properties-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/name.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-empty.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/options-empty.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/options-invalid.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/options-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("string-throws.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/string-throws.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-if-combined-date-time-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/throws-if-combined-date-time-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("timezone-throws.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/with/timezone-throws.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/basic.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/branding.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/builtin.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string-leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-time-string.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-time-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/length.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("missing-argument.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/missing-argument.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/name.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withCalendar/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-number.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-object-insufficient-data.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-object-insufficient-data.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-no-implicit-midnight.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-no-implicit-midnight.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-designator-required-for-disambiguation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-time-designator-required-for-disambiguation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-with-time-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-with-time-designator.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-without-time-designator.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-string-without-time-designator.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-time.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-time.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/branding.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/builtin.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/leap-second.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/length.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/name.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("no-argument-default-to-midnight.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/no-argument-default-to-midnight.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("plaintime-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/plaintime-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("throws-if-combined-date-time-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/throws-if-combined-date-time-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("time-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/time-undefined.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/withPlainTime/year-zero.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/year/basic.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/year/branding.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/year/prop-desc.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/yearOfWeek/basic.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/yearOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDateTime/prototype/yearOfWeek/prop-desc.js"));
});
});
it("second-undefined.js", createTestHandler("built-ins/Temporal/PlainDateTime/second-undefined.js"));
it("subclass.js", createTestHandler("built-ins/Temporal/PlainDateTime/subclass.js"));
it("throws-if-date-is-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/throws-if-date-is-invalid.js"));
it("throws-if-time-is-invalid.js", createTestHandler("built-ins/Temporal/PlainDateTime/throws-if-time-is-invalid.js"));
});
