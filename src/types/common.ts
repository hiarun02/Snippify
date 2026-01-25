export type SetState<T> = (value: T | ((prev: T) => T)) => void;
