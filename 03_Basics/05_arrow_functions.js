const user = {
    username: "Nikshay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to the website`)   //This refer karta hai to current context
        console.log(this)
    }
    
}

user.welcomeMessage()
user.username = "sam"   //yahape context change krdia isliye sam ayega answer mei
user.welcomeMessage()

//------------------------ ANOTHER FUNCTION --> but isme koi object ni hai to this kisiko ko point ni krega)
function one() {
    let username = "Nikshay"
    console.log(this.username)   //Aise function ke andar aake ye kaam nahi karega
}

one()


//--------------------------- ARROW FUNCTION() -----------------------------------------------------------------//

const nik = () => {
    let username = "Nikshay Singh"
    console.log(this.username)    //arrow function mei bhi undefined dega ye
}

nik()


//-------------------------- MORE ON ARROW FUNCTIONS() -----------------------------------------------------------//

//Explicit Return Method
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))


//Or we can do same thing using this implicit return method

const addTwoo = (num1, num2) => (num1 + num2)
console.log(addTwoo(3, 4))






