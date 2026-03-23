/**
 * 함수 생성 및 호출
 * 호이스팅(hoisting)되어 add 함수 호출 전 메모리에 저장 됨
 */

//toNumber을 commons>utils 에서 export를 통해 가져옴
import { toNumber } from "../commons/utils.js";


//1-1. 호출 가능
add(100,200);
add('200',200);

//1. 두 수를 입력하여, 합계를 출력
function add(num1, num2){ //num1, num2는 add 블록에서만 존재하는 지역변수로 선언
    let n1=parseInt(num1); //num1에 무엇이 들어오든 숫자(정수)로 변환.
    let n2=parseInt(num2);
    let obj = toNumber(num1,num2);
    console.log(`sum=${n1+n2}`);
}

//2-1. add2함수는 호이스팅이 되지 않으므로, 에러벌생
//add2(100+200);

//2.arrow function(화살표 함수)
//호이스팅이 되지 않으므로,반드시 선언한 후에 호출되어야 함
const add2 = (num1,num2) => {
    let obj = toNumber(num1,num2)
    console.log(`sum2 = ${obj.num1+obj.num1}`);
}
console.log();
add2(100,200);
