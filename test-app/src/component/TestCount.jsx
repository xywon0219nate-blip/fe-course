import { useState } from "react"

export default function TestCount({ click }) {
    const [count, setCount] = useState(0);

    const handleCounter = (e) => {
        let type = e.target.name;
        if(type === "+") {
            if(count < 100000000) {
                setCount(count+100);  
                click(type);           
            }
        } else if (type === "-") {
            if(count > 0) {
                setCount(count-1);
                click(type);
            }
        } 
    }



    return (
        <>
            <h2>집에 가고 싶은 마음 :: <span>{count}</span></h2>
            <div>
                <button type="button" name="+" onClick={handleCounter}>+</button>
                <button type="button" name="-" onClick={handleCounter}>-</button>
            </div>
        </>
    )
}