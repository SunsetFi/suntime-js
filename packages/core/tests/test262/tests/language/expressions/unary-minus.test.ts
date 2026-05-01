import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "11.4.7-4-1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/11.4.7-4-1.js"),
);

it(
  "S11.4.7_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A1.js"),
);

it(
  "S11.4.7_A2.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A2.1_T1.js"),
);

it(
  "S11.4.7_A2.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A2.1_T2.js"),
);

it(
  "S11.4.7_A2.2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A2.2_T1.js"),
);

it(
  "S11.4.7_A3_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A3_T1.js"),
);

it(
  "S11.4.7_A3_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A3_T2.js"),
);

it(
  "S11.4.7_A3_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A3_T3.js"),
);

it(
  "S11.4.7_A3_T4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A3_T4.js"),
);

it(
  "S11.4.7_A3_T5.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A3_T5.js"),
);

it(
  "S11.4.7_A4.1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A4.1.js"),
);

it(
  "S11.4.7_A4.2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/unary-minus/S11.4.7_A4.2.js"),
);

it(
  "bigint-non-primitive.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/unary-minus/bigint-non-primitive.js"),
);

it(
  "bigint.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/unary-minus/bigint.js"),
);
