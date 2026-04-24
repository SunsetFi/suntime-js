import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "properties-of-the-weakset-prototype-object.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/WeakSet/properties-of-the-weakset-prototype-object.js"),
);
