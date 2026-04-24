import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("Now", () => {
  it(
    "builtin.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Now/builtin.js"),
  );
  describe("instant", () => {
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/extensible.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/prop-desc.js"),
    );
    it(
      "return-value-distinct.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/return-value-distinct.js"),
    );
    it(
      "return-value-instance.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/return-value-instance.js"),
    );
    it(
      "return-value-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/return-value-prototype.js"),
    );
    it(
      "return-value-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/instant/return-value-value.js"),
    );
  });
  describe("plainDateISO", () => {
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/length.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/prop-desc.js"),
    );
    it(
      "return-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/return-value.js"),
    );
    it(
      "timezone-string-datetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-string-datetime.js"),
    );
    it(
      "timezone-string-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-string-leap-second.js"),
    );
    it(
      "timezone-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-string-sub-minute-offset.js"),
    );
    it(
      "timezone-string-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-string-year-zero.js"),
    );
    it(
      "timezone-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-string.js"),
    );
    it(
      "timezone-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateISO/timezone-wrong-type.js"),
    );
  });
  describe("plainDateTimeISO", () => {
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/extensible.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/prop-desc.js"),
    );
    it(
      "return-value-calendar.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/return-value-calendar.js"),
    );
    it(
      "time-zone-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/time-zone-undefined.js"),
    );
    it(
      "timezone-string-datetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/timezone-string-datetime.js"),
    );
    it(
      "timezone-string-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/timezone-string-leap-second.js"),
    );
    it(
      "timezone-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Now/plainDateTimeISO/timezone-string-sub-minute-offset.js",
      ),
    );
    it(
      "timezone-string-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/timezone-string-year-zero.js"),
    );
    it(
      "timezone-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/timezone-string.js"),
    );
    it(
      "timezone-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainDateTimeISO/timezone-wrong-type.js"),
    );
  });
  describe("plainTimeISO", () => {
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/length.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/prop-desc.js"),
    );
    it(
      "return-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/return-value.js"),
    );
    it(
      "timezone-string-datetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-string-datetime.js"),
    );
    it(
      "timezone-string-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-string-leap-second.js"),
    );
    it(
      "timezone-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-string-sub-minute-offset.js"),
    );
    it(
      "timezone-string-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-string-year-zero.js"),
    );
    it(
      "timezone-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-string.js"),
    );
    it(
      "timezone-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/timezone-wrong-type.js"),
    );
    it(
      "toPlainTime-override.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/plainTimeISO/toPlainTime-override.js"),
    );
  });
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Temporal/Now/prop-desc.js"),
  );
  describe("timeZoneId", () => {
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/extensible.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/prop-desc.js"),
    );
    it(
      "return-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/timeZoneId/return-value.js"),
    );
  });
  describe("toStringTag", () => {
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/toStringTag/prop-desc.js"),
    );
    it(
      "string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/toStringTag/string.js"),
    );
  });
  describe("zonedDateTimeISO", () => {
    it(
      "extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/extensible.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/prop-desc.js"),
    );
    it(
      "return-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/return-value.js"),
    );
    it(
      "time-zone-undefined.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/time-zone-undefined.js"),
    );
    it(
      "timezone-case-insensitive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-case-insensitive.js"),
    );
    it(
      "timezone-string-datetime.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-string-datetime.js"),
    );
    it(
      "timezone-string-leap-second.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-string-leap-second.js"),
    );
    it(
      "timezone-string-multiple-offsets.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Now/zonedDateTimeISO/timezone-string-multiple-offsets.js",
      ),
    );
    it(
      "timezone-string-sub-minute-offset.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Temporal/Now/zonedDateTimeISO/timezone-string-sub-minute-offset.js",
      ),
    );
    it(
      "timezone-string-year-zero.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-string-year-zero.js"),
    );
    it(
      "timezone-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-string.js"),
    );
    it(
      "timezone-wrong-type.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Temporal/Now/zonedDateTimeISO/timezone-wrong-type.js"),
    );
  });
});
