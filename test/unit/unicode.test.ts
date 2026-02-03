
import { describe, expect, test } from 'vitest'
import qre from '../../src/qre';

let doUpgraded = true;

try {
    new RegExp('', 'v');
} catch (e) {
    console.log('This JavasScript engine does not support RegExp v-mode');
    doUpgraded = false;
}

describe('Unicode', () => {
    if (doUpgraded) {

        test('Upgraded unicode', () => {
            expect(qre.unicode`[\w--_]`).toStrictEqual(new RegExp('[\\w--_]', 'sv'));
        });

    } else {

        test('Skipping upgraded unicode', () => { });

    }
});
