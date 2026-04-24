import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("isView", () => {
it("arg-has-no-viewedarraybuffer.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-has-no-viewedarraybuffer.js"));
it("arg-is-arraybuffer.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-arraybuffer.js"));
it("arg-is-dataview-buffer.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-buffer.js"));
it("arg-is-dataview-constructor.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-constructor.js"));
it("arg-is-dataview-subclass-instance.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview-subclass-instance.js"));
it("arg-is-dataview.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-dataview.js"));
it("arg-is-not-object.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-not-object.js"));
it("arg-is-typedarray-buffer.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-typedarray-buffer.js"));
it("arg-is-typedarray-constructor.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-typedarray-constructor.js"));
it("arg-is-typedarray-subclass-instance.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-typedarray-subclass-instance.js"));
it("arg-is-typedarray.js", createTestHandler("built-ins/ArrayBuffer/isView/arg-is-typedarray.js"));
it("invoked-as-a-fn.js", createTestHandler("built-ins/ArrayBuffer/isView/invoked-as-a-fn.js"));
it("length.js", createTestHandler("built-ins/ArrayBuffer/isView/length.js"));
it("name.js", createTestHandler("built-ins/ArrayBuffer/isView/name.js"));
it("no-arg.js", createTestHandler("built-ins/ArrayBuffer/isView/no-arg.js"));
it("not-a-constructor.js", createTestHandler("built-ins/ArrayBuffer/isView/not-a-constructor.js"));
it("prop-desc.js", createTestHandler("built-ins/ArrayBuffer/isView/prop-desc.js"));
});
