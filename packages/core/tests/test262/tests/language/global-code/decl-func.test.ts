import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "decl-func.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/decl-func.js"),
);
