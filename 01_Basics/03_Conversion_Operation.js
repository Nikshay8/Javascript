let score = "33abc"

console.log(typeof score);
console.log(typeof(score));
//const {score} = req.body  

let valueInNumber = Number(score)      //conversion
console.log(typeof valueInNumber);
console.log(valueInNumber);


/*Conversions*/
// "33" => 33 
// "33abc" => Nan  (Not an Number)   but its type is number only
//  true => 1; false => 0

//Another Conversion
//let isLoggedIn = 1
//let isLoggedIn = 0
let isLoggedIn = "Nikshay"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*Conversiomns*/
// 1=> true; 0 => false
// "" => false
// "Nikshay" => true


//Now trying Number to String Conversion
let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ******************** Operations *********************************************
let value = 3
let negValue = -value
//console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


//Way to add string 
let str1 = "Hello"
let str2 = " Nikshay"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");          //confusing output 

console.log(+true);
console.log(+"");


let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter)





