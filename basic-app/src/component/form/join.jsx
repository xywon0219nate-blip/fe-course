import './commons.css';
import './cgv.css';
import { useState, useRef } from 'react';

export default function Join() {

    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const cpwdRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const emailDomainRef = useRef(null);

    const initForm = {
        id:'',
        pwd:'',
        cpwd:'',
        name:'',
        phone:'',
        email:'',
        emailDomain:''
    }

    const [form, setForm] = useState(initForm);
    const [errors, setErrors] = useState({...initForm});

    const handleFormChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]:value});
    }
    console.log('form->', form);
    

    const handleJoinSubmit = (e) => {
        e.preventDefault();

        if (idRef.current.value === '') {
            setErrors({...errors, id:'아이디를 입력해주세요'});
            idRef.current.focus();
        } else if (pwdRef.current.value === '') {
            alert('패스워드를 입력해주세요');
            pwdRef.current.focus();
        } else if (cpwdRef.current.value === '') {
            alert('패스워드를 다시 입력해주세요');
            cpwdRef.current.focus();
        } else if (nameRef.current.value === '') {
            alert('이름을 입력해주세요');
            nameRef.current.focus();
        } else if (phoneRef.current.value === '') {
            alert('전화번호를 입력해주세요');
            phoneRef.current.focus();
        } else if (emailRef.current.value === '') {
            alert('이메일을 입력해주세요');
            emailRef.current.focus();
        } else if (emailDomainRef.current.value === '') {
            alert('도메인을 선택해주세요');
            emailDomainRef.current.focus();
        }
        //validation check
    }
    // console.log('errors->', errors);



    return(
        <>
            <div className="content">
                <div className="join-form center-layout">
                    <h1 className="center-title">회원가입</h1>
                    <form onSubmit={handleJoinSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="" ><b>아이디</b></label>
                                { form.id ==="" &&
                                    <span id="idMsg">아이디를 입력해주세요</span>
                                }
                                <div>
                                    <input type="text" name="id" id="id" value={form.id}
                                            onChange={handleFormChange}
                                            placeholder="아이디 입력(6~20자)"
                                            ref={idRef}/>
                                    <button>중복확인</button>       
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""><b>비밀번호</b></label>
                                { form.pwd ==="" &&
                                    <span id="idMsg">비밀번호를 입력해주세요</span>
                                }
                                <div>
                                    <input type="password" name="pwd" id="pwd" value={form.pwd}
                                            onChange={handleFormChange}
                                            placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                            ref={pwdRef}/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""><b>비밀번호 확인</b></label>
                                { form.cpwd ==="" &&
                                    <span id="idMsg">비밀번호를 한번 더 입력해주세요</span>
                                }
                                <div>
                                    <input type="password" name="cpwd" id="cpwd" value={form.cpwd}
                                            onChange={handleFormChange}
                                            placeholder="비밀번호 재입력"
                                            ref={cpwdRef}/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""><b>이름</b></label>
                                <div>
                                    <input type="text" name="name" id="name" value={form.name}
                                            onChange={handleFormChange}
                                            placeholder="이름을 입력해주세요"
                                            ref={nameRef}/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""><b>전화번호</b></label>
                                <div>
                                    <input type="text" name="phone" id="phone" value={form.phone}
                                            onChange={handleFormChange}
                                            placeholder="휴대폰 번호 입력('-' 포함)"
                                            ref={phoneRef}/>
                                </div>
                            </li>
                            <li>
                                <label htmlFor=""><b>이메일 주소</b></label>
                                { form.email ==="" &&
                                    <span id="idMsg"> 이메일 주소를 입력해주세요</span>
                                }
                                <div>
                                    <input type="text" name="email" id="email" value={form.email}
                                            onChange={handleFormChange}
                                            placeholder="이메일 주소"
                                            ref={emailRef}/>
                                    <span>@</span>       
                                    <select name="emailDomain" id="emailDomain" value={form.emailDomain} onChange={handleFormChange} ref={emailDomainRef}>
                                        <option value="default">선택</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                            </li>
                            <li>
                                <button type="submit">가입하기</button>
                                <button type="button">가입취소</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div> 
        </>
    )
}