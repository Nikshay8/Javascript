//Immediately Invoked Function Expressions (IIFE)

//Normal function se
//Named IIFE
(function hello() {
    console.log(`DB CONNECTED`)

}) ();   //--> Ye () last wala paranthesis is for execution call


//Arrow function banake 
//Unnamed IIFE
(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('Nikshay');





