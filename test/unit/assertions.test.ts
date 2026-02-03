
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';


describe('Assertions', () => {
    test('Input/line boundary assertion', () => {
        expect(qre`any`).toStrictEqual(/./su);
        expect(qre`begin-of-text, end-of-text`).toStrictEqual(/^$/su);
        expect(qre`start-of-text`).toStrictEqual(/^/su);
        expect(qre`begin-of-line, end-of-line`).toStrictEqual(/^$/msu);
        expect(qre`start-of-line`).toStrictEqual(/^/msu);
        expect(qre`begin-of-text, begin-of-line, end-of-line, end-of-text`).toStrictEqual(/^(?<=[\r\n\u2028\u2029]|^)(?=[\r\n\u2028\u2029]|$)$/su);
        expect(qre`start-of-text, start-of-line`).toStrictEqual(/^(?<=[\r\n\u2028\u2029]|^)/su);
        expect(qre`not begin-of-text, not end-of-text`).toStrictEqual(/(?<!^)(?!$)/su);
        expect(qre`not start-of-text`).toStrictEqual(/(?<!^)/su);
        expect(qre`not begin-of-line, not end-of-line`).toStrictEqual(/(?<!^)(?!$)/msu);
        expect(qre`not start-of-line`).toStrictEqual(/(?<!^)/msu);
        expect(qre`not begin-of-text, not begin-of-line, not end-of-line, not end-of-text`).toStrictEqual(/(?<!^)(?<![\r\n\u2028\u2029]|^)(?![\r\n\u2028\u2029]|$)(?!$)/su);
        expect(qre`not start-of-text, not start-of-line`).toStrictEqual(/(?<!^)(?<![\r\n\u2028\u2029]|^)/su);
    });
});
