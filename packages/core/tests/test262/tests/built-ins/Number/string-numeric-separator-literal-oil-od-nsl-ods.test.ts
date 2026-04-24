import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-numeric-separator-literal-oil-od-nsl-ods.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/string-numeric-separator-literal-oil-od-nsl-ods.js"),
);
