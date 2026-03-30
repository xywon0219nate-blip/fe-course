/**
 * 배열에서 검색하려는 첫번째 요소를 반환, 없으면 undifind 반환
 * - 배열 객체.find(callback)
 * - 하나의 요소만 반환
 * 
 * findIndex : 배열에 검색하는 요소의 인덱스 반환
 * - 배열객체.findIndex(callback)
 */

// let fruits = new Array('🍎','🍊','🍋','🍇','🍓');
// let findObj = fruits.find((item) => {
//     let findObj = undefined;
//     if(item === '🍊'){
//         findObj = item;
//     }
//     return findObj
// });
// console.log(`findObj = ${findObj}`);

// 위의 코드 중 생략 가능한 부분들을 제거하면 아래의 코드처럼 적을 수 있음
let fruits = new Array('🍎','🍊','🍋','🍇','🍓');
let findObj = fruits.find((item) => (item === '🥝'));
console.log(`findObj = ${findObj}`);


let findIdx = fruits.findIndex((item)=> (item ==='🍊'));
console.log(`findIdx = ${findIdx}`);


// let findIdx = fruits.find((item,idx) => {
//     if(item === '🍊') {
//         return idx;
//     }
//     // return idx;
// });
// console.log(`findIdx = ${findIdx}`);

