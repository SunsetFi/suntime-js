import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arg-is-not-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/arg-is-not-number.js"),
);

it(
  "finite-numbers.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/finite-numbers.js"),
);

it(
  "infinity.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/infinity.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isFinite/name.js"));

it("nan.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isFinite/nan.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isFinite/prop-desc.js"),
);
