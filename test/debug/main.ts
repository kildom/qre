

import qre from '../../src/qre';

let inner = qre`
    "def"
`;
let inner2 = qre`
    ${inner}
`;

console.log(inner2);
