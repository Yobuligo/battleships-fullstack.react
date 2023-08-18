export const checkNotNull = <T>(
  instance: T,
  message?: string
): NonNullable<T> => {
  if (instance === undefined || instance === null) {
    throw new Error(message ?? `Object must not be null.`);
  }
  return instance;
};
