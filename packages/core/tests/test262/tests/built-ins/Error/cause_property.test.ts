import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "cause_property.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Error/cause_property.js"),
);
