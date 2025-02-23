'use strict'

const { data } = require('./data');

const ops = require('./src/ops');

const main = () => {
    // get and identify arguments
    const arg = process.argv[2]

    if (!arg) {
        console.error(`No argument was provided, please refer to the docs.
            */ "--filter=[value]": to filter data.
            */ "--count": to return data with people/animals count.
        `);
        return;
    }

    if (arg.startsWith('--filter')) {
        // get pattern
        const pattern = arg.match(/(?<==).*$/);

        if(!pattern) {
            console.error('Invalid or no value provided!');
            return;
        }

        // filter
        const result = ops.filter(data, pattern[0]);

        if (!result || result.length === 0) {
            console.error('No data were found!');
            return;
        }

        // log
        console.dir(result, {depth: null, colors: true})
        return;
    }

    if (arg.startsWith('--count')) {
        // count
        const result = ops.count(data);

        // log
        console.dir(result, {depth: null, colors: true})
        return;
    }

    console.error(`Invalid argument was provided, please refer to the docs.
            */ "--filter=[value]": to filter data.
            */ "--count": to return data with people/animals count.
        `);
}

main();