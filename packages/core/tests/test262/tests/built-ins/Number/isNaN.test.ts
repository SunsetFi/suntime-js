import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "arg-is-not-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isNaN/arg-is-not-number.js"),
);

it("length.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isNaN/length.js"));

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isNaN/name.js"));

it("nan.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Number/isNaN/nan.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isNaN/not-a-constructor.js"),
);

it(
  "not-nan.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isNaN/not-nan.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/isNaN/prop-desc.js"),
);
