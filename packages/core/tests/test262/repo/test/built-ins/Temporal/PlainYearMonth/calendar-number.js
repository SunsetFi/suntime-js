// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plainyearmonth
description: A number is not allowed to be a calendar
features: [Temporal]
---*/

const numbers = [
  1,
  -19761118,
  19761118,
  1234567890,
];

for (const arg of numbers) {
  assert.throws(
    TypeError,
    () => new Temporal.PlainYearMonth(2000, 5, arg, 1),
    "A number is not a valid ISO string for Calendar"
  );
}
