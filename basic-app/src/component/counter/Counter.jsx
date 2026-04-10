/**
 * -  state 값으로 count 정의
 * - 각 버튼의 이벤트는 콜백함수로 실행
 */

import { useState } from "react";
import style from "./Counter.module.css";

export default function Counter() {

    let [count,setCount] = useState(0);

    // const handleCounter = (e) => {
    //     if (type === "-100"){
    //         setCount(count-100);
    //     } 
    // }

    return(
        <div className={style.counter_container}>
            <h3>현재 카운트 :</h3>
            <h1 style={{fontSize:'40px'}}><span>{count}</span></h1>
            <div className={style.counter_buttons}>
            <button type="button" name="-100" onClick={()=> setCount(count-100)}>-100</button>
            <button type="button" name="-10" onClick={()=> setCount(count-10)}>-10</button>
            <button type="button" name="-1" onClick={()=> setCount(count-1)}>-1</button>
            <button type="button" name="+1" onClick={()=> setCount(count+1)}>+1</button>
            <button type="button" name="+10" onClick={()=> setCount(count+10)}>+10</button>
            <button type="button" name="+100" onClick={()=> setCount(count+100)}>+100</button>
            <button type="button" name="re" onClick={()=> setCount(0)}>초기화</button>
            </div>
        </div>
    )
}