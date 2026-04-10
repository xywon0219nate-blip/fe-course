import { useRef, useState } from "react";

export default function TextInput() {
    const textRef = useRef(null);
    const [text,setText] = useState("홍길동");
    const handleClick = () => {
        let text = textRef.current.value.trim(); //trim()을 적어 공백을 문자로 인식하지 않도록 함.
        if(text === "") {
            alert('텍스트를 입력하세요');
            textRef.current.focus();
        } else {
            alert("서버전송 --> "+text);
        }
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    // console.log('text-->', text); 의 위치가 handleChange 내부에 있거나 외부에 있는 것에 따라 싱크의 차이가 발생.(내부의 경우 하나 밀림)
    return (
        <div>
            <h2>Ref : 텍스트폼 입력</h2>
            <input  type="text" 
                    name="text" 
                    value={text} 
                    ref={textRef} 
                    onChange={handleChange}/>
            <button type="button" onClick={handleClick}> 전송 </button>
        </div>
    )
}