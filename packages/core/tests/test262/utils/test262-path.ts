export default function test262Path(...paths: string[]): string {
  return new URL(`../repo/${paths.join("/")}`, import.meta.url).pathname;
}
