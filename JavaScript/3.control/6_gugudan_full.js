console.log('1. 구구단이 실행되도록 만들기');
for (let i=1; i<10; i++) {
    let gugudan = '';
    for (j=2; j<10; j++){
        gugudan = gugudan + `${j}*${i}=${i*j}\t`
    }
    console.log(gugudan);
}
/**
 * let start = 13;
 * let end = 17;
 * for (let i=1; i<10; i++) {
    let gugudan = '';
    for (j=start; j<=end; j++){
        gugudan = gugudan + `${j}*${i}=${i*j}\t`
    }
    console.log(gugudan);
} */

console.log('2. 삼각형으로 별 만들기~');
let star = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
    star += "*";
    }
    star += "\n";
}
console.log(star);


console.log('3. 삼각형으로 초록색 사과출력\n - 세번째줄만 빨간사과로 출력');
for (let i = 1; i <= 5; i++) {
    let apple ='';
    for (let j = 1; j <= i; j++) {
        if(i===3) {
            apple+='🍎'
        } else {
            apple+='🍏'
        }
    }
    console.log(apple);
}

console.log('4. repeat(반복횟수)함수를 이용한 정삼각형 찍기');
let size = 5;
for (let i = 1; i <= size; i++) {
    let output='';
    let space =' ';
    
    space += ' '.repeat(size-i);
    output += '🍇'.repeat(i);
    console.log(space, output);
}

console.log('5. repeat(반복횟수)함수를 이용한 역삼각형 찍기');
for (let i = size; i >= 1; i--) { 
    let output = '';
    let space = '';
    
    space += ' '.repeat(size-i); 
    output += '🍇'.repeat(i);   
    console.log(space + output);
}