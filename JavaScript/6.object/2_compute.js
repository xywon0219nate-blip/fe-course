//import {함수명} from '모듈경로,반드시 .js확장자 붙이기'
import {
    setValue,
    getValue,
    updateValue,
    deleteValue
} from '../commons/object.js';

const hong = {
    name: '홍길동',
    age : 30,
}
console.log(hong);
const apple = {
    name: 'apple'
}

console.log(`1. property,value 추가`);
setValue(hong,'address','서울시 강남구');
setValue(hong,'job','SW엔지니어');
setValue(apple,'emoji', '🍎');
console.log(); 
console.log(hong); //추가된 것이 보임
console.log(apple); //🍎가 추가된 것이 보임

console.log();
console.log(`2. property,value 가져오기`);
let hong_name = getValue(hong,'name');
console.log(); 
console.log(hong.name); 
console.log(apple); 

console.log();
console.log(`3. property 값 업데이트`);
updateValue(apple,'emoji','🍏');
console.log(getValue(apple,'emoji'));

console.log();
console.log(`4. property 값 삭제`);
deleteValue(hong,'address');
console.log(hong);
