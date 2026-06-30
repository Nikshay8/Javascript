//Singleton --> Means koi bhi constructor se jab hum banate hai agar to singleton ek object banta hai, means ye apne tarike ka ek hi object hai
//Jab hum dusri tarah se banate hai to wo singleton nahi hota uske multiple instances bann jate hai

//Interview tip:- If kabhi interview mei pucha jaye to sirf itna dhyaan rakhna hai ki jab bhi hum actually mei literals ki tarah declare karte hai to singleton nahi banta hai

//Declaring a Symbol
const mySym = Symbol("key1");

//Object literals =
const Juser = {
    name: "Nikshay",
    age: 22,
    location: "Delhi",
    email: "nikshay@gmail.com",
    [mySym]: "myKey1",    //Symbol ko square brackets se refer karte hai
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    "Full Name": "Nikshay Singh"       //iss wale ke liye chance hi nahi hai ki hum isko Juser.Full Name method se access kar paye, to isliye square notation wala  method jo neeche likha whi use krna padega

}


//Way of accessing objects
console.log(Juser.email);

//OR
console.log(Juser["email"]);  //Better practice

console.log(Juser["full name"])
console.log(Juser[mySym])

//If we want to change the mail id
Juser.email = "nikshay@chatgpt.com";     // = ke use se hum values ko override kar skte h
//Object.freeze(Juser)                     // Lock kardia
Juser.email = "nikshay@microsoft.com"    // Ab change nahi hoga
console.log(Juser)

//Function
Juser.greeting = function() {
    console.log("Hello Js User")
}

Juser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)                 //Backticks ` ` matlab string interpolation hota h
} 

console.log(Juser.greeting());
console.log(Juser.greetingTwo());



