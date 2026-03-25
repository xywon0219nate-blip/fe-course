/**
 * static 상수, 메서드 정의 - 클래스 상수, 클래스 메소드
 * static 키워드가 붙은 상수, 메서드
 * - 호출시 : 클래스명.상수, 클래스명.메서드
 * static이 붙은 상수, 메서드는 stack의 static 메모리영역에 별도 저장되므로, 객체 생성 전 호출이 가능
 */

class Fruit {
    //Field
    static MAX_SIZE =10;
    // name ='' , color='', emoji=''; -> Error
    name;
    color;
    emoji;

    //Constructor
    constructor (name, color, emoji) {
        this.name = name; 
        this.color = color;
        this.emoji = emoji;
    }
    //Method
    //원래는 getName를 함께 쓰면 에러가 발생하지만, static과 서로 다른 메모리에 저장되기에 오류가 발생하지 않는다
    getName = () => {return this.name;} 
    static getName = () => {return this.name;} //1. static을 붙일 경우 class 이름으로 호출한다

    create = (name, color, emoji) => {
        return new Fruit(name, color, emoji);
    }
}
let apple = new Fruit('apple','color','🍎');
console.log(apple);
console.log(apple.getName()); 
console.log(Fruit.getName()); //1. (class 이름으로 호출) Fruit.getname으로 적어야 하며, class의 이름이 나오게 됨

//create 함수로 lemon 객체 생성
let lemon = new Fruit('lemon','yellow','🍋');
console.log(lemon);
console.log(lemon.getName());
