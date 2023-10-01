const userInfo = require('./information.js');
console.log(`Hi, my name is ${userInfo.name} and I'm a student at ${userInfo.campus}`);


var cowsay = require("cowsay");

console.log(cowsay.say({
    text: JSON.stringify(userInfo),
    e: "oO",
    T: "U "
}));
