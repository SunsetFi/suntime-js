import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arg-is-not-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/arg-is-not-number.js"),
);

it(
  "infinity.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/infinity.js"),
);

it(
  "integers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/integers.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isInteger/name.js"));

it("nan.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isInteger/nan.js"));

it(
  "non-integers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/non-integers.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isInteger/prop-desc.js"),
);
