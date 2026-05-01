import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.7.3.5_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/NEGATIVE_INFINITY/S15.7.3.5_A1.js"),
);

it(
  "S15.7.3.5_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/NEGATIVE_INFINITY/S15.7.3.5_A2.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/NEGATIVE_INFINITY/prop-desc.js"),
);

it(
  "value.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Number/NEGATIVE_INFINITY/value.js"),
);
