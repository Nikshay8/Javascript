//Functions ka mtlb jo bhi code likha hai usko ek package mei band krna , wo package reusable hai

function sayMyName() {   //function creation
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("Y");
}

sayMyName()   //function call


//----------------------------------------FIRST---------------------------------------------------------------------
function addTwoNumbers(number1, number2) {    //Parameters 
    console.log("Addition of two numbers: ", number1 + number2)     //Console.log sirf screen pe print karta hai

}

const result = addTwoNumbers(3, 4)             //Giving arguments
console.log("Result: ", result)                //Ye function bs print karra hai kuch return nahi krra hai, that's why undefined ara hai



//----------------------------------------SECOND---------------------------------------------------------------------

function addTwoNumbers2(number1, number2) {    //Parameters 
    let result2 = number1 + number2
    return result2                             //return statement value ko function ke bahar bhejta hai
}
const result2 = addTwoNumbers2(3, 4)             //Giving arguments
console.log("Result: ", result2) 


//----------------------------------------THIRD-----------------------------------------------------------------------------

function addTwoNumbers3(number1, number2) {    //Parameters 
   
    return number1 + number2                           //return statement value ko function ke bahar bhejta hai
}
const result3 = addTwoNumbers3(3, 4)             //Giving arguments
console.log("Result: ", result3) 


//--------------------------------------Diff func-----------------------------------------------------------------------------

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a username")
    }
    return `${username} just logged in`      //Return ke baad agar function m kuch bhi likho to wo invalid hi mana jata hai executed ni hoga wo part
}

console.log(loginUserMessage("Nikshay8"));


//----------------------------------Overriding the funcion value--------------------------------------------------------------
function loginUserMessage1(username1 = "Nikshay") {
    if(!username1) {
        console.log("Please enter a username")
    }
    return `${username1} just logged in`      //Return ke baad agar function m kuch bhi likho to wo invalid hi mana jata hai executed ni hoga wo part
}

console.log(loginUserMessage1("Crack"));            //Overriding the function value ab Nikshay ki jagah crack print hoga

