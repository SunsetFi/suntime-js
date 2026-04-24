import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "super-prop.js",
  { tags: ["known-passing"] },
  createTestHandler("language/global-code/super-prop.js"),
);
