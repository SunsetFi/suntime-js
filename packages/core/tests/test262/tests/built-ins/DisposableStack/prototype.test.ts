import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.dispose.js", createTestHandler("built-ins/DisposableStack/prototype/Symbol.dispose.js"));
it("Symbol.toStringTag.js", createTestHandler("built-ins/DisposableStack/prototype/Symbol.toStringTag.js"));
describe("adopt", () => {
it("adds-value-onDispose.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/adds-value-onDispose.js"));
});
describe("adopt", () => {
it("allows-any-value.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/allows-any-value.js"));
});
describe("adopt", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/length.js"));
});
describe("adopt", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/name.js"));
});
describe("adopt", () => {
it("not-a-constructor.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/not-a-constructor.js"));
});
describe("adopt", () => {
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/prop-desc.js"));
});
describe("adopt", () => {
it("puts-value-onDispose-on-top-of-stack.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/puts-value-onDispose-on-top-of-stack.js"));
});
describe("adopt", () => {
it("returns-value.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/returns-value.js"));
});
describe("adopt", () => {
it("this-does-not-have-internal-disposablestate-throws.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/this-does-not-have-internal-disposablestate-throws.js"));
});
describe("adopt", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/this-not-object-throws.js"));
});
describe("adopt", () => {
it("throws-if-onDispose-not-callable.js", createTestHandler("built-ins/DisposableStack/prototype/adopt/throws-if-onDispose-not-callable.js"));
});
it("constructor.js", createTestHandler("built-ins/DisposableStack/prototype/constructor.js"));
describe("defer", () => {
it("adds-onDispose.js", createTestHandler("built-ins/DisposableStack/prototype/defer/adds-onDispose.js"));
});
describe("defer", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/defer/length.js"));
});
describe("defer", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/defer/name.js"));
});
describe("defer", () => {
it("not-a-constructor.js", createTestHandler("built-ins/DisposableStack/prototype/defer/not-a-constructor.js"));
});
describe("defer", () => {
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/defer/prop-desc.js"));
});
describe("defer", () => {
it("puts-onDispose-on-top-of-stack.js", createTestHandler("built-ins/DisposableStack/prototype/defer/puts-onDispose-on-top-of-stack.js"));
});
describe("defer", () => {
it("returns-undefined.js", createTestHandler("built-ins/DisposableStack/prototype/defer/returns-undefined.js"));
});
describe("defer", () => {
it("this-does-not-have-internal-disposablestate-throws.js", createTestHandler("built-ins/DisposableStack/prototype/defer/this-does-not-have-internal-disposablestate-throws.js"));
});
describe("defer", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/DisposableStack/prototype/defer/this-not-object-throws.js"));
});
describe("defer", () => {
it("throws-if-onDispose-not-callable.js", createTestHandler("built-ins/DisposableStack/prototype/defer/throws-if-onDispose-not-callable.js"));
});
describe("dispose", () => {
it("disposes-resources-in-reverse-order.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/disposes-resources-in-reverse-order.js"));
});
describe("dispose", () => {
it("does-not-reinvoke-disposers-if-already-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/does-not-reinvoke-disposers-if-already-disposed.js"));
});
describe("dispose", () => {
it("does-not-throw-if-already-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/does-not-throw-if-already-disposed.js"));
});
describe("dispose", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/length.js"));
});
describe("dispose", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/name.js"));
});
describe("dispose", () => {
it("not-a-constructor.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/not-a-constructor.js"));
});
describe("dispose", () => {
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/prop-desc.js"));
});
describe("dispose", () => {
it("returns-undefined.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/returns-undefined.js"));
});
describe("dispose", () => {
it("sets-state-to-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/sets-state-to-disposed.js"));
});
describe("dispose", () => {
it("this-does-not-have-internal-disposablestate-throws.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/this-does-not-have-internal-disposablestate-throws.js"));
});
describe("dispose", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/this-not-object-throws.js"));
});
describe("dispose", () => {
it("throws-error-as-is-if-only-one-error-during-disposal.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/throws-error-as-is-if-only-one-error-during-disposal.js"));
});
describe("dispose", () => {
it("throws-suppressederror-if-multiple-errors-during-disposal.js", createTestHandler("built-ins/DisposableStack/prototype/dispose/throws-suppressederror-if-multiple-errors-during-disposal.js"));
});
describe("disposed", () => {
it("does-not-have-disposablestate-internal-slot.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/does-not-have-disposablestate-internal-slot.js"));
});
describe("disposed", () => {
it("getter.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/getter.js"));
});
describe("disposed", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/length.js"));
});
describe("disposed", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/name.js"));
});
describe("disposed", () => {
it("returns-false-when-not-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/returns-false-when-not-disposed.js"));
});
describe("disposed", () => {
it("returns-true-when-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/returns-true-when-disposed.js"));
});
describe("disposed", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/DisposableStack/prototype/disposed/this-not-object-throw.js"));
});
describe("move", () => {
it("does-not-dispose-resources.js", createTestHandler("built-ins/DisposableStack/prototype/move/does-not-dispose-resources.js"));
});
describe("move", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/move/length.js"));
});
describe("move", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/move/name.js"));
});
describe("move", () => {
it("not-a-constructor.js", createTestHandler("built-ins/DisposableStack/prototype/move/not-a-constructor.js"));
});
describe("move", () => {
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/move/prop-desc.js"));
});
describe("move", () => {
it("returns-new-disposablestack-that-contains-moved-resources.js", createTestHandler("built-ins/DisposableStack/prototype/move/returns-new-disposablestack-that-contains-moved-resources.js"));
});
describe("move", () => {
it("returns-new-disposablestack-that-is-still-pending.js", createTestHandler("built-ins/DisposableStack/prototype/move/returns-new-disposablestack-that-is-still-pending.js"));
});
describe("move", () => {
it("returns-new-disposablestack.js", createTestHandler("built-ins/DisposableStack/prototype/move/returns-new-disposablestack.js"));
});
describe("move", () => {
it("sets-state-to-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/move/sets-state-to-disposed.js"));
});
describe("move", () => {
it("still-returns-new-disposablestack-when-subclassed.js", createTestHandler("built-ins/DisposableStack/prototype/move/still-returns-new-disposablestack-when-subclassed.js"));
});
describe("move", () => {
it("this-does-not-have-internal-disposablestate-throws.js", createTestHandler("built-ins/DisposableStack/prototype/move/this-does-not-have-internal-disposablestate-throws.js"));
});
describe("move", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/DisposableStack/prototype/move/this-not-object-throws.js"));
});
describe("move", () => {
it("throws-if-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/move/throws-if-disposed.js"));
});
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/prop-desc.js"));
it("proto.js", createTestHandler("built-ins/DisposableStack/prototype/proto.js"));
describe("use", () => {
it("Symbol.dispose-getter.js", createTestHandler("built-ins/DisposableStack/prototype/use/Symbol.dispose-getter.js"));
});
describe("use", () => {
it("adds-value.js", createTestHandler("built-ins/DisposableStack/prototype/use/adds-value.js"));
});
describe("use", () => {
it("allows-null-value.js", createTestHandler("built-ins/DisposableStack/prototype/use/allows-null-value.js"));
});
describe("use", () => {
it("allows-undefined-value.js", createTestHandler("built-ins/DisposableStack/prototype/use/allows-undefined-value.js"));
});
describe("use", () => {
it("gets-value-Symbol.dispose-property-once.js", createTestHandler("built-ins/DisposableStack/prototype/use/gets-value-Symbol.dispose-property-once.js"));
});
describe("use", () => {
it("length.js", createTestHandler("built-ins/DisposableStack/prototype/use/length.js"));
});
describe("use", () => {
it("name.js", createTestHandler("built-ins/DisposableStack/prototype/use/name.js"));
});
describe("use", () => {
it("not-a-constructor.js", createTestHandler("built-ins/DisposableStack/prototype/use/not-a-constructor.js"));
});
describe("use", () => {
it("prop-desc.js", createTestHandler("built-ins/DisposableStack/prototype/use/prop-desc.js"));
});
describe("use", () => {
it("puts-value-on-top-of-stack.js", createTestHandler("built-ins/DisposableStack/prototype/use/puts-value-on-top-of-stack.js"));
});
describe("use", () => {
it("returns-value.js", createTestHandler("built-ins/DisposableStack/prototype/use/returns-value.js"));
});
describe("use", () => {
it("this-does-not-have-internal-disposablestate-throws.js", createTestHandler("built-ins/DisposableStack/prototype/use/this-does-not-have-internal-disposablestate-throws.js"));
});
describe("use", () => {
it("this-not-object-throws.js", createTestHandler("built-ins/DisposableStack/prototype/use/this-not-object-throws.js"));
});
describe("use", () => {
it("throws-if-disposed.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-disposed.js"));
});
describe("use", () => {
it("throws-if-value-Symbol.dispose-property-is-null.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-value-Symbol.dispose-property-is-null.js"));
});
describe("use", () => {
it("throws-if-value-Symbol.dispose-property-is-undefined.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-value-Symbol.dispose-property-is-undefined.js"));
});
describe("use", () => {
it("throws-if-value-Symbol.dispose-property-not-callable.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-value-Symbol.dispose-property-not-callable.js"));
});
describe("use", () => {
it("throws-if-value-missing-Symbol.dispose.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-value-missing-Symbol.dispose.js"));
});
describe("use", () => {
it("throws-if-value-not-object.js", createTestHandler("built-ins/DisposableStack/prototype/use/throws-if-value-not-object.js"));
});
});
