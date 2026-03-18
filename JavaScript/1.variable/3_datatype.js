/**
 * Primitive DataType (원시형 데이터 타입)
 * - 정수형 (Integer) : 100,200 ..(64bit : -2**31 ~ 2**31-1)
 * - 실수형 (Float, Double) :3.14 ..
 * - 문자형 (Character : '', "") : 'hong', "홍" ...
 * - 불린형 (Boolean) : true(1), false(0)
 * 
 * - 정수형 범위를 (64bit : -2**31 ~ 2**31-1) 안의 정수 선언 시 Stack Frame에 저장
 * - 정수형 범위를 (64bit : -2**31 ~ 2**31-1) 넘어서면 Heap에 저장
 * - 실수형, 문자형은 Heap에 저장. 향후 포인터(변수 명)는 Stack Frame에 저장
 * 
 * Referencce DataType (참조형 데이터 타입)
 * - 객체형(Object, {}), 배열(Array, []), 클래스(class), JSON(객체형, 배열 모두 포함)
 * - 참조형 데이터 타입은 무조건 Heap에 저장
 */

//1. 정수형
let inumber1 = 2**31-1;
let inumber2 = 2**31;

console.log(inumber1,inumber2);

//2. 실수혈
let fnumber = 1234.12345678;
console.log(fnumber);

//3. 문자형
let name = 'hong';
let cname = 'hong2';
console.log(name);
console.log(cname);

//4. 불린형
let flag = true;
console.log(flag);

//5. 배열
let nameArray = ['hong','sin','kimsin'];
console.log(nameArray);

//6, 객체 (object)
let obj = {
    "name": 'hong',
    "age": '30'
}
console.log(obj);

//7.JSON
let jsonObj = {
    'name' : 'hong',
    "score" : [100,90,90]
}
console.log(jsonObj);

//8. 초기화 값, 객체
let x = undefined; //Primitive 초기화
let xy=null; //Reference 초기화

x=100;
x=[1,2,3];
console.log(x);

//9. typeof : 데이터 비교
let xx = 10;
let xxx = 10;
let yy = '10';
let oo = {'name': 'object'};

console.log('-----');//데이터 타입 확인 : typeof
console.log(xx,typeof xx);
console.log(yy,typeof yy);
console.log(oo,typeof oo);

console.log('-----');//데이터 타입 확인 및 비교
console.log(typeof xx ==typeof xxx); //== : 값 비교
console.log(typeof xx ==typeof yy); //== : 값 비교, typeof 포함 시 데이터타입 비교
console.log( xx === yy); //=== : 값 비교 + 데이터타입 비교
console.log( xx == yy); //=== : 값 비교