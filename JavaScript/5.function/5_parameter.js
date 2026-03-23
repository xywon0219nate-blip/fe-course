/**
 * 함수 호출 -> 파라미터(인자, 입력되는 값) -> 함수의 변수(지역)에 자동으로 매핑
 * 래스트 파라미터 (Rest Parameter): '...'의 기호를 파라미터에 입력
 * - 래스트 파라미터로 입력되는 인자는 배열에 저장
 */

//똑같은 이름의 함수가 주어지면 가장 마지막의 값이 호출 (에러X)

console.log(add(1,2));
console.log(add(1,2,3));
console.log(add(1,2,3,4));
console.log(add(1,2,3,4,5,6,7,8,9));

function add(... args) { //매개변수,지역변수
    //배열의 합을 구하여 반환
    /**
    let sum = 0; //반복문 밖에 초기화 진행
    for(i=0; i<args.length; i++) {
        sum += args[i];
    }
    return sum;
    */
    //배열 reduce() - 배열 객체가 누적합을 구하는 경우
    //만약 => 이후 {}로 감싼 경우 꼭 내부에 return 을 적어야 undifind가 뜨지 않는다
    //결과값이 한 줄인 경우 {}와 return을 지워도 가능함
    let sum = args.reduce((sum,curValue) => sum + curValue);
    return sum;
    //return args.reduce((sum,curValue) => sum + curValue);
}


//console.log(add2('홍길동',20,1,2,3,4,5));
//for문에서 return은 한 번만 써야함
let obj = add2('홍길동',20,1,2,3,4,5);
console.log(obj.name);
console.log(obj.age);
console.log(obj.score);

function add2(name,age,... args) {
    /** 
    let sum = 0;
    for(i=0;i<args.length;i++) {
        sum += args[i];
    }
    */

    let sum = args.reduce((acc,cur)=> acc+cur);
    return{
        name: name,
        age: age,
        score:sum 
    }
}
