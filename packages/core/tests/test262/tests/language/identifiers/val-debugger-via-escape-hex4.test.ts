import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "val-debugger-via-escape-hex4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/identifiers/val-debugger-via-escape-hex4.js"),
);
