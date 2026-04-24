import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "decl-var.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/decl-var.js"),
);
