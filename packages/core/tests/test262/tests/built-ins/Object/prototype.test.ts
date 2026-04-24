import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
it("15.2.3.1.js", createTestHandler("built-ins/Object/prototype/15.2.3.1.js"));
it("S15.2.3.1_A1.js", createTestHandler("built-ins/Object/prototype/S15.2.3.1_A1.js"));
it("S15.2.3.1_A2.js", createTestHandler("built-ins/Object/prototype/S15.2.3.1_A2.js"));
it("S15.2.3.1_A3.js", createTestHandler("built-ins/Object/prototype/S15.2.3.1_A3.js"));
it("S15.2.4_A1_T1.js", createTestHandler("built-ins/Object/prototype/S15.2.4_A1_T1.js"));
it("S15.2.4_A1_T2.js", createTestHandler("built-ins/Object/prototype/S15.2.4_A1_T2.js"));
it("S15.2.4_A2.js", createTestHandler("built-ins/Object/prototype/S15.2.4_A2.js"));
it("S15.2.4_A3.js", createTestHandler("built-ins/Object/prototype/S15.2.4_A3.js"));
it("S15.2.4_A4.js", createTestHandler("built-ins/Object/prototype/S15.2.4_A4.js"));
describe("__defineGetter__", () => {
it("define-abrupt.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/define-abrupt.js"));
});
describe("__defineGetter__", () => {
it("define-existing.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/define-existing.js"));
});
describe("__defineGetter__", () => {
it("define-new.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/define-new.js"));
});
describe("__defineGetter__", () => {
it("define-non-configurable.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/define-non-configurable.js"));
});
describe("__defineGetter__", () => {
it("define-non-extensible.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/define-non-extensible.js"));
});
describe("__defineGetter__", () => {
it("getter-non-callable.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/getter-non-callable.js"));
});
describe("__defineGetter__", () => {
it("key-invalid.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/key-invalid.js"));
});
describe("__defineGetter__", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/length.js"));
});
describe("__defineGetter__", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/name.js"));
});
describe("__defineGetter__", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/prop-desc.js"));
});
describe("__defineGetter__", () => {
it("this-non-obj.js", createTestHandler("built-ins/Object/prototype/__defineGetter__/this-non-obj.js"));
});
describe("__defineSetter__", () => {
it("define-abrupt.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/define-abrupt.js"));
});
describe("__defineSetter__", () => {
it("define-existing.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/define-existing.js"));
});
describe("__defineSetter__", () => {
it("define-new.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/define-new.js"));
});
describe("__defineSetter__", () => {
it("define-non-configurable.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/define-non-configurable.js"));
});
describe("__defineSetter__", () => {
it("define-non-extensible.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/define-non-extensible.js"));
});
describe("__defineSetter__", () => {
it("key-invalid.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/key-invalid.js"));
});
describe("__defineSetter__", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/length.js"));
});
describe("__defineSetter__", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/name.js"));
});
describe("__defineSetter__", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/prop-desc.js"));
});
describe("__defineSetter__", () => {
it("setter-non-callable.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/setter-non-callable.js"));
});
describe("__defineSetter__", () => {
it("this-non-obj.js", createTestHandler("built-ins/Object/prototype/__defineSetter__/this-non-obj.js"));
});
describe("__lookupGetter__", () => {
it("key-invalid.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/key-invalid.js"));
});
describe("__lookupGetter__", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/length.js"));
});
describe("__lookupGetter__", () => {
it("lookup-not-found.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-not-found.js"));
});
describe("__lookupGetter__", () => {
it("lookup-own-acsr-w-getter.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-acsr-w-getter.js"));
});
describe("__lookupGetter__", () => {
it("lookup-own-acsr-wo-getter.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-acsr-wo-getter.js"));
});
describe("__lookupGetter__", () => {
it("lookup-own-data.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-data.js"));
});
describe("__lookupGetter__", () => {
it("lookup-own-get-err.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-get-err.js"));
});
describe("__lookupGetter__", () => {
it("lookup-own-proto-err.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-proto-err.js"));
});
describe("__lookupGetter__", () => {
it("lookup-proto-acsr-w-getter.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-acsr-w-getter.js"));
});
describe("__lookupGetter__", () => {
it("lookup-proto-acsr-wo-getter.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-acsr-wo-getter.js"));
});
describe("__lookupGetter__", () => {
it("lookup-proto-data.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-data.js"));
});
describe("__lookupGetter__", () => {
it("lookup-proto-get-err.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-get-err.js"));
});
describe("__lookupGetter__", () => {
it("lookup-proto-proto-err.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-proto-err.js"));
});
describe("__lookupGetter__", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/name.js"));
});
describe("__lookupGetter__", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/prop-desc.js"));
});
describe("__lookupGetter__", () => {
it("this-non-obj.js", createTestHandler("built-ins/Object/prototype/__lookupGetter__/this-non-obj.js"));
});
describe("__lookupSetter__", () => {
it("key-invalid.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/key-invalid.js"));
});
describe("__lookupSetter__", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/length.js"));
});
describe("__lookupSetter__", () => {
it("lookup-not-found.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-not-found.js"));
});
describe("__lookupSetter__", () => {
it("lookup-own-acsr-w-setter.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-acsr-w-setter.js"));
});
describe("__lookupSetter__", () => {
it("lookup-own-acsr-wo-setter.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-acsr-wo-setter.js"));
});
describe("__lookupSetter__", () => {
it("lookup-own-data.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-data.js"));
});
describe("__lookupSetter__", () => {
it("lookup-own-get-err.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-get-err.js"));
});
describe("__lookupSetter__", () => {
it("lookup-own-proto-err.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-proto-err.js"));
});
describe("__lookupSetter__", () => {
it("lookup-proto-acsr-w-setter.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-acsr-w-setter.js"));
});
describe("__lookupSetter__", () => {
it("lookup-proto-acsr-wo-setter.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-acsr-wo-setter.js"));
});
describe("__lookupSetter__", () => {
it("lookup-proto-data.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-data.js"));
});
describe("__lookupSetter__", () => {
it("lookup-proto-get-err.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-get-err.js"));
});
describe("__lookupSetter__", () => {
it("lookup-proto-proto-err.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-proto-err.js"));
});
describe("__lookupSetter__", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/name.js"));
});
describe("__lookupSetter__", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/prop-desc.js"));
});
describe("__lookupSetter__", () => {
it("this-non-obj.js", createTestHandler("built-ins/Object/prototype/__lookupSetter__/this-non-obj.js"));
});
describe("__proto__", () => {
it("get-abrupt.js", createTestHandler("built-ins/Object/prototype/__proto__/get-abrupt.js"));
});
describe("__proto__", () => {
it("get-fn-name.js", createTestHandler("built-ins/Object/prototype/__proto__/get-fn-name.js"));
});
describe("__proto__", () => {
it("get-ordinary-obj.js", createTestHandler("built-ins/Object/prototype/__proto__/get-ordinary-obj.js"));
});
describe("__proto__", () => {
it("get-to-obj-abrupt.js", createTestHandler("built-ins/Object/prototype/__proto__/get-to-obj-abrupt.js"));
});
describe("__proto__", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/__proto__/prop-desc.js"));
});
describe("__proto__", () => {
it("set-abrupt.js", createTestHandler("built-ins/Object/prototype/__proto__/set-abrupt.js"));
});
describe("__proto__", () => {
it("set-cycle-shadowed.js", createTestHandler("built-ins/Object/prototype/__proto__/set-cycle-shadowed.js"));
});
describe("__proto__", () => {
it("set-cycle.js", createTestHandler("built-ins/Object/prototype/__proto__/set-cycle.js"));
});
describe("__proto__", () => {
it("set-fn-name.js", createTestHandler("built-ins/Object/prototype/__proto__/set-fn-name.js"));
});
describe("__proto__", () => {
it("set-immutable.js", createTestHandler("built-ins/Object/prototype/__proto__/set-immutable.js"));
});
describe("__proto__", () => {
it("set-invalid-value.js", createTestHandler("built-ins/Object/prototype/__proto__/set-invalid-value.js"));
});
describe("__proto__", () => {
it("set-non-extensible.js", createTestHandler("built-ins/Object/prototype/__proto__/set-non-extensible.js"));
});
describe("__proto__", () => {
it("set-non-obj-coercible.js", createTestHandler("built-ins/Object/prototype/__proto__/set-non-obj-coercible.js"));
});
describe("__proto__", () => {
it("set-non-object.js", createTestHandler("built-ins/Object/prototype/__proto__/set-non-object.js"));
});
describe("__proto__", () => {
it("set-ordinary-obj.js", createTestHandler("built-ins/Object/prototype/__proto__/set-ordinary-obj.js"));
});
describe("constructor", () => {
it("S15.2.4.1_A1_T1.js", createTestHandler("built-ins/Object/prototype/constructor/S15.2.4.1_A1_T1.js"));
});
describe("constructor", () => {
it("S15.2.4.1_A1_T2.js", createTestHandler("built-ins/Object/prototype/constructor/S15.2.4.1_A1_T2.js"));
});
it("extensibility.js", createTestHandler("built-ins/Object/prototype/extensibility.js"));
describe("hasOwnProperty", () => {
it("8.12.1-1_1.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_1.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_10.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_10.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_11.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_11.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_12.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_12.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_13.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_13.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_14.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_14.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_15.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_15.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_16.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_16.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_17.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_17.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_18.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_18.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_19.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_19.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_2.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_2.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_20.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_20.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_21.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_21.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_22.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_22.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_23.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_23.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_24.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_24.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_25.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_25.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_26.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_26.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_27.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_27.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_28.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_28.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_29.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_29.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_3.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_3.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_30.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_30.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_31.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_31.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_32.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_32.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_33.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_33.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_34.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_34.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_35.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_35.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_36.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_36.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_37.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_37.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_38.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_38.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_39.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_39.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_4.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_4.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_40.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_40.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_41.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_41.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_42.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_42.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_43.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_43.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_44.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_44.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_45.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_45.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_46.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_46.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_47.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_47.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_48.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_48.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_49.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_49.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_5.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_5.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_6.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_6.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_7.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_7.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_8.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_8.js"));
});
describe("hasOwnProperty", () => {
it("8.12.1-1_9.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_9.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A12.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A12.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A13.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A13.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A1_T1.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T1.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A1_T2.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T2.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A1_T3.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T3.js"));
});
describe("hasOwnProperty", () => {
it("S15.2.4.5_A6.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A6.js"));
});
describe("hasOwnProperty", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/length.js"));
});
describe("hasOwnProperty", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/name.js"));
});
describe("hasOwnProperty", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/not-a-constructor.js"));
});
describe("hasOwnProperty", () => {
it("symbol_own_property.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_own_property.js"));
});
describe("hasOwnProperty", () => {
it("symbol_property_toPrimitive.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_toPrimitive.js"));
});
describe("hasOwnProperty", () => {
it("symbol_property_toString.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_toString.js"));
});
describe("hasOwnProperty", () => {
it("symbol_property_valueOf.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_valueOf.js"));
});
describe("hasOwnProperty", () => {
it("topropertykey_before_toobject.js", createTestHandler("built-ins/Object/prototype/hasOwnProperty/topropertykey_before_toobject.js"));
});
describe("isPrototypeOf", () => {
it("arg-is-proxy.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/arg-is-proxy.js"));
});
describe("isPrototypeOf", () => {
it("builtin.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/builtin.js"));
});
describe("isPrototypeOf", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/length.js"));
});
describe("isPrototypeOf", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/name.js"));
});
describe("isPrototypeOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/not-a-constructor.js"));
});
describe("isPrototypeOf", () => {
it("null-this-and-object-arg-throws.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/null-this-and-object-arg-throws.js"));
});
describe("isPrototypeOf", () => {
it("null-this-and-primitive-arg-returns-false.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/null-this-and-primitive-arg-returns-false.js"));
});
describe("isPrototypeOf", () => {
it("this-value-is-in-prototype-chain-of-arg.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/this-value-is-in-prototype-chain-of-arg.js"));
});
describe("isPrototypeOf", () => {
it("undefined-this-and-object-arg-throws.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/undefined-this-and-object-arg-throws.js"));
});
describe("isPrototypeOf", () => {
it("undefined-this-and-primitive-arg-returns-false.js", createTestHandler("built-ins/Object/prototype/isPrototypeOf/undefined-this-and-primitive-arg-returns-false.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A10.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A10.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A11.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A11.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A12.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A12.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A13.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A13.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A1_T1.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A1_T1.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A2_T1.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A2_T1.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A2_T2.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A2_T2.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A6.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A6.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A8.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A8.js"));
});
describe("propertyIsEnumerable", () => {
it("S15.2.4.7_A9.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A9.js"));
});
describe("propertyIsEnumerable", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/name.js"));
});
describe("propertyIsEnumerable", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/not-a-constructor.js"));
});
describe("propertyIsEnumerable", () => {
it("symbol_own_property.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/symbol_own_property.js"));
});
describe("propertyIsEnumerable", () => {
it("symbol_property_toPrimitive.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/symbol_property_toPrimitive.js"));
});
describe("propertyIsEnumerable", () => {
it("symbol_property_toString.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/symbol_property_toString.js"));
});
describe("propertyIsEnumerable", () => {
it("symbol_property_valueOf.js", createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/symbol_property_valueOf.js"));
});
it("proto.js", createTestHandler("built-ins/Object/prototype/proto.js"));
it("setPrototypeOf-with-different-values.js", createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-different-values.js"));
it("setPrototypeOf-with-non-circular-values-__proto__.js", createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-non-circular-values-__proto__.js"));
it("setPrototypeOf-with-non-circular-values.js", createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-non-circular-values.js"));
it("setPrototypeOf-with-same-value.js", createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-same-value.js"));
describe("toLocaleString", () => {
it("S15.2.4.3_A1.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A1.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A10.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A10.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A11.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A11.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A12.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A12.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A13.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A13.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A6.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A6.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A8.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A8.js"));
});
describe("toLocaleString", () => {
it("S15.2.4.3_A9.js", createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A9.js"));
});
describe("toLocaleString", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/toLocaleString/name.js"));
});
describe("toLocaleString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/toLocaleString/not-a-constructor.js"));
});
describe("toLocaleString", () => {
it("primitive_this_value.js", createTestHandler("built-ins/Object/prototype/toLocaleString/primitive_this_value.js"));
});
describe("toLocaleString", () => {
it("primitive_this_value_getter.js", createTestHandler("built-ins/Object/prototype/toLocaleString/primitive_this_value_getter.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-arguments.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-arguments.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-array.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-array.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-bigint.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-bigint.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-boolean.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-boolean.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-date.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-date.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-error.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-error.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-function.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-function.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-null.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-null.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-number.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-number.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-object.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-object.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-regexp.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-regexp.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-string.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-string.js"));
});
describe("toString", () => {
it("Object.prototype.toString.call-undefined.js", createTestHandler("built-ins/Object/prototype/toString/Object.prototype.toString.call-undefined.js"));
});
describe("toString", () => {
it("direct-invocation.js", createTestHandler("built-ins/Object/prototype/toString/direct-invocation.js"));
});
describe("toString", () => {
it("get-symbol-tag-err.js", createTestHandler("built-ins/Object/prototype/toString/get-symbol-tag-err.js"));
});
describe("toString", () => {
it("length.js", createTestHandler("built-ins/Object/prototype/toString/length.js"));
});
describe("toString", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/toString/name.js"));
});
describe("toString", () => {
it("no-prototype-property.js", createTestHandler("built-ins/Object/prototype/toString/no-prototype-property.js"));
});
describe("toString", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/toString/not-a-constructor.js"));
});
describe("toString", () => {
it("prop-desc.js", createTestHandler("built-ins/Object/prototype/toString/prop-desc.js"));
});
describe("toString", () => {
it("proxy-array.js", createTestHandler("built-ins/Object/prototype/toString/proxy-array.js"));
});
describe("toString", () => {
it("proxy-function-async.js", createTestHandler("built-ins/Object/prototype/toString/proxy-function-async.js"));
});
describe("toString", () => {
it("proxy-function.js", createTestHandler("built-ins/Object/prototype/toString/proxy-function.js"));
});
describe("toString", () => {
it("proxy-revoked-during-get-call.js", createTestHandler("built-ins/Object/prototype/toString/proxy-revoked-during-get-call.js"));
});
describe("toString", () => {
it("proxy-revoked.js", createTestHandler("built-ins/Object/prototype/toString/proxy-revoked.js"));
});
describe("toString", () => {
it("symbol-tag-array-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-array-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-generators-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-generators-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-map-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-map-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-non-str-bigint.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-bigint.js"));
});
describe("toString", () => {
it("symbol-tag-non-str-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-non-str-proxy-function.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-proxy-function.js"));
});
describe("toString", () => {
it("symbol-tag-non-str.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str.js"));
});
describe("toString", () => {
it("symbol-tag-override-bigint.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-bigint.js"));
});
describe("toString", () => {
it("symbol-tag-override-instances.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-instances.js"));
});
describe("toString", () => {
it("symbol-tag-override-primitives.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-primitives.js"));
});
describe("toString", () => {
it("symbol-tag-promise-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-promise-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-set-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-set-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-str.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-str.js"));
});
describe("toString", () => {
it("symbol-tag-string-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-string-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-weakmap-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-weakmap-builtin.js"));
});
describe("toString", () => {
it("symbol-tag-weakset-builtin.js", createTestHandler("built-ins/Object/prototype/toString/symbol-tag-weakset-builtin.js"));
});
describe("valueOf", () => {
it("15.2.4.4-1.js", createTestHandler("built-ins/Object/prototype/valueOf/15.2.4.4-1.js"));
});
describe("valueOf", () => {
it("15.2.4.4-2.js", createTestHandler("built-ins/Object/prototype/valueOf/15.2.4.4-2.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A10.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A10.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A11.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A11.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A12.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A12.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A13.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A13.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A14.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A14.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A15.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A15.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T1.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T1.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T2.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T2.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T3.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T3.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T4.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T4.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T5.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T5.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T6.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T6.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A1_T7.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T7.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A6.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A6.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A8.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A8.js"));
});
describe("valueOf", () => {
it("S15.2.4.4_A9.js", createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A9.js"));
});
describe("valueOf", () => {
it("name.js", createTestHandler("built-ins/Object/prototype/valueOf/name.js"));
});
describe("valueOf", () => {
it("not-a-constructor.js", createTestHandler("built-ins/Object/prototype/valueOf/not-a-constructor.js"));
});
});
