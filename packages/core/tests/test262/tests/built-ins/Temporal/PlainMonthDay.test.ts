import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("PlainMonthDay", () => {
  it(
    "argument-convert.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/argument-convert.js"),
  );
  it(
    "argument-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/argument-invalid.js"),
  );
  it(
    "basic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/basic.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/builtin.js"),
  );
  it(
    "calendar-always.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-always.js"),
  );
  it(
    "calendar-case-insensitive.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-case-insensitive.js"),
  );
  it(
    "calendar-invalid-iso-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-invalid-iso-string.js"),
  );
  it(
    "calendar-invalid.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-invalid.js"),
  );
  it(
    "calendar-string.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-string.js"),
  );
  it(
    "calendar-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-undefined.js"),
  );
  it(
    "calendar-wrong-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/calendar-wrong-type.js"),
  );
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/constructor.js"),
  );
  describe("from", () => {
    it(
      "argument-number.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-number.js"),
    );
    it(
      "argument-plainmonthday.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-plainmonthday.js"),
    );
    it(
      "argument-propertybag-calendar-case-insensitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-case-insensitive.js",
      ),
    );
    it(
      "argument-propertybag-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-iso-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-leap-second.js",
      ),
    );
    it(
      "argument-propertybag-calendar-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-string.js",
      ),
    );
    it(
      "argument-propertybag-calendar-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-wrong-type.js",
      ),
    );
    it(
      "argument-propertybag-calendar-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-propertybag-calendar-year-zero.js",
      ),
    );
    it(
      "argument-string-calendar-annotation-invalid-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-annotation-invalid-key.js",
      ),
    );
    it(
      "argument-string-calendar-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-annotation.js",
      ),
    );
    it(
      "argument-string-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "argument-string-critical-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-critical-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-date-with-utc-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-date-with-utc-offset.js",
      ),
    );
    it(
      "argument-string-minus-sign.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-minus-sign.js"),
    );
    it(
      "argument-string-multiple-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-multiple-calendar.js",
      ),
    );
    it(
      "argument-string-multiple-time-zone.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-multiple-time-zone.js",
      ),
    );
    it(
      "argument-string-time-separators.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-string-time-separators.js"),
    );
    it(
      "argument-string-time-zone-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-time-zone-annotation.js",
      ),
    );
    it(
      "argument-string-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-with-utc-designator.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/argument-string-with-utc-designator.js",
      ),
    );
    it(
      "argument-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/argument-wrong-type.js"),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/basic.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/builtin.js"),
    );
    it(
      "calendar-temporal-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/calendar-temporal-object.js"),
    );
    it(
      "calendarresolvefields-error-ordering.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/calendarresolvefields-error-ordering.js",
      ),
    );
    it(
      "constrain-to-leap-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/constrain-to-leap-day.js"),
    );
    it(
      "fields-leap-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-leap-day.js"),
    );
    it(
      "fields-missing-properties.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-missing-properties.js"),
    );
    it(
      "fields-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-object.js"),
    );
    it(
      "fields-plainmonthday.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-plainmonthday.js"),
    );
    it(
      "fields-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/fields-string.js"),
    );
    it(
      "infinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/infinity-throws-rangeerror.js"),
    );
    it(
      "leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/leap-second.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/length.js"),
    );
    it(
      "monthcode-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/monthcode-invalid.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/name.js"),
    );
    it(
      "negative-month-or-day.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/negative-month-or-day.js"),
    );
    it(
      "no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/no-fractional-minutes-hours.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/not-a-constructor.js"),
    );
    it(
      "observable-get-overflow-argument-primitive.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/observable-get-overflow-argument-primitive.js",
      ),
    );
    it(
      "observable-get-overflow-argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/observable-get-overflow-argument-string-invalid.js",
      ),
    );
    it(
      "one-of-era-erayear-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/one-of-era-erayear-undefined.js"),
    );
    it(
      "options-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-invalid.js"),
    );
    it(
      "options-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-object.js"),
    );
    it(
      "options-read-before-algorithmic-validation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/PlainMonthDay/from/options-read-before-algorithmic-validation.js",
      ),
    );
    it(
      "options-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-undefined.js"),
    );
    it(
      "options-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/options-wrong-type.js"),
    );
    it(
      "order-of-operations.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/order-of-operations.js"),
    );
    it(
      "overflow-invalid-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-invalid-string.js"),
    );
    it(
      "overflow-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-undefined.js"),
    );
    it(
      "overflow-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow-wrong-type.js"),
    );
    it(
      "overflow.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/overflow.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/prop-desc.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/subclassing-ignored.js"),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/from/year-zero.js"),
    );
  });
  it(
    "get-prototype-from-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/get-prototype-from-constructor-throws.js"),
  );
  it(
    "infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/infinity-throws-rangeerror.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/length.js"),
  );
  it(
    "missing-arguments.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/missing-arguments.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/name.js"),
  );
  it(
    "negative-infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/negative-infinity-throws-rangeerror.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/prop-desc.js"),
  );
  describe("prototype", () => {
    describe("calendarId", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/calendarId/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/calendarId/prop-desc.js"),
      );
    });
    it(
      "constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/constructor.js"),
    );
    describe("day", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/day/prop-desc.js"),
      );
    });
    describe("equals", () => {
      it(
        "argument-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-number.js"),
      );
      it(
        "argument-propertybag-calendar-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-case-insensitive.js",
        ),
      );
      it(
        "argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-iso-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-leap-second.js",
        ),
      );
      it(
        "argument-propertybag-calendar-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-string.js",
        ),
      );
      it(
        "argument-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "argument-propertybag-calendar-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-propertybag-calendar-year-zero.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-invalid.js",
        ),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-with-utc-designator.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string-with-utc-designator.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/argument-string.js"),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/argument-wrong-type.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/builtin.js"),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/calendar-temporal-object.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/equals/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/prop-desc.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/equals/year-zero.js"),
      );
    });
    describe("month", () => {
      it(
        "unsupported.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/month/unsupported.js"),
      );
    });
    describe("monthCode", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/monthCode/prop-desc.js"),
      );
    });
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/prop-desc.js"),
    );
    describe("toJSON", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toJSON/prop-desc.js"),
      );
    });
    describe("toLocaleString", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/prop-desc.js"),
      );
      it(
        "return-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toLocaleString/return-string.js",
        ),
      );
    });
    describe("toPlainDate", () => {
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/argument-not-object.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/builtin.js"),
      );
      it(
        "default-overflow-behaviour.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/default-overflow-behaviour.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/length.js"),
      );
      it(
        "limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/limits.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/not-a-constructor.js",
        ),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/order-of-operations.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toPlainDate/prop-desc.js"),
      );
    });
    describe("toString", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/builtin.js"),
      );
      it(
        "calendarname-always.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-always.js",
        ),
      );
      it(
        "calendarname-auto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-auto.js",
        ),
      );
      it(
        "calendarname-critical.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-critical.js",
        ),
      );
      it(
        "calendarname-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-invalid-string.js",
        ),
      );
      it(
        "calendarname-never.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-never.js",
        ),
      );
      it(
        "calendarname-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-undefined.js",
        ),
      );
      it(
        "calendarname-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/calendarname-wrong-type.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/not-a-constructor.js",
        ),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/options-object.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/options-wrong-type.js",
        ),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/toString/order-of-operations.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toString/prop-desc.js"),
      );
    });
    describe("toStringTag", () => {
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/toStringTag/prop-desc.js"),
      );
    });
    describe("valueOf", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/valueOf/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/valueOf/prop-desc.js"),
      );
    });
    describe("with", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/builtin.js"),
      );
      it(
        "copy-properties-not-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/with/copy-properties-not-undefined.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/with/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/length.js"),
      );
      it(
        "monthdaylike-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/with/monthdaylike-invalid.js",
        ),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/not-a-constructor.js"),
      );
      it(
        "options-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-invalid.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/with/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/order-of-operations.js"),
      );
      it(
        "overflow-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/PlainMonthDay/prototype/with/overflow-invalid-string.js",
        ),
      );
      it(
        "overflow-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/overflow-undefined.js"),
      );
      it(
        "overflow-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/overflow-wrong-type.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/PlainMonthDay/prototype/with/subclassing-ignored.js"),
      );
    });
  });
  it(
    "refisoyear-out-of-range.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/refisoyear-out-of-range.js"),
  );
  it(
    "refisoyear-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/refisoyear-undefined.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/PlainMonthDay/subclass.js"),
  );
});
