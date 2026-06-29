const name = "Nikshay"
const repoCount = 50

console.log(name + repoCount + " Value");   //Bad Syntax --> Oudated & Not Recommended


//Back ticks (``) are used in current time for this purpose

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //It is called String Interpolation --> Used currently

//Another way to declare string
const gameName = new String('Nikshay Singh-NS-com')    //Key-value pairs ke according map krdeta hai

console.log(gameName[0]);   //Means Ouput will he N

//to access protoype
console.log(gameName.__proto__)    //object return krdega {} ye empty ni hai iske andar aur bhi bhot sari values hai

//print length
console.log(gameName.length);

//UpperCase
console.log(gameName.toUpperCase());

//to find the character by its index --> charAt
console.log(gameName.charAt(2));

//indexOf --> to find the position of a character
console.log(gameName.indexOf('s'));

//substring
const newString = gameName.substring(0, 4)     //Substring mei negative values ni de skte
console.log(newString);

//slice
const anotherString = gameName.slice(0, -4)     //We can use negative values in slice
console.log(anotherString)

//trim
const newStringOne = "   Nikshay   "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace & includes
const url = "https://nikshay.com/nikshay%20singh"
console.log(url.replace('%20', '-'))

console.log(url.includes('nikshay'))

//split -- split karta h on basis of the separator
console.log(gameName.split('-'));

