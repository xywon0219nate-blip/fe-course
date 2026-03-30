/**
 * Iterable(순회) object : Iteration Protocol을 준수하는 객체
 * - for .. of 구문
 * - String, Array, Set, Map
 * ...(Spread Operator : 스프레드 연산자) -> 블록 안에서 객체의 데이터를 전개함(펼쳐놓음)
 * ...(Rest Parameter) : 매개변수 모든값을 배열로 저장 -> 파라미터 자리에만 들어감
 * ...(Destructring Object : 구조분해 할당) : 객체를 분해한 후 변수에 할당
 * 
 */

//1. String 객체 생성 후 for...of 구문 사용
let strList = new String('Hellow~ JavaScript');
for(let str of strList) {
    console.log(str);  
}

// //2. Number 객체 생성 후 for...of 구문 사용 불가능
// let numbers = new Number(12345);
// for(let number of numbers) {
//     console.log(number);
// };
// //Number class는 iteration protocole을 준수하지 않음 -> 오류 발생

//3. Array 객체 생성 후 for...of 구문 사용
let numbers = [1,2,3,4,5];
for (let number of numbers) {
    console.log(number); 
}

//4. forEach()
numbers.forEach((number)=> console.log(`numbers=${number}`));

//5. find() - 3, findIndex - 3의 인덱스 주소
let findNumber = numbers.find(number => number === 3);
let findIndex = numbers.findIndex(number => number === 3);
console.log(`find = ${findNumber}`);
console.log(`findIndex = ${findIndex}`);

//6. filter() 짝수만 반환
let evenNumbers = numbers.filter(number => number%2 === 0);
// let evenNumbers = numbers.filter(number => !(number%2)); 
// -> 나머지 결과가 0이기에, false로 나옴. JS에선 false:0, true:1 [1,3,5]로 나옴/ !를 이용해 반대만 나오도록 하여 짝수만 나오게 함
console.log(`filter = ${evenNumbers}`);

//7. map() - 모든 요소에 +10
let addNumbers = numbers.map(number => number+10);
console.log(addNumbers);
