import { it, describe } from "vitest";
import { createTestHandler } from "../../../create-test-handler.js";

describe("prototype", () => {
  it(
    "S15.3.3.1_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.3.1_A1.js"),
  );
  it(
    "S15.3.3.1_A2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.3.1_A2.js"),
  );
  it(
    "S15.3.3.1_A3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.3.1_A3.js"),
  );
  it(
    "S15.3.3.1_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.3.1_A4.js"),
  );
  it(
    "S15.3.4_A1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A1.js"),
  );
  it(
    "S15.3.4_A2_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A2_T1.js"),
  );
  it(
    "S15.3.4_A2_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A2_T2.js"),
  );
  it(
    "S15.3.4_A2_T3.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A2_T3.js"),
  );
  it(
    "S15.3.4_A3_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A3_T1.js"),
  );
  it(
    "S15.3.4_A3_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A3_T2.js"),
  );
  it(
    "S15.3.4_A4.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A4.js"),
  );
  it(
    "S15.3.4_A5.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.4_A5.js"),
  );
  it(
    "S15.3.5.2_A1_T1.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.5.2_A1_T1.js"),
  );
  it(
    "S15.3.5.2_A1_T2.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/S15.3.5.2_A1_T2.js"),
  );
  describe("Symbol.hasInstance", () => {
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/name.js"),
    );
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/prop-desc.js"),
    );
    it(
      "this-val-bound-target.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/this-val-bound-target.js"),
    );
    it(
      "this-val-not-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/this-val-not-callable.js"),
    );
    it(
      "this-val-poisoned-prototype.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/Symbol.hasInstance/this-val-poisoned-prototype.js",
      ),
    );
    it(
      "this-val-prototype-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/Symbol.hasInstance/this-val-prototype-non-obj.js",
      ),
    );
    it(
      "value-get-prototype-of-err.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/Symbol.hasInstance/value-get-prototype-of-err.js",
      ),
    );
    it(
      "value-negative.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/value-negative.js"),
    );
    it(
      "value-non-obj.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/value-non-obj.js"),
    );
    it(
      "value-positive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/Symbol.hasInstance/value-positive.js"),
    );
  });
  describe("apply", () => {
    it(
      "15.3.4.3-1-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/15.3.4.3-1-s.js"),
    );
    it(
      "15.3.4.3-2-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/15.3.4.3-2-s.js"),
    );
    it(
      "15.3.4.3-3-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/15.3.4.3-3-s.js"),
    );
    it(
      "S15.3.4.3_A12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A12.js"),
    );
    it(
      "S15.3.4.3_A1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A1_T1.js"),
    );
    it(
      "S15.3.4.3_A1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A1_T2.js"),
    );
    it(
      "S15.3.4.3_A3_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T1.js"),
    );
    it(
      "S15.3.4.3_A3_T10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T10.js"),
    );
    it(
      "S15.3.4.3_A3_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T2.js"),
    );
    it(
      "S15.3.4.3_A3_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T3.js"),
    );
    it(
      "S15.3.4.3_A3_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T4.js"),
    );
    it(
      "S15.3.4.3_A3_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T5.js"),
    );
    it(
      "S15.3.4.3_A3_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T6.js"),
    );
    it(
      "S15.3.4.3_A3_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T7.js"),
    );
    it(
      "S15.3.4.3_A3_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T8.js"),
    );
    it(
      "S15.3.4.3_A3_T9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A3_T9.js"),
    );
    it(
      "S15.3.4.3_A5_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T1.js"),
    );
    it(
      "S15.3.4.3_A5_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T2.js"),
    );
    it(
      "S15.3.4.3_A5_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T3.js"),
    );
    it(
      "S15.3.4.3_A5_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T4.js"),
    );
    it(
      "S15.3.4.3_A5_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T5.js"),
    );
    it(
      "S15.3.4.3_A5_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T6.js"),
    );
    it(
      "S15.3.4.3_A5_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T7.js"),
    );
    it(
      "S15.3.4.3_A5_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A5_T8.js"),
    );
    it(
      "S15.3.4.3_A7_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T1.js"),
    );
    it(
      "S15.3.4.3_A7_T10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T10.js"),
    );
    it(
      "S15.3.4.3_A7_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T2.js"),
    );
    it(
      "S15.3.4.3_A7_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T3.js"),
    );
    it(
      "S15.3.4.3_A7_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T4.js"),
    );
    it(
      "S15.3.4.3_A7_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T5.js"),
    );
    it(
      "S15.3.4.3_A7_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T6.js"),
    );
    it(
      "S15.3.4.3_A7_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T7.js"),
    );
    it(
      "S15.3.4.3_A7_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T8.js"),
    );
    it(
      "S15.3.4.3_A7_T9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A7_T9.js"),
    );
    it(
      "S15.3.4.3_A8_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A8_T3.js"),
    );
    it(
      "S15.3.4.3_A8_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A8_T4.js"),
    );
    it(
      "S15.3.4.3_A8_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A8_T5.js"),
    );
    it(
      "S15.3.4.3_A8_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/S15.3.4.3_A8_T6.js"),
    );
    it(
      "argarray-not-object-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/argarray-not-object-realm.js"),
    );
    it(
      "argarray-not-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/argarray-not-object.js"),
    );
    it(
      "get-index-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/get-index-abrupt.js"),
    );
    it(
      "get-length-abrupt.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/get-length-abrupt.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/not-a-constructor.js"),
    );
    it.skip("resizable-buffer.js", () => {
      /* Ignored Test */
    });
    it(
      "this-not-callable-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/this-not-callable-realm.js"),
    );
    it(
      "this-not-callable.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/apply/this-not-callable.js"),
    );
  });
  describe("arguments", () => {
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/arguments/prop-desc.js"),
    );
  });
  describe("bind", () => {
    it(
      "15.3.4.5-0-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-0-1.js"),
    );
    it(
      "15.3.4.5-10-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-10-1.js"),
    );
    it(
      "15.3.4.5-11-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-11-1.js"),
    );
    it(
      "15.3.4.5-16-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-16-1.js"),
    );
    it(
      "15.3.4.5-16-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-16-2.js"),
    );
    it(
      "15.3.4.5-2-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-1.js"),
    );
    it(
      "15.3.4.5-2-10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-10.js"),
    );
    it(
      "15.3.4.5-2-11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-11.js"),
    );
    it(
      "15.3.4.5-2-12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-12.js"),
    );
    it(
      "15.3.4.5-2-13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-13.js"),
    );
    it(
      "15.3.4.5-2-14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-14.js"),
    );
    it(
      "15.3.4.5-2-15.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-15.js"),
    );
    it(
      "15.3.4.5-2-16.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-16.js"),
    );
    it(
      "15.3.4.5-2-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-2.js"),
    );
    it(
      "15.3.4.5-2-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-3.js"),
    );
    it(
      "15.3.4.5-2-4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-4.js"),
    );
    it(
      "15.3.4.5-2-5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-5.js"),
    );
    it(
      "15.3.4.5-2-6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-6.js"),
    );
    it(
      "15.3.4.5-2-7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-7.js"),
    );
    it(
      "15.3.4.5-2-8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-8.js"),
    );
    it(
      "15.3.4.5-2-9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-2-9.js"),
    );
    it(
      "15.3.4.5-20-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-20-2.js"),
    );
    it(
      "15.3.4.5-20-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-20-3.js"),
    );
    it(
      "15.3.4.5-21-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-21-2.js"),
    );
    it(
      "15.3.4.5-21-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-21-3.js"),
    );
    it(
      "15.3.4.5-3-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-3-1.js"),
    );
    it(
      "15.3.4.5-6-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-1.js"),
    );
    it(
      "15.3.4.5-6-10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-10.js"),
    );
    it(
      "15.3.4.5-6-11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-11.js"),
    );
    it(
      "15.3.4.5-6-12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-12.js"),
    );
    it(
      "15.3.4.5-6-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-2.js"),
    );
    it(
      "15.3.4.5-6-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-3.js"),
    );
    it(
      "15.3.4.5-6-4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-4.js"),
    );
    it(
      "15.3.4.5-6-5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-5.js"),
    );
    it(
      "15.3.4.5-6-6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-6.js"),
    );
    it(
      "15.3.4.5-6-7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-7.js"),
    );
    it(
      "15.3.4.5-6-8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-8.js"),
    );
    it(
      "15.3.4.5-6-9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-6-9.js"),
    );
    it(
      "15.3.4.5-8-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-8-1.js"),
    );
    it(
      "15.3.4.5-8-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-8-2.js"),
    );
    it(
      "15.3.4.5-9-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-9-1.js"),
    );
    it(
      "15.3.4.5-9-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5-9-2.js"),
    );
    it(
      "15.3.4.5.1-4-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-1.js"),
    );
    it(
      "15.3.4.5.1-4-10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-10.js"),
    );
    it(
      "15.3.4.5.1-4-11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-11.js"),
    );
    it(
      "15.3.4.5.1-4-12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-12.js"),
    );
    it(
      "15.3.4.5.1-4-13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-13.js"),
    );
    it(
      "15.3.4.5.1-4-14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-14.js"),
    );
    it(
      "15.3.4.5.1-4-15.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-15.js"),
    );
    it(
      "15.3.4.5.1-4-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-2.js"),
    );
    it(
      "15.3.4.5.1-4-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-3.js"),
    );
    it(
      "15.3.4.5.1-4-4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-4.js"),
    );
    it(
      "15.3.4.5.1-4-5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-5.js"),
    );
    it(
      "15.3.4.5.1-4-6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-6.js"),
    );
    it(
      "15.3.4.5.1-4-7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-7.js"),
    );
    it(
      "15.3.4.5.1-4-8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-8.js"),
    );
    it(
      "15.3.4.5.1-4-9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.1-4-9.js"),
    );
    it(
      "15.3.4.5.2-4-1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-1.js"),
    );
    it(
      "15.3.4.5.2-4-10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-10.js"),
    );
    it(
      "15.3.4.5.2-4-11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-11.js"),
    );
    it(
      "15.3.4.5.2-4-12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-12.js"),
    );
    it(
      "15.3.4.5.2-4-13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-13.js"),
    );
    it(
      "15.3.4.5.2-4-14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-14.js"),
    );
    it(
      "15.3.4.5.2-4-2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-2.js"),
    );
    it(
      "15.3.4.5.2-4-3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-3.js"),
    );
    it(
      "15.3.4.5.2-4-4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-4.js"),
    );
    it(
      "15.3.4.5.2-4-5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-5.js"),
    );
    it(
      "15.3.4.5.2-4-6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-6.js"),
    );
    it(
      "15.3.4.5.2-4-7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-7.js"),
    );
    it(
      "15.3.4.5.2-4-8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-8.js"),
    );
    it(
      "15.3.4.5.2-4-9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/15.3.4.5.2-4-9.js"),
    );
    it(
      "BoundFunction_restricted-properties.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/BoundFunction_restricted-properties.js"),
    );
    it(
      "S15.3.4.5_A1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A1.js"),
    );
    it(
      "S15.3.4.5_A13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A13.js"),
    );
    it(
      "S15.3.4.5_A14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A14.js"),
    );
    it(
      "S15.3.4.5_A15.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A15.js"),
    );
    it(
      "S15.3.4.5_A16.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A16.js"),
    );
    it(
      "S15.3.4.5_A2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A2.js"),
    );
    it(
      "S15.3.4.5_A3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A3.js"),
    );
    it(
      "S15.3.4.5_A4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A4.js"),
    );
    it(
      "S15.3.4.5_A5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/S15.3.4.5_A5.js"),
    );
    it(
      "get-fn-realm-recursive.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/get-fn-realm-recursive.js"),
    );
    it(
      "get-fn-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/get-fn-realm.js"),
    );
    it(
      "instance-construct-newtarget-boundtarget-bound.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/bind/instance-construct-newtarget-boundtarget-bound.js",
      ),
    );
    it(
      "instance-construct-newtarget-boundtarget.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/bind/instance-construct-newtarget-boundtarget.js",
      ),
    );
    it(
      "instance-construct-newtarget-self-new.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/bind/instance-construct-newtarget-self-new.js",
      ),
    );
    it(
      "instance-construct-newtarget-self-reflect.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/bind/instance-construct-newtarget-self-reflect.js",
      ),
    );
    it(
      "instance-length-default-value.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-length-default-value.js"),
    );
    it(
      "instance-length-exceeds-int32.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-length-exceeds-int32.js"),
    );
    it(
      "instance-length-prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-length-prop-desc.js"),
    );
    it(
      "instance-length-remaining-args.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-length-remaining-args.js"),
    );
    it(
      "instance-length-tointeger.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-length-tointeger.js"),
    );
    it(
      "instance-name-chained.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-name-chained.js"),
    );
    it(
      "instance-name-error.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-name-error.js"),
    );
    it(
      "instance-name-non-string.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-name-non-string.js"),
    );
    it(
      "instance-name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/instance-name.js"),
    );
    it(
      "length.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/length.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/not-a-constructor.js"),
    );
    it(
      "proto-from-ctor-realm.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/bind/proto-from-ctor-realm.js"),
    );
  });
  describe("call", () => {
    it(
      "15.3.4.4-1-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/15.3.4.4-1-s.js"),
    );
    it(
      "15.3.4.4-2-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/15.3.4.4-2-s.js"),
    );
    it(
      "15.3.4.4-3-s.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/15.3.4.4-3-s.js"),
    );
    it(
      "S15.3.4.4_A10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A10.js"),
    );
    it(
      "S15.3.4.4_A11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A11.js"),
    );
    it(
      "S15.3.4.4_A12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A12.js"),
    );
    it(
      "S15.3.4.4_A13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A13.js"),
    );
    it(
      "S15.3.4.4_A14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A14.js"),
    );
    it(
      "S15.3.4.4_A15.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A15.js"),
    );
    it(
      "S15.3.4.4_A16.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A16.js"),
    );
    it(
      "S15.3.4.4_A1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A1_T1.js"),
    );
    it(
      "S15.3.4.4_A1_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A1_T2.js"),
    );
    it(
      "S15.3.4.4_A2_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A2_T1.js"),
    );
    it(
      "S15.3.4.4_A2_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A2_T2.js"),
    );
    it(
      "S15.3.4.4_A3_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T1.js"),
    );
    it(
      "S15.3.4.4_A3_T10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T10.js"),
    );
    it(
      "S15.3.4.4_A3_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T2.js"),
    );
    it(
      "S15.3.4.4_A3_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T3.js"),
    );
    it(
      "S15.3.4.4_A3_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T4.js"),
    );
    it(
      "S15.3.4.4_A3_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T5.js"),
    );
    it(
      "S15.3.4.4_A3_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T6.js"),
    );
    it(
      "S15.3.4.4_A3_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T7.js"),
    );
    it(
      "S15.3.4.4_A3_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T8.js"),
    );
    it(
      "S15.3.4.4_A3_T9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A3_T9.js"),
    );
    it(
      "S15.3.4.4_A5_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T1.js"),
    );
    it(
      "S15.3.4.4_A5_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T2.js"),
    );
    it(
      "S15.3.4.4_A5_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T3.js"),
    );
    it(
      "S15.3.4.4_A5_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T4.js"),
    );
    it(
      "S15.3.4.4_A5_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T5.js"),
    );
    it(
      "S15.3.4.4_A5_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T6.js"),
    );
    it(
      "S15.3.4.4_A5_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T7.js"),
    );
    it(
      "S15.3.4.4_A5_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A5_T8.js"),
    );
    it(
      "S15.3.4.4_A6_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T1.js"),
    );
    it(
      "S15.3.4.4_A6_T10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T10.js"),
    );
    it(
      "S15.3.4.4_A6_T2.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T2.js"),
    );
    it(
      "S15.3.4.4_A6_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T3.js"),
    );
    it(
      "S15.3.4.4_A6_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T4.js"),
    );
    it(
      "S15.3.4.4_A6_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T5.js"),
    );
    it(
      "S15.3.4.4_A6_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T6.js"),
    );
    it(
      "S15.3.4.4_A6_T7.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T7.js"),
    );
    it(
      "S15.3.4.4_A6_T8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T8.js"),
    );
    it(
      "S15.3.4.4_A6_T9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A6_T9.js"),
    );
    it(
      "S15.3.4.4_A7_T3.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A7_T3.js"),
    );
    it(
      "S15.3.4.4_A7_T4.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A7_T4.js"),
    );
    it(
      "S15.3.4.4_A7_T5.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A7_T5.js"),
    );
    it(
      "S15.3.4.4_A7_T6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A7_T6.js"),
    );
    it(
      "S15.3.4.4_A9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/S15.3.4.4_A9.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/call/not-a-constructor.js"),
    );
  });
  describe("caller", () => {
    it(
      "prop-desc.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/caller/prop-desc.js"),
    );
  });
  describe("caller-arguments", () => {
    it(
      "accessor-properties.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/caller-arguments/accessor-properties.js"),
    );
  });
  describe("constructor", () => {
    it(
      "S15.3.4.1_A1_T1.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/constructor/S15.3.4.1_A1_T1.js"),
    );
  });
  it(
    "length.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/length.js"),
  );
  it(
    "name.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/name.js"),
  );
  it(
    "property-order.js",
    { tags: ["known-failing"] },
    createTestHandler("built-ins/Function/prototype/property-order.js"),
  );
  describe("toString", () => {
    it(
      "AsyncFunction.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/AsyncFunction.js"),
    );
    it(
      "AsyncGenerator.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/AsyncGenerator.js"),
    );
    it(
      "Function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/Function.js"),
    );
    it(
      "GeneratorFunction.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/GeneratorFunction.js"),
    );
    it(
      "S15.3.4.2_A10.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A10.js"),
    );
    it(
      "S15.3.4.2_A11.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A11.js"),
    );
    it(
      "S15.3.4.2_A12.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A12.js"),
    );
    it(
      "S15.3.4.2_A13.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A13.js"),
    );
    it(
      "S15.3.4.2_A14.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A14.js"),
    );
    it(
      "S15.3.4.2_A16.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A16.js"),
    );
    it(
      "S15.3.4.2_A6.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A6.js"),
    );
    it(
      "S15.3.4.2_A8.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A8.js"),
    );
    it(
      "S15.3.4.2_A9.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/S15.3.4.2_A9.js"),
    );
    it(
      "arrow-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/arrow-function.js"),
    );
    it(
      "async-arrow-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-arrow-function.js"),
    );
    it(
      "async-function-declaration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-function-declaration.js"),
    );
    it(
      "async-function-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-function-expression.js"),
    );
    it(
      "async-generator-declaration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-generator-declaration.js"),
    );
    it(
      "async-generator-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-generator-expression.js"),
    );
    it(
      "async-generator-method-class-expression-static.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-generator-method-class-expression-static.js",
      ),
    );
    it(
      "async-generator-method-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-generator-method-class-expression.js",
      ),
    );
    it(
      "async-generator-method-class-statement-static.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-generator-method-class-statement-static.js",
      ),
    );
    it(
      "async-generator-method-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-generator-method-class-statement.js",
      ),
    );
    it(
      "async-generator-method-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-generator-method-object.js"),
    );
    it(
      "async-method-class-expression-static.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-method-class-expression-static.js",
      ),
    );
    it(
      "async-method-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-method-class-expression.js"),
    );
    it(
      "async-method-class-statement-static.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/async-method-class-statement-static.js",
      ),
    );
    it(
      "async-method-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-method-class-statement.js"),
    );
    it(
      "async-method-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/async-method-object.js"),
    );
    it(
      "bound-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/bound-function.js"),
    );
    it(
      "built-in-function-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/built-in-function-object.js"),
    );
    it(
      "class-declaration-complex-heritage.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/class-declaration-complex-heritage.js",
      ),
    );
    it(
      "class-declaration-explicit-ctor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/class-declaration-explicit-ctor.js"),
    );
    it(
      "class-declaration-implicit-ctor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/class-declaration-implicit-ctor.js"),
    );
    it(
      "class-expression-explicit-ctor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/class-expression-explicit-ctor.js"),
    );
    it(
      "class-expression-implicit-ctor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/class-expression-implicit-ctor.js"),
    );
    it(
      "function-declaration-non-simple-parameter-list.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/function-declaration-non-simple-parameter-list.js",
      ),
    );
    it(
      "function-declaration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/function-declaration.js"),
    );
    it(
      "function-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/function-expression.js"),
    );
    it(
      "generator-function-declaration.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/generator-function-declaration.js"),
    );
    it(
      "generator-function-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/generator-function-expression.js"),
    );
    it(
      "generator-method.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/generator-method.js"),
    );
    it(
      "getter-class-expression-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/getter-class-expression-static.js"),
    );
    it(
      "getter-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/getter-class-expression.js"),
    );
    it(
      "getter-class-statement-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/getter-class-statement-static.js"),
    );
    it(
      "getter-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/getter-class-statement.js"),
    );
    it(
      "getter-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/getter-object.js"),
    );
    it(
      "line-terminator-normalisation-CR-LF.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/line-terminator-normalisation-CR-LF.js",
      ),
    );
    it(
      "line-terminator-normalisation-CR.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/line-terminator-normalisation-CR.js",
      ),
    );
    it(
      "line-terminator-normalisation-LF.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/line-terminator-normalisation-LF.js",
      ),
    );
    it(
      "method-class-expression-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-class-expression-static.js"),
    );
    it(
      "method-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-class-expression.js"),
    );
    it(
      "method-class-statement-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-class-statement-static.js"),
    );
    it(
      "method-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-class-statement.js"),
    );
    it(
      "method-computed-property-name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-computed-property-name.js"),
    );
    it(
      "method-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/method-object.js"),
    );
    it(
      "name.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/name.js"),
    );
    it(
      "not-a-constructor.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/not-a-constructor.js"),
    );
    it(
      "private-method-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/private-method-class-expression.js"),
    );
    it(
      "private-method-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/private-method-class-statement.js"),
    );
    it(
      "private-static-method-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/private-static-method-class-expression.js",
      ),
    );
    it(
      "private-static-method-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/private-static-method-class-statement.js",
      ),
    );
    it(
      "proxy-arrow-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-arrow-function.js"),
    );
    it(
      "proxy-async-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-async-function.js"),
    );
    it(
      "proxy-async-generator-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-async-generator-function.js"),
    );
    it(
      "proxy-async-generator-method-definition.js",
      { tags: ["known-failing"] },
      createTestHandler(
        "built-ins/Function/prototype/toString/proxy-async-generator-method-definition.js",
      ),
    );
    it(
      "proxy-async-method-definition.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-async-method-definition.js"),
    );
    it(
      "proxy-bound-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-bound-function.js"),
    );
    it(
      "proxy-class.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-class.js"),
    );
    it(
      "proxy-function-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-function-expression.js"),
    );
    it(
      "proxy-generator-function.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-generator-function.js"),
    );
    it(
      "proxy-method-definition.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-method-definition.js"),
    );
    it(
      "proxy-non-callable-throws.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/proxy-non-callable-throws.js"),
    );
    it(
      "setter-class-expression-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/setter-class-expression-static.js"),
    );
    it(
      "setter-class-expression.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/setter-class-expression.js"),
    );
    it(
      "setter-class-statement-static.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/setter-class-statement-static.js"),
    );
    it(
      "setter-class-statement.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/setter-class-statement.js"),
    );
    it(
      "setter-object.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/setter-object.js"),
    );
    it(
      "symbol-named-builtins.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/symbol-named-builtins.js"),
    );
    it(
      "unicode.js",
      { tags: ["known-failing"] },
      createTestHandler("built-ins/Function/prototype/toString/unicode.js"),
    );
  });
});
