//How to make objects singleton

//How can we declare objects using constructor


//Below is the first way of declaring an object
//const tinderUser = new Object()              //Diff is that it a non-singleton object

//or we can declare object like this
const tinderUser = {}                          //And it is a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com", 
    fullname: {                                       //nested objects
        userfullname: {
            firstname: "Nikshay",
            lastname: "Singh"

        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);  //Accesing values inside nested objects

console.log(regularUser.fullname?.userfullname);     //Optional chaining --> ? ka use tab krte h jab API calls vagerah hoti h and API puchta h, so isme agar ? matlb h agar value hai to access kro ye wali, nahi to hume if else lagane padte faltu m bhot bada hojata sab

//Combining objects
const obj1 = {
    1: "a",
    2: "b",
    3: "c",
    4: "d"

}

const obj2 = {
    5: "A",
    6: "B",
    7: "C",
    8: "D"
}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)    //Yha hora h combine Object.assign method ke use se
console.log(obj3);


const obj4 = {...obj1, ...obj2}
console.log(obj4)


const users = [
    {
        id1: 1,
        email1: "h@gmail.com"
    },
    {
        id2: 2,
        email2: "g@gmail.com"
    },
    {
        id3: 3,
        email3: "n@gmail.com"
    }
]

users[1].email1
console.log(tinderUser)

//Objects ki sari keys
console.log(Object.keys(tinderUser));
//Object ki sari values
console.log(Object.values(tinderUser));
//Object ki sari entries
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));     //iss naam ki koi property hai to 'true' ayega nahi h to 'false' ayega


//----------------------------------- DESTRUCTURING -------------------------------------------------------------------------//
const course = {
    courseName: "Javascript tutorial",
    price: "999",
    courseInstructor: "Nikshay"
}

//course.courseInstructor   //can use this too, but below one is better syntaxtwise

//Better syntax than this
const {courseInstructor} = course    //course object se hume values extract krni hai isliye = ke baad course aya  and {} mei wo value jo extract krni h
console.log(courseInstructor);


const {courseInstructor: instructor} = course    //if we want to destruct the name then we can do this
console.log(instructor)


//JSON  --> mei keys bhi string hoti h usually and unki values bhi string hoti h
/*{
    "name": "Nikshay",
    "coursename": "Javascript",
    "price": "free"
}
*/

[
    {},
    {},
    {}
]








