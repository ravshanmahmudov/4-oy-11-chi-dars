// 1 - masala

// let str = "salom";
// let string = (str.charAt(4))
// console.log(string);

// 2 - masala

// function getMiddleChar(str) {
//     let length = str.length;
//     if (length % 2 === 0) {
//         return str.substr(length / 2 - 1, 2);
//     } else {
//         return str.charAt(Math.floor(length / 2));
//     }
// }
// console.log(getMiddleChar("hello"));
// console.log(getMiddleChar("bye"));

// 3 - masala

// function CharCode(str) {
//   if (str.length === 0) {
//     return null;
//   }
//   return str.charCodeAt(0);
// }
// const string = "Hello";
// const firstCharCode = CharCode(string);
// console.log(firstCharCode);

// 4 - masala

// function stringLenght(arr) {
//     if (arr > 10) {
//         console.log("Uzoq string");
//     } else {
//         console.log("Qisqa string");
//     }
//     return arr;
// }

// 5 - masala

// function getCharCodes(str) {
//     let charCodes = [];
//     for (let i = 0; i < str.length; i++) {
//         charCodes.push(str.charCodeAt(i));
//     }
//     return charCodes;
// }
// let string = "Salom";
// let result = getCharCodes(string);
// console.log(result);

// 1 - masala

// function soz(str) {
//     return str.slice(0, 3);
//   }
//   let string = "Hello";
//   let result = soz(string);
//   console.log(result);

// 2 - masala

// function strng(str) {
//     return str.slice(-5);
// }
// let test = "JavaScript";
// console.log(strng(test));

// 3 - masala

// function Chars(str) {
//   if (str.length % 2 === 0) {
//     return str.substring(str.length / 2 - 1, str.length / 2 + 1);
//   } else {
//     return str.charAt(Math.floor(str.length / 2));
//   }
// }
// console.log(Chars("salom"));
// console.log(Chars("hello"));
// console.log(Chars("abc"));

// 4 - masala

// function getThreeCharsFromFifthIndex(str) {
//   if (str.length < 8) {
//     return "String uzunligi yetarli emas";
//   }
//   return str.substr(5, 3);
// }
// let testString = "Salom dunyo";
// console.log(getThreeCharsFromFifthIndex(testString));

// 5 - masala

// function getFirstTenChars(str) {
//     return str.substring(0, 10);
// }
// let inputString = "Bu bir test matnidi";
// let firstTenChars = getFirstTenChars(inputString);
// console.log(firstTenChars);

// 6 - masala

// function getLastThreeChars(str) {
//     return str.slice(-3);
// }
// let testString = "Hello, World!";
// let lastThreeCharacters = getLastThreeChars(testString);
// console.log(lastThreeCharacters);

// 7 - masala

// function getSubstringFromSecondIndex(str) {
//     return str.substring(2);
// }
// const result = getSubstringFromSecondIndex("Hello, World!");
// console.log(result);

// 1 - masala

// function toUpperCase(arg) {
//     return arg.toUpperCase();
// }
// let res = toUpperCase("Salom, Dunyo");
// console.log(res);

// 2 - masala

// function toLowerCase(arg) {
//     return arg.toLowerCase();
// }
// let res = toLowerCase("Salom, Dunyo");
// console.log(res);

// 3 - masala

// function concatStrings(str1, str2) {
//     return str1.concat(str2);
// }
// let result = concatStrings("Salom", " dunyo");
// console.log(result);

// 4 - masala

// function trimString(str) {
//     return str.trim();
// }
// let testString = "    Hello, world!    ";
// console.log(trimString(testString));

// 5 - masala

// function padStringStart(str, maxLength, padChar) {
//     const paddingLength = maxLength - str.length;
//     if (paddingLength > 0) {
//         return padChar.repeat(paddingLength) + str;
//     } else {
//         return str;
//     }
// }
// const str = "Hello";
// const maxLength = 10;
// const padChar = "*";
// const paddedString = padStringStart(str, maxLength, padChar);
// console.log(paddedString);

