import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "subclass-object-arg.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Object/subclass-object-arg.js"),
);
