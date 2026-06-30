const marvel = ["Spider-Man", "Captain America", "Iron-Man"];
const dc = ["Flash", "Batman", "Wonder-Woman"];

marvel.push(dc);    //Array ke andar array aajayega isse
console.log(marvel);
console.log(marvel[3][1]);

//CONCAT
const all = marvel.concat(dc);
console.log(all);


//SPREAD --> kaanch ka glass lo and drop kro wo neeche girke spread hojayega


const all_new = [...marvel, ...dc];

console.log(all_new);

//FLAT
const another_array = [1, 2, 3, 4, 5, 6, [4, 5, 6], 7, [6, 7, [4, 6]]]
const real_another_array = another_array.flat(Infinity);           //Single array mei de dega ye sab     //Depth dete hai bracket mei
console.log(real_another_array);

//isArray  & from
console.log(Array.isArray("Nikshay"));
console.log(Array.from("Nikshay"));            //It will convert this string into array in output
console.log(Array.from({name: "Nikshay"}));      //Empty array dega kyuki isko directly convert ni kar para ye (****V.IMP FOR INTERVIEWS****)

//of --> Returns a new array from a set of elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  

