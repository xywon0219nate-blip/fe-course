/**
 * 클래스간의 상속 관계 표현 : extends
 * 부모가 가지고 있는 필드, 메서드를 자식이 상속받아 사용하도록 정의
 */

//Animal(동물) 클래스를 상속받아, Dog, Tiger, Lion 자식 클래스 생성
//자식 is a 부모 : (ex. dog(자) is a animal(부)) , 자식 extends 부모 , 자식 클래스 정의

//부모 : Animal 클래스 정의
class Animal {
    constructor(name, emoji){
        this.name=name;
        this.emoji=emoji;
    }
    display = () => console.log(this.name, this.emoji);
    sleep = () => console.log(`${this.name}(${this.emoji})(이)가 잠`);   
}

//자식 : Dog 클래스 정의
class Dog extends Animal {
    constructor(name, emoji, color) {
        super(name,emoji); //상속받은 부모의 생성자 호출 후, 생성된 name,emoji 인스턴스는 자식에 저장
        this.color = color;
    }
    //display() 함수 주소 참조
    //sleep() 함수 주소 참조
}

class Pu extends Dog {
    constructor(name,emoji,color,food){
        super(name,emoji,color); //반드시 맨 위에 호출해야함
        this.food=food;
    }
    sleep = () => console.log(`Poodle::${this.name}(${this.emoji})(이)가 잠`);
    //자신의 것이 있기에 스스로의 것을 출력, 만약 없을 경우 부모의 것을 출력
}

let animal = new Animal('animal','😊');
console.log(animal);
animal.display();
animal.sleep();


let dog = new Dog('happy','🐶','brown');
console.log(dog);
dog.display(); //부모의 메서드를 가져옴
dog.sleep();

let pu = new Pu('smile','😃','black','sar');
console.log(pu);
pu.display();
pu.sleep();

