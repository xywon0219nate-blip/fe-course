/**
 * 변수를 객체의 값으로 정의하는 경우, property(key) 생략
 */

let name = '홍길동';
let age = 30;
let address = '서울시 강남구';

let person ={
    //name: name,
    //age:30
    name,age,address
}
console.log(person);

//두 개의 값을 입력받아, 객체로 리턴하는 함수 생성
function createObject(x,y) {
    return {x,y}
}
const createObjectArrow = (x,y) => { 
    return {x,y}
}
let number1 = createObject(1,2);
let number2 = createObjectArrow (1,2);
console.log();
console.log(number1);
console.log(number2);


//사원의 이름, 나이, 주소, 소속부서 정보를 입력받아, 사원객체를 반환하는 함수 정의
//createEmployee, arrow function 사용

const createEmployee = (name,age,address,team) => {
    return{name,age,address,team} //해당 프러퍼티와 return의 값(매개변수 :name)등의 이름만 같으면 괜찮음
}
let emp1 = createEmployee('홍길동',30,'서울시 강남구','운영팀');
let emp2 = createEmployee('이순신',35,'부산시 서면','개발팀');


console.log(emp1);
console.log(emp2);

let empList = [
    ['홍길동',30,'서울시','운영팀'], //empList[0]
    ['smith',45,'인천시','개발팀'], //empList[1]
    ['이순신',35,'부산시 서면','SW'], //empList[2]
];

/* 데이터 출력
for (let i=0; i<empList.length; i++) {
    let rows='';
    for (let j=0; j<empList[i].length; j++) {
        rows += empList[i][j] + `\t`;
    }
    console.log(rows);  
}
*/

for (let i=0; i<empList.length; i++) {
    let object = {};
    for (let j=0; j<empList[i].length; j++) {
        if(j==0) object.name = empList[i][j];
        if(j==1) object.age = empList[i][j];
        if(j==2) object.address = empList[i][j];
        if(j==3) object.team = empList[i][j];
    }
    console.log(object);  
}


for (let i=0; i<empList.length; i++) {
    let object = null; //객체
    let name,age,address,team = undefined; //값j
    for (let j=0; j<empList[i].length; j++) {
        if(j==0) name = empList[i][j];
        if(j==1) age = empList[i][j];
        if(j==2) address = empList[i][j];
        if(j==3) team = empList[i][j];
    }
    object = createEmployee(name,age,address,team); //파라미터 인자(name 등)은 이름이 name2로 바뀌어도 오류가 발생하지 않음
    console.log(object);  
}
