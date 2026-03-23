/**
 * 싱글 구구단 정의
 */
export function singleGugudan(dan) {
    console.log(`========${dan}단========`)
    for (let i=1; i<10; i++){
        console.log(`${dan}x${i}=${dan*i}`);
    }
}

/**
 * 멀티 구구단 정의
 */

export function multiGugudan(dan1,dan2) {
    let rows = '';
    for (let i=1; i<10; i++){
        for(let j=dan1; j<=dan2; j++){
            rows +=`${j}x${i}=${j*i}\t`;
        }
        console.log(rows);
    }
}