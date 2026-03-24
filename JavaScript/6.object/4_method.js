/**
 * 객체를 생성하는 함수 : 생성자 함수 (construstor Funtion)
 * 객체의 메소드 정의 : 객체 안에 함수형식으로 정의
 */
const fruit = {
    //Field
    name: 'apple',
    emoji:'🍎',

    //method
    //this.@ 의 의미 : {}의 내부에서 @를 찾아라
    getName: function() {return this.name;},
    getEmoji: function() {return this.emoji;},
    display: function() {console.log(this.name,this.emoji);},
    //display: function() {return {this.name,this.emoji}} //this.name은 property로 정의X
    //-> this 키워드는 현재 객체에서만 사용되는 self object 키워드. 
    display2: function() { return {name: this.name, emoji:this.emoji}}

}
console.log(fruit);
console.log(fruit.name);
console.log(fruit.emoji);
console.log(fruit.getName()); //getName만 작성할 경우 [Function: getName]으로만 뜨기에 꼭 ()도 함께 적을 것
console.log(fruit.display());
console.log(fruit.display2());