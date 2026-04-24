import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "15.2.3.1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/15.2.3.1.js"),
  );
  it(
    "S15.2.3.1_A1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.3.1_A1.js"),
  );
  it(
    "S15.2.3.1_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.3.1_A2.js"),
  );
  it(
    "S15.2.3.1_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.3.1_A3.js"),
  );
  it(
    "S15.2.4_A1_T1.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.4_A1_T1.js"),
  );
  it(
    "S15.2.4_A1_T2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.4_A1_T2.js"),
  );
  it(
    "S15.2.4_A2.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.4_A2.js"),
  );
  it(
    "S15.2.4_A3.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.4_A3.js"),
  );
  it(
    "S15.2.4_A4.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/S15.2.4_A4.js"),
  );
  describe("__defineGetter__", () => {
    it(
      "define-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/define-abrupt.js"),
    );
    it(
      "define-existing.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/define-existing.js"),
    );
    it(
      "define-new.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/define-new.js"),
    );
    it(
      "define-non-configurable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/define-non-configurable.js"),
    );
    it(
      "define-non-extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/define-non-extensible.js"),
    );
    it(
      "getter-non-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/getter-non-callable.js"),
    );
    it(
      "key-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/key-invalid.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/prop-desc.js"),
    );
    it(
      "this-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineGetter__/this-non-obj.js"),
    );
  });
  describe("__defineSetter__", () => {
    it(
      "define-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/define-abrupt.js"),
    );
    it(
      "define-existing.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/define-existing.js"),
    );
    it(
      "define-new.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/define-new.js"),
    );
    it(
      "define-non-configurable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/define-non-configurable.js"),
    );
    it(
      "define-non-extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/define-non-extensible.js"),
    );
    it(
      "key-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/key-invalid.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/prop-desc.js"),
    );
    it(
      "setter-non-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/setter-non-callable.js"),
    );
    it(
      "this-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__defineSetter__/this-non-obj.js"),
    );
  });
  describe("__lookupGetter__", () => {
    it(
      "key-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/key-invalid.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/length.js"),
    );
    it(
      "lookup-not-found.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-not-found.js"),
    );
    it(
      "lookup-own-acsr-w-getter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-acsr-w-getter.js"),
    );
    it(
      "lookup-own-acsr-wo-getter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-acsr-wo-getter.js"),
    );
    it(
      "lookup-own-data.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-data.js"),
    );
    it(
      "lookup-own-get-err.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-get-err.js"),
    );
    it(
      "lookup-own-proto-err.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-own-proto-err.js"),
    );
    it(
      "lookup-proto-acsr-w-getter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/__lookupGetter__/lookup-proto-acsr-w-getter.js",
      ),
    );
    it(
      "lookup-proto-acsr-wo-getter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/__lookupGetter__/lookup-proto-acsr-wo-getter.js",
      ),
    );
    it(
      "lookup-proto-data.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-data.js"),
    );
    it(
      "lookup-proto-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-get-err.js"),
    );
    it(
      "lookup-proto-proto-err.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/lookup-proto-proto-err.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/prop-desc.js"),
    );
    it(
      "this-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupGetter__/this-non-obj.js"),
    );
  });
  describe("__lookupSetter__", () => {
    it(
      "key-invalid.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/key-invalid.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/length.js"),
    );
    it(
      "lookup-not-found.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-not-found.js"),
    );
    it(
      "lookup-own-acsr-w-setter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-acsr-w-setter.js"),
    );
    it(
      "lookup-own-acsr-wo-setter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-acsr-wo-setter.js"),
    );
    it(
      "lookup-own-data.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-data.js"),
    );
    it(
      "lookup-own-get-err.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-get-err.js"),
    );
    it(
      "lookup-own-proto-err.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-own-proto-err.js"),
    );
    it(
      "lookup-proto-acsr-w-setter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/__lookupSetter__/lookup-proto-acsr-w-setter.js",
      ),
    );
    it(
      "lookup-proto-acsr-wo-setter.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/__lookupSetter__/lookup-proto-acsr-wo-setter.js",
      ),
    );
    it(
      "lookup-proto-data.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-data.js"),
    );
    it(
      "lookup-proto-get-err.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-get-err.js"),
    );
    it(
      "lookup-proto-proto-err.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/lookup-proto-proto-err.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/prop-desc.js"),
    );
    it(
      "this-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__lookupSetter__/this-non-obj.js"),
    );
  });
  describe("__proto__", () => {
    it(
      "get-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/get-abrupt.js"),
    );
    it(
      "get-fn-name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/get-fn-name.js"),
    );
    it(
      "get-ordinary-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/get-ordinary-obj.js"),
    );
    it(
      "get-to-obj-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/get-to-obj-abrupt.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/prop-desc.js"),
    );
    it(
      "set-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-abrupt.js"),
    );
    it(
      "set-cycle-shadowed.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-cycle-shadowed.js"),
    );
    it(
      "set-cycle.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-cycle.js"),
    );
    it(
      "set-fn-name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-fn-name.js"),
    );
    it(
      "set-immutable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-immutable.js"),
    );
    it(
      "set-invalid-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-invalid-value.js"),
    );
    it(
      "set-non-extensible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-non-extensible.js"),
    );
    it(
      "set-non-obj-coercible.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-non-obj-coercible.js"),
    );
    it(
      "set-non-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-non-object.js"),
    );
    it(
      "set-ordinary-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/__proto__/set-ordinary-obj.js"),
    );
  });
  describe("constructor", () => {
    it(
      "S15.2.4.1_A1_T1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/constructor/S15.2.4.1_A1_T1.js"),
    );
    it(
      "S15.2.4.1_A1_T2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/constructor/S15.2.4.1_A1_T2.js"),
    );
  });
  it(
    "extensibility.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/extensibility.js"),
  );
  describe("hasOwnProperty", () => {
    it(
      "8.12.1-1_1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_1.js"),
    );
    it(
      "8.12.1-1_10.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_10.js"),
    );
    it(
      "8.12.1-1_11.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_11.js"),
    );
    it(
      "8.12.1-1_12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_12.js"),
    );
    it(
      "8.12.1-1_13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_13.js"),
    );
    it(
      "8.12.1-1_14.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_14.js"),
    );
    it(
      "8.12.1-1_15.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_15.js"),
    );
    it(
      "8.12.1-1_16.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_16.js"),
    );
    it(
      "8.12.1-1_17.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_17.js"),
    );
    it(
      "8.12.1-1_18.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_18.js"),
    );
    it(
      "8.12.1-1_19.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_19.js"),
    );
    it(
      "8.12.1-1_2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_2.js"),
    );
    it(
      "8.12.1-1_20.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_20.js"),
    );
    it(
      "8.12.1-1_21.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_21.js"),
    );
    it(
      "8.12.1-1_22.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_22.js"),
    );
    it(
      "8.12.1-1_23.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_23.js"),
    );
    it(
      "8.12.1-1_24.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_24.js"),
    );
    it(
      "8.12.1-1_25.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_25.js"),
    );
    it(
      "8.12.1-1_26.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_26.js"),
    );
    it(
      "8.12.1-1_27.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_27.js"),
    );
    it(
      "8.12.1-1_28.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_28.js"),
    );
    it(
      "8.12.1-1_29.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_29.js"),
    );
    it(
      "8.12.1-1_3.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_3.js"),
    );
    it(
      "8.12.1-1_30.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_30.js"),
    );
    it(
      "8.12.1-1_31.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_31.js"),
    );
    it(
      "8.12.1-1_32.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_32.js"),
    );
    it(
      "8.12.1-1_33.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_33.js"),
    );
    it(
      "8.12.1-1_34.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_34.js"),
    );
    it(
      "8.12.1-1_35.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_35.js"),
    );
    it(
      "8.12.1-1_36.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_36.js"),
    );
    it(
      "8.12.1-1_37.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_37.js"),
    );
    it(
      "8.12.1-1_38.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_38.js"),
    );
    it(
      "8.12.1-1_39.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_39.js"),
    );
    it(
      "8.12.1-1_4.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_4.js"),
    );
    it(
      "8.12.1-1_40.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_40.js"),
    );
    it(
      "8.12.1-1_41.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_41.js"),
    );
    it(
      "8.12.1-1_42.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_42.js"),
    );
    it(
      "8.12.1-1_43.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_43.js"),
    );
    it(
      "8.12.1-1_44.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_44.js"),
    );
    it(
      "8.12.1-1_45.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_45.js"),
    );
    it(
      "8.12.1-1_46.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_46.js"),
    );
    it(
      "8.12.1-1_47.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_47.js"),
    );
    it(
      "8.12.1-1_48.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_48.js"),
    );
    it(
      "8.12.1-1_49.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_49.js"),
    );
    it(
      "8.12.1-1_5.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_5.js"),
    );
    it(
      "8.12.1-1_6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_6.js"),
    );
    it(
      "8.12.1-1_7.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_7.js"),
    );
    it(
      "8.12.1-1_8.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_8.js"),
    );
    it(
      "8.12.1-1_9.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/8.12.1-1_9.js"),
    );
    it(
      "S15.2.4.5_A12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A12.js"),
    );
    it(
      "S15.2.4.5_A13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A13.js"),
    );
    it(
      "S15.2.4.5_A1_T1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T1.js"),
    );
    it(
      "S15.2.4.5_A1_T2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T2.js"),
    );
    it(
      "S15.2.4.5_A1_T3.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A1_T3.js"),
    );
    it(
      "S15.2.4.5_A6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/S15.2.4.5_A6.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/not-a-constructor.js"),
    );
    it(
      "symbol_own_property.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_own_property.js"),
    );
    it(
      "symbol_property_toPrimitive.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_toPrimitive.js"),
    );
    it(
      "symbol_property_toString.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_toString.js"),
    );
    it(
      "symbol_property_valueOf.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/hasOwnProperty/symbol_property_valueOf.js"),
    );
    it(
      "topropertykey_before_toobject.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/hasOwnProperty/topropertykey_before_toobject.js",
      ),
    );
  });
  describe("isPrototypeOf", () => {
    it(
      "arg-is-proxy.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/isPrototypeOf/arg-is-proxy.js"),
    );
    it(
      "builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/isPrototypeOf/builtin.js"),
    );
    it(
      "length.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/isPrototypeOf/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/isPrototypeOf/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/isPrototypeOf/not-a-constructor.js"),
    );
    it(
      "null-this-and-object-arg-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/isPrototypeOf/null-this-and-object-arg-throws.js",
      ),
    );
    it(
      "null-this-and-primitive-arg-returns-false.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/isPrototypeOf/null-this-and-primitive-arg-returns-false.js",
      ),
    );
    it(
      "this-value-is-in-prototype-chain-of-arg.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/isPrototypeOf/this-value-is-in-prototype-chain-of-arg.js",
      ),
    );
    it(
      "undefined-this-and-object-arg-throws.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/isPrototypeOf/undefined-this-and-object-arg-throws.js",
      ),
    );
    it(
      "undefined-this-and-primitive-arg-returns-false.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/isPrototypeOf/undefined-this-and-primitive-arg-returns-false.js",
      ),
    );
  });
  describe("propertyIsEnumerable", () => {
    it(
      "S15.2.4.7_A10.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A10.js"),
    );
    it(
      "S15.2.4.7_A11.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A11.js"),
    );
    it(
      "S15.2.4.7_A12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A12.js"),
    );
    it(
      "S15.2.4.7_A13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A13.js"),
    );
    it(
      "S15.2.4.7_A1_T1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A1_T1.js"),
    );
    it(
      "S15.2.4.7_A2_T1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A2_T1.js"),
    );
    it(
      "S15.2.4.7_A2_T2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A2_T2.js"),
    );
    it(
      "S15.2.4.7_A6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A6.js"),
    );
    it(
      "S15.2.4.7_A8.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A8.js"),
    );
    it(
      "S15.2.4.7_A9.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/S15.2.4.7_A9.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/not-a-constructor.js"),
    );
    it(
      "symbol_own_property.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/propertyIsEnumerable/symbol_own_property.js"),
    );
    it(
      "symbol_property_toPrimitive.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/propertyIsEnumerable/symbol_property_toPrimitive.js",
      ),
    );
    it(
      "symbol_property_toString.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/propertyIsEnumerable/symbol_property_toString.js",
      ),
    );
    it(
      "symbol_property_valueOf.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/propertyIsEnumerable/symbol_property_valueOf.js",
      ),
    );
  });
  it(
    "proto.js",
    { tags: ["known-passing"] },
    createTestHandler("built-ins/Object/prototype/proto.js"),
  );
  it(
    "setPrototypeOf-with-different-values.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-different-values.js"),
  );
  it(
    "setPrototypeOf-with-non-circular-values-__proto__.js",
    { tags: ["known-failing"] },
    createTestHandler(
      "built-ins/Object/prototype/setPrototypeOf-with-non-circular-values-__proto__.js",
    ),
  );
  it(
    "setPrototypeOf-with-non-circular-values.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-non-circular-values.js"),
  );
  it(
    "setPrototypeOf-with-same-value.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Object/prototype/setPrototypeOf-with-same-value.js"),
  );
  describe("toLocaleString", () => {
    it(
      "S15.2.4.3_A1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A1.js"),
    );
    it(
      "S15.2.4.3_A10.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A10.js"),
    );
    it(
      "S15.2.4.3_A11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A11.js"),
    );
    it(
      "S15.2.4.3_A12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A12.js"),
    );
    it(
      "S15.2.4.3_A13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A13.js"),
    );
    it(
      "S15.2.4.3_A6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A6.js"),
    );
    it(
      "S15.2.4.3_A8.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A8.js"),
    );
    it(
      "S15.2.4.3_A9.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/S15.2.4.3_A9.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/not-a-constructor.js"),
    );
    it(
      "primitive_this_value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/primitive_this_value.js"),
    );
    it(
      "primitive_this_value_getter.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toLocaleString/primitive_this_value_getter.js"),
    );
  });
  describe("toString", () => {
    it(
      "Object.prototype.toString.call-arguments.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-arguments.js",
      ),
    );
    it(
      "Object.prototype.toString.call-array.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-array.js",
      ),
    );
    it(
      "Object.prototype.toString.call-bigint.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-bigint.js",
      ),
    );
    it(
      "Object.prototype.toString.call-boolean.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-boolean.js",
      ),
    );
    it(
      "Object.prototype.toString.call-date.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-date.js",
      ),
    );
    it(
      "Object.prototype.toString.call-error.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-error.js",
      ),
    );
    it(
      "Object.prototype.toString.call-function.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-function.js",
      ),
    );
    it(
      "Object.prototype.toString.call-null.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-null.js",
      ),
    );
    it(
      "Object.prototype.toString.call-number.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-number.js",
      ),
    );
    it(
      "Object.prototype.toString.call-object.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-object.js",
      ),
    );
    it(
      "Object.prototype.toString.call-regexp.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-regexp.js",
      ),
    );
    it(
      "Object.prototype.toString.call-string.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-string.js",
      ),
    );
    it(
      "Object.prototype.toString.call-undefined.js",
      { tags: ["known-passing"] },
      createTestHandler(
        "built-ins/Object/prototype/toString/Object.prototype.toString.call-undefined.js",
      ),
    );
    it(
      "direct-invocation.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/direct-invocation.js"),
    );
    it(
      "get-symbol-tag-err.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/get-symbol-tag-err.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/name.js"),
    );
    it(
      "no-prototype-property.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/no-prototype-property.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/not-a-constructor.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/prop-desc.js"),
    );
    it(
      "proxy-array.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/proxy-array.js"),
    );
    it(
      "proxy-function-async.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/proxy-function-async.js"),
    );
    it(
      "proxy-function.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/proxy-function.js"),
    );
    it(
      "proxy-revoked-during-get-call.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/proxy-revoked-during-get-call.js"),
    );
    it(
      "proxy-revoked.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/proxy-revoked.js"),
    );
    it(
      "symbol-tag-array-builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-array-builtin.js"),
    );
    it(
      "symbol-tag-generators-builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-generators-builtin.js"),
    );
    it(
      "symbol-tag-map-builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-map-builtin.js"),
    );
    it(
      "symbol-tag-non-str-bigint.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-bigint.js"),
    );
    it(
      "symbol-tag-non-str-builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-builtin.js"),
    );
    it(
      "symbol-tag-non-str-proxy-function.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str-proxy-function.js"),
    );
    it(
      "symbol-tag-non-str.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-non-str.js"),
    );
    it(
      "symbol-tag-override-bigint.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-bigint.js"),
    );
    it(
      "symbol-tag-override-instances.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-instances.js"),
    );
    it(
      "symbol-tag-override-primitives.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-override-primitives.js"),
    );
    it(
      "symbol-tag-promise-builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-promise-builtin.js"),
    );
    it(
      "symbol-tag-set-builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-set-builtin.js"),
    );
    it(
      "symbol-tag-str.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-str.js"),
    );
    it(
      "symbol-tag-string-builtin.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-string-builtin.js"),
    );
    it(
      "symbol-tag-weakmap-builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-weakmap-builtin.js"),
    );
    it(
      "symbol-tag-weakset-builtin.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/toString/symbol-tag-weakset-builtin.js"),
    );
  });
  describe("valueOf", () => {
    it(
      "15.2.4.4-1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/15.2.4.4-1.js"),
    );
    it(
      "15.2.4.4-2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/15.2.4.4-2.js"),
    );
    it(
      "S15.2.4.4_A10.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A10.js"),
    );
    it(
      "S15.2.4.4_A11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A11.js"),
    );
    it(
      "S15.2.4.4_A12.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A12.js"),
    );
    it(
      "S15.2.4.4_A13.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A13.js"),
    );
    it(
      "S15.2.4.4_A14.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A14.js"),
    );
    it(
      "S15.2.4.4_A15.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A15.js"),
    );
    it(
      "S15.2.4.4_A1_T1.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T1.js"),
    );
    it(
      "S15.2.4.4_A1_T2.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T2.js"),
    );
    it(
      "S15.2.4.4_A1_T3.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T3.js"),
    );
    it(
      "S15.2.4.4_A1_T4.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T4.js"),
    );
    it(
      "S15.2.4.4_A1_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T5.js"),
    );
    it(
      "S15.2.4.4_A1_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T6.js"),
    );
    it(
      "S15.2.4.4_A1_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A1_T7.js"),
    );
    it(
      "S15.2.4.4_A6.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A6.js"),
    );
    it(
      "S15.2.4.4_A8.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A8.js"),
    );
    it(
      "S15.2.4.4_A9.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/S15.2.4.4_A9.js"),
    );
    it(
      "name.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-passing"] },
      createTestHandler("built-ins/Object/prototype/valueOf/not-a-constructor.js"),
    );
  });
});
