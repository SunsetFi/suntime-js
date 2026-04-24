import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("Symbol.toStringTag.js", createTestHandler("built-ins/WeakMap/prototype/Symbol.toStringTag.js"));
it("constructor.js", createTestHandler("built-ins/WeakMap/prototype/constructor.js"));
describe("delete", () => {
it("delete-entry-with-object-key-initial-iterable.js", createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-object-key-initial-iterable.js"));
});
describe("delete", () => {
it("delete-entry-with-object-key.js", createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-object-key.js"));
});
describe("delete", () => {
it("delete-entry-with-symbol-key-initial-iterable.js", createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-symbol-key-initial-iterable.js"));
});
describe("delete", () => {
it("delete-entry-with-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/delete/delete-entry-with-symbol-key.js"));
});
describe("delete", () => {
it("delete.js", createTestHandler("built-ins/WeakMap/prototype/delete/delete.js"));
});
describe("delete", () => {
it("does-not-have-weakmapdata-internal-slot-array.js", createTestHandler("built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-array.js"));
});
describe("delete", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("delete", () => {
it("does-not-have-weakmapdata-internal-slot-object.js", createTestHandler("built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-object.js"));
});
describe("delete", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("delete", () => {
it("does-not-have-weakmapdata-internal-slot-weakmap-prototype.js", createTestHandler("built-ins/WeakMap/prototype/delete/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js"));
});
describe("delete", () => {
it("length.js", createTestHandler("built-ins/WeakMap/prototype/delete/length.js"));
});
describe("delete", () => {
it("name.js", createTestHandler("built-ins/WeakMap/prototype/delete/name.js"));
});
describe("delete", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/delete/not-a-constructor.js"));
});
describe("delete", () => {
it("returns-false-if-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/delete/returns-false-if-key-cannot-be-held-weakly.js"));
});
describe("delete", () => {
it("returns-false-when-object-key-not-present.js", createTestHandler("built-ins/WeakMap/prototype/delete/returns-false-when-object-key-not-present.js"));
});
describe("delete", () => {
it("returns-false-when-symbol-key-not-present.js", createTestHandler("built-ins/WeakMap/prototype/delete/returns-false-when-symbol-key-not-present.js"));
});
describe("delete", () => {
it("this-not-object-throw-boolean.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-boolean.js"));
});
describe("delete", () => {
it("this-not-object-throw-null.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-null.js"));
});
describe("delete", () => {
it("this-not-object-throw-number.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-number.js"));
});
describe("delete", () => {
it("this-not-object-throw-string.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-string.js"));
});
describe("delete", () => {
it("this-not-object-throw-symbol.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-symbol.js"));
});
describe("delete", () => {
it("this-not-object-throw-undefined.js", createTestHandler("built-ins/WeakMap/prototype/delete/this-not-object-throw-undefined.js"));
});
describe("get", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("get", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("get", () => {
it("does-not-have-weakmapdata-internal-slot.js", createTestHandler("built-ins/WeakMap/prototype/get/does-not-have-weakmapdata-internal-slot.js"));
});
describe("get", () => {
it("get.js", createTestHandler("built-ins/WeakMap/prototype/get/get.js"));
});
describe("get", () => {
it("length.js", createTestHandler("built-ins/WeakMap/prototype/get/length.js"));
});
describe("get", () => {
it("name.js", createTestHandler("built-ins/WeakMap/prototype/get/name.js"));
});
describe("get", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/get/not-a-constructor.js"));
});
describe("get", () => {
it("returns-undefined-if-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/get/returns-undefined-if-key-cannot-be-held-weakly.js"));
});
describe("get", () => {
it("returns-undefined-with-object-key.js", createTestHandler("built-ins/WeakMap/prototype/get/returns-undefined-with-object-key.js"));
});
describe("get", () => {
it("returns-undefined-with-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/get/returns-undefined-with-symbol-key.js"));
});
describe("get", () => {
it("returns-value-with-object-key.js", createTestHandler("built-ins/WeakMap/prototype/get/returns-value-with-object-key.js"));
});
describe("get", () => {
it("returns-value-with-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/get/returns-value-with-symbol-key.js"));
});
describe("get", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/WeakMap/prototype/get/this-not-object-throw.js"));
});
describe("getOrInsert", () => {
it("adds-object-element.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/adds-object-element.js"));
});
describe("getOrInsert", () => {
it("adds-symbol-element.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/adds-symbol-element.js"));
});
describe("getOrInsert", () => {
it("does-not-have-weakmapdata-internal-slot-array.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-array.js"));
});
describe("getOrInsert", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("getOrInsert", () => {
it("does-not-have-weakmapdata-internal-slot-object.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-object.js"));
});
describe("getOrInsert", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("getOrInsert", () => {
it("does-not-have-weakmapdata-internal-slot-weakmap-prototype.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js"));
});
describe("getOrInsert", () => {
it("getOrInsert.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/getOrInsert.js"));
});
describe("getOrInsert", () => {
it("length.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/length.js"));
});
describe("getOrInsert", () => {
it("name.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/name.js"));
});
describe("getOrInsert", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/not-a-constructor.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-not-present-object-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-not-present-object-key.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-not-present-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-not-present-symbol-key.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-present-object-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-present-object-key.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-present-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/returns-value-if-key-is-present-symbol-key.js"));
});
describe("getOrInsert", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/this-not-object-throw.js"));
});
describe("getOrInsert", () => {
it("throw-if-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsert/throw-if-key-cannot-be-held-weakly.js"));
});
describe("getOrInsertComputed", () => {
it("adds-object-element.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/adds-object-element.js"));
});
describe("getOrInsertComputed", () => {
it("adds-symbol-element.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/adds-symbol-element.js"));
});
describe("getOrInsertComputed", () => {
it("adds-value-different-callbackfn.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/adds-value-different-callbackfn.js"));
});
describe("getOrInsertComputed", () => {
it("callbackfn-throws.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/callbackfn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("check-callback-fn-args.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/check-callback-fn-args.js"));
});
describe("getOrInsertComputed", () => {
it("check-state-after-callback-fn-throws.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/check-state-after-callback-fn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-evaluate-callbackfn-if-key-present.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-evaluate-callbackfn-if-key-present.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-weakmapdata-internal-slot-array.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-array.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-weakmapdata-internal-slot-object.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-object.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-weakmapdata-internal-slot-weakmap-prototype.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js"));
});
describe("getOrInsertComputed", () => {
it("getOrInsertComputed.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/getOrInsertComputed.js"));
});
describe("getOrInsertComputed", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/not-a-constructor.js"));
});
describe("getOrInsertComputed", () => {
it("not-a-function-callbackfn-throws.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/not-a-function-callbackfn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("overwrites-mutation-from-callbackfn.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/overwrites-mutation-from-callbackfn.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-not-present-object-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-not-present-object-key.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-not-present-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-not-present-symbol-key.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-present-object-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-present-object-key.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-present-symbol-key.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/returns-value-if-key-is-present-symbol-key.js"));
});
describe("getOrInsertComputed", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/this-not-object-throw.js"));
});
describe("getOrInsertComputed", () => {
it("throw-if-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/getOrInsertComputed/throw-if-key-cannot-be-held-weakly.js"));
});
describe("has", () => {
it("does-not-have-weakmapdata-internal-slot-array.js", createTestHandler("built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-array.js"));
});
describe("has", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("has", () => {
it("does-not-have-weakmapdata-internal-slot-object.js", createTestHandler("built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-object.js"));
});
describe("has", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("has", () => {
it("does-not-have-weakmapdata-internal-slot-weakmap-prototype.js", createTestHandler("built-ins/WeakMap/prototype/has/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js"));
});
describe("has", () => {
it("has.js", createTestHandler("built-ins/WeakMap/prototype/has/has.js"));
});
describe("has", () => {
it("length.js", createTestHandler("built-ins/WeakMap/prototype/has/length.js"));
});
describe("has", () => {
it("name.js", createTestHandler("built-ins/WeakMap/prototype/has/name.js"));
});
describe("has", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/has/not-a-constructor.js"));
});
describe("has", () => {
it("returns-false-when-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/has/returns-false-when-key-cannot-be-held-weakly.js"));
});
describe("has", () => {
it("returns-false-when-object-key-not-present.js", createTestHandler("built-ins/WeakMap/prototype/has/returns-false-when-object-key-not-present.js"));
});
describe("has", () => {
it("returns-false-when-symbol-key-not-present.js", createTestHandler("built-ins/WeakMap/prototype/has/returns-false-when-symbol-key-not-present.js"));
});
describe("has", () => {
it("returns-true-when-object-key-present.js", createTestHandler("built-ins/WeakMap/prototype/has/returns-true-when-object-key-present.js"));
});
describe("has", () => {
it("returns-true-when-symbol-key-present.js", createTestHandler("built-ins/WeakMap/prototype/has/returns-true-when-symbol-key-present.js"));
});
describe("has", () => {
it("this-not-object-throw-boolean.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-boolean.js"));
});
describe("has", () => {
it("this-not-object-throw-null.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-null.js"));
});
describe("has", () => {
it("this-not-object-throw-number.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-number.js"));
});
describe("has", () => {
it("this-not-object-throw-string.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-string.js"));
});
describe("has", () => {
it("this-not-object-throw-symbol.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-symbol.js"));
});
describe("has", () => {
it("this-not-object-throw-undefined.js", createTestHandler("built-ins/WeakMap/prototype/has/this-not-object-throw-undefined.js"));
});
it("prototype-attributes.js", createTestHandler("built-ins/WeakMap/prototype/prototype-attributes.js"));
describe("set", () => {
it("adds-object-element.js", createTestHandler("built-ins/WeakMap/prototype/set/adds-object-element.js"));
});
describe("set", () => {
it("adds-symbol-element.js", createTestHandler("built-ins/WeakMap/prototype/set/adds-symbol-element.js"));
});
describe("set", () => {
it("does-not-have-weakmapdata-internal-slot-array.js", createTestHandler("built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-array.js"));
});
describe("set", () => {
it("does-not-have-weakmapdata-internal-slot-map.js", createTestHandler("built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-map.js"));
});
describe("set", () => {
it("does-not-have-weakmapdata-internal-slot-object.js", createTestHandler("built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-object.js"));
});
describe("set", () => {
it("does-not-have-weakmapdata-internal-slot-set.js", createTestHandler("built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-set.js"));
});
describe("set", () => {
it("does-not-have-weakmapdata-internal-slot-weakmap-prototype.js", createTestHandler("built-ins/WeakMap/prototype/set/does-not-have-weakmapdata-internal-slot-weakmap-prototype.js"));
});
describe("set", () => {
it("length.js", createTestHandler("built-ins/WeakMap/prototype/set/length.js"));
});
describe("set", () => {
it("name.js", createTestHandler("built-ins/WeakMap/prototype/set/name.js"));
});
describe("set", () => {
it("not-a-constructor.js", createTestHandler("built-ins/WeakMap/prototype/set/not-a-constructor.js"));
});
describe("set", () => {
it("returns-this-when-ignoring-duplicate.js", createTestHandler("built-ins/WeakMap/prototype/set/returns-this-when-ignoring-duplicate.js"));
});
describe("set", () => {
it("returns-this.js", createTestHandler("built-ins/WeakMap/prototype/set/returns-this.js"));
});
describe("set", () => {
it("set.js", createTestHandler("built-ins/WeakMap/prototype/set/set.js"));
});
describe("set", () => {
it("this-not-object-throw-boolean.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-boolean.js"));
});
describe("set", () => {
it("this-not-object-throw-null.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-null.js"));
});
describe("set", () => {
it("this-not-object-throw-number.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-number.js"));
});
describe("set", () => {
it("this-not-object-throw-string.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-string.js"));
});
describe("set", () => {
it("this-not-object-throw-symbol.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-symbol.js"));
});
describe("set", () => {
it("this-not-object-throw-undefined.js", createTestHandler("built-ins/WeakMap/prototype/set/this-not-object-throw-undefined.js"));
});
describe("set", () => {
it("throw-if-key-cannot-be-held-weakly.js", createTestHandler("built-ins/WeakMap/prototype/set/throw-if-key-cannot-be-held-weakly.js"));
});
});
