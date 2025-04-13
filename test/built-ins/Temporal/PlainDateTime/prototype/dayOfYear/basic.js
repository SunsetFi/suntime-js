// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-get-temporal.plaindatetime.prototype.dayofyear
description: Checking day of year for a "normal" case (non-undefined, non-boundary case, etc.)
features: [Temporal]
---*/

const datetime = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789, "iso8601");
assert.sameValue(datetime.dayOfYear, 323, "check day of year information");
