import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "property-cast-boolean-primitive.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Array/property-cast-boolean-primitive.js"),
);
