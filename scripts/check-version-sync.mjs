#!/usr/bin/env node
// Enforces that @suntime-js/core, /debugger, and /dap share the same
// major.minor version. Patch is allowed to differ. Exits non-zero on drift.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

import { getPackages } from "./get-packages.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const PACKAGES = getPackages()
  .filter((x) => !x.private)
  .map((pkg) => pkg.path);

function readVersion(pkgDir) {
  const pkgPath = resolve(root, pkgDir, "package.json");
  const { name, version } = JSON.parse(readFileSync(pkgPath, "utf8"));
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
  if (!m) {
    throw new Error(`${name}: unparseable version "${version}"`);
  }
  return {
    name,
    version,
    major: m[1],
    minor: m[2],
    minorKey: `${m[1]}.${m[2]}`,
  };
}

const infos = PACKAGES.map(readVersion);
const keys = new Set(infos.map((i) => i.minorKey));

console.log("Resolved versions:");
for (const i of infos) console.log(`  ${i.name.padEnd(24)} ${i.version}`);

if (keys.size > 1) {
  console.error(
    `\n::error::major.minor diverged across linked packages: ` +
      infos.map((i) => `${i.name}@${i.minorKey}.x`).join(", "),
  );
  console.error(
    "All three must share the same major.minor. Add a changeset for the " +
      "lagging package(s) so they bump together, then re-run `changeset version`.",
  );
  process.exit(1);
}

console.log(`\nOK — all packages aligned on ${[...keys][0]}.x`);
