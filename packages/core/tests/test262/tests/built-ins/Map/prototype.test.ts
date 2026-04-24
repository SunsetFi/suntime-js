import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
describe("Symbol.iterator", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/Symbol.iterator/not-a-constructor.js"));
});
it("Symbol.iterator.js", createTestHandler("built-ins/Map/prototype/Symbol.iterator.js"));
it("Symbol.toStringTag.js", createTestHandler("built-ins/Map/prototype/Symbol.toStringTag.js"));
describe("clear", () => {
it("clear-map.js", createTestHandler("built-ins/Map/prototype/clear/clear-map.js"));
});
describe("clear", () => {
it("clear.js", createTestHandler("built-ins/Map/prototype/clear/clear.js"));
});
describe("clear", () => {
it("context-is-not-map-object.js", createTestHandler("built-ins/Map/prototype/clear/context-is-not-map-object.js"));
});
describe("clear", () => {
it("context-is-not-object.js", createTestHandler("built-ins/Map/prototype/clear/context-is-not-object.js"));
});
describe("clear", () => {
it("context-is-set-object-throws.js", createTestHandler("built-ins/Map/prototype/clear/context-is-set-object-throws.js"));
});
describe("clear", () => {
it("context-is-weakmap-object-throws.js", createTestHandler("built-ins/Map/prototype/clear/context-is-weakmap-object-throws.js"));
});
describe("clear", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/clear/length.js"));
});
describe("clear", () => {
it("map-data-list-is-preserved.js", createTestHandler("built-ins/Map/prototype/clear/map-data-list-is-preserved.js"));
});
describe("clear", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/clear/name.js"));
});
describe("clear", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/clear/not-a-constructor.js"));
});
describe("clear", () => {
it("returns-undefined.js", createTestHandler("built-ins/Map/prototype/clear/returns-undefined.js"));
});
it("constructor.js", createTestHandler("built-ins/Map/prototype/constructor.js"));
describe("delete", () => {
it("context-is-not-map-object.js", createTestHandler("built-ins/Map/prototype/delete/context-is-not-map-object.js"));
});
describe("delete", () => {
it("context-is-not-object.js", createTestHandler("built-ins/Map/prototype/delete/context-is-not-object.js"));
});
describe("delete", () => {
it("context-is-set-object-throws.js", createTestHandler("built-ins/Map/prototype/delete/context-is-set-object-throws.js"));
});
describe("delete", () => {
it("context-is-weakmap-object-throws.js", createTestHandler("built-ins/Map/prototype/delete/context-is-weakmap-object-throws.js"));
});
describe("delete", () => {
it("delete.js", createTestHandler("built-ins/Map/prototype/delete/delete.js"));
});
describe("delete", () => {
it("does-not-break-iterators.js", createTestHandler("built-ins/Map/prototype/delete/does-not-break-iterators.js"));
});
describe("delete", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/delete/length.js"));
});
describe("delete", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/delete/name.js"));
});
describe("delete", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/delete/not-a-constructor.js"));
});
describe("delete", () => {
it("returns-false.js", createTestHandler("built-ins/Map/prototype/delete/returns-false.js"));
});
describe("delete", () => {
it("returns-true-for-deleted-entry.js", createTestHandler("built-ins/Map/prototype/delete/returns-true-for-deleted-entry.js"));
});
it("descriptor.js", createTestHandler("built-ins/Map/prototype/descriptor.js"));
describe("entries", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/entries/does-not-have-mapdata-internal-slot-set.js"));
});
describe("entries", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/entries/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("entries", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/entries/does-not-have-mapdata-internal-slot.js"));
});
describe("entries", () => {
it("entries.js", createTestHandler("built-ins/Map/prototype/entries/entries.js"));
});
describe("entries", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/entries/length.js"));
});
describe("entries", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/entries/name.js"));
});
describe("entries", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/entries/not-a-constructor.js"));
});
describe("entries", () => {
it("returns-iterator-empty.js", createTestHandler("built-ins/Map/prototype/entries/returns-iterator-empty.js"));
});
describe("entries", () => {
it("returns-iterator.js", createTestHandler("built-ins/Map/prototype/entries/returns-iterator.js"));
});
describe("entries", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/entries/this-not-object-throw.js"));
});
describe("forEach", () => {
it("callback-parameters.js", createTestHandler("built-ins/Map/prototype/forEach/callback-parameters.js"));
});
describe("forEach", () => {
it("callback-result-is-abrupt.js", createTestHandler("built-ins/Map/prototype/forEach/callback-result-is-abrupt.js"));
});
describe("forEach", () => {
it("callback-this-non-strict.js", createTestHandler("built-ins/Map/prototype/forEach/callback-this-non-strict.js"));
});
describe("forEach", () => {
it("callback-this-strict.js", createTestHandler("built-ins/Map/prototype/forEach/callback-this-strict.js"));
});
describe("forEach", () => {
it("deleted-values-during-foreach.js", createTestHandler("built-ins/Map/prototype/forEach/deleted-values-during-foreach.js"));
});
describe("forEach", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/forEach/does-not-have-mapdata-internal-slot-set.js"));
});
describe("forEach", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/forEach/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("forEach", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/forEach/does-not-have-mapdata-internal-slot.js"));
});
describe("forEach", () => {
it("first-argument-is-not-callable.js", createTestHandler("built-ins/Map/prototype/forEach/first-argument-is-not-callable.js"));
});
describe("forEach", () => {
it("forEach.js", createTestHandler("built-ins/Map/prototype/forEach/forEach.js"));
});
describe("forEach", () => {
it("iterates-in-key-insertion-order.js", createTestHandler("built-ins/Map/prototype/forEach/iterates-in-key-insertion-order.js"));
});
describe("forEach", () => {
it("iterates-values-added-after-foreach-begins.js", createTestHandler("built-ins/Map/prototype/forEach/iterates-values-added-after-foreach-begins.js"));
});
describe("forEach", () => {
it("iterates-values-deleted-then-readded.js", createTestHandler("built-ins/Map/prototype/forEach/iterates-values-deleted-then-readded.js"));
});
describe("forEach", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/forEach/length.js"));
});
describe("forEach", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/forEach/name.js"));
});
describe("forEach", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/forEach/not-a-constructor.js"));
});
describe("forEach", () => {
it("return-undefined.js", createTestHandler("built-ins/Map/prototype/forEach/return-undefined.js"));
});
describe("forEach", () => {
it("second-parameter-as-callback-context.js", createTestHandler("built-ins/Map/prototype/forEach/second-parameter-as-callback-context.js"));
});
describe("forEach", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/forEach/this-not-object-throw.js"));
});
describe("get", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/get/does-not-have-mapdata-internal-slot-set.js"));
});
describe("get", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/get/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("get", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/get/does-not-have-mapdata-internal-slot.js"));
});
describe("get", () => {
it("get.js", createTestHandler("built-ins/Map/prototype/get/get.js"));
});
describe("get", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/get/length.js"));
});
describe("get", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/get/name.js"));
});
describe("get", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/get/not-a-constructor.js"));
});
describe("get", () => {
it("returns-undefined.js", createTestHandler("built-ins/Map/prototype/get/returns-undefined.js"));
});
describe("get", () => {
it("returns-value-different-key-types.js", createTestHandler("built-ins/Map/prototype/get/returns-value-different-key-types.js"));
});
describe("get", () => {
it("returns-value-normalized-zero-key.js", createTestHandler("built-ins/Map/prototype/get/returns-value-normalized-zero-key.js"));
});
describe("get", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/get/this-not-object-throw.js"));
});
describe("getOrInsert", () => {
it("append-new-values-normalizes-zero-key.js", createTestHandler("built-ins/Map/prototype/getOrInsert/append-new-values-normalizes-zero-key.js"));
});
describe("getOrInsert", () => {
it("append-new-values.js", createTestHandler("built-ins/Map/prototype/getOrInsert/append-new-values.js"));
});
describe("getOrInsert", () => {
it("append-value-if-key-is-not-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsert/append-value-if-key-is-not-present-different-key-types.js"));
});
describe("getOrInsert", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/getOrInsert/does-not-have-mapdata-internal-slot-set.js"));
});
describe("getOrInsert", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/getOrInsert/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("getOrInsert", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/getOrInsert/does-not-have-mapdata-internal-slot.js"));
});
describe("getOrInsert", () => {
it("getOrInsert.js", createTestHandler("built-ins/Map/prototype/getOrInsert/getOrInsert.js"));
});
describe("getOrInsert", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/getOrInsert/length.js"));
});
describe("getOrInsert", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/getOrInsert/name.js"));
});
describe("getOrInsert", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/getOrInsert/not-a-constructor.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-not-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsert/returns-value-if-key-is-not-present-different-key-types.js"));
});
describe("getOrInsert", () => {
it("returns-value-if-key-is-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsert/returns-value-if-key-is-present-different-key-types.js"));
});
describe("getOrInsert", () => {
it("returns-value-normalized-zero-key.js", createTestHandler("built-ins/Map/prototype/getOrInsert/returns-value-normalized-zero-key.js"));
});
describe("getOrInsert", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/getOrInsert/this-not-object-throw.js"));
});
describe("getOrInsertComputed", () => {
it("append-new-values-normalizes-zero-key.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/append-new-values-normalizes-zero-key.js"));
});
describe("getOrInsertComputed", () => {
it("append-new-values.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/append-new-values.js"));
});
describe("getOrInsertComputed", () => {
it("append-value-if-key-is-not-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/append-value-if-key-is-not-present-different-key-types.js"));
});
describe("getOrInsertComputed", () => {
it("callbackfn-throws.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/callbackfn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("canonical-key-passed-to-callback.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/canonical-key-passed-to-callback.js"));
});
describe("getOrInsertComputed", () => {
it("check-callback-fn-args.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/check-callback-fn-args.js"));
});
describe("getOrInsertComputed", () => {
it("check-state-after-callback-fn-throws.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/check-state-after-callback-fn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("different-types-function-callbackfn-does-not-throw.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/different-types-function-callbackfn-does-not-throw.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-evaluate-callbackfn-if-key-present.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/does-not-evaluate-callbackfn-if-key-present.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/does-not-have-mapdata-internal-slot-set.js"));
});
describe("getOrInsertComputed", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("getOrInsertComputed", () => {
it("getOrInsertComputed.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/getOrInsertComputed.js"));
});
describe("getOrInsertComputed", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/not-a-constructor.js"));
});
describe("getOrInsertComputed", () => {
it("not-a-function-callbackfn-throws.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/not-a-function-callbackfn-throws.js"));
});
describe("getOrInsertComputed", () => {
it("overwrites-mutation-from-callbackfn.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/overwrites-mutation-from-callbackfn.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-not-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/returns-value-if-key-is-not-present-different-key-types.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-if-key-is-present-different-key-types.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/returns-value-if-key-is-present-different-key-types.js"));
});
describe("getOrInsertComputed", () => {
it("returns-value-normalized-zero-key.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/returns-value-normalized-zero-key.js"));
});
describe("getOrInsertComputed", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/getOrInsertComputed/this-not-object-throw.js"));
});
describe("has", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/has/does-not-have-mapdata-internal-slot-set.js"));
});
describe("has", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/has/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("has", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/has/does-not-have-mapdata-internal-slot.js"));
});
describe("has", () => {
it("has.js", createTestHandler("built-ins/Map/prototype/has/has.js"));
});
describe("has", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/has/length.js"));
});
describe("has", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/has/name.js"));
});
describe("has", () => {
it("normalizes-zero-key.js", createTestHandler("built-ins/Map/prototype/has/normalizes-zero-key.js"));
});
describe("has", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/has/not-a-constructor.js"));
});
describe("has", () => {
it("return-false-different-key-types.js", createTestHandler("built-ins/Map/prototype/has/return-false-different-key-types.js"));
});
describe("has", () => {
it("return-true-different-key-types.js", createTestHandler("built-ins/Map/prototype/has/return-true-different-key-types.js"));
});
describe("has", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/has/this-not-object-throw.js"));
});
describe("keys", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/keys/does-not-have-mapdata-internal-slot-set.js"));
});
describe("keys", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/keys/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("keys", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/keys/does-not-have-mapdata-internal-slot.js"));
});
describe("keys", () => {
it("keys.js", createTestHandler("built-ins/Map/prototype/keys/keys.js"));
});
describe("keys", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/keys/length.js"));
});
describe("keys", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/keys/name.js"));
});
describe("keys", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/keys/not-a-constructor.js"));
});
describe("keys", () => {
it("returns-iterator-empty.js", createTestHandler("built-ins/Map/prototype/keys/returns-iterator-empty.js"));
});
describe("keys", () => {
it("returns-iterator.js", createTestHandler("built-ins/Map/prototype/keys/returns-iterator.js"));
});
describe("keys", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/keys/this-not-object-throw.js"));
});
describe("set", () => {
it("append-new-values-normalizes-zero-key.js", createTestHandler("built-ins/Map/prototype/set/append-new-values-normalizes-zero-key.js"));
});
describe("set", () => {
it("append-new-values-return-map.js", createTestHandler("built-ins/Map/prototype/set/append-new-values-return-map.js"));
});
describe("set", () => {
it("append-new-values.js", createTestHandler("built-ins/Map/prototype/set/append-new-values.js"));
});
describe("set", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/set/does-not-have-mapdata-internal-slot-set.js"));
});
describe("set", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/set/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("set", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/set/does-not-have-mapdata-internal-slot.js"));
});
describe("set", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/set/length.js"));
});
describe("set", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/set/name.js"));
});
describe("set", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/set/not-a-constructor.js"));
});
describe("set", () => {
it("replaces-a-value-normalizes-zero-key.js", createTestHandler("built-ins/Map/prototype/set/replaces-a-value-normalizes-zero-key.js"));
});
describe("set", () => {
it("replaces-a-value-returns-map.js", createTestHandler("built-ins/Map/prototype/set/replaces-a-value-returns-map.js"));
});
describe("set", () => {
it("replaces-a-value.js", createTestHandler("built-ins/Map/prototype/set/replaces-a-value.js"));
});
describe("set", () => {
it("set.js", createTestHandler("built-ins/Map/prototype/set/set.js"));
});
describe("set", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/set/this-not-object-throw.js"));
});
describe("size", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/size/does-not-have-mapdata-internal-slot-set.js"));
});
describe("size", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/size/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("size", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/size/does-not-have-mapdata-internal-slot.js"));
});
describe("size", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/size/length.js"));
});
describe("size", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/size/name.js"));
});
describe("size", () => {
it("returns-count-of-present-values-before-after-set-clear.js", createTestHandler("built-ins/Map/prototype/size/returns-count-of-present-values-before-after-set-clear.js"));
});
describe("size", () => {
it("returns-count-of-present-values-before-after-set-delete.js", createTestHandler("built-ins/Map/prototype/size/returns-count-of-present-values-before-after-set-delete.js"));
});
describe("size", () => {
it("returns-count-of-present-values-by-insertion.js", createTestHandler("built-ins/Map/prototype/size/returns-count-of-present-values-by-insertion.js"));
});
describe("size", () => {
it("returns-count-of-present-values-by-iterable.js", createTestHandler("built-ins/Map/prototype/size/returns-count-of-present-values-by-iterable.js"));
});
describe("size", () => {
it("size.js", createTestHandler("built-ins/Map/prototype/size/size.js"));
});
describe("size", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/size/this-not-object-throw.js"));
});
describe("values", () => {
it("does-not-have-mapdata-internal-slot-set.js", createTestHandler("built-ins/Map/prototype/values/does-not-have-mapdata-internal-slot-set.js"));
});
describe("values", () => {
it("does-not-have-mapdata-internal-slot-weakmap.js", createTestHandler("built-ins/Map/prototype/values/does-not-have-mapdata-internal-slot-weakmap.js"));
});
describe("values", () => {
it("does-not-have-mapdata-internal-slot.js", createTestHandler("built-ins/Map/prototype/values/does-not-have-mapdata-internal-slot.js"));
});
describe("values", () => {
it("length.js", createTestHandler("built-ins/Map/prototype/values/length.js"));
});
describe("values", () => {
it("name.js", createTestHandler("built-ins/Map/prototype/values/name.js"));
});
describe("values", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Map/prototype/values/not-a-constructor.js"));
});
describe("values", () => {
it("returns-iterator-empty.js", createTestHandler("built-ins/Map/prototype/values/returns-iterator-empty.js"));
});
describe("values", () => {
it("returns-iterator.js", createTestHandler("built-ins/Map/prototype/values/returns-iterator.js"));
});
describe("values", () => {
it("this-not-object-throw.js", createTestHandler("built-ins/Map/prototype/values/this-not-object-throw.js"));
});
describe("values", () => {
it("values.js", createTestHandler("built-ins/Map/prototype/values/values.js"));
});
});
