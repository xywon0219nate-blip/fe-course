/**
 * forEach 메소드는 Iterator 심볼 객체를 상속한 객체에서 사용된다
 * - Iterator 상속 객체. forEach(callback)
 * - Array(배열).forEach() 
 * callback : 함수의 인자(파라미터)에서 함수 형식이 들어가는 것
 */

let numbers = [1,2,3,4,5,6];
numbers.forEach((number,idx,obj)=> console.log(`number[${idx}] = ${number}, ${obj}`)); 
//값만 줄 때는 앞에 return을 작성해야 하지만, console.log()는 바로 알아서 return하기에 생략해도 괜찮음

let fruits = new Array('🍎','🍋','🍊','🍇','🍓');
// fruits.forEach(item => console.log(item));

// '🍋' => '🥝'로 변경, 출력
fruits.forEach((item,idx)=>{
    if(item === '🍋') {
        fruits.splice(idx,1,'🥝');
    }
    //console.log(item); //예전 값인 레몬이 나옴
});
console.log(fruits); //밖에다 적어야 함

// '🥝' => '🍋'로 변경, 출력
let idx = 0;
for(let item of fruits){
    if(item === '🥝') {
        fruits.splice(idx,1,'🍋');
    }
    idx++;
}
console.log(fruits);

