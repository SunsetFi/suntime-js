import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S11.8.7_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A1.js"),
);

it(
  "S11.8.7_A2.1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.1_T1.js"),
);

it(
  "S11.8.7_A2.1_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.1_T2.js"),
);

it(
  "S11.8.7_A2.1_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.1_T3.js"),
);

it(
  "S11.8.7_A2.4_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.4_T1.js"),
);

it(
  "S11.8.7_A2.4_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.4_T2.js"),
);

it(
  "S11.8.7_A2.4_T3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.4_T3.js"),
);

it(
  "S11.8.7_A2.4_T4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A2.4_T4.js"),
);

it(
  "S11.8.7_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A3.js"),
);

it(
  "S11.8.7_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S11.8.7_A4.js"),
);

it(
  "S8.12.6_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S8.12.6_A1.js"),
);

it(
  "S8.12.6_A2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S8.12.6_A2_T1.js"),
);

it(
  "S8.12.6_A2_T2.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S8.12.6_A2_T2.js"),
);

it(
  "S8.12.6_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/S8.12.6_A3.js"),
);

it(
  "private-field-in-nested.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-in-nested.js"),
);

it(
  "private-field-in.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-in.js"),
);

it(
  "private-field-invalid-assignment-reference.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-invalid-assignment-reference.js"),
);

it(
  "private-field-invalid-assignment-target.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-invalid-assignment-target.js"),
);

it(
  "private-field-invalid-identifier-complex.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-invalid-identifier-complex.js"),
);

it(
  "private-field-invalid-identifier-simple.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-invalid-identifier-simple.js"),
);

it(
  "private-field-invalid-rhs.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-invalid-rhs.js"),
);

it(
  "private-field-presence-accessor-shadowed.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-accessor-shadowed.js"),
);

it(
  "private-field-presence-accessor.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-accessor.js"),
);

it(
  "private-field-presence-field-shadowed.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-field-shadowed.js"),
);

it(
  "private-field-presence-field.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-field.js"),
);

it(
  "private-field-presence-method-shadowed.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-method-shadowed.js"),
);

it(
  "private-field-presence-method.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-presence-method.js"),
);

it(
  "private-field-rhs-await-absent.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-rhs-await-absent.js"),
);

it(
  "private-field-rhs-await-present.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-rhs-await-present.js"),
);

it(
  "private-field-rhs-non-object.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-rhs-non-object.js"),
);

it(
  "private-field-rhs-unresolvable.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-rhs-unresolvable.js"),
);

it(
  "private-field-rhs-yield-absent.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/private-field-rhs-yield-absent.js"),
);

it(
  "private-field-rhs-yield-present.js",
  { tags: ["known-failing"] },
  createTestHandler("language/expressions/in/private-field-rhs-yield-present.js"),
);

it(
  "rhs-yield-absent-non-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/rhs-yield-absent-non-strict.js"),
);

it(
  "rhs-yield-absent-strict.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/rhs-yield-absent-strict.js"),
);

it(
  "rhs-yield-present.js",
  { tags: ["known-passing"] },
  createTestHandler("language/expressions/in/rhs-yield-present.js"),
);