// 6 - masala

// function padStringEnd(str, maxLength, padChar) {
//     return str.padEnd(maxLength, padChar);
// }
// let testString = "Hello";
// let maxLength = 10;
// let padCharacter = "*";
// let result = padStringEnd(testString, maxLength, padCharacter);
// console.log(result);

// 7 - masala

// function probelOlish(arg) {
//     return arr.trimEnd();
// }
// let test = "Hi    "
// console.log(probelOlish(test));

// 8 - masala

// function probelOl(arr) {
//   return arr.trimStart();
// }
// let testing = "    Hi";
// console.log(probelOl(testing));

// 9 - masala

// function padStringWithZerosStart(str, maxLength) {
//     return str.padStart(maxLength, '0');
// }
// let str = '42';
// let maxLength = 5;
// let paddedStr = padStringWithZerosStart(str, maxLength);
// console.log(paddedStr);

// 10 - masala

// function padStringWithSpacesEnd(str, maxLength) {
//     return str.padEnd(maxLength, ' ');
// }
// let testStr = 'Salom';
// let paddedStr = padStringWithSpacesEnd(testStr, 10);
// console.log(paddedStr);

// 1 - masala

// function repeatString(str, N) {
//     return str.repeat(N);
// }
// const string = 'Hello, World! ';
// const repetitions = 3;
// const repeatedString = repeatString(string, repetitions);
// console.log(repeatedString);

// 2 - masala

// function Orange(str) {
//     return str.replace('apple', 'orange');
// }
// let testString = "I have an apple and a green apple tree.";
// let replacedString = Orange(testString);
// console.log(replacedString);

// 3 - masala

// function smallToBig(str) {
//     return str.replace("a", "A");
// }
// let test = "assalomu Alaykum";
// let replaced = smallToBig(test);
// console.log(replaced);

// 4 - masala

// function replaceAll(str) {
//     return str.replace(/cat/g, 'dog');
// }

// let str = "I have a cat and my cat is fluffy.";
// let newStr = replaceAll(str);
// console.log(newStr);

// 5 - masala

// function toBigElement(str) {
//     return str.replace(/e/g, 'E');
// }
// let str = "Mening ismim elyorbek";
// newStr = toBigElement(str);
// console.log(newStr);

// 6 - masala

// function splitBySpaces(str) {
//     return str.split(" ");
// }

// let myString = "test uchun matn";
// let myArray = splitBySpaces(myString);
// console.log(myArray);

// 7 - masala

// function myString(str) {
//     return str.split(" , ");
// }
// let split = "matn kiriting";
// let arr = myString(split);
// console.log(arr);

// 8 - masala

// function split(str) {
//     return str.split('');
// }
// const str = "Hi guys";
// const result = split(str);
// console.log(result);

// 9 - masala

// function splitByDelimiter(str, delimiter) {
//     return str.split(delimiter);
// }
// const inputString = "Hello,world,how,are,you";
// const delimiter = ",";
// const resultArray = splitByDelimiter(inputString, delimiter);
// console.log(resultArray);

// 10 - masala

// function processString(str) {
//   const step1 = str.replace(/a/g, "*");
//   const step2 = step1.replace(/\b(\w+)\b/g, "$1$1$1");
//   const result = step2.split(/\s+/);
//   return result;
// }
// const str = "JavaScript";
// const result = processString(str);
// console.log(result);

// 1 - masala

// function processString(str) {
//     let strArray = str.split(' ');
//     let newArray = strArray.map(item => item.toUpperCase());
//     let result = newArray.join(', ');
//     return result;
// }
// let testString = "bugun havo juda iliq";
// let processedString = processString(testString);
// console.log(processedString);

// 2 - masala

// function joinArray(arr) {
//     let result = arr.map(String).join("");
//     let totalLength = arr.reduce((acc, curr) => acc + String(curr).length, 0);
//     return result + totalLength;
// }
// let arr = [1, 23, 456, 7890];
// let result = joinArray(arr);
// console.log(result);

