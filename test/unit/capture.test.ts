
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Capture', () => {
    test('Positional', () => {
        expect(qre`1: any`).toStrictEqual(/(.)/su);
        expect(qre`1: any, 2: digit`).toStrictEqual(/(.)(\d)/su);
        expect(qre`1: (any, 2: digit)`).toStrictEqual(/(.(\d))/su);
    });
    test('Positional failure', () => {
        expect(() => qre`0: any`).toThrow();
        expect(() => qre`2: any`).toThrow();
        expect(() => qre`1: (any, 1: digit)`).toThrow();
        expect(() => qre`first: digit, 1: any`).toThrow();
    });
    test('Mixed', () => {
        expect(qre`first: any, 2: digit`).toStrictEqual(/(?<first>.)(\d)/su);
        expect(qre`first: (any, 2: digit)`).toStrictEqual(/(?<first>.(\d))/su);
        expect(qre`1: any, two: digit, 3: word-char`).toStrictEqual(/(.)(?<two>\d)(\w)/su);
    });
});
