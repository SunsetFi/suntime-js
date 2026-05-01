import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "descriptor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/pause/descriptor.js"),
);

it(
  "length.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/pause/length.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Atomics/pause/name.js"));

it(
  "non-integral-iterationnumber-throws.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/pause/non-integral-iterationnumber-throws.js"),
);

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/pause/not-a-constructor.js"),
);

it(
  "returns-undefined.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Atomics/pause/returns-undefined.js"),
);
