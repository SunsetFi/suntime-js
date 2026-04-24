import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "10.4.3-1-98gs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/function-code/10.4.3-1-98gs.js"),
);
