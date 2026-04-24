import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "no-alias-arguments.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/no-alias-arguments.js"),
);