// 3 - masala

// function clean(arr) {
//   arr = arr.filter((item) => item !== "");
//   let result = arr.join("");
//   return result;
// }
// let arr = ["Salom", "", "hammaga", "", ""];
// let result = clean(arr);
// console.log(result);

// 4 - masala

// function Unicode(str) {
//     let unicodeArray = [];
//     for (let i = 0; i < str.length; i++) {
//         unicodeArray.push(str.charCodeAt(i));
//     }
//     return unicodeArray;
// }
// let str = "Hello";
// let unicodeArray = Unicode(str);
// console.log(unicodeArray)

// 5 - masala

// function reverseArray(arr) {
//     return arr.reverse();
// }
// function ToString(arr) {
//     return reverseArray(arr).join(",");
// }
// const exampleArray = [1, 2, 3, 4, 5];
// const reversed = ToString(exampleArray);
// console.log(reversed);

// 6 -masala

// function padArray(str) {
//     let arr = str.split(" ");
//     let paddedArr = arr.map(element => "0" + element);
//     let result = paddedArr.join(" ");
//     return result;
// }
// let str = "how are you";
// let result = padArray(str);
// console.log(result);

// 7 - masala

// function lowercase(arr) {
//     let newArr = arr.map(item => item.toLowerCase());
//     return newArr.join("-");
// }
// const arr = ["Apple", "Banana", "Orange"];
// console.log(lowercase(arr));

// 8 - masala

// function joinArray(str) {
//     return str.split(',').join('xyz');
// }

// let testStr = "abc,def,ghi,jkl";
// let result = joinArray(testStr);
// console.log(result);

// 9 - masala

// function sumArray(arr) {
//   let totalLength = 0;
//   for (let i = 0; i < arr.length; i++) {
//     totalLength += arr[i].length;
//   }
//   return totalLength.toString();
// }
// let arr = ["Hello", "bye", "good", "nice"];
// console.log(sumArray(arr));

// 10 - masala

// function squareCharacters(str) {
//     let characters = str.split('');
//     let squared = characters.map(char => Math.pow(Number(char), 2));
//     let result = squared.join(' ');
//     return result;
// }
// let testString = "hello";
// console.log(squareCharacters(testString));

// 1 - masala

// function find(str) {
//     return str.indexOf("apple");
// }
// const str = "I have an apple and a banana";
// const index = find(str);
// console.log(index);

// 2 - masala

// function findSymbol(find) {
//     return find.indexOf('@');
// }
// let find = 'Hi b@by';
// let indexOf = findSymboll(find);
// console.log(indexOf);

// 3 - masala

// function searchBanana(str) {
//     const index = str.indexOf("banana");
//     return index !== -1 ? index : "Not found";
// }
// const str1 = "I have an apple and a banana";
// const str2 = "I have an orange";
// console.log(searchBanana(str1));
// console.log(searchBanana(str2));

// 4 - masala

// function searchDigit(str) {
//     const index = str.search(/\d/);
//     return index !== -1 ? index : "Not found";
// }
// const str1 = "I have 2 apples and 3 bananas";
// const str2 = "I have no fruits";
// console.log(searchDigit(str1));
// console.log(searchDigit(str2));

// 5 - masala

// function includesCat(str) {
//     return str.includes("cat");
// }
// const str1 = "I have a cat and a dog";
// const str2 = "I have a dog";
// console.log(includesCat(str1));
// console.log(includesCat(str2));

// 6 - masala

// function includes2024(str) {
//     return str.includes("2024");
// }
// const str1 = "The year is 2024";
// const str2 = "The year is 2023";
// console.log(includes2024(str1));
// console.log(includes2024(str2));

// 7 - masala

// function Hello(str) {
//     return str.startsWith("Hello");
// }
// const str1 = "Hello World";
// const str2 = "Hi there";
// console.log(Hello(str1));
// console.log(Hello(str2));