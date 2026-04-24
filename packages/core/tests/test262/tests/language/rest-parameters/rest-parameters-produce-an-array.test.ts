import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "rest-parameters-produce-an-array.js",
  { tags: ["known-failing"] },
  createTestHandler("language/rest-parameters/rest-parameters-produce-an-array.js"),
);
