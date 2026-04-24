import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("from", () => {
it("arylk-get-length-error.js", createTestHandler("built-ins/TypedArray/from/arylk-get-length-error.js"));
it("arylk-to-length-error.js", createTestHandler("built-ins/TypedArray/from/arylk-to-length-error.js"));
it("from-array-mapper-detaches-result.js", createTestHandler("built-ins/TypedArray/from/from-array-mapper-detaches-result.js"));
it("from-array-mapper-makes-result-out-of-bounds.js", createTestHandler("built-ins/TypedArray/from/from-array-mapper-makes-result-out-of-bounds.js"));
it("from-typedarray-into-itself-mapper-detaches-result.js", createTestHandler("built-ins/TypedArray/from/from-typedarray-into-itself-mapper-detaches-result.js"));
it("from-typedarray-into-itself-mapper-makes-result-out-of-bounds.js", createTestHandler("built-ins/TypedArray/from/from-typedarray-into-itself-mapper-makes-result-out-of-bounds.js"));
it("from-typedarray-mapper-detaches-result.js", createTestHandler("built-ins/TypedArray/from/from-typedarray-mapper-detaches-result.js"));
it("from-typedarray-mapper-makes-result-out-of-bounds.js", createTestHandler("built-ins/TypedArray/from/from-typedarray-mapper-makes-result-out-of-bounds.js"));
it("invoked-as-func.js", createTestHandler("built-ins/TypedArray/from/invoked-as-func.js"));
it("invoked-as-method.js", createTestHandler("built-ins/TypedArray/from/invoked-as-method.js"));
it("iter-access-error.js", createTestHandler("built-ins/TypedArray/from/iter-access-error.js"));
it("iter-invoke-error.js", createTestHandler("built-ins/TypedArray/from/iter-invoke-error.js"));
it("iter-next-error.js", createTestHandler("built-ins/TypedArray/from/iter-next-error.js"));
it("iter-next-value-error.js", createTestHandler("built-ins/TypedArray/from/iter-next-value-error.js"));
it("iterated-array-changed-by-tonumber.js", createTestHandler("built-ins/TypedArray/from/iterated-array-changed-by-tonumber.js"));
it("length.js", createTestHandler("built-ins/TypedArray/from/length.js"));
it("mapfn-is-not-callable.js", createTestHandler("built-ins/TypedArray/from/mapfn-is-not-callable.js"));
it("name.js", createTestHandler("built-ins/TypedArray/from/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/TypedArray/from/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/TypedArray/from/prop-desc.js"));
it("this-is-not-constructor.js", createTestHandler("built-ins/TypedArray/from/this-is-not-constructor.js"));
});
