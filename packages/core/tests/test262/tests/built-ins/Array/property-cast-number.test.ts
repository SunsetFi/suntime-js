import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-cast-number.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/property-cast-number.js"),
);
