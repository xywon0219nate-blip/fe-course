import { useState } from "react";
// useState를 이용하여 실시간으로 바뀌는 것을 알 수 있다.
// https://react.dev/reference/react/useActionState -> 해당 내용의 설명

export default function BasicCounter({click, total}) {
    let [count,setCount] = useState(0);
    let [flag, setFlag] = useState(false);

    const handleCounter = (e) => {
        let type = e.target.name;

        if(type === "+") {
            if (count<20) {
                setCount(count+1);
                setFlag(true);
                click(type);
            }
        } else if(type === "-"){
            if(count>0) {
                setCount(count-1);
                setFlag(false);
                click(type);
            }
        } else if(type === "re") {
            setCount(0);
        }
        
    }

    // 해당 코드를 하나로 묶어서 표현한 것 ⬆️
    // const increment = () => { 
    //     if(count<10) setCount(count+1);
    // }
    // const decrement = () => { 
    //     if(count>0) setCount(count-1);
    //     // 0 이하로는 내려가지 않도록
    // }
    // const reset = () => { 
    //     setCount(0);
    // }

    return (
        <div style={{border: '1px solid gray', padding:'10px 20px'}}>
            <h1>React Counter</h1>
            <h2>Counter :: 
                { 
                    flag ? <span style={{color:'red'}}>{count} / {total} </span> 
                            : <span style={{color:'blue'}}>{count} / {total} </span>
                }
            </h2>
            
            <div>
                <button type="button" name="+" onClick={handleCounter}>증가(+)</button>
                <button type="button" name="-" onClick={handleCounter}>감소(-)</button>
                <button type="button" name="re" onClick={handleCounter}>초기화</button>
            </div>
        </div>
    )
}