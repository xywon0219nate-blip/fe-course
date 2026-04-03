/**
 * DOM 객체 생성 후 객체별 회원가입 이벤트 호출
 */
window.addEventListener('DOMContentLoaded', ()=>{
    let id = document.querySelector("#id");
    let idMsg = document.querySelector("#idMsg");
    let pwdMsg = document.querySelector("#pwdMsg");
    let cpwdMsg = document.querySelector("#cpwdMsg");

    //체크
    id.addEventListener('input', ()=>{
        if (id.ariaValueMax.trim() !== '') {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline-block';
        }
    });
    //체크
    pwd.addEventListener('input', ()=>{
        if (pwd.ariaValueMax.trim() !== '') {
            pwdMsg.style.display = 'none';
        } else {
            pwdMsg.style.display = 'inline-block';
        }
    });
    //체크
    cpwd.addEventListener('input', ()=>{
        if (cpwd.ariaValueMax.trim() !== '') {
            cpwdMsg.style.display = 'none';
        } else {
            cpwdMsg.style.display = 'inline-block';
        }
    });
    //체크
    id.addEventListener('input', ()=>{
        if (id.ariaValueMax.trim() !== '') {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline-block';
        }
    });
    //체크
    id.addEventListener('input', ()=>{
        if (id.ariaValueMax.trim() !== '') {
            idMsg.style.display = 'none';
        } else {
            idMsg.style.display = 'inline-block';
        }
    });

    //가입하기 버튼 이벤트
    btnSignup.addEventListener('click', () => {
        let isValid = true;

        if(id,value.trim() === '') {
            idMsg.style.display = 'inline-block';
            isValid = false;
        } else {
            if(isValid) {
                console.log('서버 전송');
                
            }
        }
    })

}) //window.addEventListener