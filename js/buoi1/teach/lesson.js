// variable and statements

// var, let, const
// var test = "aaa";                // scope
// let bach = "let variable";       // scope
// const hangso = "const variable"; // khong the thay doi
// abc = '1111';

// test = 'thay doi'
// bach = 'bach dep trai'
// hangso = 1234 => sai

// // cách đặt tên
// let snake_case = 1; // snake_case: _: ruby, python
// // let kebab-case = 2;
// let CamelCase = 4;
// let camelCase = 5; => recommend

// const THIS_IS_A_CONST
// console.log(snake_case, CamelCase, camelCase);

// scope: biến của mình dùng được ở chỗ nào
// scope của var là `function`
// scope của let và const là `block` {}

// var abc = 1

// function testScope() {
//   let student = 'Bach'

//   console.log("student inside function:", student);
//   console.log("abc inside function:", abc);
//   // abc = "hjkhwqjkehwjkq";
// }

// testScope()
// console.log("--------------------")
// console.log("abc outside function:", abc);
// console.log("student outside function:", student);

// Ứng dụng
// 1. Không bao giờ dùng `var`
// 2. Luôn dùng `const`
// 3. Khi nào giá trị cần thay đổi thì đổi sang `let`

// simple statement
// const a = 1;
// const b = 2;

// const c = a + b;
// console.log(c);

// let a = 1;
// a = "1";

// types:
// typeof
// 7 types
// 1. String : '', "", ``
// define
// // 3 cach khai bao string
// const aString = "this is a string";
// const bString = 'this is b string';
// const cString = `this is c string`;

// console.log(aString);
// console.log(bString);
// console.log(cString);
// // concatenation: nối string
// const aNewString = aString + "----" + bString;
// console.log(aNewString);

// // escape charater
// const aNewNewString = 'we have 1 + 1 = \'\'\'2\'';
// console.log(aNewNewString);

// const aNewLineString = "\
//   aaa\
//   bbb\
// ";
// console.log(aNewLineString);

// const stringUsingBacktick = `
//   this is a "string",
//   this is a 'string' too
// `;
// console.log(stringUsingBacktick);

// const sayHi = "Hello ";
// let name = 'Bach';
// console.log("this is" + sayHi + "asdasd" + name + "hjkqwhjkewq");
// console.log(`this is string interpolation: ${1+1} aaaaa ${sayHi + name} nnbnnn`);

// interpolation: sử dụng biến trong string
// 2. Number
//   console.log(typeof 1);
//   console.log(typeof -1);
//   console.log(typeof 0.5);

//   console.log(0.1 + 0.2); // => 0.3
//   const giaCuaBimBim = 0.1;
//   const giaCuaChipChip = 0.2;
//   // anh di mua 1 bim bim + 1 chip chip thi anh tra bn
//   // 1x bim bim + 1x chip chip
//   console.log((giaCuaBimBim * 10 + giaCuaChipChip * 10) / 10)

//   //  https://0.30000000000000004.com/
// // 3. Boolean
//   // true / false
//   const aBoolean = true;
//   const bBoolean = false;
//   if (aBoolean) {
//     // do sth
//     console.log('true');
//   } else {
//     // do sth
//     console.log('false');
//   }
//   const function1 = function() {
//     console.log("this is function 1");
//   }
//   const function2 = function() {
//     console.log("this is function 2");
//   }
//   bBoolean ? function1() : function2();

// 4. Null
// const testNull = null;
// console.log(testNull);
// // 5. Undefined
// let b;
// console.log(b);

// // 7*. Object
// const bach = {
//   firstName: "bach",
//   lastName: "Duong",
//   gender: Symbol("male"),
// };
// console.log(bach);
// console.log(bach.firstName);
// console.log(bach.lastName);
// console.log(bach.age);
// console.log(`hello ${bach.lastName} ${bach.firstName}`);
// bach.lastName = null;
// console.log(`hello ${bach.lastName} ${bach.firstName}`);
// console.log(bach.lastName);
// console.log(bach.gender);

// // 6. Symbol
// const hello = Symbol("hello");
// console.log(hello);

// // const ko the thay doi
// const school = {
//   age: 10,
//   name: "thang long",
// };
// console.log(school);
// school.age = 11;
// console.log(school);

// // primitive & Object
// // primitive: String, number, boolean, ...
// // Object: Array, object

// // BUT
// // school = {
// //   age: 20,
// //   name: "Bach khoa",
// // };
// // console.log(school);
// // const Không phải ko thay đổi được giá trị ,
// // mà là KHÔNG GÁN LẠI ĐƯỢC (cant be re-assign)
// const studentAges = [20, 21, 23, 24, 25];
// console.log(studentAges[0]);
// studentAges[4] = null;
// console.log(studentAges);

// studentAges = [1, 2];
// index cua array bat dau tu 0
// length = 5

// -----------------------------------
// Types:
// 1.1. Primitive
  // string
  // number
  // boolean
  // null
  // undefined
  // symbol

  // S.N.U.B.N.S => SNUBNS

// khi access vào kiểu dữ liệu này thì mình làm việc trực tiếp với 
// "giá trị" - value của nó
  // const foo = 'foo';
  // let bar = foo;
  // console.log('Before');
  // console.log(foo)
  // console.log(bar)

  // bar = "bar"
  // console.log('After');
  // console.log(foo);
  // console.log(bar);
// 1.2. Non-primitive - Conplex
// làm việc với reference chứ ko phải giá trị
// Array
// Object
// function
// const foo = [1, 2, 3];
// const bar = foo;
// const bar = [...foo]; // spread operator
// const bar = Array.from(foo);
// bar[1] = 10; // thay doi reference cua `2` thanh 10

// console.log(foo);
// console.log(bar);

// Object
// const student = {
//   name: "student",
//   age: 21
// }

// let name = "bach";
// const age = 21;

// const student = {
//   name,
//   age,
//   gender: "male",
// }

// console.log(student);

// const school = {
//   name: "bach khoa", // name: "bach khoa"
//   age: 100,
//   'number-of-tach': 2000
// }

// console.log(school);
// console.log(school['number-of-tach']);

//// Function

// function sayHi(name = "Bach") {
//   console.log(`Hello ${name}`);
// }

// const sayHi2 = function() {
//   console.log(" this is another way to declare function")
// }
// const sayHi21 = () => {
//   console.log("aaaaa");
// }

// const sayHi3 = function thisIsASuperLongNameMethod() {
//   console.log("super long name method");
// }

// sayHi("Bot");
// sayHi();
// sayHi2();
// sayHi3();
// // thisIsASuperLongNameMethod();

// const aComplexParamsFunction = function(name, age = 10) {
//   console.log(`hello '${name}', your age: ${age}`);
// }

// aComplexParamsFunction("bach", 30);
// aComplexParamsFunction("foo");