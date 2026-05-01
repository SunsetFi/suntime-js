import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "15.9.4.4-0-1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/now/15.9.4.4-0-1.js"),
);

it(
  "15.9.4.4-0-2.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/now/15.9.4.4-0-2.js"),
);

it(
  "15.9.4.4-0-3.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/now/15.9.4.4-0-3.js"),
);

it(
  "15.9.4.4-0-4.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/now/15.9.4.4-0-4.js"),
);

it("name.js", { tags: ["known-failing"] }, createTestHandler("built-ins/Date/now/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Date/now/not-a-constructor.js"),
);
