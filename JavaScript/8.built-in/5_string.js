/**
 * String 문자열 클래스
 * - character를 하나씩 배열에 저장
 * - split(), slice(), chatAt(), toUpperCase() …
 */
let str = '홍길동';
let strObj = new String('홍길동');

console.log(str, typeof str);
console.log(strObj, typeof strObj);
console.log(str == strObj);
console.log(str === strObj);

let str2 = 'Hello~ JavaScript';
console.log('str2.length =',str2.length);
console.log('str2.CharAt(인덱스) =', str2.charAt(7)); //n번째 자리를 호출
console.log('str2.toUpperCase() =', str2.toUpperCase()); //전부 대문자
console.log('str2.toLowerCase() =', str2.toLowerCase()); //전부 소문자
console.log(str2 + ',next React Programming'); 
console.log(str2.concat(',next React Programming')); // +와 같은 효과를 줌

let str3 = '     Hello~ JavaScript     '; //공백이 앞 뒤로 5개씩 있는 상황
console.log(str3, str3.length);
console.log(str3.trim(),str3.trim().length); //앞쪽 공백 삭제
console.log(str3.trimEnd(),str3.trimEnd().length); //뒤쪽 공백 삭제
console.log(str3.trimStart(),str3.trimStart().length);

//문자열을 구분자를 이용하여 배열 객체로 생성
let fruits = 'apple,lemon,orange';
let fruits2 = 'apple lemon orange';
let fruitsList = fruits.split(',');
let fruitsList2 = fruits.split(' ');

console.log(fruits);
console.log(fruitsList);
console.log(fruitsList2);

console.log(fruits, typeof fruits); //string~
console.log(fruitsList, typeof fruitsList); //object~
console.log(fruitsList2, typeof fruitsList2); //object~

//문자열 추출 : substring(), slice()
let str4 = 'Hello~ JavaScript';
console.log(str4.slice(0,5)); //substring이랑 동일,(start,end; 종료하기-1값이 나옴)



