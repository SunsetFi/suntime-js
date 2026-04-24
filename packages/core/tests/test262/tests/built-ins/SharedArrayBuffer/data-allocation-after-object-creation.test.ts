import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "data-allocation-after-object-creation.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/SharedArrayBuffer/data-allocation-after-object-creation.js"),
);
