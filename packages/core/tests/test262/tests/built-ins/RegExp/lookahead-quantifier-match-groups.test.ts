import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "lookahead-quantifier-match-groups.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/RegExp/lookahead-quantifier-match-groups.js"),
);
