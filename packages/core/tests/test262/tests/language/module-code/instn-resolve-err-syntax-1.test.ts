import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "instn-resolve-err-syntax-1.js",
  { tags: ["known-failing"] },
  createTestHandler("language/module-code/instn-resolve-err-syntax-1.js"),
);
