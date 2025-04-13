// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaintime.from
description: Annotation keys are lowercase-only 
features: [Temporal]
---*/

const invalidStrings = [
  ["00:00[U-CA=iso8601]", "invalid capitalized key, time-only"],
  ["T00:00[U-CA=iso8601]", "invalid capitalized key, time designator"],
  ["1970-01-01T00:00[U-CA=iso8601]", "invalid capitalized key"],
  ["00:00[u-CA=iso8601]", "invalid partially-capitalized key, time-only"],
  ["T00:00[u-CA=iso8601]", "invalid partially-capitalized key, time designator"],
  ["1970-01-01T00:00[u-CA=iso8601]", "invalid partially-capitalized key"],
  ["00:00[FOO=bar]", "invalid capitalized unrecognized key, time-only"],
  ["T00:00[FOO=bar]", "invalid capitalized unrecognized key, time designator"],
  ["1970-01-01T00:00[FOO=bar]", "invalid capitalized unrecognized key"],
];

invalidStrings.forEach(([arg, descr]) => {
  assert.throws(
    RangeError,
    () => Temporal.PlainTime.from(arg),
    `annotation keys must be lowercase: ${arg} - ${descr}`
  );
});
