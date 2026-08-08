export function withErrorHandler<TFunc extends (...args: any[]) => any>(
  func: TFunc,
  errorHandler: (error: unknown, ...args: Parameters<TFunc>) => void,
): (...args: Parameters<TFunc>) => ReturnType<TFunc> {
  return function (...args: Parameters<TFunc>): ReturnType<TFunc> {
    try {
      return func(...args);
    } catch (error) {
      errorHandler(error, ...args);
      throw error;
    }
  };
}
