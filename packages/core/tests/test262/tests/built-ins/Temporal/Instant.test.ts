import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Instant", () => {
  it(
    "argument.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/argument.js"),
  );
  it(
    "basic.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/basic.js"),
  );
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/builtin.js"),
  );
  describe("compare", () => {
    it(
      "argument-object-tostring.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-object-tostring.js"),
    );
    it(
      "argument-string-calendar-annotation-invalid-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-calendar-annotation-invalid-key.js",
      ),
    );
    it(
      "argument-string-calendar-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-calendar-annotation.js",
      ),
    );
    it(
      "argument-string-critical-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-critical-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-date-with-utc-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-date-with-utc-offset.js",
      ),
    );
    it(
      "argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-invalid.js"),
    );
    it(
      "argument-string-limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-limits.js"),
    );
    it(
      "argument-string-minus-sign.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-minus-sign.js"),
    );
    it(
      "argument-string-multiple-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-multiple-calendar.js"),
    );
    it(
      "argument-string-multiple-time-zone.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-multiple-time-zone.js"),
    );
    it(
      "argument-string-time-separators.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-time-separators.js"),
    );
    it(
      "argument-string-time-zone-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-time-zone-annotation.js",
      ),
    );
    it(
      "argument-string-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-string-unknown-annotation.js"),
    );
    it(
      "argument-string-with-offset-not-valid-epoch-nanoseconds.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/compare/argument-string-with-offset-not-valid-epoch-nanoseconds.js",
      ),
    );
    it(
      "argument-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-wrong-type.js"),
    );
    it(
      "argument-zoneddatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/argument-zoneddatetime.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/builtin.js"),
    );
    it(
      "cross-epoch.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/cross-epoch.js"),
    );
    it(
      "exhaustive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/exhaustive.js"),
    );
    it(
      "instant-string-multiple-offsets.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/instant-string-multiple-offsets.js"),
    );
    it(
      "instant-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/instant-string-sub-minute-offset.js"),
    );
    it(
      "instant-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/instant-string.js"),
    );
    it(
      "leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/leap-second.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/name.js"),
    );
    it(
      "no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/no-fractional-minutes-hours.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/prop-desc.js"),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/compare/year-zero.js"),
    );
  });
  it(
    "constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/constructor.js"),
  );
  describe("from", () => {
    it(
      "argument-instant.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-instant.js"),
    );
    it(
      "argument-object-tostring.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-object-tostring.js"),
    );
    it(
      "argument-string-calendar-annotation-invalid-key.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/from/argument-string-calendar-annotation-invalid-key.js",
      ),
    );
    it(
      "argument-string-calendar-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-calendar-annotation.js"),
    );
    it(
      "argument-string-critical-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Instant/from/argument-string-critical-unknown-annotation.js",
      ),
    );
    it(
      "argument-string-date-with-utc-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-date-with-utc-offset.js"),
    );
    it(
      "argument-string-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-invalid.js"),
    );
    it(
      "argument-string-limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-limits.js"),
    );
    it(
      "argument-string-minus-sign.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-minus-sign.js"),
    );
    it(
      "argument-string-multiple-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-multiple-calendar.js"),
    );
    it(
      "argument-string-multiple-time-zone.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-multiple-time-zone.js"),
    );
    it(
      "argument-string-time-separators.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-time-separators.js"),
    );
    it(
      "argument-string-time-zone-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-time-zone-annotation.js"),
    );
    it(
      "argument-string-unknown-annotation.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string-unknown-annotation.js"),
    );
    it(
      "argument-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-string.js"),
    );
    it(
      "argument-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-wrong-type.js"),
    );
    it(
      "argument-zoneddatetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/argument-zoneddatetime.js"),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/basic.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/builtin.js"),
    );
    it(
      "instant-string-multiple-offsets.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/instant-string-multiple-offsets.js"),
    );
    it(
      "instant-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/instant-string-sub-minute-offset.js"),
    );
    it(
      "instant-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/instant-string.js"),
    );
    it(
      "leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/leap-second.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/name.js"),
    );
    it(
      "no-fractional-minutes-hours.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/no-fractional-minutes-hours.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/prop-desc.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/subclassing-ignored.js"),
    );
    it(
      "timezone-custom.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/timezone-custom.js"),
    );
    it(
      "year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/from/year-zero.js"),
    );
  });
  describe("fromEpochMilliseconds", () => {
    it(
      "argument.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/argument.js"),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/basic.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/builtin.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/length.js"),
    );
    it(
      "limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/limits.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/name.js"),
    );
    it(
      "non-integer.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/non-integer.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/prop-desc.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochMilliseconds/subclassing-ignored.js"),
    );
  });
  describe("fromEpochNanoseconds", () => {
    it(
      "argument.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/argument.js"),
    );
    it(
      "basic.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/basic.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/builtin.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/length.js"),
    );
    it(
      "limits.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/limits.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/prop-desc.js"),
    );
    it(
      "subclassing-ignored.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/fromEpochNanoseconds/subclassing-ignored.js"),
    );
  });
  it(
    "get-prototype-from-constructor-throws.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/get-prototype-from-constructor-throws.js"),
  );
  it(
    "large-bigint.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/large-bigint.js"),
  );
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/length.js"),
  );
  it(
    "limits.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/limits.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/name.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/prop-desc.js"),
  );
  describe("prototype", () => {
    describe("add", () => {
      it(
        "add-large-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/add-large-subseconds.js"),
      );
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-duration-max.js"),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-invalid-property.js"),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-fractional-units-rounding-mode.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/argument-string-fractional-units-rounding-mode.js",
        ),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/argument-string.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/builtin.js"),
      );
      it(
        "cross-epoch.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/cross-epoch.js"),
      );
      it(
        "disallowed-duration-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/disallowed-duration-units.js"),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/infinity-throws-rangeerror.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/length.js"),
      );
      it(
        "minimum-maximum-instant.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/minimum-maximum-instant.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/name.js"),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/add/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/not-a-constructor.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/prop-desc.js"),
      );
      it(
        "result-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/result-out-of-range.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/add/subclassing-ignored.js"),
      );
    });
    it(
      "builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/prototype/builtin.js"),
    );
    it(
      "constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/prototype/constructor.js"),
    );
    describe("epochMilliseconds", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochMilliseconds/prop-desc.js"),
      );
    });
    describe("epochNanoseconds", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/branding.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/epochNanoseconds/prop-desc.js"),
      );
    });
    describe("equals", () => {
      it(
        "argument-object-tostring.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-object-tostring.js",
        ),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-invalid.js"),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-string-limits.js"),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/argument-zoneddatetime.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/builtin.js"),
      );
      it(
        "cross-epoch.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/cross-epoch.js"),
      );
      it(
        "instant-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/instant-string-multiple-offsets.js",
        ),
      );
      it(
        "instant-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/instant-string-sub-minute-offset.js",
        ),
      );
      it(
        "instant-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/instant-string.js"),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/equals/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/prop-desc.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/equals/year-zero.js"),
      );
    });
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Instant/prototype/prop-desc.js"),
    );
    describe("round", () => {
      it(
        "accepts-plural-units.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/accepts-plural-units.js"),
      );
      it(
        "accepts-string-parameter-for-smallestunit.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/accepts-string-parameter-for-smallestunit.js",
        ),
      );
      it(
        "allow-increments-that-divide-evenly-into-solar-days.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/allow-increments-that-divide-evenly-into-solar-days.js",
        ),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/name.js"),
      );
      it(
        "negative-instant.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/negative-instant.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/not-a-constructor.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/options-wrong-type.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/prop-desc.js"),
      );
      it(
        "round-to-days.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/round-to-days.js"),
      );
      it(
        "rounding-direction.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/rounding-direction.js"),
      );
      it(
        "rounding-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/rounding-increments.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfExpand.js"),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundingmode-wrong-type.js"),
      );
      it(
        "roundto-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/roundto-invalid-string.js"),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-string-shorthand.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/smallestunit-string-shorthand.js",
        ),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/smallestunit-wrong-type.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/round/subclassing-ignored.js"),
      );
      it(
        "throws-on-increments-that-do-not-divide-evenly.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/throws-on-increments-that-do-not-divide-evenly.js",
        ),
      );
      it(
        "throws-without-smallest-unit.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/round/throws-without-smallest-unit.js",
        ),
      );
    });
    describe("since", () => {
      it(
        "add-subtract.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/add-subtract.js"),
      );
      it(
        "argument-object-tostring.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-object-tostring.js"),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-invalid.js"),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-string-limits.js"),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/argument-zoneddatetime.js"),
      );
      it(
        "blank-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/blank-result.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/builtin.js"),
      );
      it(
        "float64-representable-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/float64-representable-integer.js",
        ),
      );
      it(
        "instant-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/instant-string-multiple-offsets.js",
        ),
      );
      it(
        "instant-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/instant-string-sub-minute-offset.js",
        ),
      );
      it(
        "instant-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/instant-string.js"),
      );
      it(
        "invalid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/invalid-increments.js"),
      );
      it(
        "largest-unit-default.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/largest-unit-default.js"),
      );
      it(
        "largestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/largestunit-invalid-string.js",
        ),
      );
      it(
        "largestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/largestunit-plurals-accepted.js",
        ),
      );
      it(
        "largestunit-smallestunit-mismatch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/largestunit-smallestunit-mismatch.js",
        ),
      );
      it(
        "largestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-undefined.js"),
      );
      it(
        "largestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit-wrong-type.js"),
      );
      it(
        "largestunit.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/largestunit.js"),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/length.js"),
      );
      it(
        "minutes-and-hours.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/minutes-and-hours.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/not-a-constructor.js"),
      );
      it(
        "options-may-be-function.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/options-may-be-function.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/prop-desc.js"),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/round-cross-unit-boundary.js",
        ),
      );
      it(
        "rounding-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/rounding-increments.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfExpand.js"),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/roundingmode-wrong-type.js"),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/since/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-undefined.js"),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/smallestunit-wrong-type.js"),
      );
      it(
        "subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/subseconds.js"),
      );
      it(
        "valid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/valid-increments.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/since/year-zero.js"),
      );
    });
    describe("subtract", () => {
      it(
        "argument-duration-max.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-duration-max.js"),
      );
      it(
        "argument-duration-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-duration-out-of-range.js",
        ),
      );
      it(
        "argument-invalid-property.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-invalid-property.js",
        ),
      );
      it(
        "argument-mixed-sign.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-mixed-sign.js"),
      );
      it(
        "argument-not-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-not-object.js"),
      );
      it(
        "argument-propertybag-optional-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-propertybag-optional-properties.js",
        ),
      );
      it(
        "argument-singular-properties.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-singular-properties.js",
        ),
      );
      it(
        "argument-string-fractional-units-rounding-mode.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-string-fractional-units-rounding-mode.js",
        ),
      );
      it(
        "argument-string-negative-fractional-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/argument-string-negative-fractional-units.js",
        ),
      );
      it(
        "argument-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/argument-string.js"),
      );
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/basic.js"),
      );
      it(
        "blank-duration.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/blank-duration.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/builtin.js"),
      );
      it(
        "disallowed-duration-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/disallowed-duration-units.js",
        ),
      );
      it(
        "infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/infinity-throws-rangeerror.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/length.js"),
      );
      it(
        "minimum-maximum-instant.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/minimum-maximum-instant.js",
        ),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/name.js"),
      );
      it(
        "negative-infinity-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/negative-infinity-throws-rangeerror.js",
        ),
      );
      it(
        "non-integer-throws-rangeerror.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/non-integer-throws-rangeerror.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/not-a-constructor.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/prop-desc.js"),
      );
      it(
        "result-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/result-out-of-range.js"),
      );
      it(
        "subclassing-ignored.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/subtract/subclassing-ignored.js"),
      );
      it(
        "subtract-large-subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/subtract/subtract-large-subseconds.js",
        ),
      );
    });
    describe("toJSON", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/builtin.js"),
      );
      it(
        "fromEpochMilliseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/fromEpochMilliseconds.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/name.js"),
      );
      it(
        "negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toJSON/negative-epochnanoseconds.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/prop-desc.js"),
      );
      it(
        "year-format.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toJSON/year-format.js"),
      );
    });
    describe("toLocaleString", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toLocaleString/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/prop-desc.js"),
      );
      it(
        "return-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toLocaleString/return-string.js"),
      );
    });
    describe("toString", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/builtin.js"),
      );
      it(
        "fractionalseconddigits-auto.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-auto.js",
        ),
      );
      it(
        "fractionalseconddigits-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-invalid-string.js",
        ),
      );
      it(
        "fractionalseconddigits-nan.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-nan.js",
        ),
      );
      it(
        "fractionalseconddigits-negative.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-negative.js",
        ),
      );
      it(
        "fractionalseconddigits-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-non-integer.js",
        ),
      );
      it(
        "fractionalseconddigits-number.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-number.js",
        ),
      );
      it(
        "fractionalseconddigits-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-out-of-range.js",
        ),
      );
      it(
        "fractionalseconddigits-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-undefined.js",
        ),
      );
      it(
        "fractionalseconddigits-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/fractionalseconddigits-wrong-type.js",
        ),
      );
      it(
        "get-timezone-throws.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/get-timezone-throws.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/name.js"),
      );
      it(
        "negative-epochnanoseconds.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/negative-epochnanoseconds.js",
        ),
      );
      it(
        "negative-instant-rounding.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/negative-instant-rounding.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/not-a-constructor.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/order-of-operations.js"),
      );
      it(
        "precision.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/precision.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/prop-desc.js"),
      );
      it(
        "rounding-cross-midnight.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/rounding-cross-midnight.js",
        ),
      );
      it(
        "rounding-direction.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/rounding-direction.js"),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-halfExpand.js",
        ),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-halfFloor.js",
        ),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-halfTrunc.js",
        ),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-undefined.js",
        ),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/roundingmode-wrong-type.js",
        ),
      );
      it(
        "smallestunit-fractionalseconddigits.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-fractionalseconddigits.js",
        ),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-undefined.js",
        ),
      );
      it(
        "smallestunit-valid-units.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-valid-units.js",
        ),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/smallestunit-wrong-type.js",
        ),
      );
      it(
        "timezone-offset.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-offset.js"),
      );
      it(
        "timezone-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/timezone-string-datetime.js",
        ),
      );
      it(
        "timezone-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/timezone-string-leap-second.js",
        ),
      );
      it(
        "timezone-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/timezone-string-multiple-offsets.js",
        ),
      );
      it(
        "timezone-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/timezone-string-sub-minute-offset.js",
        ),
      );
      it(
        "timezone-string-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toString/timezone-string-year-zero.js",
        ),
      );
      it(
        "timezone-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-string.js"),
      );
      it(
        "timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/timezone-wrong-type.js"),
      );
      it(
        "year-format.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toString/year-format.js"),
      );
    });
    describe("toStringTag", () => {
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toStringTag/prop-desc.js"),
      );
    });
    describe("toZonedDateTimeISO", () => {
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/builtin.js"),
      );
      it(
        "calendar-is-builtin.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/calendar-is-builtin.js",
        ),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/name.js"),
      );
      it(
        "no-observable-array-iteration.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/no-observable-array-iteration.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/not-a-constructor.js",
        ),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/prop-desc.js"),
      );
      it(
        "timezone-case-insensitive.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-case-insensitive.js",
        ),
      );
      it(
        "timezone-missing.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-missing.js",
        ),
      );
      it(
        "timezone-string-datetime.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-datetime.js",
        ),
      );
      it(
        "timezone-string-leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-leap-second.js",
        ),
      );
      it(
        "timezone-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-multiple-offsets.js",
        ),
      );
      it(
        "timezone-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-sub-minute-offset.js",
        ),
      );
      it(
        "timezone-string-year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string-year-zero.js",
        ),
      );
      it(
        "timezone-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-string.js",
        ),
      );
      it(
        "timezone-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/timezone-wrong-type.js",
        ),
      );
      it(
        "to-zoned-date-time-iso.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/toZonedDateTimeISO/to-zoned-date-time-iso.js",
        ),
      );
    });
    describe("until", () => {
      it(
        "add-subtract.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/add-subtract.js"),
      );
      it(
        "argument-object-tostring.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-object-tostring.js"),
      );
      it(
        "argument-string-calendar-annotation-invalid-key.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-calendar-annotation-invalid-key.js",
        ),
      );
      it(
        "argument-string-calendar-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-calendar-annotation.js",
        ),
      );
      it(
        "argument-string-critical-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-critical-unknown-annotation.js",
        ),
      );
      it(
        "argument-string-date-with-utc-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-date-with-utc-offset.js",
        ),
      );
      it(
        "argument-string-invalid.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-invalid.js"),
      );
      it(
        "argument-string-limits.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-string-limits.js"),
      );
      it(
        "argument-string-minus-sign.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-minus-sign.js",
        ),
      );
      it(
        "argument-string-multiple-calendar.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-multiple-calendar.js",
        ),
      );
      it(
        "argument-string-multiple-time-zone.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-multiple-time-zone.js",
        ),
      );
      it(
        "argument-string-time-separators.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-time-separators.js",
        ),
      );
      it(
        "argument-string-time-zone-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-time-zone-annotation.js",
        ),
      );
      it(
        "argument-string-unknown-annotation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/argument-string-unknown-annotation.js",
        ),
      );
      it(
        "argument-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-wrong-type.js"),
      );
      it(
        "argument-zoneddatetime.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/argument-zoneddatetime.js"),
      );
      it(
        "blank-result.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/blank-result.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/builtin.js"),
      );
      it(
        "float64-representable-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/float64-representable-integer.js",
        ),
      );
      it(
        "instant-string-multiple-offsets.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/instant-string-multiple-offsets.js",
        ),
      );
      it(
        "instant-string-sub-minute-offset.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/instant-string-sub-minute-offset.js",
        ),
      );
      it(
        "instant-string.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/instant-string.js"),
      );
      it(
        "invalid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/invalid-increments.js"),
      );
      it(
        "largestunit-default.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-default.js"),
      );
      it(
        "largestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/largestunit-invalid-string.js",
        ),
      );
      it(
        "largestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/largestunit-plurals-accepted.js",
        ),
      );
      it(
        "largestunit-smallestunit-mismatch.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/largestunit-smallestunit-mismatch.js",
        ),
      );
      it(
        "largestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-undefined.js"),
      );
      it(
        "largestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/largestunit-wrong-type.js"),
      );
      it(
        "leap-second.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/leap-second.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/length.js"),
      );
      it(
        "minutes-and-hours.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/minutes-and-hours.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/name.js"),
      );
      it(
        "no-fractional-minutes-hours.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/no-fractional-minutes-hours.js",
        ),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/not-a-constructor.js"),
      );
      it(
        "options-may-be-function.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/options-may-be-function.js"),
      );
      it(
        "options-object.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/options-object.js"),
      );
      it(
        "options-read-before-algorithmic-validation.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/options-read-before-algorithmic-validation.js",
        ),
      );
      it(
        "options-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/options-undefined.js"),
      );
      it(
        "options-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/options-wrong-type.js"),
      );
      it(
        "order-of-operations.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/order-of-operations.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/prop-desc.js"),
      );
      it(
        "round-cross-unit-boundary.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/round-cross-unit-boundary.js",
        ),
      );
      it(
        "rounding-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/rounding-increments.js"),
      );
      it(
        "roundingincrement-nan.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingincrement-nan.js"),
      );
      it(
        "roundingincrement-non-integer.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/roundingincrement-non-integer.js",
        ),
      );
      it(
        "roundingincrement-out-of-range.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/roundingincrement-out-of-range.js",
        ),
      );
      it(
        "roundingincrement-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/roundingincrement-undefined.js",
        ),
      );
      it(
        "roundingincrement-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/roundingincrement-wrong-type.js",
        ),
      );
      it(
        "roundingmode-ceil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-ceil.js"),
      );
      it(
        "roundingmode-expand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-expand.js"),
      );
      it(
        "roundingmode-floor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-floor.js"),
      );
      it(
        "roundingmode-halfCeil.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfCeil.js"),
      );
      it(
        "roundingmode-halfEven.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfEven.js"),
      );
      it(
        "roundingmode-halfExpand.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfExpand.js"),
      );
      it(
        "roundingmode-halfFloor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfFloor.js"),
      );
      it(
        "roundingmode-halfTrunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-halfTrunc.js"),
      );
      it(
        "roundingmode-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/roundingmode-invalid-string.js",
        ),
      );
      it(
        "roundingmode-trunc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-trunc.js"),
      );
      it(
        "roundingmode-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-undefined.js"),
      );
      it(
        "roundingmode-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/roundingmode-wrong-type.js"),
      );
      it(
        "smallestunit-invalid-string.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/smallestunit-invalid-string.js",
        ),
      );
      it(
        "smallestunit-plurals-accepted.js",
        { tags: ["known-failing"] },
        createTestHandler(
          "built-ins/Temporal/Instant/prototype/until/smallestunit-plurals-accepted.js",
        ),
      );
      it(
        "smallestunit-undefined.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-undefined.js"),
      );
      it(
        "smallestunit-wrong-type.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/smallestunit-wrong-type.js"),
      );
      it(
        "subseconds.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/subseconds.js"),
      );
      it(
        "valid-increments.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/valid-increments.js"),
      );
      it(
        "year-zero.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/until/year-zero.js"),
      );
    });
    describe("valueOf", () => {
      it(
        "basic.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/basic.js"),
      );
      it(
        "branding.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/branding.js"),
      );
      it(
        "builtin.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/builtin.js"),
      );
      it(
        "length.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/length.js"),
      );
      it(
        "name.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/name.js"),
      );
      it(
        "not-a-constructor.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/not-a-constructor.js"),
      );
      it(
        "prop-desc.js",
        { tags: ["known-failing"] },
        createTestHandler("built-ins/Temporal/Instant/prototype/valueOf/prop-desc.js"),
      );
    });
  });
  it(
    "subclass.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Instant/subclass.js"),
  );
});
