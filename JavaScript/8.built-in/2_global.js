/**
 * 전역함수로 최상위 객체인 Window 객체에서 호출되는 함수
 * - 호출방법 : window.함수명
 * 객체명을 생략 가능
 * window.alert(), window.confirm(), Number.parseInt(window.parseInt도 가능)
 * 
 * 전역 객체
 * - encodeURI(). decodeURI() ...
 */

let number = '123.4567';
let intNumber = Number.parseInt(number);
let intNumber2 = parseInt(number);
console.log('number = ',number,',typeof =', typeof number);
console.log('intNumber = ',intNumber,',typeof =', typeof intNumber);
console.log('intNumber2 = ',intNumber,',typeof =', typeof intNumber);

console.log('URI 주소 인코딩, 디코딩');
let uri = 'https://www.naver.com?name=홍길동';
let encodeUri = encodeURI(uri);
let decodeUri = decodeURI(encodeUri);

console.log(uri);
console.log(encodeUri);
console.log(decodeUri); //
