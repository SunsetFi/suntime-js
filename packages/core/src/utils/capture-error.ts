export function captureError<T>(func: () => T): T | Error {
  try {
    return func();
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }

    return new Error(`Unexpected non-error thrown: ${e}`);
  }
}

captureError.async = async function captureErrorAsync<T>(
  promise: Promise<T> | (() => Promise<T>),
): Promise<T | Error> {
  try {
    return await (typeof promise === "function" ? promise() : promise);
  } catch (e) {
    if (e instanceof Error) {
      return e;
    }

    return new Error(`Unexpected non-error thrown: ${e}`);
  }
};
