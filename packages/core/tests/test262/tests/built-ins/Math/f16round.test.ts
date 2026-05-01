import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Math/f16round/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Math/f16round/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Math/f16round/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Math/f16round/prop-desc.js"),
);

it(
  "value-conversion.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Math/f16round/value-conversion.js"),
);
