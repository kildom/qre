
import qre from 'qre';

console.log(qre.legacy`"OK"`);

try {
    console.log(qre.legacy`error`);
    throw new Error('Unreachable');
} catch (err) {
    if (!(err instanceof qre.Error)) {
        throw err;
    }
}
