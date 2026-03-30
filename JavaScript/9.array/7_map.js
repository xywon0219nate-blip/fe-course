/**
 * 배열의 모든 요소를 순화하면서, 콜백함수의 조건을 적용하여, 새로운 배열 생성 후 반환
 * - 배열객체.map(callback)
 */

let numbers = [1,2,3,4,5,6,7,8,9,10];
let fnumbers = [1.123,2.345,3.456];

//numbers의 모든 요소에 *100 한 결과를 출력
let result1 = numbers.map((number)=>number * 100);
console.log(result1);

//fnumber의 모든 요소를 정수로 반환
let result2 = fnumbers.map((fnumber)=>Math.floor(fnumber));
console.log(result2);

