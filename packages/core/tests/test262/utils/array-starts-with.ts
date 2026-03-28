export default function arrayStartsWith<T>(arr: T[], prefix: T[]) {
  if (prefix.length > arr.length) {
    return false;
  }

  for (let i = 0; i < prefix.length; i++) {
    if (arr[i] !== prefix[i]) {
      return false;
    }
  }

  return true;
}
