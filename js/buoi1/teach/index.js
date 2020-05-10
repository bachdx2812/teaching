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

let a = 1;
a = "1";

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
  console.log(typeof 1);
  console.log(typeof -1);
  console.log(typeof 0.5);

  console.log(0.1 + 0.2); // => 0.3
  const giaCuaBimBim = 0.1;
  const giaCuaChipChip = 0.2;
  // anh di mua 1 bim bim + 1 chip chip thi anh tra bn
  // 1x bim bim + 1x chip chip
  console.log((giaCuaBimBim * 10 + giaCuaChipChip * 10) / 10)

  //  https://0.30000000000000004.com/
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7*. Object