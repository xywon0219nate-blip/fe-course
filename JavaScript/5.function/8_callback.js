/**
 * callback(콜백)함수
 * : 함수의 파라미터에 입력되는 익명함수 (anonymous)
 */

const job = (a,b,callback) => {
    //console.log(a,b);
    callback(a,b);
}

const print = (a,b) => {
    console.log(a,b);
}

const printsum = (a,b) => {
    console.log(a+b);
}


job(1,2,print);
job(10,20,printsum);

//job(1,2,(a,b)=>{console.log(a,b)});
//job(10,20,(a,b)=>{console.log(a+b)});

console.clear();
console.log(`setTimeout 실행결과#1`); 
//비동기식 처리 함수 : setTimeOut(funcRef(callback),delay);
//내장함수, 전역함수
setTimeout(()=>{console.log(`setTimeout 실행결과#2`); }, 1000); //1초 후에 콜백함수를 실행

console.log(`setTimeout 실행결과#3`); 