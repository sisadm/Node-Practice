let num;
const prompt = require('prompt-sync')();

function NumberFromUser() {
    num = prompt('Enter your Number: ');
    if(num !== NaN) {
        console.log(`Your number + 4 = ${Number(num) + 4}`);
    } else {
        console.log(`Please use Number, you wrote: ${num}`);
        NumberFromUser();
    }
}



NumberFromUser();