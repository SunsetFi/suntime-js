// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.subtract
description: Passing a primitive other than string to subtract() throws
features: [Symbol, Temporal]
---*/

const instance = new Temporal.Duration(0, 0, 0, 1, 2, 3, 4, 987, 654, 321);
assert.throws(TypeError, () => instance.subtract(undefined), "undefined");
assert.throws(TypeError, () => instance.subtract(null), "null");
assert.throws(TypeError, () => instance.subtract(true), "boolean");
assert.throws(RangeError, () => instance.subtract(""), "empty string");
assert.throws(TypeError, () => instance.subtract(Symbol()), "Symbol");
assert.throws(TypeError, () => instance.subtract(7), "number");
assert.throws(TypeError, () => instance.subtract(7n), "bigint");
assert.throws(TypeError, () => instance.subtract([]), "array");
assert.throws(TypeError, () => instance.subtract(() => {}), "function");
