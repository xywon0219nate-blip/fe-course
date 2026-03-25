/**
 * 사원(Employee) 클래스 정의
 * - 사원번호(#), 사원명, 나이를 입력받아 객체 생성
 */

class Employee {
    #empno;

    constructor(empno,name,age){
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    //getter/setter
    getEmpno = () => {return this.#empno;}
    getName = () => {return this.name;}
    getAge = () => {return this.age;}

    setEmpno = (empno) => {this.#empno = empno;}
    setName = (name) => {this.name = name;}
    setAge = (age) => {this.age = age;}

    display = () => {console.log(this.#empno, this.name, this.age);}
}

let hong = new Employee();
//외부에서 호출하는 setter 함수
hong.setEmpno('1234');
hong.setName('홍길동');
hong.setAge(30);

//내부에서 호출하는 getter 함수
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());
hong.display();

//해당 부분은 업데이트에 따라 사라질 수도 될 수도 있음
hong.empno ='2334'; //empno 필드가 새롭게 추가됨, empno와 #empno 2개가 존재함
console.log('hong.empno==>',hong.empno); //2334 출력


let smith = new Employee('4566','smith',36);
smith.display();

let empList = [];
// empList[0] = hong;
// empList[1] = smith;
empList.push(hong);
empList.push(smith);
console.log('empList.pop(hong)::\n',empList.pop(hong));
console.log(empList);

let empListObj = {};
empListObj['hong'] = hong;
empListObj['smith'] = smith;
console.log(empListObj);

