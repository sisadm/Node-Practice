const http = require('http');
const prompt = require('prompt-sync')({sigint: true});

// functions

// starting message

function startingMsg() {
    console.log('Hello There!');
    let num = prompt(`Enter your value in Euro to convert to whatever you want: `);
    let convertTo = prompt('Please use three-letter currency code: ');
    
    if(/(.*[a-z]){3}/i.test(convertTo)) {
        getExchange(convertTo, num);
    } else {
        console.error('Please use only letters!');
    }
    
};



function getExchange(currencyCode, number) {
    const request = http.get('http://api.exchangeratesapi.io/v1/latest?access_key=7195c5da9b3d875607f73a4e06068b51', response => {
        let body = '';
        currencyCode = currencyCode.toUpperCase();
        response.on('data', data=> {
            body += data.toString();
        });

        response.on('end', () => {
            const exch = JSON.parse(body); 
            console.log(exch.rates);
            result(number, exch.rates[currencyCode], currencyCode)
        })
    });
}

function result(number, currencyValue, currencyCode) {
    console.log(`Your ${number}EUR is worth ${Number(number * currencyValue)}${currencyCode}`);
}

startingMsg();