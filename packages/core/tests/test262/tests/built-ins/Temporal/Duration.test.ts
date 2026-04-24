import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Duration", () => {
  it(
    "basic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/basic.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/builtin.js"),
  );
  it(
    "call-builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/call-builtin.js"),
  );
  describe("compare", () => {
    it(
      "argument-cast.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/argument-cast.js"),
    );
    it(
      "argument-duration-max.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/argument-duration-max.js"),
    );
    it(
      "argument-duration-out-of-range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/argument-duration-out-of-range.js"),
    );
    it(
      "argument-duration-precision-exact-numerical-values.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/argument-duration-precision-exact-numerical-values.js",
      ),
    );
    it(
      "argument-propertybag-optional-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/argument-propertybag-optional-properties.js",
      ),
    );
    it(
      "argument-string-fractional-units-rounding-mode.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/argument-string-fractional-units-rounding-mode.js",
      ),
    );
    it(
      "argument-string-negative-fractional-units.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/argument-string-negative-fractional-units.js",
      ),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/basic.js"),
    );
    it(
      "blank-duration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/blank-duration.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/builtin.js"),
    );
    it(
      "calendar-possibly-required.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/calendar-possibly-required.js"),
    );
    it(
      "calendar-temporal-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/calendar-temporal-object.js"),
    );
    it(
      "compare-no-precision-loss.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/compare-no-precision-loss.js"),
    );
    it(
      "duration-out-of-range-added-to-relativeto.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/duration-out-of-range-added-to-relativeto.js",
      ),
    );
    it(
      "exhaustive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/exhaustive.js"),
    );
    it(
      "instances-identical.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/instances-identical.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/not-a-constructor.js"),
    );
    it(
      "options-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/options-object.js"),
    );
    it(
      "options-read-before-algorithmic-validation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/options-read-before-algorithmic-validation.js",
      ),
    );
    it(
      "options-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/options-undefined.js"),
    );
    it(
      "options-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/options-wrong-type.js"),
    );
    it(
      "order-of-operations.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/order-of-operations.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/prop-desc.js"),
    );
    it(
      "relativeto-argument-propertybag-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-argument-propertybag-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "relativeto-argument-string-calendar-invalid-iso-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-argument-string-calendar-invalid-iso-string.js",
      ),
    );
    it(
      "relativeto-hour.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-hour.js"),
    );
    it(
      "relativeto-month.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-month.js"),
    );
    it(
      "relativeto-no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-no-fractional-minutes-hours.js",
      ),
    );
    it(
      "relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js",
      ),
    );
    it(
      "relativeto-propertybag-infinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-infinity-throws-rangeerror.js",
      ),
    );
    it(
      "relativeto-propertybag-invalid-offset-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-invalid-offset-string.js",
      ),
    );
    it(
      "relativeto-propertybag-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-propertybag-invalid.js"),
    );
    it(
      "relativeto-propertybag-optional-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-optional-properties.js",
      ),
    );
    it(
      "relativeto-propertybag-timezone-string-datetime.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-datetime.js",
      ),
    );
    it(
      "relativeto-propertybag-timezone-string-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-leap-second.js",
      ),
    );
    it(
      "relativeto-propertybag-timezone-string-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string-year-zero.js",
      ),
    );
    it(
      "relativeto-propertybag-timezone-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-string.js",
      ),
    );
    it(
      "relativeto-propertybag-timezone-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-propertybag-timezone-wrong-type.js",
      ),
    );
    it(
      "relativeto-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-invalid.js"),
    );
    it(
      "relativeto-string-limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-limits.js"),
    );
    it(
      "relativeto-string-plaindatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-plaindatetime.js"),
    );
    it(
      "relativeto-string-zoneddatetime-wrong-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-string-zoneddatetime-wrong-offset.js",
      ),
    );
    it(
      "relativeto-string-zoneddatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-string-zoneddatetime.js"),
    );
    it(
      "relativeto-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-sub-minute-offset.js"),
    );
    it(
      "relativeto-undefined-throw-on-calendar-units.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-undefined-throw-on-calendar-units.js",
      ),
    );
    it(
      "relativeto-year.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/relativeto-year.js"),
    );
    it(
      "relativeto-zoneddatetime-negative-epochnanoseconds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/relativeto-zoneddatetime-negative-epochnanoseconds.js",
      ),
    );
    it(
      "throws-when-target-zoned-date-time-outside-valid-limits.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/compare/throws-when-target-zoned-date-time-outside-valid-limits.js",
      ),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/compare/year-zero.js"),
    );
  });
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/constructor.js"),
  );
  it(
    "days-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/days-undefined.js"),
  );
  it(
    "fractional-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/fractional-throws-rangeerror.js"),
  );
  describe("from", () => {
    it(
      "argument-duration-max.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-duration-max.js"),
    );
    it(
      "argument-duration-out-of-range.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-duration-out-of-range.js"),
    );
    it(
      "argument-duration-precision-exact-numerical-values.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/from/argument-duration-precision-exact-numerical-values.js",
      ),
    );
    it(
      "argument-duration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-duration.js"),
    );
    it(
      "argument-existing-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-existing-object.js"),
    );
    it(
      "argument-non-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-non-string.js"),
    );
    it(
      "argument-object-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-object-invalid.js"),
    );
    it(
      "argument-propertybag-optional-properties.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/from/argument-propertybag-optional-properties.js",
      ),
    );
    it(
      "argument-propertybag.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-propertybag.js"),
    );
    it(
      "argument-string-fractional-precision.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-string-fractional-precision.js"),
    );
    it(
      "argument-string-fractional-units-rounding-mode.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/from/argument-string-fractional-units-rounding-mode.js",
      ),
    );
    it(
      "argument-string-fractional-with-zero-subparts.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/from/argument-string-fractional-with-zero-subparts.js",
      ),
    );
    it(
      "argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-string-invalid.js"),
    );
    it(
      "argument-string-is-infinity.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-string-is-infinity.js"),
    );
    it(
      "argument-string-negative-fractional-units.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Duration/from/argument-string-negative-fractional-units.js",
      ),
    );
    it(
      "argument-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/argument-string.js"),
    );
    it(
      "blank-duration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/blank-duration.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/builtin.js"),
    );
    it(
      "get-property-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/get-property-throws.js"),
    );
    it(
      "infinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/infinity-throws-rangeerror.js"),
    );
    it(
      "invalid-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/invalid-type.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/length.js"),
    );
    it(
      "lower-limit.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/lower-limit.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/name.js"),
    );
    it(
      "negative-inifinity-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/negative-inifinity-throws-rangeerror.js"),
    );
    it(
      "non-integer-throws-rangeerror.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/non-integer-throws-rangeerror.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/not-a-constructor.js"),
    );
    it(
      "order-of-operations.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/order-of-operations.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/prop-desc.js"),
    );
    it(
      "string-with-skipped-units.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/string-with-skipped-units.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/from/subclassing-ignored.js"),
    );
  });
  it(
    "get-prototype-from-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/get-prototype-from-constructor-throws.js"),
  );
  it(
    "hours-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/hours-undefined.js"),
  );
  it(
    "infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/infinity-throws-rangeerror.js"),
  );
  it(
    "invalid-type.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/invalid-type.js"),
  );
  it(
    "large-number.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/large-number.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/length.js"),
  );
  it(
    "lower-limit.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/lower-limit.js"),
  );
  it(
    "max.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/max.js"),
  );
  it(
    "microseconds-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/microseconds-undefined.js"),
  );
  it(
    "milliseconds-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/milliseconds-undefined.js"),
  );
  it(
    "minutes-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/minutes-undefined.js"),
  );
  it(
    "mixed.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/mixed.js"),
  );
  it(
    "months-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/months-undefined.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/name.js"),
  );
  it(
    "nanoseconds-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/nanoseconds-undefined.js"),
  );
  it(
    "negative-infinity-throws-rangeerror.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/negative-infinity-throws-rangeerror.js"),
  );
  it(
    "out-of-range.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/out-of-range.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/prop-desc.js"),
  );
  describe("prototype", () => {
    describe("abs", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/name.js"),
      );
      it(
        "new-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/new-object.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/abs/subclassing-ignored.js"),
      );
    });
    describe("add", () => {
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-duration-max.js"),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-duration-precision-exact-numerical-values.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-duration-precision-exact-numerical-values.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-invalid-property.js"),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-fractional-units-rounding-mode.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-string-fractional-units-rounding-mode.js",
        ),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/argument-string.js"),
      );
      it(
        "balance-negative-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/balance-negative-result.js"),
      );
      it(
        "balance-negative-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/balance-negative-time-units.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/builtin.js"),
      );
      it(
        "float64-representable-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/float64-representable-integer.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/name.js"),
      );
      it(
        "nanoseconds-is-number-max-safe-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/nanoseconds-is-number-max-safe-integer.js",
        ),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "no-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/no-calendar-units.js"),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/not-a-constructor.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/order-of-operations.js"),
      );
      it(
        "precision-exact-mathematical-values.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/precision-exact-mathematical-values.js",
        ),
      );
      it(
        "precision-no-floating-point-loss.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/add/precision-no-floating-point-loss.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/prop-desc.js"),
      );
      it(
        "result-out-of-range-1.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-1.js"),
      );
      it(
        "result-out-of-range-2.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-2.js"),
      );
      it(
        "result-out-of-range-3.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/result-out-of-range-3.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/add/subclassing-ignored.js"),
      );
    });
    describe("blank", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/blank/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/blank/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/blank/prop-desc.js"),
      );
    });
    it(
      "constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/prototype/constructor.js"),
    );
    describe("days", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/days/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/days/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/days/prop-desc.js"),
      );
    });
    describe("hours", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/hours/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/hours/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/hours/prop-desc.js"),
      );
    });
    describe("microseconds", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/microseconds/prop-desc.js"),
      );
    });
    describe("milliseconds", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/milliseconds/prop-desc.js"),
      );
    });
    describe("minutes", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/minutes/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/minutes/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/minutes/prop-desc.js"),
      );
    });
    describe("months", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/months/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/months/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/months/prop-desc.js"),
      );
    });
    describe("nanoseconds", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/nanoseconds/prop-desc.js"),
      );
    });
    describe("negated", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/prop-desc.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/negated/subclassing-ignored.js"),
      );
    });
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Duration/prototype/prop-desc.js"),
    );
    describe("round", () => {
      it(
        "accepts-datetime-strings-for-relative-to.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/accepts-datetime-strings-for-relative-to.js",
        ),
      );
      it(
        "balance-negative-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/balance-negative-result.js"),
      );
      it(
        "balance-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/balance-subseconds.js"),
      );
      it(
        "balances-days-up-to-both-years-and-months.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/balances-days-up-to-both-years-and-months.js",
        ),
      );
      it(
        "balances-down-differently-depending-on-relative-to.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/balances-down-differently-depending-on-relative-to.js",
        ),
      );
      it(
        "balances-up-differently-depending-on-relative-to.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/balances-up-differently-depending-on-relative-to.js",
        ),
      );
      it(
        "balances-up-to-next-unit-after-rounding.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/balances-up-to-next-unit-after-rounding.js",
        ),
      );
      it(
        "balances-up-to-weeks.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/balances-up-to-weeks.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/branding.js"),
      );
      it(
        "bubble-time-unit.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/bubble-time-unit.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/builtin.js"),
      );
      it(
        "calendar-possibly-required.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/calendar-possibly-required.js",
        ),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/calendar-temporal-object.js",
        ),
      );
      it(
        "casts-relative-to-to-plain-date.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/casts-relative-to-to-plain-date.js",
        ),
      );
      it(
        "days-24-hours-relative-to-plain-date.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/days-24-hours-relative-to-plain-date.js",
        ),
      );
      it(
        "days-24-hours-relative-to-zoned-date-time.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/days-24-hours-relative-to-zoned-date-time.js",
        ),
      );
      it(
        "days-24-hours.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/days-24-hours.js"),
      );
      it(
        "does-not-accept-non-string-primitives-for-relative-to.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/does-not-accept-non-string-primitives-for-relative-to.js",
        ),
      );
      it(
        "does-not-balance-up-to-weeks-if-largest-unit-is-larger-than-weeks.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/does-not-balance-up-to-weeks-if-largest-unit-is-larger-than-weeks.js",
        ),
      );
      it(
        "duration-out-of-range-added-to-relativeto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/duration-out-of-range-added-to-relativeto.js",
        ),
      );
      it(
        "durations-do-not-balance-beyond-largest-unit.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/durations-do-not-balance-beyond-largest-unit.js",
        ),
      );
      it(
        "end-of-month-round-up.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/end-of-month-round-up.js"),
      );
      it(
        "february-leap-year.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/february-leap-year.js"),
      );
      it(
        "float64-representable-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/float64-representable-integer.js",
        ),
      );
      it(
        "half-expand-is-default.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/half-expand-is-default.js"),
      );
      it(
        "invalid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/invalid-increments.js"),
      );
      it(
        "largestunit-correct-rebalancing.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-correct-rebalancing.js",
        ),
      );
      it(
        "largestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-invalid-string.js",
        ),
      );
      it(
        "largestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-plurals-accepted.js",
        ),
      );
      it(
        "largestunit-smallestunit-combinations-relativeto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-combinations-relativeto.js",
        ),
      );
      it(
        "largestunit-smallestunit-combinations.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-combinations.js",
        ),
      );
      it(
        "largestunit-smallestunit-default.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-default.js",
        ),
      );
      it(
        "largestunit-smallestunit-mismatch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/largestunit-smallestunit-mismatch.js",
        ),
      );
      it(
        "largestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-undefined.js"),
      );
      it(
        "largestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/largestunit-wrong-type.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/name.js"),
      );
      it(
        "next-day-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/next-day-out-of-range.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/not-a-constructor.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/order-of-operations.js"),
      );
      it(
        "out-of-range-when-converting-from-normalized-duration.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/out-of-range-when-converting-from-normalized-duration.js",
        ),
      );
      it(
        "precision-exact-in-balance-time-duration.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/precision-exact-in-balance-time-duration.js",
        ),
      );
      it(
        "precision-exact-in-round-duration.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/precision-exact-in-round-duration.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/prop-desc.js"),
      );
      it(
        "relative-to-not-required-to-round-non-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relative-to-not-required-to-round-non-calendar-units.js",
        ),
      );
      it(
        "relative-to-required-for-rounding-durations-with-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relative-to-required-for-rounding-durations-with-calendar-units.js",
        ),
      );
      it(
        "relative-to-required-to-round-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relative-to-required-to-round-calendar-units.js",
        ),
      );
      it(
        "relativeTo-ignores-incorrect-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeTo-ignores-incorrect-properties.js",
        ),
      );
      it(
        "relativeTo-required-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeTo-required-properties.js",
        ),
      );
      it(
        "relativeto-argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "relativeto-argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "relativeto-date-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-date-limits.js"),
      );
      it(
        "relativeto-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "relativeto-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-leap-second.js"),
      );
      it(
        "relativeto-no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-no-fractional-minutes-hours.js",
        ),
      );
      it(
        "relativeto-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-number.js"),
      );
      it(
        "relativeto-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "relativeto-propertybag-invalid-offset-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-invalid-offset-string.js",
        ),
      );
      it(
        "relativeto-propertybag-no-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-no-time-units.js",
        ),
      );
      it(
        "relativeto-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-optional-properties.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-datetime.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-leap-second.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string-year-zero.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-string.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-propertybag-timezone-wrong-type.js",
        ),
      );
      it(
        "relativeto-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-datetime.js",
        ),
      );
      it(
        "relativeto-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-invalid.js",
        ),
      );
      it(
        "relativeto-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-limits.js",
        ),
      );
      it(
        "relativeto-string-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-plaindatetime.js",
        ),
      );
      it(
        "relativeto-string-zoneddatetime-wrong-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-zoneddatetime-wrong-offset.js",
        ),
      );
      it(
        "relativeto-string-zoneddatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-string-zoneddatetime.js",
        ),
      );
      it(
        "relativeto-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-sub-minute-offset.js",
        ),
      );
      it(
        "relativeto-undefined-throw-on-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-undefined-throw-on-calendar-units.js",
        ),
      );
      it(
        "relativeto-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/relativeto-wrong-type.js"),
      );
      it(
        "relativeto-zoneddatetime-negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-zoneddatetime-negative-epochnanoseconds.js",
        ),
      );
      it(
        "relativeto-zoneddatetime-slots.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/relativeto-zoneddatetime-slots.js",
        ),
      );
      it(
        "result-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/result-out-of-range.js"),
      );
      it(
        "round-and-balance-calendar-units-with-increment-disallowed.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/round-and-balance-calendar-units-with-increment-disallowed.js",
        ),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/round-cross-unit-boundary.js",
        ),
      );
      it(
        "round-negative-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/round-negative-result.js"),
      );
      it(
        "rounding-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-increments.js"),
      );
      it(
        "rounding-is-noop.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-is-noop.js"),
      );
      it(
        "rounding-relative-to-date.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/rounding-relative-to-date.js",
        ),
      );
      it(
        "rounding-window.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/rounding-window.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfExpand.js"),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundingmode-wrong-type.js"),
      );
      it(
        "roundto-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/roundto-invalid-string.js"),
      );
      it(
        "singular-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/singular-units.js"),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/smallestunit-plurals-accepted-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-string-shorthand-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/smallestunit-string-shorthand-string.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-undefined.js"),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit-wrong-type.js"),
      );
      it(
        "smallestunit.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/smallestunit.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/subclassing-ignored.js"),
      );
      it(
        "succeeds-with-largest-unit-auto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/succeeds-with-largest-unit-auto.js",
        ),
      );
      it(
        "throws-if-neither-largestUnit-nor-smallestUnit-is-given.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/throws-if-neither-largestUnit-nor-smallestUnit-is-given.js",
        ),
      );
      it(
        "throws-on-wrong-offset-for-zoned-date-time-relative-to.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/throws-on-wrong-offset-for-zoned-date-time-relative-to.js",
        ),
      );
      it(
        "total-duration-nanoseconds-too-large-with-zoned-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/round/total-duration-nanoseconds-too-large-with-zoned-datetime.js",
        ),
      );
      it(
        "valid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/valid-increments.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/year-zero.js"),
      );
      it(
        "zero-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/round/zero-duration.js"),
      );
    });
    describe("seconds", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/seconds/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/seconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/seconds/prop-desc.js"),
      );
    });
    describe("sign", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/sign/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/sign/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/sign/prop-desc.js"),
      );
    });
    describe("subtract", () => {
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-duration-max.js",
        ),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-duration-precision-exact-numerical-values.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-duration-precision-exact-numerical-values.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-invalid-property.js",
        ),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-fractional-units-rounding-mode.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-string-fractional-units-rounding-mode.js",
        ),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/argument-string.js"),
      );
      it(
        "balance-negative-result.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/balance-negative-result.js",
        ),
      );
      it(
        "balance-negative-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/balance-negative-time-units.js",
        ),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/builtin.js"),
      );
      it(
        "float64-representable-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/float64-representable-integer.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/name.js"),
      );
      it(
        "nanoseconds-is-number-max-safe-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/nanoseconds-is-number-max-safe-integer.js",
        ),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "no-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/no-calendar-units.js"),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/not-a-constructor.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/order-of-operations.js"),
      );
      it(
        "precision-exact-mathematical-values.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/precision-exact-mathematical-values.js",
        ),
      );
      it(
        "precision-no-floating-point-loss.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/precision-no-floating-point-loss.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/prop-desc.js"),
      );
      it(
        "result-out-of-range-1.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-1.js",
        ),
      );
      it(
        "result-out-of-range-2.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-2.js",
        ),
      );
      it(
        "result-out-of-range-3.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/subtract/result-out-of-range-3.js",
        ),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/subtract/subclassing-ignored.js"),
      );
    });
    describe("toJSON", () => {
      it(
        "balance-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/balance-subseconds.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/builtin.js"),
      );
      it(
        "large-with-small-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/large-with-small-units.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/length.js"),
      );
      it(
        "max-value.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/max-value.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/name.js"),
      );
      it(
        "negative-components.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/negative-components.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/not-a-constructor.js"),
      );
      it(
        "options.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/options.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toJSON/prop-desc.js"),
      );
    });
    describe("toLocaleString", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toLocaleString/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/prop-desc.js"),
      );
      it(
        "return-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toLocaleString/return-string.js"),
      );
    });
    describe("toString", () => {
      it(
        "balance-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/balance-subseconds.js"),
      );
      it(
        "balance.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/balance.js"),
      );
      it(
        "blank-duration-precision.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/blank-duration-precision.js",
        ),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/builtin.js"),
      );
      it(
        "fractionalseconddigits-auto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-auto.js",
        ),
      );
      it(
        "fractionalseconddigits-exact-number-of-digits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-exact-number-of-digits.js",
        ),
      );
      it(
        "fractionalseconddigits-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-invalid-string.js",
        ),
      );
      it(
        "fractionalseconddigits-nan.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-nan.js",
        ),
      );
      it(
        "fractionalseconddigits-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-non-integer.js",
        ),
      );
      it(
        "fractionalseconddigits-number.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-number.js",
        ),
      );
      it(
        "fractionalseconddigits-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-out-of-range.js",
        ),
      );
      it(
        "fractionalseconddigits-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-undefined.js",
        ),
      );
      it(
        "fractionalseconddigits-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/fractionalseconddigits-wrong-type.js",
        ),
      );
      it(
        "large-with-small-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/large-with-small-units.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/length.js"),
      );
      it(
        "max-value.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/max-value.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/name.js"),
      );
      it(
        "negative-components.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/negative-components.js"),
      );
      it(
        "no-precision-loss.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/no-precision-loss.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/order-of-operations.js"),
      );
      it(
        "precision.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/precision.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/prop-desc.js"),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/round-cross-unit-boundary.js",
        ),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/roundingmode-halfExpand.js",
        ),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toString/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/roundingmode-undefined.js",
        ),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/roundingmode-wrong-type.js",
        ),
      );
      it(
        "smallestunit-fractionalseconddigits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-fractionalseconddigits.js",
        ),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-undefined.js",
        ),
      );
      it(
        "smallestunit-valid-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-valid-units.js",
        ),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/smallestunit-wrong-type.js",
        ),
      );
      it(
        "throws-when-rounded-duration-is-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/throws-when-rounded-duration-is-invalid.js",
        ),
      );
      it(
        "total-of-duration-time-units-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/toString/total-of-duration-time-units-out-of-range.js",
        ),
      );
    });
    describe("toStringTag", () => {
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/toStringTag/prop-desc.js"),
      );
    });
    describe("total", () => {
      it(
        "balance-negative-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/balance-negative-result.js"),
      );
      it(
        "balance-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/balance-subseconds.js"),
      );
      it(
        "balances-days-up-to-both-years-and-months.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/balances-days-up-to-both-years-and-months.js",
        ),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/builtin.js"),
      );
      it(
        "calendar-possibly-required.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/calendar-possibly-required.js",
        ),
      );
      it(
        "calendar-temporal-object.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/calendar-temporal-object.js",
        ),
      );
      it(
        "does-not-accept-non-string-primitives-for-relativeTo.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/does-not-accept-non-string-primitives-for-relativeTo.js",
        ),
      );
      it(
        "duration-out-of-range-added-to-relativeto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/duration-out-of-range-added-to-relativeto.js",
        ),
      );
      it(
        "incorrect-properties-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/incorrect-properties-ignored.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/name.js"),
      );
      it(
        "no-dst-day-length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/no-dst-day-length.js"),
      );
      it(
        "no-precision-loss-for-small-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/no-precision-loss-for-small-units.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/not-a-constructor.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/order-of-operations.js"),
      );
      it(
        "precision-exact-mathematical-values-1.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-1.js",
        ),
      );
      it(
        "precision-exact-mathematical-values-2.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-2.js",
        ),
      );
      it(
        "precision-exact-mathematical-values-5.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-5.js",
        ),
      );
      it(
        "precision-exact-mathematical-values-6.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-6.js",
        ),
      );
      it(
        "precision-exact-mathematical-values-7.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/precision-exact-mathematical-values-7.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/prop-desc.js"),
      );
      it(
        "relativeTo-must-have-required-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeTo-must-have-required-properties.js",
        ),
      );
      it(
        "relativeto-argument-propertybag-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-argument-propertybag-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "relativeto-argument-string-calendar-invalid-iso-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-argument-string-calendar-invalid-iso-string.js",
        ),
      );
      it(
        "relativeto-date-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-date-limits.js"),
      );
      it(
        "relativeto-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "relativeto-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-leap-second.js"),
      );
      it(
        "relativeto-no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-no-fractional-minutes-hours.js",
        ),
      );
      it(
        "relativeto-number.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-number.js"),
      );
      it(
        "relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-plaindate-add24hourdaystonormalizedtimeduration-out-of-range.js",
        ),
      );
      it(
        "relativeto-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-plaindatetime.js",
        ),
      );
      it(
        "relativeto-propertybag-calendar-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-calendar-wrong-type.js",
        ),
      );
      it(
        "relativeto-propertybag-invalid-offset-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-invalid-offset-string.js",
        ),
      );
      it(
        "relativeto-propertybag-no-time-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-no-time-units.js",
        ),
      );
      it(
        "relativeto-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-optional-properties.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-datetime.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-leap-second.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string-year-zero.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-string.js",
        ),
      );
      it(
        "relativeto-propertybag-timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-propertybag-timezone-wrong-type.js",
        ),
      );
      it(
        "relativeto-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-datetime.js",
        ),
      );
      it(
        "relativeto-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-invalid.js",
        ),
      );
      it(
        "relativeto-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-limits.js",
        ),
      );
      it(
        "relativeto-string-plaindatetime-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-plaindatetime-invalid.js",
        ),
      );
      it(
        "relativeto-string-plaindatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-plaindatetime.js",
        ),
      );
      it(
        "relativeto-string-zoneddatetime-wrong-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-zoneddatetime-wrong-offset.js",
        ),
      );
      it(
        "relativeto-string-zoneddatetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-string-zoneddatetime.js",
        ),
      );
      it(
        "relativeto-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-sub-minute-offset.js",
        ),
      );
      it(
        "relativeto-undefined-throw-on-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-undefined-throw-on-calendar-units.js",
        ),
      );
      it(
        "relativeto-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/relativeto-wrong-type.js"),
      );
      it(
        "relativeto-zoneddatetime-negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-zoneddatetime-negative-epochnanoseconds.js",
        ),
      );
      it(
        "relativeto-zoneddatetime-with-fractional-days.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/relativeto-zoneddatetime-with-fractional-days.js",
        ),
      );
      it(
        "rounding-window.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/rounding-window.js"),
      );
      it(
        "rounds-calendar-units-in-durations-without-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/rounds-calendar-units-in-durations-without-calendar-units.js",
        ),
      );
      it(
        "rounds-durations-with-calendar-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/rounds-durations-with-calendar-units.js",
        ),
      );
      it(
        "throws-if-date-time-invalid-with-plaindate-relative.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-if-date-time-invalid-with-plaindate-relative.js",
        ),
      );
      it(
        "throws-if-date-time-invalid-with-zoneddatetime-relative.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-if-date-time-invalid-with-zoneddatetime-relative.js",
        ),
      );
      it(
        "throws-if-target-nanoseconds-outside-valid-limits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-if-target-nanoseconds-outside-valid-limits.js",
        ),
      );
      it(
        "throws-if-unit-property-missing.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-if-unit-property-missing.js",
        ),
      );
      it(
        "throws-on-disallowed-or-invalid-unit.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-on-disallowed-or-invalid-unit.js",
        ),
      );
      it(
        "throws-on-wrong-offset-for-zoneddatetime-relativeto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/throws-on-wrong-offset-for-zoneddatetime-relativeto.js",
        ),
      );
      it(
        "total-of-each-unit-relativeto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/total-of-each-unit-relativeto.js",
        ),
      );
      it(
        "total-of-each-unit.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/total-of-each-unit.js"),
      );
      it(
        "unit-disallowed-units-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/unit-disallowed-units-string.js",
        ),
      );
      it(
        "unit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-invalid-string.js"),
      );
      it(
        "unit-plurals-accepted-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/unit-plurals-accepted-string.js",
        ),
      );
      it(
        "unit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-plurals-accepted.js"),
      );
      it(
        "unit-string-shorthand-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/total/unit-string-shorthand-string.js",
        ),
      );
      it(
        "unit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/unit-wrong-type.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/year-zero.js"),
      );
      it(
        "zero-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/total/zero-duration.js"),
      );
    });
    describe("valueOf", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/valueOf/prop-desc.js"),
      );
    });
    describe("weeks", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/weeks/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/weeks/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/weeks/prop-desc.js"),
      );
    });
    describe("with", () => {
      it(
        "all-negative.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/all-negative.js"),
      );
      it(
        "all-positive.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/all-positive.js"),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/argument-invalid-property.js",
        ),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/argument-not-object.js"),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/argument-singular-properties.js",
        ),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/builtin.js"),
      );
      it(
        "copy-properties-not-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/copy-properties-not-undefined.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/name.js"),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/not-a-constructor.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/order-of-operations.js"),
      );
      it(
        "partial-positive.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/partial-positive.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/prop-desc.js"),
      );
      it(
        "sign-conflict-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Duration/prototype/with/sign-conflict-throws-rangeerror.js",
        ),
      );
      it(
        "sign-replace.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/sign-replace.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/with/subclassing-ignored.js"),
      );
    });
    describe("years", () => {
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/years/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/years/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Duration/prototype/years/prop-desc.js"),
      );
    });
  });
  it(
    "seconds-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/seconds-undefined.js"),
  );
  it(
    "subclass.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/subclass.js"),
  );
  it(
    "weeks-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/weeks-undefined.js"),
  );
  it(
    "years-undefined.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Duration/years-undefined.js"),
  );
});
