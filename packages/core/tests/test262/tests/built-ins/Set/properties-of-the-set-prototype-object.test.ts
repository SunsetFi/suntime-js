import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "properties-of-the-set-prototype-object.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Set/properties-of-the-set-prototype-object.js"),
);
