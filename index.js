console.log("hello")
let a = 10;
a = a + 1;
let b = 20;
let c = 201;
console.log(a + b)
console.log(typeof a, typeof b)
// const can not be changed later and let and const are defined only for a block whereas a let is defined globally so always use let
{
    let a = 66;
    console.log(a)
}
// const d=1;
// d=d+1;//this is an error 



// primitive datatypes //
// null
// Number
// String
// Symbol
// undefined
// Boolean
// BigInt
let x = 22;;
let y = "dhairya";
let z = 1.222;
const e = true;
let s = undefined;
let r = null;

console.log(x, y, z, e, s, r)
console.log(typeof x, typeof y, typeof z, typeof e, typeof s, typeof r)



//OBJECT - To write something about an entity
let o = {
    "name": "Dhairya",//we can put any primitive datatype in it key and value
    "job code": 5600
}
console.log(o);
o.salary = "100CR";
console.log(o);
o.salary = "500CR";


// ARRAY
let arr=[10,20,30,40];
console.log(arr);

let g=10 , h=20;
console.log(g+h);
console.log(g*h);
console.log(g/h);
console.log(g-h);


//FOR OF 
for(let value of arr){
    console.log(value);
}
//FOR IN
for (let key in o){
    console.log(key + " : " + o[key]);
    console.log(`${key}: ${o[key]}`);
}