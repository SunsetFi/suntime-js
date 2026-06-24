#!/usr/bin/env node
// Verifies that every file referenced by a package's exports actually exists on
// disk. Run from a package directory after building. Prefers publishConfig.exports
// (the artifacts that actually ship) over the top-level exports map. Exits
// non-zero if any referenced file is missing.

import { readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";

const cwd = process.cwd();
const pkgPath = resolve(cwd, "package.json");

let pkg;
try {
  pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
} catch (err) {
  console.error(`::error::Unable to read ${pkgPath}: ${err.message}`);
  process.exit(1);
}

const exportsMap = pkg.publishConfig?.exports ?? pkg.exports;

if (exportsMap == null) {
  console.warn(`${pkg.name ?? cwd}: no exports field — nothing to verify.`);
  process.exit(0);
}

// Recursively collect every string leaf from an exports tree. Handles the string
// shorthand, subpath maps, condition objects, and condition arrays. null leaves
// (the "block this subpath" syntax) are skipped.
function collectTargets(node, out) {
  if (node == null) {
    return;
  }
  if (typeof node === "string") {
    out.add(node);
    return;
  }
  if (Array.isArray(node)) {
    for (const item of node) collectTargets(item, out);
    return;
  }
  if (typeof node === "object") {
    for (const value of Object.values(node)) collectTargets(value, out);
  }
}

const targets = new Set();
collectTargets(exportsMap, targets);

if (targets.size === 0) {
  console.warn(`${pkg.name ?? cwd}: exports field has no file references.`);
  process.exit(0);
}

const source = pkg.publishConfig?.exports ? "publishConfig.exports" : "exports";
console.log(`Verifying ${targets.size} export target(s) from ${source}:`);

const missing = [];
for (const target of [...targets].sort()) {
  const filePath = resolve(cwd, target);
  let ok = false;
  try {
    ok = statSync(filePath).isFile();
  } catch {
    ok = false;
  }
  console.log(`  ${ok ? "OK     " : "MISSING"} ${target}`);
  if (!ok) {
    missing.push(target);
  }
}

if (missing.length > 0) {
  console.error(
    `\n::error::${pkg.name ?? cwd}: ${missing.length} export target(s) missing: ` +
      missing.join(", "),
  );
  process.exit(1);
}

console.log(`\nOK — all ${targets.size} export target(s) present.`);
