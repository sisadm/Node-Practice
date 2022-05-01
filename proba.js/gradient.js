const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const firstCoordinates= [];
const secondCoordinates= [];

readline.question('Please enter Horizontal coordinates:', x => {
    firstCoordinates.push(x);
    readline.close();
} );

