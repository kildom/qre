
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Flags', () => {
    test('Invalid', () => {
        expect(() => qre.ignorecase`"abc"`).toThrow();
        expect(() => qre.sticky.ignorecase`"abc"`).toThrow();
    });
});
