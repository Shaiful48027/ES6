let num1 = [1,2,3];
let num2 = [11,22,33];

let result = [...num1, ...num2];
console.log(result);


let p1 = {
    name : "shaiful",
    subject : "bangla"
};

let p2 ={
    nickname : "tanvir",
    method : "english"
};

let p = {...p1, ...p2};
console.log(p);
