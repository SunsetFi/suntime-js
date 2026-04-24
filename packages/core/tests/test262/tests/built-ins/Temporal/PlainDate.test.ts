import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PlainDate", () => {
it("argument-convert.js", createTestHandler("built-ins/Temporal/PlainDate/argument-convert.js"));
it("argument-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/argument-invalid.js"));
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/basic.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/builtin.js"));
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/calendar-case-insensitive.js"));
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/calendar-invalid-iso-string.js"));
it("calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/calendar-string.js"));
it("calendar-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/calendar-undefined.js"));
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/calendar-wrong-type.js"));
describe("compare", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-number.js"));
});
describe("compare", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-object.js"));
});
describe("compare", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-plaindatetime.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-case-insensitive.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-leap-second.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-wrong-type.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-year-zero.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-calendar-annotation-invalid-key.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-calendar-annotation.js"));
});
describe("compare", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-critical-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-date-with-utc-offset.js"));
});
describe("compare", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-invalid.js"));
});
describe("compare", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-limits.js"));
});
describe("compare", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-minus-sign.js"));
});
describe("compare", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-multiple-calendar.js"));
});
describe("compare", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-multiple-time-zone.js"));
});
describe("compare", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-time-separators.js"));
});
describe("compare", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-time-zone-annotation.js"));
});
describe("compare", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-with-utc-designator.js"));
});
describe("compare", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string.js"));
});
describe("compare", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-wrong-type.js"));
});
describe("compare", () => {
it("argument-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-zoneddatetime-slots.js"));
});
describe("compare", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/PlainDate/compare/argument-zoneddatetime.js"));
});
describe("compare", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/compare/basic.js"));
});
describe("compare", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/compare/builtin.js"));
});
describe("compare", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/compare/calendar-temporal-object.js"));
});
describe("compare", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/compare/infinity-throws-rangeerror.js"));
});
describe("compare", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/compare/leap-second.js"));
});
describe("compare", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/compare/length.js"));
});
describe("compare", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/compare/name.js"));
});
describe("compare", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDate/compare/no-fractional-minutes-hours.js"));
});
describe("compare", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/compare/not-a-constructor.js"));
});
describe("compare", () => {
it("not-same-object.js", createTestHandler("built-ins/Temporal/PlainDate/compare/not-same-object.js"));
});
describe("compare", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/compare/prop-desc.js"));
});
describe("compare", () => {
it("use-internal-slots.js", createTestHandler("built-ins/Temporal/PlainDate/compare/use-internal-slots.js"));
});
describe("compare", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/compare/year-zero.js"));
});
it("constructor.js", createTestHandler("built-ins/Temporal/PlainDate/constructor.js"));
describe("from", () => {
it("argument-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-leap-second.js"));
});
describe("from", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-number.js"));
});
describe("from", () => {
it("argument-object-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-object-invalid.js"));
});
describe("from", () => {
it("argument-object-valid.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-object-valid.js"));
});
describe("from", () => {
it("argument-plaindate.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-plaindate.js"));
});
describe("from", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-plaindatetime.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-case-insensitive.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-leap-second.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-wrong-type.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-year-zero.js"));
});
describe("from", () => {
it("argument-propertybag-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-calendar-annotation-invalid-key.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-calendar-annotation.js"));
});
describe("from", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-critical-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-date-with-utc-offset.js"));
});
describe("from", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-invalid.js"));
});
describe("from", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-limits.js"));
});
describe("from", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-minus-sign.js"));
});
describe("from", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-multiple-calendar.js"));
});
describe("from", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-multiple-time-zone.js"));
});
describe("from", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-time-separators.js"));
});
describe("from", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-time-zone-annotation.js"));
});
describe("from", () => {
it("argument-string-trailing-junk.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-trailing-junk.js"));
});
describe("from", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-with-utc-designator.js"));
});
describe("from", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-string.js"));
});
describe("from", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-wrong-type.js"));
});
describe("from", () => {
it("argument-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-zoneddatetime-slots.js"));
});
describe("from", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/PlainDate/from/argument-zoneddatetime.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/from/builtin.js"));
});
describe("from", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/from/calendar-temporal-object.js"));
});
describe("from", () => {
it("calendarresolvefields-error-ordering.js", createTestHandler("built-ins/Temporal/PlainDate/from/calendarresolvefields-error-ordering.js"));
});
describe("from", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/from/infinity-throws-rangeerror.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/from/length.js"));
});
describe("from", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/from/limits.js"));
});
describe("from", () => {
it("month-code-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/from/month-code-wrong-type.js"));
});
describe("from", () => {
it("monthcode-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/from/monthcode-invalid.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/from/name.js"));
});
describe("from", () => {
it("negative-month-or-day.js", createTestHandler("built-ins/Temporal/PlainDate/from/negative-month-or-day.js"));
});
describe("from", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDate/from/no-fractional-minutes-hours.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/from/not-a-constructor.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-primitive.js", createTestHandler("built-ins/Temporal/PlainDate/from/observable-get-overflow-argument-primitive.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/from/observable-get-overflow-argument-string-invalid.js"));
});
describe("from", () => {
it("one-of-era-erayear-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/from/one-of-era-erayear-undefined.js"));
});
describe("from", () => {
it("options-basic.js", createTestHandler("built-ins/Temporal/PlainDate/from/options-basic.js"));
});
describe("from", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/from/options-object.js"));
});
describe("from", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/from/options-read-before-algorithmic-validation.js"));
});
describe("from", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/from/options-undefined.js"));
});
describe("from", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/from/options-wrong-type.js"));
});
describe("from", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/from/order-of-operations.js"));
});
describe("from", () => {
it("out-of-range.js", createTestHandler("built-ins/Temporal/PlainDate/from/out-of-range.js"));
});
describe("from", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/overflow-invalid-string.js"));
});
describe("from", () => {
it("overflow-reject.js", createTestHandler("built-ins/Temporal/PlainDate/from/overflow-reject.js"));
});
describe("from", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/from/overflow-undefined.js"));
});
describe("from", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/from/overflow-wrong-type.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/from/prop-desc.js"));
});
describe("from", () => {
it("roundtrip-from-iso.js", createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-iso.js"));
});
describe("from", () => {
it("roundtrip-from-property-bag.js", createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-property-bag.js"));
});
describe("from", () => {
it("roundtrip-from-string.js", createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-string.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/from/subclassing-ignored.js"));
});
describe("from", () => {
it("with-year-month-day-need-constrain.js", createTestHandler("built-ins/Temporal/PlainDate/from/with-year-month-day-need-constrain.js"));
});
describe("from", () => {
it("with-year-month-day.js", createTestHandler("built-ins/Temporal/PlainDate/from/with-year-month-day.js"));
});
describe("from", () => {
it("with-year-monthCode-day-need-constrain.js", createTestHandler("built-ins/Temporal/PlainDate/from/with-year-monthCode-day-need-constrain.js"));
});
describe("from", () => {
it("with-year-monthCode-day.js", createTestHandler("built-ins/Temporal/PlainDate/from/with-year-monthCode-day.js"));
});
describe("from", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/from/year-zero.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/PlainDate/get-prototype-from-constructor-throws.js"));
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/infinity-throws-rangeerror.js"));
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/length.js"));
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/limits.js"));
it("missing-arguments.js", createTestHandler("built-ins/Temporal/PlainDate/missing-arguments.js"));
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/name.js"));
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/negative-infinity-throws-rangeerror.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prop-desc.js"));
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("balance-smaller-units-basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/balance-smaller-units-basic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("balance-smaller-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/balance-smaller-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/basic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/blank-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/branding.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/builtin.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("constrain-days.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/constrain-days.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("leap-year-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/leap-year-arithmetic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/length.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/limits.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/month-boundary.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/name.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-adding-months-to-max-year.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-adding-months-to-max-year.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/prop-desc.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/add/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/calendarId/branding.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/calendarId/prop-desc.js"));
});
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/constructor.js"));
});
describe("prototype", () => {
describe("day", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/day/basic.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/day/branding.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/day/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/basic.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/basic.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/branding.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/basic.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/branding.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/basic.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/branding.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-number.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-object-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-object-invalid.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-zoneddatetime-slots.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/basic.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/branding.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/builtin.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/length.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/name.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/year-zero.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/era/branding.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/era/prop-desc.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/eraYear/branding.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/eraYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/basic.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/branding.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/month/basic.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/month/branding.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/month/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/basic.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/branding.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("no-leap-months.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/no-leap-months.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/basic.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/branding.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/prop-desc.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("since", () => {
it("argument-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-number.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-zoneddatetime-slots.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("basic-conversions.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic-conversions.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/blank-result.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/branding.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/builtin.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("calendar-id-match.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/calendar-id-match.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("days-in-month.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/days-in-month.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("days-in-year.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/days-in-year.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-default.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-default.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-higher-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-higher-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/length.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/name.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/options-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("rounding-relative.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/rounding-relative.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-higher-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-higher-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("throws-if-rounded-date-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/throws-if-rounded-date-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("throws-with-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/throws-with-time-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("weeks-months.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/weeks-months.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/since/year-zero.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("balance-smaller-units-basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/balance-smaller-units-basic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("balance-smaller-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/balance-smaller-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/basic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/blank-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/branding.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/builtin.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/length.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/limits.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/month-boundary.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/name.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/negative-infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-constrain.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-constrain.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-reject.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-reject.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-subtracting-months-from-min-year.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-subtracting-months-from-min-year.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/year-format.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-number.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-object.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-no-implicit-midnight.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-no-implicit-midnight.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-time-designator-required-for-disambiguation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-designator-required-for-disambiguation.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-with-time-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-with-time-designator.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/leap-second.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/length.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/limits.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/name.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("plaintime-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/plaintime-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("time-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/time-invalid.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("time-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/time-undefined.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/year-zero.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/length.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/name.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainMonthDay", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/length.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/limits.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/name.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainYearMonth", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/basic.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-always.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-always.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-auto.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-critical.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-critical.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-never.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/year-format.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-number.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-object-get-plainTime-throws.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-get-plainTime-throws.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-object-get-timezone-throws.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-get-timezone-throws.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-object-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-no-implicit-midnight.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-no-implicit-midnight.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-time-designator-required-for-disambiguation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-designator-required-for-disambiguation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-with-time-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-with-time-designator.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/basic.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/branding.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("get-epoch-nanoseconds-for-throws.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/get-epoch-nanoseconds-for-throws.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("get-start-of-day-throws.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/get-start-of-day-throws.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/leap-second.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/length.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/name.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("no-observable-array-iteration.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/no-observable-array-iteration.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("plaintime-argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/plaintime-argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("plaintime-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/plaintime-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("throws-if-combined-date-time-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/throws-if-combined-date-time-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-datetime.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toZonedDateTime", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-number.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-plaindatetime.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-plaindatetime.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-zoneddatetime-slots.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-zoneddatetime-slots.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("basic-conversions.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic-conversions.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/blank-result.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/branding.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/builtin.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("calendar-id-match.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/calendar-id-match.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-default.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-default.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("leap-year-arithmetic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/leap-year-arithmetic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/length.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/name.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-options.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/no-options.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/options-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/prop-desc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("rounding-relative.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/rounding-relative.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-higher-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-higher-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("throws-if-rounded-date-outside-valid-iso-range.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/throws-if-rounded-date-outside-valid-iso-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("throws-with-time-units.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/throws-with-time-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("weeks-months.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/weeks-months.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("zero-length-duration-result.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/until/zero-length-duration-result.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/prop-desc.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic-year-month-day.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/basic-year-month-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/branding.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/builtin.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("constrain-day.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/constrain-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("constrain-days.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/constrain-days.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("copy-properties-not-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/copy-properties-not-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("leap-year.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/leap-year.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/length.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/name.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-object.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("plaindatelike-invalid.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/plaindatelike-invalid.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("plural-units-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/plural-units-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("time-units-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/with/time-units-ignored.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/basic.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/branding.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/builtin.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string-leap-second.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-time-string.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-time-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/length.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("missing-argument.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/missing-argument.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/name.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/year/basic.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/year/branding.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/year/prop-desc.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/basic.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/prop-desc.js"));
});
});
it("subclass.js", createTestHandler("built-ins/Temporal/PlainDate/subclass.js"));
});
