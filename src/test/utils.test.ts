import { add } from '@/utils';
import { it, expect, describe } from 'vitest';

describe('utils test', () => {
    it('100% pass', () => {
        expect(1).toBe(1);
    });
    it('add', () => {
        expect(add(1, 2)).toBe(3);
    });
});
