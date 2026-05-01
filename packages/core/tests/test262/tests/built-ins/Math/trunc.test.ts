import { it } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

it(
  "Math.trunc_Infinity.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_Infinity.js"),
);

it(
  "Math.trunc_NaN.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_NaN.js"),
);

it(
  "Math.trunc_NegDecimal.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_NegDecimal.js"),
);

it(
  "Math.trunc_PosDecimal.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_PosDecimal.js"),
);

it(
  "Math.trunc_Success.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_Success.js"),
);

it(
  "Math.trunc_Zero.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/Math.trunc_Zero.js"),
);

it("length.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/trunc/length.js"));

it("name.js", { tags: ["known-passing"] }, createTestHandler("built-ins/Math/trunc/name.js"));

it(
  "not-a-constructor.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/not-a-constructor.js"),
);

it(
  "prop-desc.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/prop-desc.js"),
);

it(
  "trunc-sampleTests.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/trunc-sampleTests.js"),
);

it(
  "trunc-specialVals.js",
  { tags: ["known-passing"] },
  createTestHandler("built-ins/Math/trunc/trunc-specialVals.js"),
);
