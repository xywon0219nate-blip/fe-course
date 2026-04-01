let key = `9b172e963b876f3ea25d67d8286258a1`;
let targetDt = `20260331`;
const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;

const getJson = async () => {
    let response = await fetch(data_url);
    return response.json();
}

const show = async() => {
    //1. JSON 데이터 가져오기
    let kobis = await getJson();
    console.log(kobis);
    
    //2. 출력 데이터 생성 : DHTML
    let output = `
    <h1>${kobis.boxOfficeResult.boxofficeType}</h1>
    <h3>일자 : ${kobis.boxOfficeResult.showRange}</h3>
    <table border=1>
        <tr>
            <th>순위</th>
            <th>영화제목</th>
            <th>개봉일</th>
            <th>당일 관객수</th>
            <th>누적 관객수</th>
            <th>누적 매출액</th>
        </tr>
        ${
            //콘솔창의 boxOfficeResult > dailyBoxOfficeList를 적어야함
            kobis.boxOfficeResult.dailyBoxOfficeList.map((kobis)=>
                `<tr>
                    <td>${kobis.rank}</td>
                    <td>${kobis.movieNm}</td>
                    <td>${kobis.openDt}</td>
                    <td>${kobis.audiCnt}</td>
                    <td>${kobis.audiAcc}</td>
                    <td>${kobis.salesAcc}</td>
                </tr>` 
            ).join('')//를 적지 않으면 ,가 반복되어 테이블의 윗 부분에 있을 수 있음
        }
    </table>
    ${kobis}
    `;
    //3. 출력
    document.querySelector("#content").innerHTML = output;
}

window.addEventListener("DOMContentLoaded", () => {
    show(); //호이스팅 불가로 아래에 적어야 함~
})