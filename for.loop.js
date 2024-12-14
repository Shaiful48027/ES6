// for of
// ===============

// let numbers = [2,3,5,6];

// for (let number of numbers){
//     console.log(number);
// };



// for in
// ===============

// let info = {
//     id : 123,
//     name : "shaiful",
//     subject : "bangla"
// };

// for(let id in info){
//     // console.log(id); //loop varibale call korle shudu Key guli show korbe.
//     // console.log(info[id]); //jodi varibale er modde id k call korle value show korbe,
//     // console.log(`${id} : ${info[id]}`);  //dynamic bhabe id and value show korbe
// };


// for loop
// ===============

// let info = ["shaiful", "rakib", 'ragi']

// for(let x = 0; x < info.length; x++){
//     console.log(info[x]);
// };

// for Each
// ===============

// let numbers = [1,2,3,4,5];
// // numbers.forEach((x)=>console.log(x)); //call back forEach Functin.


// let info = [1,7,2,5,8,6,9];
// info.forEach(myfunction); //normli forEach er pro ekta function call korte hobe.

// function myfunction(data){ //oi function name function creat kore data recive korte hobe
//     console.log(data);
// };


// Map Function
// ===============

// let numbers = [1,2,3,4,5,6];
// let number = numbers.map(myfunction);

// function myfunction(data){
//     return data*2;
// }
// console.log(number);



// Filter Method
// ===============
let numbers = [1,2,3,4,5,6];
let number = numbers.filter(myfunction); // filter arry kaj kore kono condition er upor bhitti kore.
function myfunction(data){
    return data < 4; // jemon ekhane bola hoyche data ar man jodi 4 theke choto hoy tahole ta return korte.
}

console.log(number);



