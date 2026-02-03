
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Separators', () => {

    test('Missing', () => {

        expect(() => qre`"abc" "abc"`).toThrow();
        expect(() => qre`repeat("abc") "abc"`).toThrow();
        expect(() => qre`"abc" ("abc" or "def")`).toThrow();

    });

    test('Optional', () => {

        expect(qre`
            "abc"
            1: "def"
            2: "ghi";
            (3: "jkl")
            4: "mno"
        `).toStrictEqual(/abc(def)(ghi)(jkl)(mno)/su)

    });

    test('Interpolation', () => {// TODO: Remove new line tokens at the end and beginning of interpolated tokens
        let inner = qre`
            "def"
        `;
        let inner2 = qre`
            ${inner}
        `;
        expect(() => qre`"abc" ${inner} "ghi"`).toThrow();
        expect(() => qre`"abc" ${inner}`).toThrow();
        expect(() => qre`${inner} "ghi"`).toThrow();
        expect(() => qre`"abc" ${inner2} "ghi"`).toThrow();
        expect(() => qre`"abc" ${inner2}`).toThrow();
        expect(() => qre`${inner2} "ghi"`).toThrow();
        expect(qre`
            ${inner}
            1: ${inner2}
            2: ${inner};
            (3: ${inner})
            4: ${inner2}
        `).toStrictEqual(/def(def)(def)(def)(def)/su)
    });
});
