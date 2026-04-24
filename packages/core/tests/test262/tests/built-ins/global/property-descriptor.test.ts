import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-descriptor.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/global/property-descriptor.js"),
);
