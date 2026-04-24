import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-resolve-empty-import.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-resolve-empty-import.js"),
);
