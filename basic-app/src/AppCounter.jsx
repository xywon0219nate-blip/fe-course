import { useState } from 'react'
import BasicCounter from './component/counter/BasicCounter.jsx'
import Counter from './component/counter/Counter.jsx';

export default function App() {
    // let totalCount = 0; //값이 변경되어도 자동 re렌더링 X
    const [totalCount, setTotalCount] = useState(0); //값이 바뀌어도 자동 re렌더링

    const handleTotalCount = (type) => {
        if (type === "+") setTotalCount(totalCount +1);
        else setTotalCount(totalCount -1);
    }

    return(
        <>  
            <h1>AppCounter</h1>
            <h1>Total Count :: <span><b>{totalCount}</b></span></h1>
            <BasicCounter click={handleTotalCount} total={totalCount} />
            <BasicCounter click={handleTotalCount} total={totalCount} />
            <BasicCounter click={handleTotalCount} total={totalCount} />

            <hr/>
            <Counter/>
        </>
    )
}