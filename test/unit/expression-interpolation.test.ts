
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Expression interpolation', () => {
    test('Mismatching flags', () => {
        expect(() => { let abc = qre.ignoreCase`"abc"`; qre`${abc}`; }).toThrow();
        expect(() => { let abc = qre`"abc"`; qre.ignoreCase`${abc}`; }).toThrow();
        expect(() => { let abc = qre.legacy`"abc"`; qre`${abc}`; }).toThrow();
        expect(() => { let abc = qre`"abc"`; qre.legacy`${abc}`; }).toThrow();
        expect(() => { let abc = qre.ignoreCase.legacy`"abc"`; qre.legacy`${abc}`; }).toThrow();
        expect(() => { let abc = qre.ignoreCase`"abc"`; qre.ignoreCase.legacy`${abc}`; }).toThrow();
    });
});
