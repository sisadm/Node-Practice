
const prompt = require('prompt-sync')({sigint: true});

function NumberFromUser() {
    let num = prompt('Enter your Number: ');
    if(Number(num)) {
        console.log(`Your number + 4 = ${Number(num) + 4}`);
    } else {
        console.log(`Please use Number, you wrote: ${num}`);
        NumberFromUser();
    }
}



NumberFromUser();