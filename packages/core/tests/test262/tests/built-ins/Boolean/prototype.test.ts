import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.6.3.1_A1.js",
  { tags: ["known-failing"] },
  createTestHandler("built-ins/Boolean/prototype/S15.6.3.1_A1.js"),
);

it(
  "S15.6.3.1_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/prototype/S15.6.3.1_A2.js"),
);

it(
  "S15.6.3.1_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/prototype/S15.6.3.1_A3.js"),
);

it(
  "S15.6.3.1_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/prototype/S15.6.3.1_A4.js"),
);

it(
  "S15.6.4_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Boolean/prototype/S15.6.4_A2.js"),
);

describe("constructor", () => {
  it(
    "S15.6.4.1_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/constructor/S15.6.4.1_A1.js"),
  );
});

describe("toString", () => {
  it(
    "S15.6.4.2_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A1_T1.js"),
  );
  it(
    "S15.6.4.2_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A1_T2.js"),
  );
  it(
    "S15.6.4.2_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A2_T1.js"),
  );
  it(
    "S15.6.4.2_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A2_T2.js"),
  );
  it(
    "S15.6.4.2_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A2_T3.js"),
  );
  it(
    "S15.6.4.2_A2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A2_T4.js"),
  );
  it(
    "S15.6.4.2_A2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/S15.6.4.2_A2_T5.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/toString/not-a-constructor.js"),
  );
});

describe("valueOf", () => {
  it(
    "S15.6.4.3_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A1_T1.js"),
  );
  it(
    "S15.6.4.3_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A1_T2.js"),
  );
  it(
    "S15.6.4.3_A2_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A2_T1.js"),
  );
  it(
    "S15.6.4.3_A2_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A2_T2.js"),
  );
  it(
    "S15.6.4.3_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A2_T3.js"),
  );
  it(
    "S15.6.4.3_A2_T4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A2_T4.js"),
  );
  it(
    "S15.6.4.3_A2_T5.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/S15.6.4.3_A2_T5.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Boolean/prototype/valueOf/not-a-constructor.js"),
  );
});
