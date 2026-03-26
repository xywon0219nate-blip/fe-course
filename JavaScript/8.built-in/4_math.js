/**
 * Math 클래스
 * - 모든 메소드와 속성이 static으로 정의 (즉, 객체 생성 불가능)
 * - 호출 : Math.메소드명(), Math.속성
 */

let a = 1234.56789;
console.log(`Math.abs(value)::${Math.abs(a)}`); //절대값
console.log(`Math.floor(value)::${Math.floor(a)}`); //소수점 절삭
console.log(`Math.trunc(value)::${Math.trunc(a)}`); //소수점 절삭
console.log(`Math.round(value)::${Math.round(a)}`); //소수점 첫째자리 반올림
console.log(`NUmber.toFixed::${a.toFixed(2)}`); //소수점 반올림(자리수 지정)
console.log(`Math.max(value)::${Math.max(1,2,3,4,5)}`); //5
console.log(`Math.min(value)::${Math.min(1,2,3,4,5)}`); //1
console.log(`Math.ramdom(value)::${Math.random()}`); //0~1 사이의 값이 출력

console.log();
console.log('실습. 1~100사이의 숫자를 임의로 생성');
let number = Math.floor(Math.random() * 100 +1);
console.log('number = ', number);

console.log('실습. 1~100사이의 숫자를 임의로 생성, 화살표 함수');
const randNumber = () => Math.floor(Math.random() * 100 +1);
console.log('number = ', randNumber());

