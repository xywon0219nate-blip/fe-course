/**
 * 배열객체에서 필터링을 진행한 후 Shallow Copy(얕은 복사) 진행 후 리턴
 * 배열 객체.filter(callback)
 */

let strList = ['hong','smith','lee','james'];
let fruits = [
    {name:'apple',emoji:'🍎'},
    {name:'orange',emoji:'🍊'},
    {name:'lemon',emoji:'🍋'}, //레몬이 여러개가 있어도 하나만 호출하기 떄문에 가장 위에 있는 해당 레몬이 출력이 된다
    // {name:'apple',emoji:'🍎'},
    // {name:'orange',emoji:'🍊'},
    // {name:'lemon',emoji:'🍋'}
];

//strList에서 4자 이상인 이름만 필터링
let filterObj = strList.filter((str) => {return str.length >= 4}); //['hong', ...]
console.log(`filterObj = ${filterObj}`);
console.log();


//fruits 객체에서 lemon 객체를 출력
let lemons = fruits.filter((fruit) => fruit.name === 'lemon');
let lemonsFind = fruits.find((fruit) => fruit.name === 'lemon');
console.log('lemons = ',lemons); //배열로 출력됨
console.log('lemonsFind = ',lemonsFind);
console.log(lemons[0].name, lemons[0].emoji); // 그렇기에 해당 형식으로 적어야 원하는 부분만 출력 가능
console.log(lemonsFind.name, lemonsFind.emoji);
