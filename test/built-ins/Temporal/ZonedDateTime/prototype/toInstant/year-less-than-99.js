// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.toinstant
description: Year <= 99.
includes: [temporalHelpers.js]
features: [Temporal]
---*/

var zdt = Temporal.ZonedDateTime.from("0098-10-29T10:46:38.271986102+00:00[UTC]");
TemporalHelpers.assertInstantsEqual(
    zdt.toInstant(),
    Temporal.Instant.from("0098-10-29T10:46:38.271986102Z"));

zdt = Temporal.ZonedDateTime.from("+000098-10-29T10:46:38.271986102+00:00[UTC]");
TemporalHelpers.assertInstantsEqual(
    zdt.toInstant(),
    Temporal.Instant.from("0098-10-29T10:46:38.271986102Z"));
