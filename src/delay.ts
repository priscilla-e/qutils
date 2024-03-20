/**
 * Delays the execution of a function by the specified number of milliseconds.
 * @param ms - The number of milliseconds to delay the execution.
 * @returns A promise that resolves after the specified delay.
 */
export default function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
