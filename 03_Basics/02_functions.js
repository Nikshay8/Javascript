//-----------------------------------------------------------------------------------------------------------------------------//

function calculateCartPrice(num1) {
    return num1

}

console.log(calculateCartPrice(200, 400, 500))

//isko run krenge jab upar wale code ko to bs output mei 200 ayega, lekin baaaki nahi aye, to ye sari problems solve krne ke liye REST operators ka use hota hai


//----------------------------------------------------------------------------------------------------------------------------//

function calculateCartPrice1(...num2) {   //Ye ... ko hi REST and SPREAD operator bola jata h
    return num2

}

console.log(calculateCartPrice1(200, 400, 500))

//REST ka mtlb hai ki jitna bhi item humare pass h usko ek bundle mei pack kro and de do



//---------------------------------------------------------------------------------------------------------------------------//


function calculateCartPrice2(val1, val2, ...num3) {   //Ye ... ko hi REST and SPREAD operator bola jata h
    return num3

}

console.log(calculateCartPrice2(200, 400, 500, 20000))    //200 gya val 1 mei, 400 gya val 2 mei, baaki 2 REST operator ke sath gaye


//-----------------------------------------------------------------------------------------------------------------------------//

const user = {
    username: "Nikshay",
    price: 199
}

function handleObject(anyobject) {

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user)

//-----------------------------------------------------------------------------------------------------------------------------//

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]

}

console.log(returnSecondValue(myNewArray))

//or

console.log(returnSecondValue([200, 300, 400, 500]))

