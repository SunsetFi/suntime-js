import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PlainDate", () => {
  it(
    "argument-convert.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/argument-convert.js"),
  );
  it(
    "argument-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/argument-invalid.js"),
  );
  it(
    "basic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/basic.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/builtin.js"),
  );
  it(
    "calendar-case-insensitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/calendar-case-insensitive.js"),
  );
  it(
    "calendar-invalid-iso-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/calendar-invalid-iso-string.js"),
  );
  it(
    "calendar-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/calendar-string.js"),
  );
  it(
    "calendar-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/calendar-undefined.js"),
  );
  it(
    "calendar-wrong-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/calendar-wrong-type.js"),
  );
  describe("compare", () => {
    it(
      "argument-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-number.js"),
    );
    it(
      "argument-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-object.js"),
    );
    it(
      "argument-plaindatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-plaindatetime.js"),
    );
    it(
      "argument-propertybag-calendar-case-insensitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-case-insensitive.js",
      ),
    );
    it(
      "argument-propertybag-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-leap-second.js",
      ),
    );
    it(
      "argument-propertybag-calendar-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-wrong-type.js",
      ),
    );
    it(
      "argument-propertybag-calendar-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-propertybag-calendar-year-zero.js",
      ),
    );
    it(
      "argument-string-calendar-annotation-invalid-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-calendar-annotation-invalid-key.js",
      ),
    );
    it(
      "argument-string-calendar-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-calendar-annotation.js",
      ),
    );
    it(
      "argument-string-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-string-critical-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-critical-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-date-with-utc-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-date-with-utc-offset.js",
      ),
    );
    it(
      "argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-invalid.js"),
    );
    it(
      "argument-string-limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-limits.js"),
    );
    it(
      "argument-string-minus-sign.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-minus-sign.js"),
    );
    it(
      "argument-string-multiple-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-multiple-calendar.js",
      ),
    );
    it(
      "argument-string-multiple-time-zone.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-multiple-time-zone.js",
      ),
    );
    it(
      "argument-string-time-separators.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string-time-separators.js"),
    );
    it(
      "argument-string-time-zone-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-time-zone-annotation.js",
      ),
    );
    it(
      "argument-string-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-with-utc-designator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/compare/argument-string-with-utc-designator.js",
      ),
    );
    it(
      "argument-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-string.js"),
    );
    it(
      "argument-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-wrong-type.js"),
    );
    it(
      "argument-zoneddatetime-slots.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-zoneddatetime-slots.js"),
    );
    it(
      "argument-zoneddatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/argument-zoneddatetime.js"),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/basic.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/builtin.js"),
    );
    it(
      "calendar-temporal-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/calendar-temporal-object.js"),
    );
    it(
      "infinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/infinity-throws-rangeerror.js"),
    );
    it(
      "leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/leap-second.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/name.js"),
    );
    it(
      "no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/no-fractional-minutes-hours.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/not-a-constructor.js"),
    );
    it(
      "not-same-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/not-same-object.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/prop-desc.js"),
    );
    it(
      "use-internal-slots.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/use-internal-slots.js"),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/compare/year-zero.js"),
    );
  });
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/constructor.js"),
  );
  describe("from", () => {
    it(
      "argument-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-leap-second.js"),
    );
    it(
      "argument-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-number.js"),
    );
    it(
      "argument-object-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-object-invalid.js"),
    );
    it(
      "argument-object-valid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-object-valid.js"),
    );
    it(
      "argument-plaindate.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-plaindate.js"),
    );
    it(
      "argument-plaindatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-plaindatetime.js"),
    );
    it(
      "argument-propertybag-calendar-case-insensitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-case-insensitive.js",
      ),
    );
    it(
      "argument-propertybag-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-leap-second.js",
      ),
    );
    it(
      "argument-propertybag-calendar-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-wrong-type.js",
      ),
    );
    it(
      "argument-propertybag-calendar-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-propertybag-calendar-year-zero.js",
      ),
    );
    it(
      "argument-propertybag-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-propertybag-calendar.js"),
    );
    it(
      "argument-string-calendar-annotation-invalid-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-string-calendar-annotation-invalid-key.js",
      ),
    );
    it(
      "argument-string-calendar-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-calendar-annotation.js"),
    );
    it(
      "argument-string-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-string-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-string-critical-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-string-critical-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-date-with-utc-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-string-date-with-utc-offset.js",
      ),
    );
    it(
      "argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-invalid.js"),
    );
    it(
      "argument-string-limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-limits.js"),
    );
    it(
      "argument-string-minus-sign.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-minus-sign.js"),
    );
    it(
      "argument-string-multiple-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-multiple-calendar.js"),
    );
    it(
      "argument-string-multiple-time-zone.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-multiple-time-zone.js"),
    );
    it(
      "argument-string-time-separators.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-time-separators.js"),
    );
    it(
      "argument-string-time-zone-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/argument-string-time-zone-annotation.js",
      ),
    );
    it(
      "argument-string-trailing-junk.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-trailing-junk.js"),
    );
    it(
      "argument-string-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-unknown-annotation.js"),
    );
    it(
      "argument-string-with-utc-designator.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string-with-utc-designator.js"),
    );
    it(
      "argument-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-string.js"),
    );
    it(
      "argument-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-wrong-type.js"),
    );
    it(
      "argument-zoneddatetime-slots.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-zoneddatetime-slots.js"),
    );
    it(
      "argument-zoneddatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/argument-zoneddatetime.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/builtin.js"),
    );
    it(
      "calendar-temporal-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/calendar-temporal-object.js"),
    );
    it(
      "calendarresolvefields-error-ordering.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/calendarresolvefields-error-ordering.js",
      ),
    );
    it(
      "infinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/infinity-throws-rangeerror.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/length.js"),
    );
    it(
      "limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/limits.js"),
    );
    it(
      "month-code-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/month-code-wrong-type.js"),
    );
    it(
      "monthcode-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/monthcode-invalid.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/name.js"),
    );
    it(
      "negative-month-or-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/negative-month-or-day.js"),
    );
    it(
      "no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/no-fractional-minutes-hours.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/not-a-constructor.js"),
    );
    it(
      "observable-get-overflow-argument-primitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/observable-get-overflow-argument-primitive.js",
      ),
    );
    it(
      "observable-get-overflow-argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/observable-get-overflow-argument-string-invalid.js",
      ),
    );
    it(
      "one-of-era-erayear-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/one-of-era-erayear-undefined.js"),
    );
    it(
      "options-basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/options-basic.js"),
    );
    it(
      "options-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/options-object.js"),
    );
    it(
      "options-read-before-algorithmic-validation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/options-read-before-algorithmic-validation.js",
      ),
    );
    it(
      "options-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/options-undefined.js"),
    );
    it(
      "options-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/options-wrong-type.js"),
    );
    it(
      "order-of-operations.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/order-of-operations.js"),
    );
    it(
      "out-of-range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/out-of-range.js"),
    );
    it(
      "overflow-invalid-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/overflow-invalid-string.js"),
    );
    it(
      "overflow-reject.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/overflow-reject.js"),
    );
    it(
      "overflow-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/overflow-undefined.js"),
    );
    it(
      "overflow-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/overflow-wrong-type.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/prop-desc.js"),
    );
    it(
      "roundtrip-from-iso.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-iso.js"),
    );
    it(
      "roundtrip-from-property-bag.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-property-bag.js"),
    );
    it(
      "roundtrip-from-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/roundtrip-from-string.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/subclassing-ignored.js"),
    );
    it(
      "with-year-month-day-need-constrain.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/with-year-month-day-need-constrain.js"),
    );
    it(
      "with-year-month-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/with-year-month-day.js"),
    );
    it(
      "with-year-monthCode-day-need-constrain.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainDate/from/with-year-monthCode-day-need-constrain.js",
      ),
    );
    it(
      "with-year-monthCode-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/with-year-monthCode-day.js"),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/from/year-zero.js"),
    );
  });
  it(
    "get-prototype-from-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/get-prototype-from-constructor-throws.js"),
  );
  it(
    "infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/infinity-throws-rangeerror.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/length.js"),
  );
  it(
    "limits.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/limits.js"),
  );
  it(
    "missing-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/missing-arguments.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/name.js"),
  );
  it(
    "negative-infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/negative-infinity-throws-rangeerror.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/prop-desc.js"),
  );
  describe("prototype", () => {
    describe("add", () => {
      it(
        "argument-duration-max-plus-min-date.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-duration-max-plus-min-date.js",
        ),
      );
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-duration-max.js"),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-invalid-property.js",
        ),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-string-invalid.js"),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/argument-string.js"),
      );
      it(
        "balance-smaller-units-basic.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/balance-smaller-units-basic.js",
        ),
      );
      it(
        "balance-smaller-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/balance-smaller-units.js"),
      );
      it(
        "basic-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/basic-arithmetic.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/builtin.js"),
      );
      it(
        "constrain-days.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/constrain-days.js"),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "leap-year-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/leap-year-arithmetic.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/length.js"),
      );
      it(
        "limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/limits.js"),
      );
      it(
        "month-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/month-boundary.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/name.js"),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/order-of-operations.js"),
      );
      it(
        "overflow-adding-months-to-max-year.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/add/overflow-adding-months-to-max-year.js",
        ),
      );
      it(
        "overflow-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-invalid-string.js"),
      );
      it(
        "overflow-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-undefined.js"),
      );
      it(
        "overflow-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/overflow-wrong-type.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/add/subclassing-ignored.js"),
      );
    });
    describe("calendarId", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/calendarId/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/calendarId/prop-desc.js"),
      );
    });
    it(
      "constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/prototype/constructor.js"),
    );
    describe("day", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/day/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/day/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/day/prop-desc.js"),
      );
    });
    describe("dayOfWeek", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfWeek/prop-desc.js"),
      );
    });
    describe("dayOfYear", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/dayOfYear/prop-desc.js"),
      );
    });
    describe("daysInMonth", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInMonth/prop-desc.js"),
      );
    });
    describe("daysInWeek", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInWeek/prop-desc.js"),
      );
    });
    describe("daysInYear", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/daysInYear/prop-desc.js"),
      );
    });
    describe("equals", () => {
      it(
        "argument-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-leap-second.js"),
      );
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-number.js"),
      );
      it(
        "argument-object-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-object-invalid.js",
        ),
      );
      it(
        "argument-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-plaindatetime.js",
        ),
      );
      it(
        "argument-propertybag-calendar-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-case-insensitive.js",
        ),
      );
      it(
        "argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-leap-second.js",
        ),
      );
      it(
        "argument-propertybag-calendar-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "argument-propertybag-calendar-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-propertybag-calendar-year-zero.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-invalid.js",
        ),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-limits.js",
        ),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-string.js"),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime-slots.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/argument-zoneddatetime-slots.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/builtin.js"),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/calendar-temporal-object.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/equals/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/prop-desc.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/equals/year-zero.js"),
      );
    });
    describe("era", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/era/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/era/prop-desc.js"),
      );
    });
    describe("eraYear", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/eraYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/eraYear/prop-desc.js"),
      );
    });
    describe("inLeapYear", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/inLeapYear/prop-desc.js"),
      );
    });
    describe("month", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/month/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/month/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/month/prop-desc.js"),
      );
    });
    describe("monthCode", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/branding.js"),
      );
      it(
        "no-leap-months.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/no-leap-months.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthCode/prop-desc.js"),
      );
    });
    describe("monthsInYear", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/monthsInYear/prop-desc.js"),
      );
    });
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainDate/prototype/prop-desc.js"),
    );
    describe("since", () => {
      it(
        "argument-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-leap-second.js"),
      );
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-number.js"),
      );
      it(
        "argument-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-plaindatetime.js"),
      );
      it(
        "argument-propertybag-calendar-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-case-insensitive.js",
        ),
      );
      it(
        "argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-leap-second.js",
        ),
      );
      it(
        "argument-propertybag-calendar-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "argument-propertybag-calendar-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-propertybag-calendar-year-zero.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-invalid.js",
        ),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-string-limits.js"),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime-slots.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/argument-zoneddatetime-slots.js",
        ),
      );
      it(
        "basic-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic-arithmetic.js"),
      );
      it(
        "basic-conversions.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic-conversions.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/basic.js"),
      );
      it(
        "blank-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/blank-result.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/builtin.js"),
      );
      it(
        "calendar-id-match.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/calendar-id-match.js"),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/calendar-temporal-object.js",
        ),
      );
      it(
        "days-in-month.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/days-in-month.js"),
      );
      it(
        "days-in-year.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/days-in-year.js"),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "largestunit-default.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-default.js"),
      );
      it(
        "largestunit-higher-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/largestunit-higher-units.js",
        ),
      );
      it(
        "largestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/largestunit-invalid-string.js",
        ),
      );
      it(
        "largestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/largestunit-plurals-accepted.js",
        ),
      );
      it(
        "largestunit-smallestunit-mismatch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/largestunit-smallestunit-mismatch.js",
        ),
      );
      it(
        "largestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-undefined.js"),
      );
      it(
        "largestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit-wrong-type.js"),
      );
      it(
        "largestunit.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/largestunit.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/prop-desc.js"),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/round-cross-unit-boundary.js",
        ),
      );
      it(
        "rounding-relative.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/rounding-relative.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingincrement.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingincrement.js"),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfExpand.js",
        ),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/roundingmode-wrong-type.js",
        ),
      );
      it(
        "smallestunit-higher-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/smallestunit-higher-units.js",
        ),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/smallestunit-undefined.js"),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/smallestunit-wrong-type.js",
        ),
      );
      it(
        "throws-if-rounded-date-outside-valid-iso-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/since/throws-if-rounded-date-outside-valid-iso-range.js",
        ),
      );
      it(
        "throws-with-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/throws-with-time-units.js"),
      );
      it(
        "weeks-months.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/weeks-months.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/since/year-zero.js"),
      );
    });
    describe("subtract", () => {
      it(
        "argument-duration-max-plus-min-date.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-max-plus-min-date.js",
        ),
      );
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-max.js",
        ),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-invalid-property.js",
        ),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/argument-string.js"),
      );
      it(
        "balance-smaller-units-basic.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/balance-smaller-units-basic.js",
        ),
      );
      it(
        "balance-smaller-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/balance-smaller-units.js",
        ),
      );
      it(
        "basic-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/basic-arithmetic.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/builtin.js"),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/length.js"),
      );
      it(
        "limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/limits.js"),
      );
      it(
        "month-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/month-boundary.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/name.js"),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/order-of-operations.js"),
      );
      it(
        "overflow-constrain.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-constrain.js"),
      );
      it(
        "overflow-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/overflow-invalid-string.js",
        ),
      );
      it(
        "overflow-reject.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-reject.js"),
      );
      it(
        "overflow-subtracting-months-from-min-year.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/subtract/overflow-subtracting-months-from-min-year.js",
        ),
      );
      it(
        "overflow-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-undefined.js"),
      );
      it(
        "overflow-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/overflow-wrong-type.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/subtract/subclassing-ignored.js"),
      );
    });
    describe("toJSON", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/prop-desc.js"),
      );
      it(
        "year-format.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toJSON/year-format.js"),
      );
    });
    describe("toLocaleString", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toLocaleString/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/prop-desc.js"),
      );
      it(
        "return-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toLocaleString/return-string.js"),
      );
    });
    describe("toPlainDateTime", () => {
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-number.js",
        ),
      );
      it(
        "argument-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-object.js",
        ),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-no-implicit-midnight.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-no-implicit-midnight.js",
        ),
      );
      it(
        "argument-string-time-designator-required-for-disambiguation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-designator-required-for-disambiguation.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-time-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-with-time-designator.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-wrong-type.js",
        ),
      );
      it(
        "argument-zoneddatetime-balance-negative-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-zoneddatetime-balance-negative-time-units.js",
        ),
      );
      it(
        "argument-zoneddatetime-negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/argument-zoneddatetime-negative-epochnanoseconds.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/builtin.js"),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/length.js"),
      );
      it(
        "limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/limits.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/not-a-constructor.js",
        ),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/order-of-operations.js",
        ),
      );
      it(
        "plaintime-propertybag-no-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/plaintime-propertybag-no-time-units.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/prop-desc.js"),
      );
      it(
        "time-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/time-invalid.js"),
      );
      it(
        "time-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainDateTime/time-undefined.js",
        ),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainDateTime/year-zero.js"),
      );
    });
    describe("toPlainMonthDay", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainMonthDay/prop-desc.js"),
      );
    });
    describe("toPlainYearMonth", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/length.js"),
      );
      it(
        "limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/limits.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toPlainYearMonth/prop-desc.js"),
      );
    });
    describe("toString", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/builtin.js"),
      );
      it(
        "calendarname-always.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-always.js"),
      );
      it(
        "calendarname-auto.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-auto.js"),
      );
      it(
        "calendarname-critical.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toString/calendarname-critical.js",
        ),
      );
      it(
        "calendarname-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toString/calendarname-invalid-string.js",
        ),
      );
      it(
        "calendarname-never.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/calendarname-never.js"),
      );
      it(
        "calendarname-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toString/calendarname-undefined.js",
        ),
      );
      it(
        "calendarname-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toString/calendarname-wrong-type.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/options-object.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/prop-desc.js"),
      );
      it(
        "year-format.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toString/year-format.js"),
      );
    });
    describe("toStringTag", () => {
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toStringTag/prop-desc.js"),
      );
    });
    describe("toZonedDateTime", () => {
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-number.js",
        ),
      );
      it(
        "argument-object-get-plainTime-throws.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-get-plainTime-throws.js",
        ),
      );
      it(
        "argument-object-get-timezone-throws.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-get-timezone-throws.js",
        ),
      );
      it(
        "argument-object-timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-object-timezone-wrong-type.js",
        ),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-no-implicit-midnight.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-no-implicit-midnight.js",
        ),
      );
      it(
        "argument-string-time-designator-required-for-disambiguation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-designator-required-for-disambiguation.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-time-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-with-time-designator.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-wrong-type.js",
        ),
      );
      it(
        "argument-zoneddatetime-negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/argument-zoneddatetime-negative-epochnanoseconds.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/builtin.js"),
      );
      it(
        "get-epoch-nanoseconds-for-throws.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/get-epoch-nanoseconds-for-throws.js",
        ),
      );
      it(
        "get-start-of-day-throws.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/get-start-of-day-throws.js",
        ),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/name.js"),
      );
      it(
        "no-observable-array-iteration.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/no-observable-array-iteration.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/not-a-constructor.js",
        ),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/order-of-operations.js",
        ),
      );
      it(
        "plaintime-argument-zoneddatetime-balance-negative-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/plaintime-argument-zoneddatetime-balance-negative-time-units.js",
        ),
      );
      it(
        "plaintime-propertybag-no-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/plaintime-propertybag-no-time-units.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/prop-desc.js"),
      );
      it(
        "throws-if-combined-date-time-outside-valid-iso-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/throws-if-combined-date-time-outside-valid-iso-range.js",
        ),
      );
      it(
        "timezone-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-case-insensitive.js",
        ),
      );
      it(
        "timezone-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-datetime.js",
        ),
      );
      it(
        "timezone-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-leap-second.js",
        ),
      );
      it(
        "timezone-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-multiple-offsets.js",
        ),
      );
      it(
        "timezone-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-sub-minute-offset.js",
        ),
      );
      it(
        "timezone-string-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string-year-zero.js",
        ),
      );
      it(
        "timezone-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-string.js",
        ),
      );
      it(
        "timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/toZonedDateTime/timezone-wrong-type.js",
        ),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/toZonedDateTime/year-zero.js"),
      );
    });
    describe("until", () => {
      it(
        "argument-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-leap-second.js"),
      );
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-number.js"),
      );
      it(
        "argument-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-plaindatetime.js"),
      );
      it(
        "argument-propertybag-calendar-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-case-insensitive.js",
        ),
      );
      it(
        "argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-leap-second.js",
        ),
      );
      it(
        "argument-propertybag-calendar-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "argument-propertybag-calendar-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-propertybag-calendar-year-zero.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-invalid.js",
        ),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-string-limits.js"),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime-slots.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/argument-zoneddatetime-slots.js",
        ),
      );
      it(
        "basic-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic-arithmetic.js"),
      );
      it(
        "basic-conversions.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic-conversions.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/basic.js"),
      );
      it(
        "blank-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/blank-result.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/builtin.js"),
      );
      it(
        "calendar-id-match.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/calendar-id-match.js"),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/calendar-temporal-object.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "largestunit-default.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-default.js"),
      );
      it(
        "largestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/largestunit-invalid-string.js",
        ),
      );
      it(
        "largestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/largestunit-plurals-accepted.js",
        ),
      );
      it(
        "largestunit-smallestunit-mismatch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/largestunit-smallestunit-mismatch.js",
        ),
      );
      it(
        "largestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-undefined.js"),
      );
      it(
        "largestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/largestunit-wrong-type.js"),
      );
      it(
        "leap-year-arithmetic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/leap-year-arithmetic.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "no-options.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/no-options.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/prop-desc.js"),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/round-cross-unit-boundary.js",
        ),
      );
      it(
        "rounding-relative.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/rounding-relative.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingincrement.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingincrement.js"),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfExpand.js",
        ),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/roundingmode-wrong-type.js",
        ),
      );
      it(
        "smallestunit-higher-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/smallestunit-higher-units.js",
        ),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/smallestunit-undefined.js"),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/smallestunit-wrong-type.js",
        ),
      );
      it(
        "throws-if-rounded-date-outside-valid-iso-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/throws-if-rounded-date-outside-valid-iso-range.js",
        ),
      );
      it(
        "throws-with-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/throws-with-time-units.js"),
      );
      it(
        "weeks-months.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/weeks-months.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/until/year-zero.js"),
      );
      it(
        "zero-length-duration-result.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/until/zero-length-duration-result.js",
        ),
      );
    });
    describe("valueOf", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/valueOf/prop-desc.js"),
      );
    });
    describe("weekOfYear", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/weekOfYear/prop-desc.js"),
      );
    });
    describe("with", () => {
      it(
        "basic-year-month-day.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/basic-year-month-day.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/builtin.js"),
      );
      it(
        "constrain-day.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/constrain-day.js"),
      );
      it(
        "constrain-days.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/constrain-days.js"),
      );
      it(
        "copy-properties-not-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/with/copy-properties-not-undefined.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/with/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "leap-year.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/leap-year.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/with/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/order-of-operations.js"),
      );
      it(
        "overflow-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-invalid-string.js"),
      );
      it(
        "overflow-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-undefined.js"),
      );
      it(
        "overflow-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow-wrong-type.js"),
      );
      it(
        "overflow.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/overflow.js"),
      );
      it(
        "plaindatelike-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/plaindatelike-invalid.js"),
      );
      it(
        "plural-units-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/plural-units-ignored.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/subclassing-ignored.js"),
      );
      it(
        "time-units-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/with/time-units-ignored.js"),
      );
    });
    describe("withCalendar", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/builtin.js"),
      );
      it(
        "calendar-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-case-insensitive.js",
        ),
      );
      it(
        "calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-invalid-iso-string.js",
        ),
      );
      it(
        "calendar-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-iso-string.js",
        ),
      );
      it(
        "calendar-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-string-leap-second.js",
        ),
      );
      it(
        "calendar-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-string.js"),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-temporal-object.js",
        ),
      );
      it(
        "calendar-time-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-time-string.js",
        ),
      );
      it(
        "calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/calendar-wrong-type.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/length.js"),
      );
      it(
        "missing-argument.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/missing-argument.js",
        ),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/withCalendar/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainDate/prototype/withCalendar/subclassing-ignored.js",
        ),
      );
    });
    describe("year", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/year/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/year/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/year/prop-desc.js"),
      );
    });
    describe("yearOfWeek", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainDate/prototype/yearOfWeek/prop-desc.js"),
      );
    });
  });
  it(
    "subclass.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainDate/subclass.js"),
  );
});
