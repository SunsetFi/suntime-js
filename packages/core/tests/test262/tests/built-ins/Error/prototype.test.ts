import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "S15.11.3.1_A1_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.3.1_A1_T1.js"),
);

it(
  "S15.11.3.1_A2_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.3.1_A2_T1.js"),
);

it(
  "S15.11.3.1_A3_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.3.1_A3_T1.js"),
);

it(
  "S15.11.3.1_A4_T1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.3.1_A4_T1.js"),
);

it(
  "S15.11.4_A1.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.4_A1.js"),
);

it(
  "S15.11.4_A2.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.4_A2.js"),
);

it(
  "S15.11.4_A3.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.4_A3.js"),
);

it(
  "S15.11.4_A4.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/S15.11.4_A4.js"),
);

describe("constructor", () => {
  it(
    "S15.11.4.1_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/constructor/S15.11.4.1_A1_T2.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/constructor/prop-desc.js"),
  );
});

describe("message", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/message/prop-desc.js"),
  );
});

describe("name", () => {
  it(
    "prop-desc.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/name/prop-desc.js"),
  );
});

it(
  "no-error-data.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Error/prototype/no-error-data.js"),
);

describe("toString", () => {
  it(
    "15.11.4.4-10-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-10-1.js"),
  );
  it(
    "15.11.4.4-6-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-6-1.js"),
  );
  it(
    "15.11.4.4-6-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-6-2.js"),
  );
  it(
    "15.11.4.4-8-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-8-1.js"),
  );
  it(
    "15.11.4.4-8-2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-8-2.js"),
  );
  it(
    "15.11.4.4-9-1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/15.11.4.4-9-1.js"),
  );
  it(
    "S15.11.4.4_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/S15.11.4.4_A2.js"),
  );
  it(
    "called-as-function.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/toString/called-as-function.js"),
  );
  it(
    "invalid-receiver.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/toString/invalid-receiver.js"),
  );
  it(
    "length.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/name.js"),
  );
  it(
    "not-a-constructor.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/not-a-constructor.js"),
  );
  it(
    "prop-desc.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Error/prototype/toString/prop-desc.js"),
  );
  it(
    "undefined-props.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Error/prototype/toString/undefined-props.js"),
  );
});
