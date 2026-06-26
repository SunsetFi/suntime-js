export function stringSizeBytes(str: string): number {
  // Depends on the character.  Some are 1, some are 2.
  return str.length * 2;
}
