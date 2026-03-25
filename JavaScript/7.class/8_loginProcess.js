/**
 * 로그인 처리
 */

class User {
    #id;
    #pw;

    constructor(id,pw){
        this.#id = id;
        this.#pw = pw;
    }

    getId = () => this.#id;
    getPw = () => this.#pw;

    setId = (id) => this.#id = id;
    setPw = (pw) => this.#pw = pw;
}

function loginCheck() {
    //id, pw 값 가져오기
    let id = document.querySelector('#id').value; //내가 입력한 id값을 보고 싶기에 .value를 추가하여 작성한다
    let pw = document.querySelector('#pw').value;
    // console.log(id,pw); 

    //유효성 체크(validation check) - 데이터의 유무 체크
    if(id ==='') {
        alert('아이디를 입력해주세요');
        document.querySelector('#id').focus();
    } else if (pw === '') {
        alert('패스워드를 입력해주세요');
        document.querySelector('#pw').focus();
    } else {
        ///User class 생성
        let user = new User(id,pw);
        let userObj = {id,pw};
        console.log(user);
        console.log(userObj);

        //비교 => DB에 저장된 id=test, DB에 저장된 pass=1234
        if(user.getId() ==='test' && user.getPw() ==='1234') {
            alert('로그인 성공');
            } else {
            alert ('id 또는 pw가 일치하지 않습니다.');
            }
        }
        //sever에 User 전송

}

    