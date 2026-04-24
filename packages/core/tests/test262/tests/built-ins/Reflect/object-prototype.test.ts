import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "object-prototype.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Reflect/object-prototype.js"),
);
