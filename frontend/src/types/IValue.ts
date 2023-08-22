export interface IValue<T> {
  readonly value: T;
  setValue: (value: T) => void;
}
