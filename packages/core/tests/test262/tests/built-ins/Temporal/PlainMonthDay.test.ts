import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PlainMonthDay", () => {
it("argument-convert.js", createTestHandler("built-ins/Temporal/PlainMonthDay/argument-convert.js"));
it("argument-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/argument-invalid.js"));
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/basic.js"));
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/builtin.js"));
it("calendar-always.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-always.js"));
it("calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-case-insensitive.js"));
it("calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-invalid-iso-string.js"));
it("calendar-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-invalid.js"));
it("calendar-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-string.js"));
it("calendar-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-undefined.js"));
it("calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-wrong-type.js"));
it("constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/constructor.js"));
describe("from", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-number.js"));
});
describe("from", () => {
it("argument-plainmonthday.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-plainmonthday.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-case-insensitive.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-iso-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-leap-second.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-string.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-wrong-type.js"));
});
describe("from", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-year-zero.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-annotation-invalid-key.js"));
});
describe("from", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-annotation.js"));
});
describe("from", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-invalid-iso-string.js"));
});
describe("from", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-critical-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-date-with-utc-offset.js"));
});
describe("from", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-minus-sign.js"));
});
describe("from", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-multiple-calendar.js"));
});
describe("from", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-multiple-time-zone.js"));
});
describe("from", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-time-separators.js"));
});
describe("from", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-time-zone-annotation.js"));
});
describe("from", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-unknown-annotation.js"));
});
describe("from", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-with-utc-designator.js"));
});
describe("from", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-wrong-type.js"));
});
describe("from", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/basic.js"));
});
describe("from", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/builtin.js"));
});
describe("from", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/calendar-temporal-object.js"));
});
describe("from", () => {
it("calendarresolvefields-error-ordering.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/calendarresolvefields-error-ordering.js"));
});
describe("from", () => {
it("constrain-to-leap-day.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/constrain-to-leap-day.js"));
});
describe("from", () => {
it("fields-leap-day.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-leap-day.js"));
});
describe("from", () => {
it("fields-missing-properties.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-missing-properties.js"));
});
describe("from", () => {
it("fields-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-object.js"));
});
describe("from", () => {
it("fields-plainmonthday.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-plainmonthday.js"));
});
describe("from", () => {
it("fields-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-string.js"));
});
describe("from", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/infinity-throws-rangeerror.js"));
});
describe("from", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/leap-second.js"));
});
describe("from", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/length.js"));
});
describe("from", () => {
it("monthcode-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/monthcode-invalid.js"));
});
describe("from", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/name.js"));
});
describe("from", () => {
it("negative-month-or-day.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/negative-month-or-day.js"));
});
describe("from", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/no-fractional-minutes-hours.js"));
});
describe("from", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/not-a-constructor.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-primitive.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/observable-get-overflow-argument-primitive.js"));
});
describe("from", () => {
it("observable-get-overflow-argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/observable-get-overflow-argument-string-invalid.js"));
});
describe("from", () => {
it("one-of-era-erayear-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/one-of-era-erayear-undefined.js"));
});
describe("from", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-invalid.js"));
});
describe("from", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-object.js"));
});
describe("from", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-read-before-algorithmic-validation.js"));
});
describe("from", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-undefined.js"));
});
describe("from", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-wrong-type.js"));
});
describe("from", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/order-of-operations.js"));
});
describe("from", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-invalid-string.js"));
});
describe("from", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-undefined.js"));
});
describe("from", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-wrong-type.js"));
});
describe("from", () => {
it("overflow.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow.js"));
});
describe("from", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/prop-desc.js"));
});
describe("from", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/subclassing-ignored.js"));
});
describe("from", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainMonthDay/from/year-zero.js"));
});
it("get-prototype-from-constructor-throws.js", createTestHandler("built-ins/Temporal/PlainMonthDay/get-prototype-from-constructor-throws.js"));
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/infinity-throws-rangeerror.js"));
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/length.js"));
it("missing-arguments.js", createTestHandler("built-ins/Temporal/PlainMonthDay/missing-arguments.js"));
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/name.js"));
it("negative-infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/negative-infinity-throws-rangeerror.js"));
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prop-desc.js"));
describe("prototype", () => {
describe("calendarId", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/calendarId/branding.js"));
});
});
describe("prototype", () => {
describe("calendarId", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/calendarId/prop-desc.js"));
});
});
describe("prototype", () => {
it("constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/constructor.js"));
});
describe("prototype", () => {
describe("day", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/basic.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/branding.js"));
});
});
describe("prototype", () => {
describe("day", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-number.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-number.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-case-insensitive.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-case-insensitive.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-leap-second.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-propertybag-calendar-year-zero.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-year-zero.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation-invalid-key.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-annotation-invalid-key.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-calendar-invalid-iso-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-invalid-iso-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-critical-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-critical-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-date-with-utc-offset.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-date-with-utc-offset.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-invalid.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-minus-sign.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-minus-sign.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-calendar.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-multiple-calendar.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-multiple-time-zone.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-multiple-time-zone.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-separators.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-time-separators.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-time-zone-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-time-zone-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-unknown-annotation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-unknown-annotation.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string-with-utc-designator.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-with-utc-designator.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("argument-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-wrong-type.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/basic.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/branding.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/builtin.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("calendar-temporal-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/calendar-temporal-object.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("leap-second.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/leap-second.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/length.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/name.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("no-fractional-minutes-hours.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/no-fractional-minutes-hours.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/prop-desc.js"));
});
});
describe("prototype", () => {
describe("equals", () => {
it("year-zero.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/year-zero.js"));
});
});
describe("prototype", () => {
describe("month", () => {
it("unsupported.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/month/unsupported.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/basic.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/branding.js"));
});
});
describe("prototype", () => {
describe("monthCode", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/prop-desc.js"));
});
});
describe("prototype", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/prop-desc.js"));
});
describe("prototype", () => {
describe("toJSON", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/basic.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/branding.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/builtin.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/length.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/name.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toJSON", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/branding.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/builtin.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/length.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/name.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toLocaleString", () => {
it("return-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/return-string.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("argument-not-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/argument-not-object.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/basic.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/branding.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/builtin.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("default-overflow-behaviour.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/default-overflow-behaviour.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/length.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("limits.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/limits.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/name.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toPlainDate", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/branding.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/builtin.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-always.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-always.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-auto.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-auto.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-critical.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-critical.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-invalid-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-invalid-string.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-never.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-never.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-undefined.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("calendarname-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/length.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/name.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/options-object.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/prop-desc.js"));
});
});
describe("prototype", () => {
describe("toStringTag", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toStringTag/prop-desc.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/basic.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/branding.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/builtin.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/length.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/name.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("valueOf", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("basic.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/basic.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("branding.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/branding.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("builtin.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/builtin.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("copy-properties-not-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/copy-properties-not-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("infinity-throws-rangeerror.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/infinity-throws-rangeerror.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("length.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/length.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("monthdaylike-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/monthdaylike-invalid.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("name.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/name.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/not-a-constructor.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-invalid.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-invalid.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-object.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-object.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-read-before-algorithmic-validation.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-read-before-algorithmic-validation.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("options-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("order-of-operations.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/order-of-operations.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-invalid-string.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/overflow-invalid-string.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/overflow-undefined.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("overflow-wrong-type.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/overflow-wrong-type.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("prop-desc.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/prop-desc.js"));
});
});
describe("prototype", () => {
describe("with", () => {
it("subclassing-ignored.js", createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/subclassing-ignored.js"));
});
});
it("refisoyear-out-of-range.js", createTestHandler("built-ins/Temporal/PlainMonthDay/refisoyear-out-of-range.js"));
it("refisoyear-undefined.js", createTestHandler("built-ins/Temporal/PlainMonthDay/refisoyear-undefined.js"));
it("subclass.js", createTestHandler("built-ins/Temporal/PlainMonthDay/subclass.js"));
});
