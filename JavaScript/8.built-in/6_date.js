/**
 * Date 클래스
 * : 날짜 형식을 지원하는 클래스
 * - new Date() 클래스 생성 후, 생성된 객체의 메소드를 호출
 * - getFullYear(), getMonth(), getDate() ,getDay() ...
 */

let date = new Date();
let date2 = Date.now(); //JS에선 사용X
let year = date.getFullYear(); //년도
let month = date.getMonth() + 1; //일
let day = date.getDate(); //월, getDay() : 요일


console.log(date);
console.log(date2);
console.log(year);
console.log(month);
console.log(day);
console.log(date.toLocaleDateString('ko-KR')); //한국기준
console.log(date.toLocaleDateString('en-US')); //미국기준


