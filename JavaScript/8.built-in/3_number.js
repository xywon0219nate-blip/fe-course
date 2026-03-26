/**
 * Number 클래스
 * - valueOf(), toString() ...
 */

let a = 100;
let b = 12345;
let aa = new Number(100);
let bb = new Number(12345);

console.log(a, typeof a); //100, number
console.log(b, typeof b); //12345, object(number)
console.log(aa, typeof aa); //number
console.log(bb, typeof bb); //object(number)

console.log(a.valueOf()); //100, 자동변환, 원본 데이터 타입 유지
console.log(b.valueOf()); //100
console.log(aa.valueOf());
console.log(bb.valueOf());

console.log('toLocaleString(), 3개씩 끊어 보여줌!'); 
console.log(a.toLocaleString()); 
console.log(b.toLocaleString()); 
console.log(aa.toLocaleString());
console.log(bb.toLocaleString());

let localeNumber = b.toLocaleString();
console.log(localeNumber, typeof localeNumber);

let number = '98765';
let locNumber = parseInt(number).toLocaleString(); 
//parseInt로 숫자로 변경한 후에는 toLocaleString()을 사용할 수 있도록 .만 눌러도 관련 함수가 뜸
console.log(locNumber);

let fnumber = '9876.54321';
let flocNumber = parseFloat(fnumber).toLocaleString(); 
let flocNumber2 = parseFloat(fnumber).toFixed(); //toFixed 소수점 첫째자리 반올림
let flocNumber3 = parseFloat(fnumber).toFixed(2); //toFixed(출력되는 소수점 자릿수에서 반올림)
console.log(flocNumber);
console.log(flocNumber2);
console.log(flocNumber3);


