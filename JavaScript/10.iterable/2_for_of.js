/**
 * 배열의 요소를 치환하는 함수 생성 : for...of
 */

//for...of
function replace(array, oldItem, newItem) { 
    //array는 원본을 바라보고 있기에 그대로 쓰는 것이 아닌 array의 복사본을 이용해야함
    //shallow copy
    let arrayCopy = Array.from(array); // 중요

    let idx = 0;
    for(const item of arrayCopy) {
        console.log(item);
        if (item === oldItem) {
            arrayCopy.splice(idx,1,newItem);//배열객체.splice(item idx, count, newItem)
        }
        idx++;
    }
    return arrayCopy;
}

//replaceObj
function replaceObj(array, oldItem, newItem) { 
    let arrayCopy = Array.from(array);
    let idx = 0;
    for(const item of arrayCopy) {
        console.log(item);
        if (item.emoji === oldItem) {
            arrayCopy.splice(idx,1,{name:item.name,emoji:newItem});
        }
        idx++;
    }
    return arrayCopy;
}

//forEach()
function replace1(array, oldItem, newItem) { 
    let arrayCopy = Array.from(array);
    arrayCopy.forEach((item,idx) => {
        if(item === oldItem) arrayCopy.splice(idx,1,newItem);
    });
    return arrayCopy;
}

//map() - 새로운 배열 객체 변환
function replace2(array, oldItem, newItem) { 
    return array.map(item=> (item === oldItem) ? item = newItem : item);
}

let fruits = ['🍎','🍊','🍋','🍇','🍓'];
let fruitsObj = [
    {name:'orange', emoji:'🍊'},
    {name:'lemon', emoji:'🍋'},
];
let obj1 = replace(fruits, '🍎', '🍏');
let obj1_1 = replace1(fruitsObj, '🍎', '🍏');
let obj1_2 = replace1(fruitsObj, '🍎', '🍏');
let obj2 = replaceObj(fruitsObj, '🍋', '🍏');

// console.log('fruit',fruits);
// console.log('for_of',obj1);
// console.log('forEach()',obj1_1);
console.log('map',obj1_2);

// console.log('obj2',obj2);
