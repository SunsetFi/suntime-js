import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-descriptor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/global/property-descriptor.js"),
);
