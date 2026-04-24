import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("acosh", () => {
  it(
    "arg-is-infinity.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/acosh/arg-is-infinity.js"),
  );
  it(
    "arg-is-one.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/acosh/arg-is-one.js"),
  );
  it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/acosh/length.js"));
  it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/acosh/name.js"));
  it(
    "nan-returns.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/acosh/nan-returns.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/acosh/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Math/acosh/prop-desc.js"),
  );
});
