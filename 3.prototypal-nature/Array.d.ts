export {};

declare global {
  interface Array<T> {
    getLength(): number;
  }
}
