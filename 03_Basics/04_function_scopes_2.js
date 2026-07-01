function one() {
    const username = "Nikshay"
    
    function two() {
        const website = "youtube"
        console.log(username);
    } 

    //console.log(website);

    two()

}

one()

//Two chota hai --> two one se ice cream mang skta hai kyuki two chhota bccha h, but agar one ice cream mangega two se to wo galat lagega ki bada bcche se ice cream mangra h

if(true) {
    const username = "Nikshay"
    if(username == "Nikshay") {
        const website = " Insta"
        console.log(username + website);
    }

    //console.log(website);  //ye access hi ni hoga kyuki iska scope upar hi khtm hogya, so it will throw reference error: website is not defined

}

// console.log(username);   //similarily ye bhi access nahi ho payega kyuki iska bhi scope yahape nahi hai




//---------------------------INTERESTING EXAMPLE ------------------------------------------------//


//Iss wale function declaration wale tarike ko execute karne mei error nahi dega ye
console.log(addone(5))
function addone(num) {
    return num + 1
}



//Iss wale function declaration wale tarike ko execute karne mei error dega ye
addTwo(5)
const addTwo = function(num) {
    return num + 2
}

//Function Hoisting ka concept hai ye