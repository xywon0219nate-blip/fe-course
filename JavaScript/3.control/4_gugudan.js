/**
 * 구구단 : 2단 출력
 * 2*1=2
 * ..
 * 2*9=18
 */


//임의의 단을 입력받아 출력
let dan = undefined;
dan = 2; //dan단 일 경우 해당하는 값 입력 ex. 2단=2, ...
for(let i=1; i<10; i++) {
    console.log(`${dan}*${i} = ${dan}*i`);
    //console.log(`2*${i} = ${2*i}`);
}
