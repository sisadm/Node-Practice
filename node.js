// connect to the API URL (https://teamtreehouse.com/dmsisa.json);
// Read the data
// Parse the data
// Print the data

// Require  https module
const https = require('https');



//Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
} 

function getProfile(username) {
    // connect to the API URL(https://teamtreehouse.com/${username}.json) 
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
        let body = '';
        response.on('data', data => {
            body += data.toString();
        })

        response.on('end', () => {

            //Parse the data
            const profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript);  
        });
    });
}

console.log(process.argv);
const users = process.argv.slice(2);




// const users = ['chalkers', 'alenaholligan', 'davemcfarland'];

// users.forEach( username => {
//     getProfile(username);
// });

// simple forEach because getProfile need 1 parameter 

users.forEach(getProfile);