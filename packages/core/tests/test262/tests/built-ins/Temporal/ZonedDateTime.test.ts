import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("ZonedDateTime", () => {
it("argument-convert.js", createTestHandler("built-ins/Temporal/ZonedDateTime/argument-convert.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/builtin.js"));
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/calendar-case-insensitive.js"));
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/calendar-invalid-iso-string.js"));
it("calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/calendar-string.js"));
it("calendar-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/calendar-undefined.js"));
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/calendar-wrong-type.js"));
describe("compare", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-case-insensitive.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-iso-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-leap-second.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-string.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-wrong-type.js"));
});
describe("compare", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-calendar-year-zero.js"));
});
describe("compare", () => {
it("argument-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-invalid-offset-string.js"));
});
describe("compare", () => {
it("argument-propertybag-offset-not-agreeing-with-timezone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-offset-not-agreeing-with-timezone.js"));
});
describe("compare", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-optional-properties.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string-datetime.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string-leap-second.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string-multiple-offsets.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string-sub-minute-offset.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string-year-zero.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-string.js"));
});
describe("compare", () => {
it("argument-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-propertybag-timezone-wrong-type.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-calendar-annotation-invalid-key.js"));
});
describe("compare", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-calendar-annotation.js"));
});
describe("compare", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-calendar-invalid-iso-string.js"));
});
describe("compare", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-critical-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-date-with-utc-offset.js"));
});
describe("compare", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-limits.js"));
});
describe("compare", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-minus-sign.js"));
});
describe("compare", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-multiple-calendar.js"));
});
describe("compare", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-multiple-time-zone.js"));
});
describe("compare", () => {
it("argument-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-sub-minute-offset.js"));
});
describe("compare", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-time-separators.js"));
});
describe("compare", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-time-zone-annotation.js"));
});
describe("compare", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-string-unknown-annotation.js"));
});
describe("compare", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/argument-wrong-type.js"));
});
describe("compare", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/basic.js"));
});
describe("compare", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/builtin.js"));
});
describe("compare", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/calendar-temporal-object.js"));
});
describe("compare", () => {
it("casts-arguments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/casts-arguments.js"));
});
describe("compare", () => {
it("compares-exact-time-not-clock-time.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/compares-exact-time-not-clock-time.js"));
});
describe("compare", () => {
it("disregard-time-zone-ids-if-exact-times-are-equal.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/disregard-time-zone-ids-if-exact-times-are-equal.js"));
});
describe("compare", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/infinity-throws-rangeerror.js"));
});
describe("compare", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/leap-second.js"));
});
describe("compare", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/length.js"));
});
describe("compare", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/name.js"));
});
describe("compare", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/no-fractional-minutes-hours.js"));
});
describe("compare", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/not-a-constructor.js"));
});
describe("compare", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/order-of-operations.js"));
});
describe("compare", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/prop-desc.js"));
});
describe("compare", () => {
it("requires-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/requires-properties.js"));
});
describe("compare", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/year-zero.js"));
});
describe("compare", () => {
it("zoneddatetime-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/zoneddatetime-string-multiple-offsets.js"));
});
describe("compare", () => {
it("zoneddatetime-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/compare/zoneddatetime-string.js"));
});
it("construction-and-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/construction-and-properties.js"));
it("constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/constructor.js"));
describe("from", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-case-insensitive.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-leap-second.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-wrong-type.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-calendar-year-zero.js"));
});
describe("from", () => {
it("argument-propertybag-empty-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-empty-throws.js"));
});
describe("from", () => {
it("argument-propertybag-function-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-function-object.js"));
});
describe("from", () => {
it("argument-propertybag-ignores-incorrect-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-ignores-incorrect-properties.js"));
});
describe("from", () => {
it("argument-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-invalid-offset-string.js"));
});
describe("from", () => {
it("argument-propertybag-monthcode-month.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-monthcode-month.js"));
});
describe("from", () => {
it("argument-propertybag-offset-not-agreeing-with-timezone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-offset-not-agreeing-with-timezone.js"));
});
describe("from", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-optional-properties.js"));
});
describe("from", () => {
it("argument-propertybag-required-correctly-spelled-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-required-correctly-spelled-properties.js"));
});
describe("from", () => {
it("argument-propertybag-required-prop-undefined-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-required-prop-undefined-throws.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-object.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string-datetime.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string-leap-second.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string-multiple-offsets.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string-sub-minute-offset.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string-year-zero.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-string.js"));
});
describe("from", () => {
it("argument-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-propertybag-timezone-wrong-type.js"));
});
describe("from", () => {
it("argument-string-basic-and-extended-format.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-basic-and-extended-format.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-calendar-annotation-invalid-key.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-calendar-annotation.js"));
});
describe("from", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-critical-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-date-with-utc-offset.js"));
});
describe("from", () => {
it("argument-string-decimal-places.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-decimal-places.js"));
});
describe("from", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-invalid.js"));
});
describe("from", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-limits.js"));
});
describe("from", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-minus-sign.js"));
});
describe("from", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-multiple-calendar.js"));
});
describe("from", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-multiple-time-zone.js"));
});
describe("from", () => {
it("argument-string-negative-extended-year.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-negative-extended-year.js"));
});
describe("from", () => {
it("argument-string-no-junk-at-end.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-no-junk-at-end.js"));
});
describe("from", () => {
it("argument-string-optional-parts.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-optional-parts.js"));
});
describe("from", () => {
it("argument-string-start-of-day-not-valid-epoch-nanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-start-of-day-not-valid-epoch-nanoseconds.js"));
});
describe("from", () => {
it("argument-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-sub-minute-offset.js"));
});
describe("from", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-time-separators.js"));
});
describe("from", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-time-zone-annotation.js"));
});
describe("from", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-variant-decimal-separator.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-string-variant-decimal-separator.js"));
});
describe("from", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-wrong-type.js"));
});
describe("from", () => {
it("argument-zoneddatetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/argument-zoneddatetime.js"));
});
describe("from", () => {
it("bad-disambiguation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/bad-disambiguation.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/builtin.js"));
});
describe("from", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/calendar-temporal-object.js"));
});
describe("from", () => {
it("calendarresolvefields-error-ordering.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/calendarresolvefields-error-ordering.js"));
});
describe("from", () => {
it("constrain-has-no-effect-on-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/constrain-has-no-effect-on-invalid-iso-string.js"));
});
describe("from", () => {
it("disambiguation-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/disambiguation-invalid-string.js"));
});
describe("from", () => {
it("disambiguation-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/disambiguation-wrong-type.js"));
});
describe("from", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/infinity-throws-rangeerror.js"));
});
describe("from", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/leap-second.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/length.js"));
});
describe("from", () => {
it("month-code-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/month-code-wrong-type.js"));
});
describe("from", () => {
it("monthcode-invalid.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/monthcode-invalid.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/name.js"));
});
describe("from", () => {
it("negative-month-or-day.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/negative-month-or-day.js"));
});
describe("from", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/no-fractional-minutes-hours.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/not-a-constructor.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-primitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/observable-get-overflow-argument-primitive.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-string-invalid.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/observable-get-overflow-argument-string-invalid.js"));
});
describe("from", () => {
it("offset-does-not-match-iana-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-does-not-match-iana-time-zone.js"));
});
describe("from", () => {
it("offset-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-invalid-string.js"));
});
describe("from", () => {
it("offset-overrides-critical-flag.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-overrides-critical-flag.js"));
});
describe("from", () => {
it("offset-string-invalid.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-string-invalid.js"));
});
describe("from", () => {
it("offset-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-undefined.js"));
});
describe("from", () => {
it("offset-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/offset-wrong-type.js"));
});
describe("from", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/options-object.js"));
});
describe("from", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/options-read-before-algorithmic-validation.js"));
});
describe("from", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/options-wrong-type.js"));
});
describe("from", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/order-of-operations.js"));
});
describe("from", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/overflow-invalid-string.js"));
});
describe("from", () => {
it("overflow-options.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/overflow-options.js"));
});
describe("from", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/overflow-undefined.js"));
});
describe("from", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/overflow-wrong-type.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/prop-desc.js"));
});
describe("from", () => {
it("roundtrip-from-property-bag.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/roundtrip-from-property-bag.js"));
});
describe("from", () => {
it("roundtrip-from-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/roundtrip-from-string.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/subclassing-ignored.js"));
});
describe("from", () => {
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/timezone-case-insensitive.js"));
});
describe("from", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/year-zero.js"));
});
describe("from", () => {
it("zoneddatetime-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/zoneddatetime-string-multiple-offsets.js"));
});
describe("from", () => {
it("zoneddatetime-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/from/zoneddatetime-string.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/get-prototype-from-constructor-throws.js"));
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/length.js"));
it("limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/limits.js"));
it("missing-arguments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/missing-arguments.js"));
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/name.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prop-desc.js"));
describe("prototype", () => {
describe("add", () => {
it("add-duration.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/add-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("add-large-subseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/add-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/blank-duration.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/branding.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/builtin.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/casts-argument.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("constrain-when-ambiguous-result.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/constrain-when-ambiguous-result.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("cross-epoch.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/cross-epoch.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/length.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("math-order-of-operations-add-constrain.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/math-order-of-operations-add-constrain.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("math-order-of-operations-add-none.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/math-order-of-operations-add-none.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("math-order-of-operations-add-reject.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/math-order-of-operations-add-reject.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/month-boundary.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/name.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/options-object.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/options-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-adding-months-to-max-year.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/overflow-adding-months-to-max-year.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("overflow.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/overflow.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/prop-desc.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("symmetrical-wrt-negative-durations-in-time-part.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/symmetrical-wrt-negative-durations-in-time-part.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("throw-when-ambiguous-result-with-reject.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/throw-when-ambiguous-result-with-reject.js"));
});
});
describe("prototype", () => {
describe("add", () => {
it("throw-when-intermediate-datetime-outside-valid-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/add/throw-when-intermediate-datetime-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/calendarId/branding.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/calendarId/prop-desc.js"));
});
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/constructor.js"));
});
describe("prototype", () => {
describe("day", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/day/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/day/basic.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/day/branding.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/day/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/dayOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/dayOfWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/dayOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/dayOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("dayOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/dayOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInMonth/basic.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInMonth/branding.js"));
});
});
describe("prototype", () => {
describe("daysInMonth", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInMonth/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInWeek/basic.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInWeek/branding.js"));
});
});
describe("prototype", () => {
describe("daysInWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInWeek/prop-desc.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInYear/basic.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInYear/branding.js"));
});
});
describe("prototype", () => {
describe("daysInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/daysInYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochMilliseconds/basic.js"));
});
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochMilliseconds/branding.js"));
});
});
describe("prototype", () => {
describe("epochMilliseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochMilliseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochNanoseconds/basic.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochNanoseconds/branding.js"));
});
});
describe("prototype", () => {
describe("epochNanoseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/epochNanoseconds/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-object.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-invalid-offset-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-offset-not-agreeing-with-timezone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-offset-not-agreeing-with-timezone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-normalize-offset-strings.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-normalize-offset-strings.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-propertybag-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-valid.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-valid.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/branding.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/builtin.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/casts-argument.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("constructed-from-equivalent-parameters-are-equal.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/constructed-from-equivalent-parameters-are-equal.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("different-instant-not-equal.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/different-instant-not-equal.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("different-time-zone-not-equal.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/different-time-zone-not-equal.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/length.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/name.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("requires-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/requires-properties.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("zoneddatetime-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/zoneddatetime-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("zoneddatetime-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/equals/zoneddatetime-string.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/era/branding.js"));
});
});
describe("prototype", () => {
describe("era", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/era/prop-desc.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/eraYear/branding.js"));
});
});
describe("prototype", () => {
describe("eraYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/eraYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/branding.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/builtin.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("direction-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/direction-undefined.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("direction-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/direction-wrong-type.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/length.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/name.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("offset-timezone-no-transitions.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/offset-timezone-no-transitions.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/options-undefined.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/prop-desc.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("utc-no-transitions.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/utc-no-transitions.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("wrong-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/wrong-string.js"));
});
});
describe("prototype", () => {
describe("getTimeZoneTransition", () => {
it("wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/getTimeZoneTransition/wrong-type.js"));
});
});
describe("prototype", () => {
describe("hour", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hour/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("hour", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hour/branding.js"));
});
});
describe("prototype", () => {
describe("hour", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hour/prop-desc.js"));
});
});
describe("prototype", () => {
describe("hoursInDay", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hoursInDay/basic.js"));
});
});
describe("prototype", () => {
describe("hoursInDay", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hoursInDay/branding.js"));
});
});
describe("prototype", () => {
describe("hoursInDay", () => {
it("get-start-of-day-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hoursInDay/get-start-of-day-throws.js"));
});
});
describe("prototype", () => {
describe("hoursInDay", () => {
it("next-day-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hoursInDay/next-day-out-of-range.js"));
});
});
describe("prototype", () => {
describe("hoursInDay", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/hoursInDay/prop-desc.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/inLeapYear/basic.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/inLeapYear/branding.js"));
});
});
describe("prototype", () => {
describe("inLeapYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/inLeapYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/microsecond/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/microsecond/branding.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/microsecond/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("microsecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/microsecond/prop-desc.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/millisecond/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/millisecond/branding.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/millisecond/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("millisecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/millisecond/prop-desc.js"));
});
});
describe("prototype", () => {
describe("minute", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/minute/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("minute", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/minute/branding.js"));
});
});
describe("prototype", () => {
describe("minute", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/minute/prop-desc.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/month/basic.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/month/branding.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/month/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthCode/basic.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthCode/branding.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("no-leap-months.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthCode/no-leap-months.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthCode/prop-desc.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthsInYear/basic.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthsInYear/branding.js"));
});
});
describe("prototype", () => {
describe("monthsInYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/monthsInYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("nanosecond", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/nanosecond/branding.js"));
});
});
describe("prototype", () => {
describe("nanosecond", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/nanosecond/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("nanosecond", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/nanosecond/prop-desc.js"));
});
});
describe("prototype", () => {
describe("offset", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/offset/basic.js"));
});
});
describe("prototype", () => {
describe("offset", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/offset/branding.js"));
});
});
describe("prototype", () => {
describe("offset", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/offset/prop-desc.js"));
});
});
describe("prototype", () => {
describe("offsetNanoseconds", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/offsetNanoseconds/branding.js"));
});
});
describe("prototype", () => {
describe("offsetNanoseconds", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/offsetNanoseconds/prop-desc.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("round", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/branding.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/builtin.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("day-rounding-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/day-rounding-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("get-start-of-day-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/get-start-of-day-throws.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/length.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/name.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("negative-time.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/negative-time.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/prop-desc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounded-date-time-outside-valid-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/rounded-date-time-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("rounding-is-noop.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/rounding-is-noop.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("roundto-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/roundto-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-string-shorthand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/smallestunit-string-shorthand.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("smallestunit.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/smallestunit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-on-invalid-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/throws-on-invalid-increments.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-without-parameter.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/throws-without-parameter.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("throws-without-smallestunit.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/throws-without-smallestunit.js"));
});
});
describe("prototype", () => {
describe("round", () => {
it("valid-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/round/valid-increments.js"));
});
});
describe("prototype", () => {
describe("second", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/second/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("second", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/second/branding.js"));
});
});
describe("prototype", () => {
describe("second", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/second/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-at-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-at-limits.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-invalid-offset-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-offset-not-agreeing-with-timezone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-offset-not-agreeing-with-timezone.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-propertybag-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/basic.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/blank-result.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/branding.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/builtin.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("can-return-lower-or-higher-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/can-return-lower-or-higher-units.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/casts-argument.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("defaults-to-returning-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/defaults-to-returning-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("does-not-include-higher-units-than-necessary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/does-not-include-higher-units-than-necessary.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("invalid-rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/invalid-rounding-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-default.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-default.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("largestunit.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/largestunit.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/leap-second.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/length.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/name.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/options-object.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/options-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/prop-desc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("reversibility-of-differences.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/reversibility-of-differences.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-addition-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-addition-out-of-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("rounds-relative-to-receiver.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/rounds-relative-to-receiver.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("same-epoch-nanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/same-epoch-nanoseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("since-until.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/since-until.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/subseconds.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("valid-rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/valid-rounding-increments.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("weeks-and-months-are-mutually-exclusive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/weeks-and-months-are-mutually-exclusive.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/year-zero.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("zoneddatetime-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/zoneddatetime-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("since", () => {
it("zoneddatetime-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/since/zoneddatetime-string.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/branding.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/builtin.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/length.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/name.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/prop-desc.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("startOfDay", () => {
it("throws-if-epoch-nanoseconds-outside-valid-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/startOfDay/throws-if-epoch-nanoseconds-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max-plus-min-date.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-duration-max-plus-min-date.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-max.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-duration-max.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-duration-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-duration-out-of-range.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-invalid-property.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-invalid-property.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-mixed-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-mixed-sign.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-singular-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-singular-properties.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-fractional-units-rounding-mode.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-string-fractional-units-rounding-mode.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("argument-string-negative-fractional-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/argument-string-negative-fractional-units.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("basic-arithmetic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/basic-arithmetic.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("blank-duration.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/blank-duration.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/branding.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/builtin.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/casts-argument.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("constrain-when-ambiguous-result.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/constrain-when-ambiguous-result.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/length.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("math-order-of-operations-subtract-constrain.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/math-order-of-operations-subtract-constrain.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("math-order-of-operations-subtract-none.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/math-order-of-operations-subtract-none.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("math-order-of-operations-subtract-reject.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/math-order-of-operations-subtract-reject.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("month-boundary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/month-boundary.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/name.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("non-integer-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/non-integer-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/options-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/options-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-subtracting-months-from-min-year.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/overflow-subtracting-months-from-min-year.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("overflow.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/overflow.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/prop-desc.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subtract-duration-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/subtract-duration-object.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("subtract-large-subseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/subtract-large-subseconds.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("symmetrical-wrt-negative-durations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/symmetrical-wrt-negative-durations.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("throw-when-ambiguous-result-with-reject.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/throw-when-ambiguous-result-with-reject.js"));
});
});
describe("prototype", () => {
describe("subtract", () => {
it("throw-when-intermediate-datetime-outside-valid-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/subtract/throw-when-intermediate-datetime-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("timeZoneId", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/timeZoneId/branding.js"));
});
});
describe("prototype", () => {
describe("timeZoneId", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/timeZoneId/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/branding.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/builtin.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/length.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/name.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("recent-date.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/recent-date.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("year-less-than-1.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/year-less-than-1.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("year-less-than-99.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/year-less-than-99.js"));
});
});
describe("prototype", () => {
describe("toInstant", () => {
it("year-zero-leap-day.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toInstant/year-zero-leap-day.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/offset.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toJSON/year-format.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/length.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/name.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDate/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/length.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/limits.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/name.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("pre-epoch.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/pre-epoch.js"));
});
});
describe("prototype", () => {
describe("toPlainDateTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainDateTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/length.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/name.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toPlainTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-always.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-always.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-auto.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-critical.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-critical.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-never.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/calendarname-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-auto.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-nan.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-nan.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-negative.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-negative.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-non-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-non-integer.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-number.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-number.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-out-of-range.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("fractionalseconddigits-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/fractionalseconddigits-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("negative-zoneddatetime-rounding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/negative-zoneddatetime-rounding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset-auto.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset-never.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/offset.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-cross-midnight.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/rounding-cross-midnight.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("rounding-direction.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/rounding-direction.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-fractionalseconddigits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-fractionalseconddigits.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-valid-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-valid-units.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-auto.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-critical.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-critical.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-never.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("timezonename-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/timezonename-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("year-format.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toString/year-format.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-at-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-at-limits.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-invalid-offset-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-invalid-offset-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-offset-not-agreeing-with-timezone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-offset-not-agreeing-with-timezone.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-propertybag-timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-propertybag-timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-limits.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/basic.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("blank-result.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/blank-result.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/branding.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/builtin.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("can-return-lower-or-higher-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/can-return-lower-or-higher-units.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("casts-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/casts-argument.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("defaults-to-returning-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/defaults-to-returning-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("does-not-include-higher-units-than-necessary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/does-not-include-higher-units-than-necessary.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("float64-representable-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/float64-representable-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("invalid-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/invalid-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-default.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-default.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-smallestunit-mismatch.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-smallestunit-mismatch.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("largestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/largestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/leap-second.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/length.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/name.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/options-object.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/options-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/prop-desc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("round-cross-unit-boundary.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/round-cross-unit-boundary.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/rounding-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-addition-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-addition-out-of-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-nan.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-nan.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-non-integer.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-non-integer.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-out-of-range.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-out-of-range.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingincrement-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingincrement-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-ceil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-ceil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-expand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-expand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-floor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-floor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfCeil.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-halfCeil.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfEven.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-halfEven.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfExpand.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-halfExpand.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfFloor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-halfFloor.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-halfTrunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-halfTrunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-trunc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-trunc.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("roundingmode-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/roundingmode-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("rounds-relative-to-receiver.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/rounds-relative-to-receiver.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("same-epoch-nanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/same-epoch-nanoseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/smallestunit-invalid-string.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-plurals-accepted.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/smallestunit-plurals-accepted.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/smallestunit-undefined.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("smallestunit-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/smallestunit-wrong-type.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("subseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/subseconds.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("until-since.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/until-since.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("valid-rounding-increments.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/valid-rounding-increments.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("weeks-and-months-are-mutually-exclusive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/weeks-and-months-are-mutually-exclusive.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/year-zero.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("zoneddatetime-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/zoneddatetime-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("until", () => {
it("zoneddatetime-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/until/zoneddatetime-string.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/valueOf/prop-desc.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/weekOfYear/basic.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/weekOfYear/branding.js"));
});
});
describe("prototype", () => {
describe("weekOfYear", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/weekOfYear/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic-year-month-day.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/basic-year-month-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/basic.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/branding.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/builtin.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("constrain-day.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/constrain-day.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("copy-properties-not-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/copy-properties-not-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("disambiguation-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/disambiguation-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("disambiguation-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/disambiguation-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("incorrectly-spelled-properties-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/incorrectly-spelled-properties-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("invalid-disambiguation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/invalid-disambiguation.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("invalid-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/invalid-offset.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/length.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("minimum-instant-with-one-hour-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/minimum-instant-with-one-hour-offset.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("month-and-month-code-must-agree.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/month-and-month-code-must-agree.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/name.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("object-must-contain-at-least-one-property.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/object-must-contain-at-least-one-property.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("offset-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/offset-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("offset-property-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/offset-property-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("offset-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/offset-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("offset-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/offset-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/options-object.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/options-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-options.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/overflow-options.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-reject-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/overflow-reject-throws.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-if-calendar-name-included.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/throws-if-calendar-name-included.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-if-timezone-included.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/throws-if-timezone-included.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-on-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/throws-on-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-on-temporal-object-with-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/throws-on-temporal-object-with-calendar.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("throws-on-temporal-object-with-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/throws-on-temporal-object-with-time-zone.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("zoned-datetime-like-at-minimum-date-time-with-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/zoned-datetime-like-at-minimum-date-time-with-offset.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("zoned-datetime-like-at-minimum-date-time.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/with/zoned-datetime-like-at-minimum-date-time.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/branding.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/builtin.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-time-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-time-string.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/length.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("missing-argument.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/missing-argument.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/name.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withCalendar", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withCalendar/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-number.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-propertybag-optional-properties.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-propertybag-optional-properties.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-no-implicit-midnight.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-no-implicit-midnight.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-designator-required-for-disambiguation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-time-designator-required-for-disambiguation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-with-time-designator.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-with-time-designator.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-zoneddatetime-balance-negative-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-zoneddatetime-balance-negative-time-units.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("argument-zoneddatetime-negative-epochnanoseconds.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/argument-zoneddatetime-negative-epochnanoseconds.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/basic.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/branding.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/builtin.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("get-start-of-day-throws.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/get-start-of-day-throws.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("incorrectly-spelled-properties-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/incorrectly-spelled-properties-ignored.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/leap-second.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/length.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/name.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("plaintime-propertybag-no-time-units.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/plaintime-propertybag-no-time-units.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("throws-if-epoch-nanoseconds-outside-valid-limits.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/throws-if-epoch-nanoseconds-outside-valid-limits.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("time-undefined.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/time-undefined.js"));
});
});
describe("prototype", () => {
describe("withPlainTime", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withPlainTime/year-zero.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/branding.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/builtin.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("length.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/length.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("name.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/name.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("preserves-instant.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/preserves-instant.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/prop-desc.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/subclassing-ignored.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string-datetime.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string-datetime.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string-leap-second.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string-leap-second.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string-multiple-offsets.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string-multiple-offsets.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string-sub-minute-offset.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string-sub-minute-offset.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string-year-zero.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string-year-zero.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-string.js"));
});
});
describe("prototype", () => {
describe("withTimeZone", () => {
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/withTimeZone/timezone-wrong-type.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/year/basic.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/year/branding.js"));
});
});
describe("prototype", () => {
describe("year", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/year/prop-desc.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("basic.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/yearOfWeek/basic.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("branding.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/yearOfWeek/branding.js"));
});
});
describe("prototype", () => {
describe("yearOfWeek", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/ZonedDateTime/prototype/yearOfWeek/prop-desc.js"));
});
});
it("subclass.js", createTestHandler("built-ins/Temporal/ZonedDateTime/subclass.js"));
it("timezone-case-insensitive.js", createTestHandler("built-ins/Temporal/ZonedDateTime/timezone-case-insensitive.js"));
it("timezone-iso-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/timezone-iso-string.js"));
it("timezone-string.js", createTestHandler("built-ins/Temporal/ZonedDateTime/timezone-string.js"));
it("timezone-wrong-type.js", createTestHandler("built-ins/Temporal/ZonedDateTime/timezone-wrong-type.js"));
});
