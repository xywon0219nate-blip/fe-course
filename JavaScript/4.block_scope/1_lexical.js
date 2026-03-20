/**
 * block 단위로 실행되는 lexical environment
 */

{
    let a = 10; //전역변수
    console.log(a); //해당 부분에 b,c 등을 적게 될 경우 아직 없는 block이기에 오류 발생
    {
        let b = 20; //지역변수
        console.log(a,b);
        {
            let c = 30; //지역변수
            console.log(a,b,c);
        }// 지역 스코프 : Local block scope
    }// 지역 스코프 : Local block scope
}// 전역 스코프 : Global block scope