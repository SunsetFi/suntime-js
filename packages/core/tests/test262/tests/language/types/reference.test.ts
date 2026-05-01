import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "8.7.2-1-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-1-s.js"),
);

it(
  "8.7.2-2-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-2-s.js"),
);

it(
  "8.7.2-3-1-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-3-1-s.js"),
);

it(
  "8.7.2-3-a-1gs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-3-a-1gs.js"),
);

it(
  "8.7.2-3-a-2gs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-3-a-2gs.js"),
);

it(
  "8.7.2-3-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-3-s.js"),
);

it(
  "8.7.2-4-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-4-s.js"),
);

it(
  "8.7.2-5-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-5-s.js"),
);

it(
  "8.7.2-6-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-6-s.js"),
);

it(
  "8.7.2-7-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-7-s.js"),
);

it(
  "8.7.2-8-s.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/8.7.2-8-s.js"),
);

it(
  "S8.7.1_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.1_A1.js"),
);

it(
  "S8.7.1_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.1_A2.js"),
);

it(
  "S8.7.2_A1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.2_A1_T1.js"),
);

it(
  "S8.7.2_A1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.2_A1_T2.js"),
);

it(
  "S8.7.2_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.2_A2.js"),
);

it(
  "S8.7.2_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7.2_A3.js"),
);

it(
  "S8.7_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A1.js"),
);

it(
  "S8.7_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A2.js"),
);

it(
  "S8.7_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A3.js"),
);

it(
  "S8.7_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A4.js"),
);

it(
  "S8.7_A5_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A5_T1.js"),
);

it(
  "S8.7_A5_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A5_T2.js"),
);

it(
  "S8.7_A6.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A6.js"),
);

it(
  "S8.7_A7.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/S8.7_A7.js"),
);

it(
  "get-value-prop-base-primitive-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("language/types/reference/get-value-prop-base-primitive-realm.js"),
);

it(
  "get-value-prop-base-primitive.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/get-value-prop-base-primitive.js"),
);

it(
  "put-value-prop-base-primitive-realm.js",
  { tags: ["known-failing"] },
  createTestHandler("language/types/reference/put-value-prop-base-primitive-realm.js"),
);

it(
  "put-value-prop-base-primitive.js",
  { tags: ["known-passing"] },
  createTestHandler("language/types/reference/put-value-prop-base-primitive.js"),
);
