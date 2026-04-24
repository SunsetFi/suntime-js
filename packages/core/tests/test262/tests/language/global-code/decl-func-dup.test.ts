import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "decl-func-dup.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/decl-func-dup.js"),
);
