import { describe, expect, it } from 'vitest';

import { safeCompare, timingSafeEqual } from './index';

describe('timingSafeEqual', () => {
  it('should return true for identical buffers', () => {
    const a = new Uint8Array([1, 2, 3]);
    const b = new Uint8Array([1, 2, 3]);
    expect(timingSafeEqual(a, b)).toBe(true);
  });

  it('should return false for different content', () => {
    const a = new Uint8Array([1, 2, 3]);
    const b = new Uint8Array([1, 2, 4]);
    expect(timingSafeEqual(a, b)).toBe(false);
  });

  it('should throw for different lengths', () => {
    const a = new Uint8Array([1, 2, 3]);
    const b = new Uint8Array([1, 2]);
    expect(() => timingSafeEqual(a, b)).toThrow('Input buffers must have the same byte length');
  });
});

describe('safeCompare', () => {
  it('should return true for equal strings', () => {
    expect(safeCompare('password', 'password')).toBe(true);
  });

  it('should return false for different strings', () => {
    expect(safeCompare('password', 'wrong')).toBe(false);
  });

  it('should return false for same length but different strings', () => {
    expect(safeCompare('password', 'passward')).toBe(false);
  });

  it('should return true for empty strings', () => {
    expect(safeCompare('', '')).toBe(true);
  });

  it('should return false for different lengths (no throw)', () => {
    expect(safeCompare('short', 'longer')).toBe(false);
  });
});
