import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("setPrototypeOf", () => {
it("bigint.js", createTestHandler("built-ins/Object/setPrototypeOf/bigint.js"));
it("length.js", createTestHandler("built-ins/Object/setPrototypeOf/length.js"));
it("name.js", createTestHandler("built-ins/Object/setPrototypeOf/name.js"));
it("not-a-constructor.js", createTestHandler("built-ins/Object/setPrototypeOf/not-a-constructor.js"));
it("o-not-obj-coercible.js", createTestHandler("built-ins/Object/setPrototypeOf/o-not-obj-coercible.js"));
it("o-not-obj.js", createTestHandler("built-ins/Object/setPrototypeOf/o-not-obj.js"));
it("property-descriptor.js", createTestHandler("built-ins/Object/setPrototypeOf/property-descriptor.js"));
it("proto-not-obj.js", createTestHandler("built-ins/Object/setPrototypeOf/proto-not-obj.js"));
it("set-error.js", createTestHandler("built-ins/Object/setPrototypeOf/set-error.js"));
it("set-failure-cycle.js", createTestHandler("built-ins/Object/setPrototypeOf/set-failure-cycle.js"));
it("set-failure-non-extensible.js", createTestHandler("built-ins/Object/setPrototypeOf/set-failure-non-extensible.js"));
it("success.js", createTestHandler("built-ins/Object/setPrototypeOf/success.js"));
});
