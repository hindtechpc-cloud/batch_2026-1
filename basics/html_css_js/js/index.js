// variables
// const,let ,var
// var a=5;

// var a = 5;
// var a = 6;

// {
//     var a=7;
// }

// let

// let a=5;
//  a=7;
//  a=0
//  a=2

// const
// {
//   const a = 3;
//   // a = 4;
//   console.log(a);
// }

// operators
// 1.Arithmetic
// + addition
// _ sustraction
// * multiclication
// / division
// % modules

let a = 9;
let b = "9";
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// assignment operators
// =
// +=
// -=
// *=
// /=
// %=

// console.log(a==b);//values are equal  true
// console.log(a===b);//values are equal and data type also equal
// a+=2
// console.log(a);

// relational operators//comparision
// ==
// ===
// >
// >=
// <
// <=
// !=
// !==

// console.log(a>b)
// console.log(a>=b)
// console.log(a<b)
// console.log(a<=b)
// console.log(a==b)
// console.log(a===b)
// console.log(a!=b)
// console.log(a!==b)

// logical operators
// && and
// || or
// ! not

let c = 9;
// && and operator
// console.log(a == b && b == c);true
// console.log(a === b && b === c);//false
// console.log(a === b && b == c);//false
// console.log(a == b && b === c);//false

// || or operator
// console.log(a == b || b == c);//true

// console.log(a === b || b === c); //false
// console.log(a === b || b == c); //true
// console.log(a == b || b === c); //true

// ! not operator
// console.log(a !== b); //true

// console.log(a != b); //false

// const isLogin = false;
// isLogin && console.log("user loginned");
// !isLogin && console.log("user loginned");

// ternary operator
// condition ? value1 : value2;
// console.log(a != b ? "isEqual" : "notIsEqual");
const isLogin = false;
// console.log(isLogin ? "Authenticated user" : "not Authenticated user");

// in block accessibility
{
  // let inBlock=5;
  var inBlock = 5;
}

// console.log(inBlock);
// console.log(host);
// var host=5

// data types
// primitive data types
// Number
// String
// Boolean
// null
// undefined
// Symbol
// BigInt

// none primitive data types
// Function
// Object
// Array
// Date
// RegExp
// Set
// Map
// const isLogin=true;

// let empty=''

// ``,"",'' =string
// console.log(typeof b); //string

// const user=null
// const arr=[]
// const obj={}
// const fn=()=>{}
// console.log(typeof user)//object
// console.log(typeof arr)//object
// console.log(typeof obj)//object
// console.log(typeof fn)//function

// let d="";//string
// let d; //undefined
// console.log(typeof d);

// const n=1234567890123456789012345;
// let bgint=BigInt(n);
// console.log(typeof bgint)

// const g=0;
// console.log(g??a);

// const isLogin2=true;//boolean
// console.log(typeof a)
// let name="arvind";
// name2=`name2value ${a}`
// console.log(typeof name2)

// let undef=null;
// console.log(typeof undef);

// const user = {
//   name: "hgefgu",
//   age: 23256,
// };
// user.name = "arvind";
// console.log(typeof user);

// functions

// normal funtions

// function greate(user) {
// return (`Hello ${user.name} Kumar `);
// }

// const greateArrowFN = () => {

//   console.log("arrow function");
// };

// (()=>{
//   console.log("immidiate invoked functin")
// })();

// const user = {
//   name: "Arvind",
//   role: "mern dev",
// };
// const user2 = {
//   name: "Raj",
//   role: "mern dev",
// };

// const msg=greate(user);
// const msg2=greate(user2);

// console.log(msg)
// console.log(msg2)
// greateArrowFN(user);

// const add = (a, b) => {
//   return a + b;
// };

// let num1 = 4;
// let num2 = 3;

// const result = add(num1, num2);
// console.log(result);

// const userAge = (user) => {
//   return user.age;
// };

// objects

// const user = {
//   name: "gfeow",
//   age: 53,
//   role: "ygeiyr",
//   greate: function () {
//     return "hello";
//   },
// };

// const age = userAge(user);
// console.log(age);

// console.log(user.name);
// console.log(user["age"]);
// user.age = 40;
// console.log("updated user age", user.age);

// console.log(user.greate())

// Array

const arr = [1, 4, 3, 44, 55, 5, 4, 5, 6, 7, 8, 8];
// console.log(typeof arr);
// console.log(arr[0]);
// console.log(arr.length);

// console.log("before push 0 : ", arr);

// arr.push(0);
// console.log("after push 0 : ", arr);

// arr.pop()
// console.log("after pop  : ", arr);

// arr.pop();
// console.log(arr)

// const newArr=arr.slice(1,5);

// console.log(newArr);

// arr.shift

// console.log(arr.slice((arr.length-1) - 4, arr.length-1));//4 lement from last
// console.log(arr.slice(0 , 4));//4 lement from last

// console.log(arr[3])

//shift
// console.log(arr.shift())//remove from  start index
// console.log(arr.unshift(1000));
// console.log("added 1000", arr);
// arr.shift();
// console.log("removed 1st element", arr);

