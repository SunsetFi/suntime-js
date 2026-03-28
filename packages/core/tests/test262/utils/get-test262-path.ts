export default function getTest262Path(...paths: string[]): string {
  return new URL(`../repo/${paths.join("/")}`, import.meta.url).pathname;
}
