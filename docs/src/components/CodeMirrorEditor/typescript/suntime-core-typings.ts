import type { TypingsFile } from "./block-language-service";

const cache = new Map<string, Promise<TypingsFile[]>>();

/**
 * Typings for `import ... from "@suntime-js/core"` to resolve inside a block
 * env. Fetches the bundled declaration (served from docs/static) once per URL
 * and places it under node_modules with a matching package.json so
 * bare-specifier resolution finds it. Returns [] if the fetch fails
 * (intelligence degrades, editor still works). `url` must already be
 * base-url-resolved by the caller (see SuntimeCodeBlock's useBaseUrl).
 */
export function loadSuntimeCoreTypings(url: string): Promise<TypingsFile[]> {
  let pending = cache.get(url);
  if (!pending) {
    pending = fetch(url)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(String(res.status)))))
      .then((contents): TypingsFile[] => [
        {
          filePath: "/node_modules/@suntime-js/core/package.json",
          contents: JSON.stringify({
            name: "@suntime-js/core",
            version: "0.0.0",
            types: "index.d.ts",
          }),
        },
        { filePath: "/node_modules/@suntime-js/core/index.d.ts", contents },
      ])
      .catch(() => {
        cache.delete(url); // don't cache a failed fetch — allow retry
        return [];
      });
    cache.set(url, pending);
  }
  return pending;
}
