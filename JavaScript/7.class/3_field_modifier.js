/**
 * 클래스의 필드에 선언되는 변수, 상수에 대한 접근 제한자
 * 변수, 상수 앞에 #을 붙이면 private으로 설정, 클래스 내부 접근 가능, 외부 접근은 불가
 * #이 붙지 않으면 public, 클래스 내부 접근 가능, 외부 접근 가능
 */

class Person {
    #empno; //#class 내부에서는 private여도 접근이 가능
    name;
    age;

    constructor (empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }
    display = () => {
        console.log(this.#empno,this.name, this.age);
    }
    setEmpno = (empno) => { //2.
        this.#empno = empno;
    }
    getEmpno = () => {return this.#empno;} //2. 
}

let hong = new Person('1234','홍길동', 30);
hong.display();
console.log(hong.name);
console.log(hong.age);
console.log(hong.empno);

// hong.empno='4567'; // 1. 외부에선 접근이 불가능하기 때문에 사번 변경 불가
hong.setEmpno('4567'); //2. 이젠 변경 가능!
hong.display(); // 1. 결과를 출력해도 변경이 되지 않음
