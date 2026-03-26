/**
 * class(클래스)란? 객체를 생성하기 위한 설계도(틀)
 * - 생성자 함수와의 차이점
 * - 객체지향언어의 클래스와는 다름
 * - 자바스크립트에서 실행시 내부적으로 프로토타입 기반의 형식으로 실행됨
 * - new 키워드를 사용하여 객체를 생성
 * 
 * 형식
 * class 클래스명 {
 *  //필드명 (field)
 *  //생성자(Constructor)
 *  //메소드(Method)
 * }
 */

class Animal {
    //Field - 변수, 상수 => static으로 정의, 클래스 변수, 상수로 부름
    //static으로 정의된 변수는, 상수는 객체 생성 전 별도의 메모리에 저장됨(static frame)
    static MAX_SIZE = 10; //static이 안 붙어있다면, 결과로 undifind가 뜨게 됨
    static className = 'Animal';
    // name = undefined; //1. 선언

    //constructor - 객체 생성시 호출, new로 호출
    constructor(name,emoji) { //실행결과를 확인하면 name, emoji만 heap에 들어가 결과가 나온 것을 알 수 있다
        this.name = name; //2. 할당
        this.emoji = emoji;
    }
    //Method - 기능, 동작을 함수로 정의
    display = () =>{
        console.log(this.name,this.emoji);
    }
}

console.log(`class Name= ${Animal.className}`);
console.log(`Animal.MAX_SIZE= ${Animal.MAX_SIZE}`);

let dog = new Animal('happy','🐶');
console.log(dog);
console.log(dog.name);
console.log(dog.emoji);
console.log(typeof dog);
dog.display(); //display 앞에는 static이 없기에 객체인 dog로 호출

