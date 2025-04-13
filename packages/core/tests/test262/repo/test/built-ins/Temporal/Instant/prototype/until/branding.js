// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.instant.prototype.until
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const until = Temporal.Instant.prototype.until;

assert.sameValue(typeof until, "function");

const args = [new Temporal.Instant(123456n)];

assert.throws(TypeError, () => until.apply(undefined, args), "undefined");
assert.throws(TypeError, () => until.apply(null, args), "null");
assert.throws(TypeError, () => until.apply(true, args), "true");
assert.throws(TypeError, () => until.apply("", args), "empty string");
assert.throws(TypeError, () => until.apply(Symbol(), args), "symbol");
assert.throws(TypeError, () => until.apply(1, args), "1");
assert.throws(TypeError, () => until.apply({}, args), "plain object");
assert.throws(TypeError, () => until.apply(Temporal.Instant, args), "Temporal.Instant");
assert.throws(TypeError, () => until.apply(Temporal.Instant.prototype, args), "Temporal.Instant.prototype");
