

//1~5까지 출력
for(let i=1; i<6; i++) {
    console.log(i); //(i,j)로 작성 시 해당 for에는 j가 없기 때문에 에러 발생

    for(let j=10; j<60;j+=10){
        console.log(j);
    }
}
//fruits 배열 요소 출력
let fruits = ['🍏','🍊','🍓']
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}