// filter

// const users = ["anam", "anokhi", "ashiki", "anjali", " Raj","ram"];
// const even = arr.filter((e) => e % 2 == 0);
// const odd = arr.filter((e) => e % 2 != 0);
// console.log(even);
// console.log(odd);

// find all user named with o letter
// const usersWithOLetter=users.filter((user)=>user.includes("i"));//exist letter in name
// console.log(usersWithOLetter)

// const satrtNameWithALetter = users.filter((user) => {
//   if (user[0] == " ") {
//     return user[1].toLocaleLowerCase() == "r";
//   }
//   return user[0].toLocaleLowerCase() == "r";
// }); //start with this letter
// console.log(satrtNameWithALetter);

const users = [
  {
    name: "Arvind",
    age: 3443,
    role: "mern dev",
    salary: 0,
  },
  {
    name: "Raj",
    age: 35,
    role: "laravel dev",
    salary: 100000,
  },
  { name: "Anjali", age: 34, role: "laravel dev", salary: 23459458 },
  {
    name: "manish",
    age: 25,
    role: "mern dev",
    salary: 0,
  },
];

// const laravelDev = users.filter(
//   (user) => user.role.toLocaleLowerCase() == "laravel dev",
// );
// const mernDev = users.filter(
//   (user) => user.role.toLocaleLowerCase() == "mern dev",
// );

// console.log("laravel dev ", laravelDev);
// console.log("mern dev ", mernDev);

// reduce method

// const total=arr.reduce((e1,e2)=>e1+e2);
// console.log(total)
// console.log(arr.sort());

// sort

// const sortedUserList = [...users].sort((u1, u2) =>
//   u1.name.localeCompare(u2.name)
// );

// console.log(sortedUserList);

// map

// const editedUser = users.map((user, index) => {
//   user.UID = `UID${index}`;
//   user.email = `hindtech.${user.name.toLocaleLowerCase()}@gmail.com`;
//   user.salary += 500;
//   return user;
// });
// console.log(editedUser);

// const added2 = arr.map((num) => num + 2);
// console.log(added2)

// const totalSalary = users.map((user) => {
//   return (user.salary += 500);
// });

// console.log(totalSalary);

// console.log(totalSalary.reduce((a,b)=>a+b));

// const total=arr.reduce((a,b)=>a+b);
// console.log(total);

// const newArr=arr.splice(2,13);
// console.log(newArr)
// console.log(arr);

// const newINdex=arr.indexOf(4);
// const newINdex = arr.find((e) => e % 2 == 0 && e != 4 && e != 44);
// console.log(newINdex);

// const user = users.find(
//   (user) =>
//     user.name[0].toLocaleLowerCase() == "a" &&
//     user.age > 18 &&
//     user.age < 100 &&
//     user.salary > 10000
// );

// console.log(user);

// arr.some()
// arr.every()
// keys()

// console.log(users.reverse());

// function

// function searchUser(users, age, salary, role) {
//   return users.find(
//     (user) => user.age > age && user.salary > salary && user.role == role,
//   );
// }

// console.log(searchUser(users, 30, 100000, "laravel dev"));

// const filterEvenNumbers = (arr = []) => {
//   const even = arr.filter((e) => e % 2 == 0);
//   return even;
// };

// console.log(filterEvenNumbers(arr));

// (() => {
// console.log(filterEvenNumbers(arr));
// })();

// const performOperation = (num1, num2, sym) => {

//   let result;
//   if (sym == "+") result = num1 + num2;
//   if (sym == "-") result = num1 - num2;
//   if (sym == "*") result = num1 * num2;
//   if (sym == "%") result = num1 % num2;
//   if (sym == "/") result = num1 / num2;
//   return result;
// };

// console.log(performOperation(1, 2, "-"));

// conditional statements
// if block
// if (condition) {

// }

// if else block
// if (condition) {
// } else {
// }

// switch block
// switch (key) {
//   case value:
//     break;

//   default:
//     break;
// }

// loops
// for
// while
// do while

// for in most importent in objects
// const user = {
//   name: "rufyrty",
//   age: 786,
// };

// console.log(user["name"]);
// console.log(user.name);
// for (const key in user) {
//   console.log(user[key]);
// }

// for of

// for(value of user){ ///not used for objects
//   console.log(value);
// }

// for (value of arr) {
//   console.log(value);
// }

// foreach

// users.forEach((user) => {
//   if (user.age > 18 && user.salary > 1000) {
//     console.log(user);
//   }
// });

// date and time

const date = new Date();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.toISOString());

// console.log(date.toLocaleString().split(",")[0]);
// console.log(date.toLocaleString().split(",")[1]);

// [jan,feb]

// const days = ["sun","mon", "tue", "wed", "thur", "fri", "sat"];
// date 
// const year = date.getFullYear();
// const month = date.getMonth();

// // console.log(month);
// const currentDate = date.getDate();
// console.log(currentDate + "/" + month + 1 + "/" + year);
// const day = date.getDay();
// console.log(day);


const 