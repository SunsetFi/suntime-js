import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "block-decl-strict.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/block-decl-strict.js"),
);
