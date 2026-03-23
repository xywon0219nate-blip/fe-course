/**
 * 함수의 표현식
 * - 일반 함수 : function 함수명(파라미터,...) {실행문;}
 * - 화살표 함수 : const 함수명 = (파라미터...) => {실행문;}
 * - 변수형 함수 : const 변수명 = function(파라미터) {실행문;}
 * - 콜백 함수 : 함수에서 호출되어지는 함수형식, 파라미터 인자로 함수 형식이 호풀됨
 *   콜백함수 형식 : 함수명 ((파라미터) => {실행문});
 *   ex) Array.reduce((acc,cur) => {return acc + cur});
 */

//1. 일반 함수 정의
function add1(a,b) {
    return a+b;
    
}

//2, 화살표 함수 정의
const add2 = (a,b) => {
    return a+b;
}

//3. 변수형 함수 정의
const add3 = function(a,b) {
    return a+b;
}

//4. 콜백 함수
const numbers = [1,2,3,4,5];
let sum = numbers.reduce( (a,b) => a + b);
//let sum = numbers.reduce( (acc,cur) => {return acc + cur}, 0); 기본 문법, 위의 경우 생략된 문법(한 줄로 작성시.)

console.log(`add1 = ${add1(1,2)}`);
console.log(`add2 = ${add2(1,2)}`);
console.log(`add3 = ${add3(1,2)}`);
console.log(`sum = ${sum}`);