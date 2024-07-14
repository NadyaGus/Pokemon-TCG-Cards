import { describe, expect, it } from 'vitest';

describe('main.tsx', () => {
  it('should be defined', () => {
    const appElement = document.getElementById('app');
    expect(appElement).toBeDefined();
  });
});
