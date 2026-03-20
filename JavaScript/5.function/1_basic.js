/**
 * 함수는 객체이고, heap 메모리에 들어감
 * 함수 : 기능을 구현하고 있는 자바스크립트 객체
 * 1. 일반적인 함수 정의 - stack frame 생성되는 변수명은 함수명
 * function 함수명(파라미터) {
 *      실행코드;
 *      return 반환값;
 * }
 * 
 * 2. 화살표 표현 (Arrow Function) 함수 정의 
 * const 함수명 = (파라미터) => {
 *      실행코드;
 *      return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진에는 빌트인 함수 (내장함수)가 포함되어 있음
 * - parseInt(), parsrDouble() ...
 * 
 * 4. 함수 호출 방법 : 함수명(파라미터);
 */

// parseInt :; 문자열 -> 정수로 반환
console.log("빌트인 함수(내장함수");
let str = '100';
let str2 = '100.1234';
let num1 = parseInt(str);
let num2 = parseInt(str2);

console.log(str, typeof str);
console.log(str2, typeof str2);
console.log(num1, typeof num1);
console.log(num2, typeof num2); //정수이기에 뒤에 소수점은 생략

//해당 부분에 함수 호출이 있을 경우 func_sum은 실행이 되지만, arrow_sum의 경우 오류가 발생함

console.log("일반 함수 선언");
function func_sum () {
    console.log(`func_sum = ${10+20}`);
}


console.log("화살표 함수 선언");
const arrow_sum = () => {
    console.log(`arrow_sum = ${10+20}`);  
}

//함수 호출
func_sum();
arrow_sum();