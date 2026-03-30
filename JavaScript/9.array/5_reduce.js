/**
 * 배열의 누적합을 구하는 메소드
 * - 배열객체.reduce(callback)
 */

const numbers = [1,2,3,4,5,20,50,100];
let sum = numbers.reduce((acc,cur) => {return acc+cur}); //{}내부에 return을 안 적으면 값이 안 나옴, 혹은 {}을 빼기.
// let total = total + numbers;
console.log(`sum = ${sum}`);

let max = numbers.reduce((acc,cur) => Math.max (acc,cur)); 
let min = numbers.reduce((acc,cur) => Math.min (acc,cur)); 
console.log(`max = ${max}, min = ${min}`);

