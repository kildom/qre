
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Brackets', () => {
    test('Unmatched', () => {
        expect(() => qre`("abc"`).toThrow();
        expect(() => qre`("abc" or ("def")`).toThrow();
        expect(() => qre`"abc") or "x"`).toThrow();
        expect(() => qre`("def") or "abc")`).toThrow();
    });
});
