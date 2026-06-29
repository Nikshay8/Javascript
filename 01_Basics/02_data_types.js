"use strict";    //Ab ye likhne se jo humara sara code hai wo treat kiya jayega as a newer version of javascript

// alert(3 + 4)     //We are using node.js not browser (this thing would work in browser as browser mei node.js ka engine chupa hota hai but it won't work here and would give error so 3+4 run ni krega isme)

let name = "Nikshay"    //String
let age = 3             //Integer
let isLoggedIn = true   //Boolean
let state;              //undefined


/*DATA TYPES IN JAVASCRIPT*/

/*    PRIMITIVE -->  Uses Stack Memory*/

//1. number => 2^53    (2 to the power 53)
//2. bigInt   => Used if humara no. bhot bada hai
//3. string => " "
//4. boolean => true/false
//5. null  => standlone value  (null is a type specailly here)  (it is a representation of an empty value)
//6. undefined => means we haven't declared any value yet
//7. symbol => to find whether a component is unique or not (used in react much)


/*     NON - PRIMITIVE --> Heap Memory */
//1. Object =>
//2. Array =>
//3. Functions =>


console.log(typeof "Nikshay")
console.log(typeof null)    //Interview ques: Why is null represented as object when using typeof?


//-----------------Stack (Used in Primitive) & Heap Memory (Used in Non-Primitive) -----------------------------

//Stack ka example
let myYoutubeName = "TheShadyTeddy"

let anothername = myYoutubeName
anothername = "TheGamingTeddy"

console.log(myYoutubeName);
console.log(anothername);
//Stack mei bs copy change hoti hai, original value nahi, isliye anothername mei TheGamingTeddy print hua and myYoutubeName mei TheShadyTeddy hi


//Heap ka example (Object ke through)
let userOne = {
    email: "user@google.com",
    upi: "user@paytm.com"
}

//Heap ke andar copy ni milta actual value/data mei change hota hai

let userTwo = userOne    //Yaha wapas se original wale se hi reference lega naa ki uski copy se jaise stack mei hora tha
userTwo.email = "nikshay@google.com"   //objects mei email ko access krneka tarika

console.log(userOne.email);
console.log(userTwo.email);

//Upar dono ke andar value change hui ab kyuki actual data se reference liya humne na ki copy se, copy se reference lete to userOne change ni hota