const ora = require('ora');
const fs = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const TEMPLATE = `const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Hello World!');
});

module.exports = router;
`;

readline.question('Name of route:\n', name => {
    readline.question('Endpoint of route [/]:\n', (path = '/') => {
        console.log('');

        // Create file
        const spinner = ora('Creating route').start();
        fs.writeFileSync(`./src/routes/${name}.js`, TEMPLATE);

        // Including route
        spinner.text = 'Updating barrel file';
        const content = fs.readFileSync('./src/routes/index.js', 'utf-8');

        // Updating routes
        fs.writeFileSync(
            './src/routes/index.js',
            content.replace(
                '};',
                `   '${path}': require('./${name}'),
};`,
            ),
        );
        spinner.succeed('Route created!');
    });
});
