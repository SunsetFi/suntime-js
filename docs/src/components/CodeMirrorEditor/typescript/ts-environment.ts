import { createDefaultMapFromCDN } from "@typescript/vfs";
import ts from "typescript";

/** Compiler target used for both the CDN lib fetch and per-block envs. */
export const TS_TARGET = ts.ScriptTarget.ES2020;

export type LibMapLoader = () => Promise<Map<string, string>>;

const cdnLoader: LibMapLoader = () =>
  createDefaultMapFromCDN({ target: TS_TARGET }, ts.version, /* shouldCache */ true, ts);

let cached: Promise<Map<string, string>> | null = null;

/**
 * Resolves the standard TypeScript lib `.d.ts` map, loading it at most once per
 * page. The first caller triggers the (async, localStorage-cached) CDN fetch;
 * every later caller shares the same promise. `loader` is injectable for tests.
 *
 * A failed load is not cached: if the loader rejects, the memo is cleared so a
 * later caller can retry (a transient CDN failure shouldn't disable editor
 * intelligence for the rest of the page's life).
 */
export function getDefaultLibMap(loader: LibMapLoader = cdnLoader): Promise<Map<string, string>> {
  cached ??= loader().catch((err) => {
    cached = null;
    throw err;
  });
  return cached;
}

/** Test-only: clears the page-level memoization. */
export function __resetDefaultLibMapForTests(): void {
  cached = null;
}
