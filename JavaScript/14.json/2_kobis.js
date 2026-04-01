let key = `9b172e963b876f3ea25d67d8286258a1`;
// let targetDt = `20260331`;

const getJson = async (type, targetDt) => {
    const data_url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
    let response = await fetch(data_url);
    return response.json();
}

const getMovieInfo = async (movieCd) => {
    const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`
    let response = await fetch(url);
    return response.json();
}
/**open Modal */
const openModal = (infoObj) => {
    let modal = document.querySelector('#modal');
    let modalBody = document.querySelector('#modal-body');
    let modalClose = document.querySelector('#modal-close');

    modalClose.addEventListener('click', ()=>{
        modal.style.display='none';
        modalBody.innerHTML=''; 
    })

    let output = `
        <h3>[${infoObj.rank}]${infoObj.movieNm}</h3>
        <ul>
            <li><label>감독 : </label> ${infoObj.director}</li>
            <li><label>배우 : </label> ${infoObj.actors}</li>
        </ul>
    `;
    modal.style.display = 'flex';
    modalBody.innerHTML = output;
}

const handleMovieInfo = async (movieCd, rank) => {
    let info = await getMovieInfo(movieCd);
    let movieNm = info.movieInfoResult.movieInfo.movieNm;
    let director = info.movieInfoResult.movieInfo.directors[0].peopleNm;
    let actors = info.movieInfoResult.movieInfo.actors[0].peopleNm;
    console.log(movieNm,director,actors,rank);
    
    openModal();
}

//hadleBoxOffice 함수 정의
const handleBoxOffice = async () => {
    let type = document.querySelector('#type').value;
    let sdate = document.querySelector('#sdate').value;
    if(type === "default") {
        alert('타입을 선택해주세요');
        document.querySelector('#type').focus();
    } else if(sdate === "") {
        alert("날짜를 선택해주세요");
        document.querySelector('#sdate').focus();
    } else {
        //현재는 2026-03-31처럼 뜨기 때문에 '-'를 제거해야함. -> split 이용
        targetDt = sdate.split("-").reduce((acc,cur)=>acc+cur);
        let kobis = await getJson(type, targetDt);
        let kobisBoxOffice = kobis.boxOfficeResult;
        let kobisBoxOfficeList = null;
        if (type === 'Daily'){
            kobisBoxOfficeList = kobis.boxOfficeResult.dailyBoxOfficeList;
        } else {
            kobisBoxOfficeList = kobis.boxOfficeResult.weeklyBoxOfficeList;
            console.log(kobis);

        }
        let output = `
            <h1>${kobisBoxOffice.boxofficeType}</h1>
            <h3>${kobisBoxOffice.showRange}</h3>
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
                    kobisBoxOfficeList.map((movie)=>
                        `<tr>
                            <td>${movie.rank}</td>
                            <td><a href="#" onclick="handleMovieInfo(${movie.movieCd}, ${movie.rank})">${movie.movieNm}</a></td>
                            <td>${movie.openDt}</td>
                            <!--콘솔로 확인 시 전부 ""에 묶여있기 때문에 그냥 toLocaleString은 적용이 안 되기에 parseInt를 줌-->
                            <td>${parseInt(movie.audiCnt).toLocaleString()}</td>
                            <td>${parseInt(movie.audiAcc).toLocaleString()}</td>
                            <td>${parseInt(movie.salesAcc).toLocaleString()}</td>
                        </tr>` 
                    ).join('')//를 적지 않으면 ,가 반복되어 테이블의 윗 부분에 있을 수 있음
                }
            </table>
        `;
        document.querySelector('#content').innerHTML = output;
    }
}