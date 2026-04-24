import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-binary-literal-invalid.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/string-binary-literal-invalid.js"),
);
