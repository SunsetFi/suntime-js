#!/usr/bin/env node
// Resolves the correct npm dist-tag for a package about to be published.
//
// Rules (in order):
//   1. Prerelease version (has a `-`, e.g. 1.6.0-rc.0) -> use its prerelease
//      identifier as the dist-tag (e.g. "rc"), never "latest".
//   2. Stable version whose major.minor is BELOW the highest published
//      stable major.minor on npm -> "backport-<major>.<minor>" (a backport
//      to an older maintenance line; must not move "latest").
//   3. Stable version >= the highest published stable -> "latest".
//   4. Package not yet on npm at all -> "latest" (first publish).
//
// Usage: node resolve-dist-tag.mjs <packageDir>
// Prints the dist-tag to stdout. Network: queries `npm view`.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import semver from "semver";

const pkgDir = process.argv[2];
if (!pkgDir) {
  console.error("usage: resolve-dist-tag.mjs <packageDir>");
  process.exit(2);
}

const { name, version } = JSON.parse(
  readFileSync(join(pkgDir, "package.json"), "utf8"),
);

const parsed = semver.parse(version);
if (!parsed) {
  console.error(`unparseable version ${version} for ${name}`);
  process.exit(2);
}

// Rule 1: prerelease
if (parsed.prerelease.length > 0) {
  const id = parsed.prerelease[0];
  // prerelease[0] is the identifier (e.g. "rc" in 1.6.0-rc.0). If it's
  // numeric (1.6.0-0), fall back to a generic "next".
  process.stdout.write(typeof id === "string" ? id : "next");
  process.exit(0);
}

// Fetch all published stable versions to find the current top line.
let published = [];
try {
  const raw = execFileSync("pnpm", ["view", name, "versions", "--json"], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
  });
  const arr = JSON.parse(raw);
  published = Array.isArray(arr) ? arr : [arr];
} catch {
  // 404 = never published. Rule 4.
  process.stdout.write("latest");
  process.exit(0);
}

const stable = published.filter(
  (v) => semver.valid(v) && !semver.prerelease(v),
);
if (stable.length === 0) {
  process.stdout.write("latest");
  process.exit(0);
}

const highest = stable.sort(semver.rcompare)[0];
const thisLine = `${parsed.major}.${parsed.minor}`;

// Rule 2 vs 3: is this version's line below the highest published line?
const below =
  semver.major(version) < semver.major(highest) ||
  (semver.major(version) === semver.major(highest) &&
    semver.minor(version) < semver.minor(highest));

process.stdout.write(below ? `backport-${thisLine}` : "latest");
