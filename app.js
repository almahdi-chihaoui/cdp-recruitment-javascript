'use strict'

const { data } = require('./data');

const ops = require('./src/ops');

const main = () => {
    // get and identify arguments
    const arg = process.argv[2]

    if (!arg) {
        console.error('Yoo!');
        return;
    }

    if (arg.startsWith('--filter')) {
        // get pattern
        const pattern = 'ry';

        // filter
        const result = ops.filter(data, pattern);

        if (!result) {
            console.error('No data were found');
            return;
        }

        // log
        console.log(`${JSON.stringify(result)}`);
        return;
    }

    if (arg.startsWith('--count')) {
        // count
        const result = ops.count(data);

        // log
        console.log(`${JSON.stringify(result)}`);
        return;
    }
}

main();