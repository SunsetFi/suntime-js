import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "script-decl-var-collision.js",
  { tags: ["known-failing"] },
  createTestHandler("language/global-code/script-decl-var-collision.js"),
);
