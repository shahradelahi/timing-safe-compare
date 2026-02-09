import { timingSafeEqual as nativeTimingSafeEqual } from 'node:crypto';

/**
 * Constant-time comparison of two Uint8Arrays.
 * This is the Node.js native implementation.
 *
 * @param a The first Uint8Array to compare.
 * @param b The second Uint8Array to compare.
 * @returns True if the buffers are equal, false otherwise.
 * @throws {TypeError} If the input buffers are not the same length.
 */
export function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  return nativeTimingSafeEqual(a, b);
}

/**
 * Compares two strings in constant time to prevent timing attacks.
 *
 * @param a First string.
 * @param b Second string.
 * @returns True if the strings are equal.
 */
export function safeCompare(a: string, b: string): boolean {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);

  if (aBuf.byteLength !== bBuf.byteLength) {
    return false;
  }

  return nativeTimingSafeEqual(aBuf, bBuf);
}
