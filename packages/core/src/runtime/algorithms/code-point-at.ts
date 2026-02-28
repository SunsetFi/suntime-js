import StaticJsEngineError from "../../errors/StaticJsEngineError.js";

export interface CodePointRecord {
  codePoint: number;
  codeUnitCount: 1 | 2;
  isUnpairedSurrogate: boolean;
}

export default function codePointAt(str: string, position: number): CodePointRecord {
  const size = str.length;
  if (position < 0 || position >= size) {
    throw new StaticJsEngineError("Position must be a valid index within the string.");
  }

  const first = str.charCodeAt(position);

  let cp = first;

  if (!isLeadingSurrogate(first) && !isTrailingSurrogate(first)) {
    return {
      codePoint: cp,
      codeUnitCount: 1,
      isUnpairedSurrogate: false,
    };
  }

  if (isTrailingSurrogate(first) || position + 1 === size) {
    return {
      codePoint: cp,
      codeUnitCount: 1,
      isUnpairedSurrogate: true,
    };
  }

  const second = str.charCodeAt(position + 1);
  if (!isTrailingSurrogate(second)) {
    return {
      codePoint: cp,
      codeUnitCount: 1,
      isUnpairedSurrogate: true,
    };
  }

  cp = utf16SurrogatePairToCodePoint(first, second);
  return {
    codePoint: cp,
    codeUnitCount: 2,
    isUnpairedSurrogate: false,
  };
}

function isLeadingSurrogate(cp: number): boolean {
  return cp >= 0xd800 && cp <= 0xdbff;
}

function isTrailingSurrogate(cp: number): boolean {
  return cp >= 0xdc00 && cp <= 0xdfff;
}

function utf16SurrogatePairToCodePoint(lead: number, trail: number): number {
  return (lead - 0xd800) * 0x400 + (trail - 0xdc00) + 0x10000;
}
