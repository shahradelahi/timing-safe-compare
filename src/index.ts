/**
 * Constant-time comparison of two Uint8Arrays.
 * This is the universal/browser implementation.
 *
 * @param a The first Uint8Array to compare.
 * @param b The second Uint8Array to compare.
 * @returns True if the buffers are equal, false otherwise.
 * @throws {TypeError} If the input buffers are not the same length.
 */
export function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.byteLength !== b.byteLength) {
    throw new TypeError('Input buffers must have the same byte length');
  }

  let mismatch = 0;
  for (let i = 0; i < a.byteLength; i++) {
    mismatch |= (a.at(i) ?? 0) ^ (b.at(i) ?? 0);
  }

  return mismatch === 0;
}

/**
 * Compares two strings in constant time to prevent timing attacks.
 *
 * @param a First string.
 * @param b Second string.
 * @returns True if the strings are equal.
 */
export function safeCompare(a: string, b: string): boolean {
  const encoder = new TextEncoder();
  const aBuf = encoder.encode(a);
  const bBuf = encoder.encode(b);

  if (aBuf.byteLength !== bBuf.byteLength) {
    return false;
  }

  return timingSafeEqual(aBuf, bBuf);
}
