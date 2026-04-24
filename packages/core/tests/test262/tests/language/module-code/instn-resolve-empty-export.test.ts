import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-resolve-empty-export.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-resolve-empty-export.js"),
);
