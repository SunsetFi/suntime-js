import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S12.4_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/expression/S12.4_A1.js"),
);

it(
  "S12.4_A2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/expression/S12.4_A2_T1.js"),
);

it(
  "S12.4_A2_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/statements/expression/S12.4_A2_T2.js"),
);
