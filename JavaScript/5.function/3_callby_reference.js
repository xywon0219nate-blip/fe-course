/**
 * 함수는 객체(object)이고, heap에 저장
 * 일반적인 함수형식 (funtion)로 선언되면, 호이스팅 되어 전역으로 맨 먼저 힙에 저장됨
 */
import { toNumber } from "../commons/utils.js";

function add(num1,num2) {
    let obj = toNumber (num1,num2)
    console.log(`sum=${obj.num1+obj.num2}`);
}
let add2 = add;

console.log(add, typeof add);
console.log(add2, typeof add2);
console.log(add === add2); //주소 동일


add(100,200);
add2('200',300);