/**
 * wrapper 클래스 - 기본형(원시) 데이터 타입을 객체로 생성하기 위하는 클래스 타입
 * - 기본형(원시) 데이터 타입의 클래스는 첫글자를 대문자로 정의한 pascal Case 로 정의됨
 * - Number(클래스 타입) : number(기본 데이터 타입)
 * - String(클래스 타입) : string(기본 데이터 타입)
 * - Boolean(클래스 타입) : boolean(기본 데이터 타입)
 * - 클래스를 통해 객체 생성 시 메소드 호출이 가능
 * - 기본형 타입.메소드 -> 객체 타입.메소드 변경
 */

let num1 = 100; //기본형 선언 및 할당
let num2 = new Number(100); //참조형으로 선언 및 객체생성 후 주소 할당

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num1 == num2); //값은 동일
console.log(num1 === num2); //타입은 다름
console.log('num1.valueOf()=', num1.valueOf()); //기본형.메소드로 호출 시 알아서 객체로 변환하고 메소드를 정상적으로 실행
console.log('num2.valueOf()=', num2.valueOf());

let str1 = 'str1';
let str2 = new String('str1,javascript'); //공백이나 ','도 문자로 취급 (인덱스의 경우 s가 0번지)
console.log(str1, typeof str1);
console.log(str2, typeof str2);
console.log(str1 == str2);
console.log(str1 === str2);
console.log('str1.length=', str1.length); //메소드 실행일 경우에만 일시적으로 데이터 타입이 변경
console.log('str1.typeof=', typeof str1); //원천적인 데이터타입은 string으로 유지
console.log('str2.length=', str2.length);

let flag1 = true;
let flag2 = new Boolean(true);

console.log(flag1, typeof flag1);
console.log(flag2, typeof flag2);
console.log(flag1 == flag2);
console.log(flag1 === flag2);








