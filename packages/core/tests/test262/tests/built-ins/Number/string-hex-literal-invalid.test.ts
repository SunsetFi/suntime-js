import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "string-hex-literal-invalid.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Number/string-hex-literal-invalid.js"),
);
