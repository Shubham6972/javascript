// Strings

const name = "Shubham";
const repocount = 50;
console.log(name + repocount); //Outdaated syntax ..

// Latest Syntax
console.log(`Hello My Name is ${name.toUpperCase()} and my repo  count is ${repocount}`)

const gameName = new String('Shubham-50-2003');

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(6));
console.log(gameName.indexOf('b'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newString1 = "  Shubham  ";
console.log(newString1);
console.log(newString1.trim());

const url = "https://shubhamsonksuare-query";
console.log(url.replace('-','%'));

console.log(url.includes('hitesh'));

//convert String to array based on "-"
console.log(gameName.split('-'));

