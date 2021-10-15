// connect to the API URL (https://teamtreehouse.com/dmsisa.json);
// Read the data
// Parse the data
// Print the data

const profile = require('./profile.js');



const users = process.argv.slice(2);

// const users = ['chalkers', 'alenaholligan', 'davemcfarland'];

// users.forEach( username => {
//     getProfile(username);
// });

// simple forEach because getProfile need 1 parameter 

users.forEach(profile.get);