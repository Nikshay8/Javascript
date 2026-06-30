const myArr = [0, 1, 2, 3, 4, 5];
console.log("Print Arr1: " , myArr);
console.log("Print index from Arr1: " , myArr[2]);

//Another way to declare array
const myArr2 = new Array(1,2,3);
console.log("Print Arr2:" , myArr2);

//Array Methods

myArr.push(6);
console.log("Push:" , myArr);

myArr.pop();   //last element
console.log("Pop:" , myArr);

myArr.unshift(0)
console.log("unshift:" , myArr);   //ek aur zero agya


myArr.shift()
console.log("shift:" , myArr);

console.log(myArr.includes(5));    //True ya false mei answer deta hai


console.log(myArr.indexOf(5));    //Index 

const newArr = myArr.join()      //Join krdeta h 2 arrays ko and converts it into a string
console.log(newArr);
console.log(typeof(newArr));


//Slice and Splice methods

//SLICE
console.log("A ", myArr);
const myNewArr1 = myArr.slice(1, 3);
console.log(myNewArr1);
console.log("B ", myArr);


//SPLICE
const myNewArr2 = myArr.splice(1,3);
console.log("C: ", myNewArr1);    //Splice se humara original array jo tha wohi manipulate hogaya
console.log(myNewArr2);

