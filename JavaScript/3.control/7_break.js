/**
 * 반복문 강제종료 하는 방법
 * 1. break : 반복을 하다 break를 만나면 바로 종료 (더 이상 진행X)
 * 2. 조건식 : false가 되는 조건으로 만듬, break보다 한번 더 조건을 체크
 */

console.log('1. 1~10까지 나열 \n - i=7일때 break')
for(let i=1; i<=10; i++){
    if (i==7){
        break; //for문 바로 종료
    }
    console.log(`i=${i}`);
}

for(let i=1; i<=10; i++){
    console.log(`i=${i}`);
    if(i==7) break;
}
console.log('1-2. i=7이면 종료 \n - 조건식을 false로 만들기')
for(let i=1; i<=10; i++){
    console.log(`i=${i}`); //해당 코드가 아래에 있을 경우 i=11까지 입력한 후 탈출하기에 유의할 것.
    if(i==7) i=11;
}