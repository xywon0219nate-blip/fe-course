/**
 * 참조 데이터 타입 : 객체 (object)
 * - 배열(Arrat) : [데이터 : 데이터...]
 * - 객체(object) : {'프로퍼티':데이터,'프로퍼티' : 데이터...}
 */

let apple = null;
apple = {
    'name':'apple',
    'color':'red',
    
}
console.log(typeof apple);
console.log(apple);
console.log(apple.name);
console.log(apple.color);

//orange 객체를 생성 후 타입, 객체 , name, color,price, emoji를 콘솔 출력
let orange = null;
orange = {
    'name':'orange',
    'color':'orange',
    'price':"3,000",
    'emoji':'🍊'
}
console.log(typeof orange);
console.log(orange);
console.log(orange.name);
console.log(orange.color);

//배열 선언시 동일한 데이터 타입과 공통적인 속성들을 저장하는 것이 좋음
//다양한 데이터 타입 저장 가능, 단 비권장
let fruitlist = null;
fruitlist = ['apple', '🍎', 100,200,true]; //비권장
fruitlist = ['🍊', '🍎', '🍓','🍑','🍇'];
console.log(fruitlist);
console.log(fruitlist[0]); //배열은 0,1,2,...,n 순으로 시작함
console.log(fruitlist[2]);
console.log(fruitlist[4]);
console.log(fruitlist.length); //length : 배열이 몇 개인지
console.log(fruitlist.length-1); //포도의 번호

//객체타입을 요소로 하는 배열 생성
let fruitlistObj = null;
fruitlistObj = [apple, orange];
console.log(fruitlistObj);
console.log(fruitlistObj[0].name);
console.log(fruitlistObj[1].emoji);