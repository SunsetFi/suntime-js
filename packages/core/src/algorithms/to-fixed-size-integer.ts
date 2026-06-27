export function toFixedSizeInteger(int: number, signed: "signed" | "unsigned", bitWidth: number) {
  if (!Number.isFinite(int)) {
    return 0;
  }

  const fixedInt = int % 2 ** bitWidth;
  if (signed === "signed" && fixedInt >= 2 ** (bitWidth - 1)) {
    return fixedInt - 2 ** bitWidth;
  }

  return fixedInt;
}
